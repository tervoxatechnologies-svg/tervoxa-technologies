import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
	fullName: { type: String, required: true, trim: true, maxlength: 120 },
	email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
	phone: { type: String, required: true, trim: true, maxlength: 40 },
	company: { type: String, trim: true, maxlength: 200, default: '' },
	service: { type: String, trim: true, maxlength: 100, default: '' },
	project: { type: String, trim: true, maxlength: 5000, default: '' },
	message: { type: String, trim: true, maxlength: 5000, default: '' },
	requestCallTime: { type: String, trim: true, maxlength: 50, default: '' },
	inquiryType: { type: String, enum: ['general', 'project'], default: 'general' },
	status: { type: String, enum: ['received', 'synced', 'sync_failed'], default: 'received' },
	googleSyncError: { type: String, maxlength: 500, default: null }
}, { timestamps: true, versionKey: false });

inquirySchema.index({ createdAt: -1 });
inquirySchema.index({ email: 1, createdAt: -1 });

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
