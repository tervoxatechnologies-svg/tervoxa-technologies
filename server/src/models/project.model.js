import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  companyName: { type: String, required: true, trim: true, maxlength: 200 },
  title: { type: String, required: true, trim: true, maxlength: 160 },
  service: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true, trim: true, maxlength: 5000 },
  desiredTimeline: { type: String, trim: true, maxlength: 160, default: '' },
  status: { type: String, enum: ['submitted', 'under_review', 'approved', 'in_progress', 'on_hold', 'completed', 'cancelled'], default: 'submitted', index: true },
  adminNote: { type: String, trim: true, maxlength: 2000, default: '' },
  reviewedAt: { type: Date, default: null },
  completedAt: { type: Date, default: null }
}, { timestamps: true, versionKey: false });

projectSchema.index({ createdAt: -1 });
projectSchema.index({ owner: 1, createdAt: -1 });

export const Project = mongoose.model('Project', projectSchema);
