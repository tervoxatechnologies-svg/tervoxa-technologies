const services = new Set(['Web Development', 'Mobile App Development', 'Software Development', 'Cybersecurity Services', 'Business Compliance & Solutions', 'CAD Design Services']);
const limits = { title: 160, service: 100, description: 5000, desiredTimeline: 160 };

export function sanitizeProject(payload) {
  return Object.fromEntries(Object.entries(limits).map(([field, limit]) => [field, typeof payload?.[field] === 'string' ? payload[field].trim().slice(0, limit) : '']));
}

export function validateProject(body) {
  if (!body.title || !body.service || !body.description) return 'Project title, service and description are required.';
  if (!services.has(body.service)) return 'Please select a valid service.';
  return null;
}

export const projectStatuses = new Set(['submitted', 'under_review', 'approved', 'in_progress', 'on_hold', 'completed', 'cancelled']);
