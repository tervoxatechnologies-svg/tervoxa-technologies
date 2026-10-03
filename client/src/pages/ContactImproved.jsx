import { PageHero } from './Generic';
import InquiryForm from '../components/InquiryForm';

export default function ContactImproved() {
  return <>
    <PageHero eyebrow="Contact" title="Tell us about your project." copy="Share the project brief, objectives, timeline and current challenges. We will review the scope and suggest a practical next step." />
    <section className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h2>A useful project brief starts with clarity.</h2>
          <p>Share the objective, timeline, constraints and the kind of support you need. The more specific the brief, the better the recommendation.</p>
          <p><a className="button ghost-dark" href="https://docs.google.com/forms/d/e/1FAIpQLSf7G3JwPTaAsqw3-nPqALsuFwoGu5irnTgNmok975DABbYn4g/viewform" target="_blank" rel="noreferrer">Open Google Form</a></p>
          <div className="contact-trust-panel">
            <div className="contact-pill">Response time: zero to one business day</div>
            <p>We review inbound requirements, clarify the scope where needed and recommend the most practical next step.</p>
          </div>
        </div>
        <InquiryForm type="project" />
      </div>
    </section>
  </>;
}
