import { Inquiry } from '../models/inquiry.model.js';
import { submitToGoogleForms } from '../services/google-forms.service.js';

export async function createInquiry(req, res, next) {
	try {
		const inquiry = await Inquiry.create(req.inquiry);
		try {
			const result = await submitToGoogleForms(inquiry.toObject());
			if (result.synced) {
				await Inquiry.updateOne({ _id: inquiry._id }, { $set: { status: 'synced', googleSyncError: null } });
			}
		} catch (error) {
			await Inquiry.updateOne({ _id: inquiry._id }, { $set: { status: 'sync_failed', googleSyncError: error.message.slice(0, 500) } });
			console.error(JSON.stringify({ event: 'google_forms_failure', inquiryId: inquiry.id, error: error.message }));
		}
		return res.status(201).json({ ok: true, message: 'Inquiry submitted' });
	} catch (error) {
		error.status = 503;
		error.expose = true;
		error.message = 'The inquiry could not be saved right now. Please try again.';
		return next(error);
	}
}
