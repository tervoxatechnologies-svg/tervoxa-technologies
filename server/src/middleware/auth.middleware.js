import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { User } from '../models/user.model.js';

export function readCookie(header, name) {
  const value = header?.split(';').map(item => item.trim()).find(item => item.startsWith(`${name}=`));
  return value ? decodeURIComponent(value.slice(name.length + 1)) : null;
}

export async function requireAuth(req, res, next) {
  try {
    const token = readCookie(req.headers.cookie, config.auth.cookieName) || req.headers.authorization?.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ message: 'Please sign in to continue.' });
    const payload = jwt.verify(token, config.auth.jwtSecret);
    const user = await User.findById(payload.sub);
    if (!user || user.status !== 'active') return res.status(401).json({ message: 'Your session is no longer active.' });
    req.user = user;
    return next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') return res.status(401).json({ message: 'Your session has expired. Please sign in again.' });
    return next(error);
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Administrator access is required.' });
  return next();
}

export function createSession(user) {
  return jwt.sign({ sub: user._id.toString(), role: user.role, email: user.email }, config.auth.jwtSecret, { expiresIn: `${config.auth.sessionDays}d` });
}

export function setSessionCookie(res, token) {
  const maxAge = config.auth.sessionDays * 24 * 60 * 60 * 1000;
  const secure = config.nodeEnv === 'production' ? '; Secure' : '';
  appendCookie(res, `${config.auth.cookieName}=${encodeURIComponent(token)}; Max-Age=${Math.floor(maxAge / 1000)}; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

export function clearSessionCookie(res) {
  const secure = config.nodeEnv === 'production' ? '; Secure' : '';
  appendCookie(res, `${config.auth.cookieName}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax${secure}`);
}

export function appendCookie(res, value) {
  const current = res.getHeader('Set-Cookie');
  res.setHeader('Set-Cookie', current ? (Array.isArray(current) ? [...current, value] : [current, value]) : value);
}
