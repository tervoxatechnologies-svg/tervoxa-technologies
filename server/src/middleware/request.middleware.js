import crypto from 'node:crypto';

export function requestContext(req, res, next) {
	const requestId = crypto.randomUUID();
	const startedAt = process.hrtime.bigint();
	res.setHeader('X-Request-Id', requestId);
	res.setHeader('Cache-Control', 'no-store');
	res.on('finish', () => {
		const durationMs = Number(process.hrtime.bigint() - startedAt) / 1e6;
		console.info(JSON.stringify({ requestId, method: req.method, path: req.originalUrl, status: res.statusCode, durationMs: Math.round(durationMs) }));
	});
	next();
}
