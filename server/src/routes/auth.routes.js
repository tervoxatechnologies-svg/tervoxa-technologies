import express from 'express';
import rateLimit from 'express-rate-limit';
import { login, logout, me, register } from '../controllers/auth.controller.js';
import { completeGoogleLogin, startGoogleLogin } from '../controllers/google-auth.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';
import { sanitizeLogin, sanitizeRegistration, validateLogin, validateRegistration } from '../validators/auth.validator.js';

const router = express.Router();
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20, standardHeaders: 'draft-8', legacyHeaders: false, message: { message: 'Too many authentication attempts. Please try again later.' } });

router.post('/register', authLimiter, (req, res, next) => {
  const account = sanitizeRegistration(req.body);
  const error = validateRegistration(account);
  if (error) return res.status(400).json({ message: error });
  req.account = account;
  return next();
}, register);
router.post('/login', authLimiter, (req, res, next) => {
  const credentials = sanitizeLogin(req.body);
  const error = validateLogin(credentials);
  if (error) return res.status(400).json({ message: error });
  req.credentials = credentials;
  return next();
}, login);
router.get('/me', requireAuth, me);
router.post('/logout', logout);
router.get('/google', startGoogleLogin);
router.get('/google/callback', completeGoogleLogin);

export default router;
