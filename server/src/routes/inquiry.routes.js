import express from 'express';
import rateLimit from 'express-rate-limit';
import { config } from '../config/env.js';
import { createInquiry } from '../controllers/inquiry.controller.js';
import { sanitizeInquiry, validateInquiry } from '../validators/inquiry.validator.js';

const router = express.Router();
const inquiryLimiter = rateLimit({
	windowMs: config.inquiryRateLimitWindowMs,
	limit: config.inquiryRateLimitMax,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	message: { message: 'Too many inquiry attempts. Please try again later.' }
});

const submitInquiry = (inquiryType = 'general') => (req, res, next) => {
	const inquiry = sanitizeInquiry({ ...req.body, inquiryType });
	const validationError = validateInquiry(inquiry, inquiryType);
	if (validationError) return res.status(400).json({ message: validationError });
	req.inquiry = inquiry;
	return next();
};

router.post('/general', inquiryLimiter, submitInquiry('general'), createInquiry);
router.post('/project', inquiryLimiter, submitInquiry('project'), createInquiry);

export default router;
