import { User } from '../models/user.model.js';
import { appendCookie, createSession, readCookie, setSessionCookie } from '../middleware/auth.middleware.js';
import { config } from '../config/env.js';
import { createGoogleAuthorization, getGoogleClient, getGoogleStateCookieName } from '../services/google-auth.service.js';

function redirect(path) { return `${config.allowedOrigins[0]}${path}`; }

export function startGoogleLogin(req, res, next) {
  try { return res.redirect(createGoogleAuthorization(res)); } catch (error) { return next(error); }
}

export async function completeGoogleLogin(req, res) {
  try {
    const state = readCookie(req.headers.cookie, getGoogleStateCookieName());
    const code = typeof req.query.code === 'string' ? req.query.code : '';
    if (!state || !code || state !== req.query.state) return res.redirect(redirect('/login?error=google_state_invalid'));
    const client = getGoogleClient();
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({ idToken: tokens.id_token, audience: config.auth.googleClientId });
    const profile = ticket.getPayload();
    if (!profile?.sub || !profile.email || !profile.email_verified) return res.redirect(redirect('/login?error=google_email_unverified'));
    let user = await User.findOne({ email: profile.email.toLowerCase() }).select('+googleId');
    if (!user) {
      user = await User.create({ fullName: profile.name || profile.email.split('@')[0], companyName: 'Company account', email: profile.email.toLowerCase(), phone: '', passwordHash: null, googleId: profile.sub, authProvider: 'google' });
    } else {
      user.googleId = profile.sub;
      user.lastLoginAt = new Date();
      await user.save();
    }
    if (user.status !== 'active') return res.redirect(redirect('/login?error=account_inactive'));
    setSessionCookie(res, createSession(user));
    const secure = config.nodeEnv === 'production' ? '; Secure' : '';
    appendCookie(res, `${getGoogleStateCookieName()}=; Max-Age=0; Path=/api/auth/google; HttpOnly; SameSite=Lax${secure}`);
    return res.redirect(redirect(user.role === 'admin' ? '/admin' : '/dashboard'));
  } catch (error) {
    console.error(JSON.stringify({ event: 'google_auth_failed', error: error.message }));
    return res.redirect(redirect('/login?error=google_auth_failed'));
  }
}
