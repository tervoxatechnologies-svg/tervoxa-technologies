const limits = { fullName: 120, companyName: 200, email: 254, phone: 40, password: 128 };

const clean = (value, limit) => typeof value === 'string' ? value.trim().slice(0, limit) : '';

export function sanitizeRegistration(payload) {
  return Object.fromEntries(Object.entries(limits).map(([field, limit]) => [field, clean(payload?.[field], limit)]));
}

export function validateRegistration(body) {
  if (Object.entries(body).some(([field, value]) => !value && field !== 'phone')) return 'Please complete all required account fields.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Please provide a valid email address.';
  if (!/^[+\d][\d\s().-]{6,39}$/.test(body.phone)) return 'Please provide a valid phone number.';
  if (body.password.length < 8) return 'Your password must be at least 8 characters.';
  if (!/[A-Za-z]/.test(body.password) || !/\d/.test(body.password)) return 'Your password must include a letter and a number.';
  return null;
}

export function sanitizeLogin(payload) {
  return { email: clean(payload?.email, 254).toLowerCase(), password: typeof payload?.password === 'string' ? payload.password.slice(0, limits.password) : '' };
}

export function validateLogin(body) {
  if (!body.email || !body.password) return 'Enter your email and password.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Please provide a valid email address.';
  return null;
}
