import { ArrowRight, CheckCircle2, ExternalLink, Gauge, LayoutTemplate, Smartphone, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/contentProfessional';
import { FinalCTA, SectionHead } from '../components/SectionsProfessional';
import { PageHero } from './GenericProfessional';

const service = services.find(item => item.slug === 'web-development');
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf7G3JwPTaAsqw3-nPqALsuFwoGu5irnTgNmok975DABbYn4g/viewform?usp=pp_url&entry.2087812935=Website%20Development';
const outcomes = [
  ['A clear first impression', 'Present your organisation, services and value in a way visitors can understand quickly.'],
  ['A smoother customer journey', 'Make it easier for people to find information, take action and get in touch.'],
  ['A foundation to build on', 'Create a maintainable web presence that can support new content, integrations and growth.']
];
const delivery = [
  { icon: LayoutTemplate, title: 'Structure', text: 'We organise the content, navigation and page flow around the people who will use the site.' },
  { icon: Smartphone, title: 'Responsive experience', text: 'The interface is designed to work clearly across desktop, tablet and mobile screens.' },
  { icon: Gauge, title: 'Performance and usability', text: 'We pay attention to speed, clarity, accessibility and the details that make a site feel dependable.' },
  { icon: Workflow, title: 'Ready for the next step', text: 'Where required, we prepare the site for forms, APIs, hosting, analytics and future updates.' }
];

export default function WebDevelopmentProfessional() { return <>
  <PageHero eyebrow="01 / Web Development" title="A website built to do more than look good." copy="We create modern, responsive websites and web applications that help organisations communicate clearly, earn trust and move visitors toward action." />
  <section className="section web-service-intro"><div className="container web-service-intro-grid"><div><span className="eyebrow">The opportunity</span><h2>Your website is often the first serious conversation with a customer.</h2></div><div><p>It should make the business easy to understand, show people what you can do and give them a straightforward next step.</p><p>From a focused landing page to a larger business platform, we shape the work around your brand, audience, content and objectives.</p><div className="web-service-actions"><Link className="button" to="/contact?service=Web%20Development">Submit a web project enquiry <ArrowRight size={17} /></Link><a className="button ghost-dark" href={googleFormUrl} target="_blank" rel="noreferrer">Submit a project enquiry <ExternalLink size={16} /></a></div></div></div></section>
  <section className="section web-outcomes"><div className="container"><SectionHead eyebrow="What the work should achieve" title="A stronger digital presence, built around the business."/><div className="web-outcome-grid">{outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section dark web-delivery"><div className="container"><SectionHead eyebrow="Our web capability" title="From the first page to the complete platform." copy="The right scope depends on the business. These are the areas we can bring together for the project."/><div className="web-delivery-grid">{delivery.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section web-scope"><div className="container detail-grid"><div><SectionHead eyebrow="Typical scope" title="What we can deliver"/><div className="check-grid">{service.items.map(item => <div key={item}><CheckCircle2 />{item}</div>)}</div></div><aside className="detail-aside web-scope-aside"><span className="eyebrow">Good fit for</span><blockquote>Startups, small and medium businesses, professionals, organisations, educational institutions, service providers and growing brands.</blockquote><p>We can start with a defined page, improve an existing website or plan a broader web application around the next stage of the business.</p></aside></div></section>
  <section className="section soft web-approach"><div className="container"><SectionHead eyebrow="How we deliver" title="Clear stages, visible decisions."/><div className="web-steps"><div><b>01</b><span>Understand your business, audience and goals.</span></div><div><b>02</b><span>Plan the content, structure and required functionality.</span></div><div><b>03</b><span>Design, develop and integrate the approved experience.</span></div><div><b>04</b><span>Test, prepare and support the site through launch.</span></div></div></div></section>
  <FinalCTA />
</>; }
