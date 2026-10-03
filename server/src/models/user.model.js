import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 120 },
  companyName: { type: String, required: true, trim: true, maxlength: 200 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  phone: { type: String, trim: true, maxlength: 40, default: '' },
  passwordHash: { type: String, default: null, select: false },
  googleId: { type: String, default: null, select: false },
  authProvider: { type: String, enum: ['local', 'google'], default: 'local' },
  role: { type: String, enum: ['client', 'admin'], default: 'client' },
  status: { type: String, enum: ['active', 'suspended'], default: 'active' },
  lastLoginAt: { type: Date, default: null }
}, { timestamps: true, versionKey: false });

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ googleId: 1 }, { unique: true, sparse: true });
userSchema.set('toJSON', { transform: (_doc, ret) => { delete ret.passwordHash; return ret; } });

export const User = mongoose.model('User', userSchema);
