const services = {
  web: {
    number: "01",
    title: "Website Development",
    intro: "Professional websites engineered for performance, mobile responsiveness, credibility and measurable business outcomes.",
    items: [
      ["Business Websites", "Corporate, service and company websites"],
      ["Landing Pages", "Campaign and lead-generation pages"],
      ["E-commerce", "Online stores and product experiences"],
      ["CMS Integration", "Content management and easy updates"],
      ["Responsive UI", "Mobile, tablet and desktop optimization"],
      ["SEO Foundations", "Technical structure for search visibility"],
      ["Performance", "Fast-loading, optimized front ends"],
      ["Maintenance", "Updates, improvements and support"]
    ]
  },
  mobile: {
    number: "02",
    title: "Mobile Application Development",
    intro: "User-focused mobile applications for customer engagement, internal workflows and new digital products.",
    items: [
      ["Android Apps", "Native or cross-platform Android solutions"],
      ["iOS Apps", "iPhone and iPad application experiences"],
      ["Cross-platform", "Efficient multi-platform development"],
      ["UI/UX", "Clean, intuitive mobile interfaces"],
      ["API Integration", "Connect apps to your business systems"],
      ["Authentication", "Secure login and user management"],
      ["Notifications", "Push notification workflows"],
      ["App Support", "Post-launch fixes and enhancements"]
    ]
  },
  security: {
    number: "03",
    title: "Cybersecurity Services",
    intro: "Security-focused services designed to identify weaknesses, improve controls and reduce business risk.",
    items: [
      ["Security Assessment", "Review applications, infrastructure and controls"],
      ["Vulnerability Assessment", "Identify and prioritize security weaknesses"],
      ["Web Security", "Assess common web application risks"],
      ["Network Security", "Review network exposure and controls"],
      ["Security Hardening", "Improve configurations and defensive posture"],
      ["Log & Monitoring", "Security visibility and alerting guidance"],
      ["Incident Readiness", "Response planning and preparedness"],
      ["Security Awareness", "Practical security guidance for teams"]
    ]
  },
  tax: {
    number: "04",
    title: "Business Tax & Compliance Services",
    intro: "Structured business support for tax-related administration, records and compliance workflows. Final statutory advice should be provided by qualified professionals where required.",
    items: [
      ["Business Registration", "Support for setup and documentation workflows"],
      ["Tax Documentation", "Organized preparation of business records"],
      ["GST Support", "GST-related documentation and process support"],
      ["Compliance Calendar", "Track recurring business obligations"],
      ["Record Organization", "Improve document and record management"],
      ["Filing Coordination", "Coordinate information for professional filing"],
      ["Business Documentation", "Standardize essential business paperwork"],
      ["Compliance Review", "Identify process gaps and action items"]
    ]
  },
  ads: {
    number: "05",
    title: "Meta Ads & Digital Advertising",
    intro: "Digital advertising services focused on reaching the right audience, generating leads and learning from campaign performance.",
    items: [
      ["Campaign Strategy", "Goals, audiences, channels and budgets"],
      ["Search Advertising", "High-intent paid search campaigns"],
      ["Social Advertising", "Audience-focused social campaigns"],
      ["Creative Direction", "Ad concepts, messaging and formats"],
      ["Remarketing", "Reconnect with interested visitors"],
      ["Analytics", "Measure clicks, leads and conversions"],
      ["Optimization", "Iterate campaigns using performance data"]
    ]
  }
};

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalIntro = document.getElementById("modalIntro");
const modalNumber = document.getElementById("modalNumber");
const capabilityGrid = document.getElementById("modalCapabilities");

function openService(key) {
  const data = services[key];
  if (!data) return;
  modalNumber.textContent = data.number;
  modalTitle.textContent = data.title;
  modalIntro.textContent = data.intro;
  capabilityGrid.innerHTML = data.items.map(([title, desc]) =>
    `<div class="capability"><b>${title}</b><span>${desc}</span></div>`
  ).join("");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeService() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => openService(btn.dataset.open));
});
document.querySelector(".modal-close").addEventListener("click", closeService);
document.querySelector(".modal-backdrop").addEventListener("click", closeService);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeService();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
let activeSlideIndex = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[activeSlideIndex].classList.remove("active");
    activeSlideIndex = (activeSlideIndex + 1) % heroSlides.length;
    heroSlides[activeSlideIndex].classList.add("active");
  }, 5000);
}


document.getElementById("year").textContent = new Date().getFullYear();
