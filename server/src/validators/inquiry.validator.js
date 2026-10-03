const fieldLimits = {
	fullName: 120,
	email: 254,
	phone: 40,
	company: 200,
	service: 100,
	project: 5000,
	message: 5000,
	requestCallTime: 50,
	inquiryType: 20
};

const allowedServices = new Set([
	'Web Development',
	'Mobile App Development',
	'Software Development',
	'Cybersecurity Services',
	'Business Compliance & Solutions',
	'CAD Design Services'
]);

export const fieldNames = Object.keys(fieldLimits);

export function sanitizeInquiry(payload) {
	return Object.fromEntries(fieldNames.map(field => [
		field,
		typeof payload?.[field] === 'string'
			? payload[field].trim().slice(0, fieldLimits[field])
			: ''
	]));
}

export function validateInquiry(body, inquiryType = 'general') {
	const requiredFields = inquiryType === 'project'
		? ['fullName', 'email', 'phone', 'service', 'project']
		: ['fullName', 'email', 'phone', 'message'];

	if (requiredFields.some(field => !body[field])) return 'Please complete all required fields.';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Please provide a valid email address.';
	if (!/^[+\d][\d\s().-]{6,39}$/.test(body.phone)) return 'Please provide a valid phone number.';
	if (inquiryType === 'project' && !allowedServices.has(body.service)) return 'Please select a valid service.';
	if (body.requestCallTime && !['WhatsApp only', 'Morning', 'Afternoon', 'Evening'].includes(body.requestCallTime)) return 'Please select a valid call time.';
	if (body.inquiryType && !['general', 'project'].includes(body.inquiryType)) return 'Please select a valid inquiry type.';
	return null;
}
