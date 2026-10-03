import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { clearSessionCookie, createSession, setSessionCookie } from '../middleware/auth.middleware.js';

function publicUser(user) { return { id: user._id, fullName: user.fullName, companyName: user.companyName, email: user.email, phone: user.phone, role: user.role }; }

export async function register(req, res, next) {
  try {
    const existing = await User.findOne({ email: req.account.email });
    if (existing) return res.status(409).json({ message: 'An account with this email already exists.' });
    const passwordHash = await bcrypt.hash(req.account.password, 12);
    const user = await User.create({ ...req.account, passwordHash });
    setSessionCookie(res, createSession(user));
    return res.status(201).json({ ok: true, user: publicUser(user) });
  } catch (error) { return next(error); }
}

export async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.credentials.email }).select('+passwordHash');
    const valid = Boolean(user?.passwordHash) && user.status === 'active' && await bcrypt.compare(req.credentials.password, user.passwordHash);
    if (!valid) return res.status(401).json({ message: 'Email or password is incorrect.' });
    user.lastLoginAt = new Date();
    await user.save();
    setSessionCookie(res, createSession(user));
    return res.json({ ok: true, user: publicUser(user) });
  } catch (error) { return next(error); }
}

export function me(req, res) { return res.json({ ok: true, user: publicUser(req.user) }); }
export function logout(req, res) { clearSessionCookie(res); return res.json({ ok: true }); }
