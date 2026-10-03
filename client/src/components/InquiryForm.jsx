import { useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { services } from '../data/content';

const initial = { fullName: '', email: '', phone: '', whatsapp: '', company: '', service: '', project: '', message: '', requestCallTime: '' };

export default function InquiryForm({ type = 'general' }) {
  const inquiryType = type === 'project' ? 'project' : 'general';
  const serviceFromUrl = new URLSearchParams(window.location.search).get('service') || '';
  const [form, setForm] = useState(() => ({ ...initial, service: serviceFromUrl }));
  const [state, setState] = useState('idle');
  const [msg, setMsg] = useState('');
  const isProject = inquiryType === 'project';

  const change = event => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async event => {
    event.preventDefault();
    if (state === 'loading') return;
    setState('loading');
    setMsg('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/inquiries/${inquiryType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, phone: isProject ? form.phone : form.whatsapp, inquiryType })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Submission failed');
      setState('success');
      setForm(initial);
    } catch (error) {
      setState('error');
      setMsg(error.message);
    }
  };

  return <form onSubmit={submit} className="contact-form chat-form">
    <div className="chat-header">
      <span className="chat-badge">{isProject ? 'Contact' : 'General enquiry'}</span>
    </div>
    <div className="form-row"><label>Full Name<input required name="fullName" value={form.fullName} onChange={change} /></label><label>Email Address<input required type="email" name="email" value={form.email} onChange={change} /></label></div>
    <div className="form-row"><label>{isProject ? 'Phone Number' : 'WhatsApp Number'}<input required name={isProject ? 'phone' : 'whatsapp'} value={isProject ? form.phone : form.whatsapp} onChange={change} /></label><label>Company / Organization<input name="company" value={form.company} onChange={change} /></label></div>
    {isProject && <label>Service Required<select required name="service" value={form.service} onChange={change}><option value="">Select a service</option>{services.map(service => <option key={service.slug}>{service.title}</option>)}</select></label>}
    {isProject ? (
      <label>Project / Requirement<textarea required name="project" rows="5" value={form.project} onChange={change} /></label>
    ) : (
      <>
        <label>Message<textarea required name="message" rows="6" value={form.message} onChange={change} placeholder="Tell us what you need help with..." /></label>
        <label>Preferred call time (optional)
          <select name="requestCallTime" value={form.requestCallTime} onChange={change}>
            <option value="">No call requested</option>
            <option value="WhatsApp only">WhatsApp only</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </label>
      </>
    )}
    {isProject && <label>Brief notes<textarea name="message" rows="5" value={form.message} onChange={change} placeholder="Add any context, timeline or constraints..." /></label>}
    {state === 'success' && <div className="form-success"><CheckCircle2 />Thank you for contacting Tervoxa Technologies. Your inquiry has been submitted successfully.</div>}
    {state === 'error' && <div className="form-error">{msg}</div>}
    <button className="button" disabled={state === 'loading'}>{state === 'loading' ? <><LoaderCircle className="spin" />Submitting...</> : <>Send message <ArrowRight size={18} /></>}</button>
  </form>;
}
