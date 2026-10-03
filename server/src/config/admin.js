import bcrypt from 'bcryptjs';
import { config } from './env.js';
import { User } from '../models/user.model.js';

export async function ensureAdminUser() {
  if (!config.auth.adminEmail || !config.auth.adminPassword) {
    console.warn(JSON.stringify({ event: 'admin_bootstrap_skipped', reason: 'ADMIN_EMAIL or ADMIN_PASSWORD is not configured' }));
    return;
  }
  if (config.auth.adminPassword.length < 12) throw new Error('ADMIN_PASSWORD must be at least 12 characters.');
  const passwordHash = await bcrypt.hash(config.auth.adminPassword, 12);
  await User.updateOne(
    { email: config.auth.adminEmail },
    { $set: { fullName: 'Tervoxa Administrator', companyName: 'Tervoxa Technologies', phone: '', passwordHash, role: 'admin', status: 'active' } },
    { upsert: true }
  );
  console.info(JSON.stringify({ event: 'admin_ready', email: config.auth.adminEmail }));
}
