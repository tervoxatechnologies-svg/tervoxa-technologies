import { ArrowRight, CheckCircle2, ExternalLink, Gauge, Layers3, ShieldCheck, Smartphone, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCTA, SectionHead } from '../components/SectionsProfessional';
import { PageHero } from './GenericProfessional';

const googleServiceNames = { 'Mobile App Development': 'Mobile Application Development', 'Software Development': 'Software Development', 'Cybersecurity Services': 'Cyber Security Services', 'Business Compliance & Solutions': 'Business Compliance & Solutions', 'CAD Design Services': 'AUTOCAD Design' };
const icons = [Layers3, Smartphone, ShieldCheck, Workflow];
const outcomes = {
  'mobile-app-development': ['A focused mobile experience', 'Give customers or teams a simpler way to access services, information and workflows.', 'A product people can use', 'Shape the experience around real users, devices and the features that matter.', 'A route to release', 'Move from concept and interface work through integration, testing and publishing.'],
  'software-development': ['Workflows with more structure', 'Bring repeated tasks, information and operational steps into one clearer system.', 'A system that fits', 'Build around the way your team works instead of forcing the business into generic software.', 'Room for change', 'Plan a maintainable foundation that can evolve with the organisation.'],
  'cybersecurity': ['A clearer security picture', 'Understand where weaknesses may exist across the websites, applications and systems you own.', 'Prioritised action', 'Turn assessment findings into practical recommendations your team can work through.', 'More resilient operations', 'Improve configurations, controls and awareness with an authorised, responsible approach.'],
  'business-compliance': ['Less administrative friction', 'Bring documentation, registrations and business processes into a more organised view.', 'A stronger digital foundation', 'Connect business requirements with websites, workflows and technology where it helps.', 'Better next steps', 'Know what can be handled directly and when a specialist professional should be involved.'],
  'cad-design': ['Drawings people can work from', 'Turn sketches, references and existing documents into organised digital drawings.', 'Greater technical clarity', 'Prepare layouts, plans and technical documentation with the defined project scope in view.', 'A usable digital record', 'Update, convert and prepare drawings for the next stage of a technical project.']
};
const perspective = {
  'mobile-app-development': 'A mobile product should make a useful task feel straightforward, not add another layer of friction.',
  'software-development': 'The best business software reflects the operation behind it and gives people a clearer way to do their work.',
  cybersecurity: 'Security work is most useful when it explains the risk clearly and gives the owner a realistic path to improvement.',
  'business-compliance': 'Good business support brings order to the documents, processes and digital decisions that keep an organisation moving.',
  'cad-design': 'Accurate drawings give teams a shared reference point for planning, building, reviewing and delivering technical work.'
};

export default function ServiceProfessional({ service }) {
  const rawOutcomes = outcomes[service.slug] || [];
  const serviceOutcomes = rawOutcomes.reduce((groups, item, index) => index % 2 === 0 ? [...groups, [item, rawOutcomes[index + 1]]] : groups, []);
  const ServiceIcon = service.slug === 'cybersecurity' ? ShieldCheck : icons[(Number(service.num) || 1) % icons.length] || Layers3;
  const googleUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf7G3JwPTaAsqw3-nPqALsuFwoGu5irnTgNmok975DABbYn4g/viewform?usp=pp_url&entry.2087812935=${encodeURIComponent(googleServiceNames[service.title] || service.title)}`;
  return <>
    <PageHero eyebrow={`${service.num} / Service`} title={service.title} copy={service.short} />
    <section className="section service-page-intro"><div className="container web-service-intro-grid"><div><span className="eyebrow">The opportunity</span><h2>{service.statement}</h2></div><div><p>{service.short}</p><p>We shape the work around the people involved, the current situation and the result the project needs to achieve.</p><div className="web-service-actions"><Link className="button" to={`/contact?service=${encodeURIComponent(service.title)}`}>Submit a project enquiry <ArrowRight size={17} /></Link><a className="button ghost-dark" href={googleUrl} target="_blank" rel="noreferrer">Submit a project enquiry <ExternalLink size={16} /></a></div></div></div></section>
    <section className="section web-outcomes"><div className="container"><SectionHead eyebrow="What the work should achieve" title="A service shaped around the result."/><div className="web-outcome-grid">{serviceOutcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section dark web-delivery"><div className="container"><SectionHead eyebrow="Our capability" title="Focused expertise, brought into one delivery plan." copy="The exact scope depends on the project. These are the areas this service can cover."/><div className="web-delivery-grid">{(service.focus || []).slice(0, 4).map((item, index) => { const Icon = index === 0 ? ServiceIcon : icons[index] || Layers3; return <article key={item}><Icon /><h3>{item}</h3><p>{service.items?.[index] || 'Defined in discussion with your team.'}</p></article>; })}</div></div></section>
    <section className="section web-scope"><div className="container detail-grid"><div><SectionHead eyebrow="Typical scope" title="What we can deliver"/><div className="check-grid">{(service.items || []).map(item => <div key={item}><CheckCircle2 />{item}</div>)}</div></div><aside className="detail-aside web-scope-aside"><span className="eyebrow">Our perspective</span><blockquote>{perspective[service.slug] || service.statement}</blockquote>{service.authorization && <p>{service.authorization}</p>}<p>We can start with a defined requirement or help shape the scope when the project is still being worked out.</p></aside></div></section>
    <section className="section soft web-approach"><div className="container"><SectionHead eyebrow="How we deliver" title="Clear stages, visible decisions."/><div className="web-steps"><div><b>01</b><span>Understand the context, users and desired outcome.</span></div><div><b>02</b><span>Agree the scope, priorities, dependencies and deliverables.</span></div><div><b>03</b><span>Develop, assess, prepare or integrate the agreed work.</span></div><div><b>04</b><span>Review the result and support the next stage.</span></div></div></div></section>
    <FinalCTA />
  </>;
}
