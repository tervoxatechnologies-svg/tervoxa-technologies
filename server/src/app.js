import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { config } from './config/env.js';
import { isDatabaseReady } from './config/database.js';
import { isGoogleFormsConfigured } from './services/google-forms.service.js';
import { isGoogleAuthConfigured } from './services/google-auth.service.js';
import inquiryRoutes from './routes/inquiry.routes.js';
import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';
import { requestContext } from './middleware/request.middleware.js';

export const app = express();

app.disable('x-powered-by');
app.set('trust proxy', config.trustProxy ? 1 : false);
app.use(helmet());
app.use(cors({
	origin(origin, callback) {
		if (!origin || config.allowedOrigins.includes(origin)) return callback(null, true);
		return callback(Object.assign(new Error('Origin is not allowed by CORS.'), { status: 403, expose: true }));
	},
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type'],
	credentials: true,
	maxAge: 86400
}));
app.use(express.json({ limit: '100kb', strict: true }));
app.use(requestContext);

app.get('/api/health', (req, res) => res.json({ ok: true, service: 'tervoxa-api' }));
app.get('/api/ready', (req, res) => {
	const databaseReady = isDatabaseReady();
	if (!databaseReady) return res.status(503).json({ ok: false, database: 'disconnected' });
	return res.json({ ok: true, database: 'connected', googleForms: isGoogleFormsConfigured(), googleAuth: isGoogleAuthConfigured() });
});
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use(notFoundHandler);
app.use(errorHandler);
