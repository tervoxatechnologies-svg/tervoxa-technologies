"use strict";


/* =========================================================
   PROGRESSIVE ENHANCEMENT FLAG
========================================================= */

document.documentElement.classList.add("js");


/* =========================================================
   SERVICE DATA
========================================================= */

const services = {

  web: {
    number: "01",

    title: "Website Development",

    intro:
      "Professional websites engineered for performance, mobile responsiveness, credibility and measurable business outcomes.",

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

    intro:
      "User-focused mobile applications for customer engagement, internal workflows and new digital products.",

    items: [
      ["Android Apps", "Native Android application solutions"],
      ["iOS Apps", "iPhone and iPad application experiences"],
      ["Cross-platform", "Efficient multi-platform development"],
      ["UI/UX", "Clean and intuitive mobile interfaces"],
      ["API Integration", "Connect apps to business systems"],
      ["Authentication", "Secure login and user management"],
      ["Notifications", "Push notification workflows"],
      ["App Support", "Post-launch fixes and enhancements"]
    ]
  },


  security: {
    number: "03",

    title: "Cybersecurity Services",

    intro:
      "Security-focused services designed to identify weaknesses, improve controls and reduce business risk.",

    items: [
      ["Security Assessment", "Review applications, infrastructure and controls"],
      ["Vulnerability Assessment", "Identify and prioritize security weaknesses"],
      ["Web Security", "Assess common web application risks"],
      ["Network Security", "Review network exposure and controls"],
      ["Security Hardening", "Improve configurations and defensive posture"],
      ["Log & Monitoring", "Improve security visibility and alerting"],
      ["Incident Readiness", "Response planning and preparedness"],
      ["Security Awareness", "Practical security guidance for teams"]
    ]
  },


  tax: {
    number: "04",

    title: "Business Tax & Compliance Services",

    intro:
      "Structured support for business tax administration, records and compliance workflows. Statutory advice should be provided by qualified professionals where required.",

    items: [
      ["Business Registration", "Setup and documentation workflow support"],
      ["Tax Documentation", "Organized preparation of business records"],
      ["GST Support", "GST-related documentation and process support"],
      ["Compliance Calendar", "Track recurring business obligations"],
      ["Record Organization", "Improve document management"],
      ["Filing Coordination", "Coordinate information for professional filing"],
      ["Business Documentation", "Standardize essential paperwork"],
      ["Compliance Review", "Identify process gaps and action items"]
    ]
  },


  ads: {
    number: "05",

    title: "Meta Ads & Digital Advertising",

    intro:
      "Digital advertising services focused on reaching the right audience, generating leads and improving campaign performance.",

    items: [
      ["Campaign Strategy", "Goals, audiences, channels and budgets"],
      ["Search Advertising", "High-intent paid search campaigns"],
      ["Social Advertising", "Audience-focused social campaigns"],
      ["Creative Direction", "Ad concepts, messaging and formats"],
      ["Remarketing", "Reconnect with interested visitors"],
      ["Analytics", "Measure clicks, leads and conversions"],
      ["Optimization", "Improve campaigns using performance data"]
    ]
  }

};


/* =========================================================
   SERVICE MODAL
========================================================= */

const modal =
  document.getElementById("serviceModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalIntro =
  document.getElementById("modalIntro");

const modalNumber =
  document.getElementById("modalNumber");

const capabilityGrid =
  document.getElementById("modalCapabilities");

const modalCta =
  document.getElementById("modalCta");


function openService(key) {

  const service =
    services[key];

  if (
    !service ||
    !modal ||
    !modalTitle ||
    !modalIntro ||
    !modalNumber ||
    !capabilityGrid
  ) {
    return;
  }


  modalNumber.textContent =
    service.number;


  modalTitle.textContent =
    service.title;


  modalIntro.textContent =
    service.intro;


  capabilityGrid.innerHTML =
    service.items
      .map(
        ([title, description]) => `
          <div class="capability">
            <b>${title}</b>
            <span>${description}</span>
          </div>
        `
      )
      .join("");


  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeService() {

  if (!modal) {
    return;
  }


  modal.classList.remove(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


document
  .querySelectorAll("[data-open]")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {
        openService(
          button.dataset.open
        );
      }
    );

  });


document
  .querySelector(".modal-close")
  ?.addEventListener(
    "click",
    closeService
  );


document
  .querySelector(".modal-backdrop")
  ?.addEventListener(
    "click",
    closeService
  );


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {
      closeService();
    }

  }
);


/* =========================================================
   MODAL → CONTACT
========================================================= */

if (modalCta) {

  modalCta.addEventListener(
    "click",
    () => {

      closeService();

      setTimeout(
        () => {

          const contact =
            document.getElementById(
              "contact"
            );

          if (contact) {

            contact.scrollIntoView({
              behavior: "smooth"
            });

          }

        },
        100
      );

    }
  );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
  document.querySelector(
    ".menu-toggle"
  );

const nav =
  document.querySelector(
    ".nav"
  );


if (
  menuToggle &&
  nav
) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "open"
        );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );

    }
  );


  nav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            "Open menu"
          );

        }
      );

    });

}


/* =========================================================
   HERO SLIDESHOW
========================================================= */

const heroSlides = [
  ...document.querySelectorAll(
    ".hero-slide"
  )
];

let currentSlide = 0;


if (
  heroSlides.length > 1
) {

  setInterval(
    () => {

      heroSlides[
        currentSlide
      ].classList.remove(
        "active"
      );


      currentSlide =
        (
          currentSlide + 1
        ) %
        heroSlides.length;


      heroSlides[
        currentSlide
      ].classList.add(
        "active"
      );

    },
    5000
  );

}


/* =========================================================
   GOOGLE FORM ENQUIRY SUBMISSION
========================================================= */
const contactForm = document.getElementById("contactForm");
const hiddenIframe = document.getElementById("hidden_iframe");
const formSuccess = document.getElementById("formSuccess");
const submitButton = document.getElementById("submitButton");

let isSubmitting = false;
let successMessageTimer;

if (contactForm && hiddenIframe && submitButton) {
  contactForm.addEventListener("submit", function () {
    isSubmitting = true;
    window.clearTimeout(successMessageTimer);

    if (formSuccess) {
      formSuccess.hidden = true;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  });

  hiddenIframe.addEventListener("load", function () {
    if (!isSubmitting) return;

    isSubmitting = false;
    contactForm.reset();

    if (formSuccess) {
      formSuccess.hidden = false;
    }

    submitButton.disabled = false;
    submitButton.innerHTML =
      "Enquiry Sent <span aria-hidden=\"true\">&check;</span>";

    successMessageTimer = window.setTimeout(function () {
      if (formSuccess) {
        formSuccess.hidden = true;
      }

      submitButton.innerHTML =
        "Send Enquiry <span aria-hidden=\"true\">&rarr;</span>";
    }, 5000);
  });
}

/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
  document.getElementById(
    "year"
  );


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   SERVICE IMAGE FALLBACK
========================================================= */

document
  .querySelectorAll(
    ".service-image"
  )
  .forEach((image) => {

    image.addEventListener(
      "error",
      () => {
        image.classList.add(
          "image-fallback"
        );
      }
    );

  });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets = [
  ...document.querySelectorAll(".reveal, .reveal-stagger")
];

if (
  revealTargets.length &&
  "IntersectionObserver" in window
) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealTargets.forEach((target) => {
    revealObserver.observe(target);
  });

} else {

  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });

}


/* =========================================================
   CLOSE MOBILE MENU ON ESCAPE
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }


    if (
      nav &&
      menuToggle
    ) {

      nav.classList.remove(
        "open"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  }
);
