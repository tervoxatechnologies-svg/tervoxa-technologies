export function notFoundHandler(req, res) {
	res.status(404).json({ message: 'Route not found.' });
}

export function errorHandler(error, req, res, next) {
	if (res.headersSent) return next(error);
	const status = error.status === 413 ? 413 : error.status || 500;
	const message = status === 500 ? 'Internal server error.' : (error.expose ? error.message : 'Request failed.');
	if (status >= 500) console.error(JSON.stringify({ event: 'unhandled_error', error: error.message }));
	return res.status(status).json({ message });
}
