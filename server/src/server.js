import http from 'node:http';
import { app } from './app.js';
import { config } from './config/env.js';
import { connectDatabase, disconnectDatabase } from './config/database.js';
import { ensureAdminUser } from './config/admin.js';

const server = http.createServer(app);
server.requestTimeout = 15000;
server.headersTimeout = 16000;

async function start() {
	try {
		await connectDatabase();
		await ensureAdminUser();
		server.listen(config.port, () => console.info(`Tervoxa API running on port ${config.port}`));
	} catch (error) {
		console.error(JSON.stringify({ event: 'startup_failed', error: error.message }));
		process.exitCode = 1;
	}
}

async function shutdown(signal) {
	console.info(`${signal} received, shutting down gracefully.`);
	server.close(async error => {
		if (error) console.error(error);
		await disconnectDatabase();
		process.exitCode = error ? 1 : 0;
	});
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));

start();
