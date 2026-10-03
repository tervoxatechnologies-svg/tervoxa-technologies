import { config } from '../config/env.js';

const googleServiceNames = {
	'Web Development': 'Website Development',
	'Mobile App Development': 'Mobile Application Development',
	'Cybersecurity Services': 'Cyber Security Services',
	'Business Compliance & Solutions': 'Business Compliance & Solutions',
	'CAD Design Services': 'AUTOCAD Design',
	'Software Development': 'Software Development'
};

export function isGoogleFormsConfigured() {
	try {
		const url = new URL(config.google.actionUrl);
		return url.protocol === 'https:' && Object.values(config.google.mapping).every(Boolean);
	} catch {
		return false;
	}
}

export async function submitToGoogleForms(inquiry) {
	if (!isGoogleFormsConfigured()) return { synced: false };

	const formData = new URLSearchParams({
		[config.google.mapping.fullName]: inquiry.fullName,
		[config.google.mapping.email]: inquiry.email,
		[config.google.mapping.phone]: inquiry.phone,
		[config.google.mapping.company]: inquiry.company,
		[config.google.mapping.service]: googleServiceNames[inquiry.service] || inquiry.service,
		[config.google.mapping.project]: [inquiry.project, inquiry.message].filter(Boolean).join('\n\n')
	});
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), config.googleRequestTimeoutMs);

	try {
		const response = await fetch(config.google.actionUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: formData,
			signal: controller.signal,
			redirect: 'manual'
		});
		if (!response.ok && response.status !== 302) {
			throw new Error(`Google Forms returned HTTP ${response.status}`);
		}
		return { synced: true };
	} finally {
		clearTimeout(timeout);
	}
}
