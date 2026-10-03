import dotenv from 'dotenv';

dotenv.config();

function integer(name, fallback, minimum) {
	const value = Number.parseInt(process.env[name] || String(fallback), 10);
	return Number.isFinite(value) && value >= minimum ? value : fallback;
}

export const config = {
	nodeEnv: process.env.NODE_ENV || 'development',
	port: integer('PORT', 5000, 1),
	mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tervoxa',
	trustProxy: process.env.TRUST_PROXY === 'true',
	allowedOrigins: (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map(value => value.trim()).filter(Boolean),
	inquiryRateLimitMax: integer('INQUIRY_RATE_LIMIT_MAX', 10, 1),
	inquiryRateLimitWindowMs: integer('INQUIRY_RATE_LIMIT_WINDOW_MS', 900000, 1000),
	googleRequestTimeoutMs: integer('GOOGLE_REQUEST_TIMEOUT_MS', 10000, 1000),
	auth: {
		jwtSecret: process.env.JWT_SECRET || 'development-only-change-this-secret',
		cookieName: process.env.AUTH_COOKIE_NAME || 'tervoxa_session',
		sessionDays: integer('AUTH_SESSION_DAYS', 7, 1),
		adminEmail: process.env.ADMIN_EMAIL?.trim().toLowerCase() || '',
		adminPassword: process.env.ADMIN_PASSWORD || '',
		googleClientId: process.env.GOOGLE_CLIENT_ID || '',
		googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		googleRedirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:5000/api/auth/google/callback'
	},
	google: {
		viewUrl: process.env.GOOGLE_FORM_VIEW_URL || '',
		actionUrl: process.env.GOOGLE_FORM_ACTION_URL,
		mapping: {
			fullName: process.env.GOOGLE_ENTRY_FULL_NAME,
			email: process.env.GOOGLE_ENTRY_EMAIL,
			phone: process.env.GOOGLE_ENTRY_PHONE,
			company: process.env.GOOGLE_ENTRY_COMPANY,
			service: process.env.GOOGLE_ENTRY_SERVICE,
			project: process.env.GOOGLE_ENTRY_PROJECT
		}
	}
};
