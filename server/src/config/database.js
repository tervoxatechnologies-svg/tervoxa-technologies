import mongoose from 'mongoose';
import { config } from './env.js';

mongoose.connection.on('error', error => {
	console.error(JSON.stringify({ event: 'mongodb_error', error: error.message }));
});

mongoose.connection.on('disconnected', () => {
	console.warn(JSON.stringify({ event: 'mongodb_disconnected' }));
});

export async function connectDatabase() {
	await mongoose.connect(config.mongoUri, {
		serverSelectionTimeoutMS: 5000,
		maxPoolSize: 10,
		family: 4
	});
	console.info(JSON.stringify({ event: 'mongodb_connected', database: mongoose.connection.name }));
}

export async function disconnectDatabase() {
	await mongoose.disconnect();
}

export function isDatabaseReady() {
	return mongoose.connection.readyState === 1;
}
