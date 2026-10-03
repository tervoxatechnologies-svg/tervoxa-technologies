import crypto from 'node:crypto';
import { OAuth2Client } from 'google-auth-library';
import { config } from '../config/env.js';

const stateCookieName = 'tervoxa_google_state';

export function isGoogleAuthConfigured() {
  return Boolean(config.auth.googleClientId && config.auth.googleClientSecret && config.auth.googleRedirectUri);
}

function getClient() {
  if (!isGoogleAuthConfigured()) throw Object.assign(new Error('Google sign-in is not configured.'), { status: 503, expose: true });
  return new OAuth2Client(config.auth.googleClientId, config.auth.googleClientSecret, config.auth.googleRedirectUri);
}

export function createGoogleAuthorization(res) {
  const state = crypto.randomBytes(32).toString('hex');
  const secure = config.nodeEnv === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${stateCookieName}=${state}; Max-Age=600; Path=/api/auth/google; HttpOnly; SameSite=Lax${secure}`);
  const client = getClient();
  return client.generateAuthUrl({ access_type: 'offline', prompt: 'select_account', scope: ['openid', 'email', 'profile'], state });
}

export function getGoogleStateCookieName() { return stateCookieName; }
export function getGoogleClient() { return getClient(); }
