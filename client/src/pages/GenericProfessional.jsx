import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/contentProfessional';
import { Audience, FinalCTA, Process, SectionHead, Values } from '../components/SectionsProfessional';
import InquiryForm from '../components/InquiryForm';

export function About() { return <><PageHero eyebrow="About Tervoxa" title="Technology with a clear reason behind it." copy="Tervoxa Technologies helps businesses, organisations, professionals and individuals build, improve and protect the digital and technical work they depend on."/><section className="section"><div className="container split"><div><SectionHead eyebrow="Our direction" title="A technology partner that starts with the work."/></div><div><p>Our aim is straightforward: make technology easier to use, easier to manage and more useful to the people it serves.</p><p>That means listening carefully, setting a clear scope and choosing an approach that fits the project—not forcing every problem into the same template.</p></div></div></section><section className="section dark"><div className="container"><SectionHead eyebrow="Our mission" title="Turn a business need into a dependable outcome."/><div className="mission-grid">{['Build digital products people can use','Develop software around real workflows','Help teams improve their digital security','Make business processes easier to manage','Support responsible digital transformation','Deliver accurate CAD and technical drawings','Stay available for the next stage of the work'].map(item => <div key={item}><CheckCircle2 /><span>{item}</span></div>)}</div></div></section><Values /><FinalCTA /></>; }
export function Services() { return <><PageHero eyebrow="Services" title="Capabilities for the work ahead." copy="Web, mobile, software, cybersecurity, business support and CAD design—available as focused services or as part of a broader engagement."/><div className="section"><div className="container"><div className="service-grid">{services.map(service => <Link className="service-card large" to={`/services/${service.slug}`} key={service.slug}><span className="eyebrow">{service.num}</span><h3>{service.title}</h3><p>{service.short}</p><span className="learn">View capability <ArrowRight size={16} /></span></Link>)}</div></div></div><FinalCTA /></>; }
export function ServiceDetail({ service }) { return <><PageHero eyebrow={`${service.num} / Service`} title={service.title} copy={service.short}/><section className="section"><div className="container detail-grid"><div><SectionHead eyebrow="Scope of work" title="What this capability can cover"/><div className="check-grid">{service.items.map(item => <div key={item}><CheckCircle2 />{item}</div>)}</div></div><aside className="detail-aside"><span className="eyebrow">Our perspective</span><blockquote>{service.statement}</blockquote>{service.authorization && <div className="notice"><ShieldAlert /><div><b>Important</b><p>{service.authorization}</p></div></div>}</aside></div></section>{service.focus && <section className="section soft"><div className="container"><SectionHead eyebrow={service.slug === 'web-development' ? 'Delivery priorities' : 'Typical areas'} title={service.slug === 'web-development' ? 'A digital presence that works hard' : 'Where this service is commonly used'}/><div className="tag-grid">{service.focus.map(item => <span key={item}>{item}</span>)}</div></div></section>}{service.audience && <section className="section"><div className="container"><SectionHead eyebrow="Good fit for" title="Different teams, different starting points"/><div className="tag-grid">{service.audience.map(item => <span key={item}>{item}</span>)}</div></div></section>}<FinalCTA /></>; }
export function ProcessPage() { return <><PageHero eyebrow="Our process" title="A disciplined way to get from idea to delivery." copy="We keep the work visible from the first conversation to launch, handover and support."/><Process/><Audience/><FinalCTA /></>; }
export function FAQ() {
  const questions = [
    ['What does Tervoxa Technologies do?', 'We provide web, mobile, software, cybersecurity, business support and CAD design services for businesses, organisations, professionals and growing teams.'],
    ['Can you build around our existing process?', 'Yes. Understanding the current workflow is an important part of scoping software, websites and business systems, so the final solution fits the way your team actually works.'],
    ['Do you work with smaller businesses?', 'Yes. Projects can be scoped around the stage, priorities and resources of the business, from a focused website to a more complete digital transformation effort.'],
    ['Can you develop a custom mobile application?', 'Yes. We can plan and develop Android, iOS or cross-platform applications around the intended users, business goals and feature requirements.'],
    ['Do you provide cybersecurity testing?', 'We provide authorised assessments, vulnerability reviews, security testing, hardening guidance and related support for web, mobile and business systems.'],
    ['Can you help with CAD drawings?', 'Our CAD work includes 2D drafting, floor plans, layouts, technical drawings, conversion and drawing updates for a wide range of professional and project needs.'],
    ['How do I start a project?', 'Share the problem, idea or expected outcome through the contact form. Complete details are helpful, but not required for the first conversation.'],
    ['What happens after I submit an inquiry?', 'We review the information, clarify the scope where needed and respond with the appropriate next step, whether that is a discovery call, proposal or project plan.'],
    ['Do you provide ongoing support?', 'Maintenance and post-delivery support can be arranged according to the service, delivery model and agreed scope.']
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return <>
    <PageHero eyebrow="FAQ" title="Frequently asked questions" copy="A few useful details before you get in touch." />
    <section className="section faq-wrap">
      <div className="container faq-shell">
        <div className="faq-header">
          <div>
            <span className="eyebrow">Frequently asked questions</span>
            <h2>Helpful answers, without the jargon.</h2>
          </div>
          <p>Everything you need to know before starting a conversation.</p>
        </div>

        <div className="faq-accordion">
          {questions.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{question}</span>
                  <ChevronDown size={18} />
                </button>
                <div className={`faq-answer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Still have a question?</span>
          <h2>Send us a general enquiry.</h2>
          <p>Tell us what you need, what is happening now and what outcome would make sense. A quick message is enough to begin.</p>
        </div>
        <InquiryForm type="general" />
      </div>
    </section>
    <FinalCTA />
  </>;
}
export function Legal({ type }) { const data = { privacy: ['Privacy Policy', 'This page sets out the structure for Tervoxa Technologies to publish its final privacy practices.'], terms: ['Terms & Conditions', 'These terms should be reviewed and approved by Tervoxa Technologies before publication as the final commercial terms.'], disclaimer: ['Disclaimer', 'Tervoxa Technologies provides technology, cybersecurity, business and design services according to the agreed project scope.'] }; const current = data[type]; return <><PageHero eyebrow="Legal" title={current[0]} copy={current[1]}/><section className="section legal"><div className="container"><h2>Information for review</h2><p>{current[1]}</p><p>The final notice should be reviewed and approved by the business before it is treated as a definitive legal document. Where a matter requires specialist legal, tax or professional advice, the appropriate qualified professional should be consulted.</p></div></section></>; }
export function PageHero({ eyebrow, title, copy }) { return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>; }
