"use strict";


/* =========================================================
   COMPLIANCE SPECIALIST CONTACT
========================================================= */

const COMPLIANCE_SPECIALIST_PHONE = "+917042830976";
const COMPLIANCE_SPECIALIST_WHATSAPP = "917042830976";


/* =========================================================
   SERVICE DATA
========================================================= */

const servicesData = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    description: "Build a strong digital presence with modern, responsive and scalable websites designed around your business needs.",
    mainCta: "Get a Website",
    items: [
      { name: "Business Websites", description: "Professional websites for startups, small businesses and growing companies that need a strong online presence.", cta: "Get Started" },
      { name: "Corporate Websites", description: "Professional and structured corporate websites designed to present company information, services, products and business capabilities.", cta: "Get Started" },
      { name: "E-commerce Websites", description: "Online stores with product catalogues, shopping functionality, order management and customer-focused experiences.", cta: "Get Started" },
      { name: "Custom Web Applications", description: "Custom web-based applications designed around specific business requirements, workflows and operational needs.", cta: "Get Started" },
      { name: "CMS Development", description: "Custom content management solutions that allow businesses to manage website content efficiently without depending on developers for every update.", cta: "Get Started" },
      { name: "Landing Pages", description: "Professional and conversion-focused landing pages for products, services, campaigns and marketing activities.", cta: "Get Started" },
      { name: "Website Maintenance & Support", description: "Ongoing website maintenance, updates, improvements, bug fixing, performance optimization and technical support.", cta: "Get Started" }
    ]
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Application Development",
    description: "Transform your ideas into reliable and user-friendly mobile applications built for modern Android experiences.",
    mainCta: "Build Your App",
    items: [
      { name: "Android Application Development", description: "Development of modern Android applications focused on performance, usability, reliability and scalable architecture.", cta: "Get Started" },
      { name: "Business Applications", description: "Custom mobile applications designed to support business operations, customer engagement and digital services.", cta: "Get Started" },
      { name: "Custom Mobile Solutions", description: "Mobile solutions developed according to specific business requirements, workflows and user needs.", cta: "Get Started" },
      { name: "UI/UX for Mobile Apps", description: "Clean, intuitive and user-friendly mobile interfaces designed to provide a smooth application experience.", cta: "Get Started" },
      { name: "API Integration", description: "Integration of mobile applications with backend systems, APIs and required third-party services.", cta: "Get Started" },
      { name: "App Maintenance & Support", description: "Application updates, bug fixing, performance improvements, compatibility updates and ongoing technical support.", cta: "Get Started" },
      { name: "App Deployment", description: "Assistance with application packaging, release preparation and deployment processes.", cta: "Get Started" }
    ]
  },
  {
    id: "security",
    number: "03",
    title: "Cybersecurity Services",
    description: "Protect your applications, networks and digital infrastructure with practical cybersecurity solutions.",
    mainCta: "Get Security Consultation",
    items: [
      { name: "Security Assessment", description: "Assessment of applications, systems and infrastructure to identify potential security weaknesses and areas requiring improvement.", cta: "Get Security Consultation" },
      { name: "Vulnerability Assessment", description: "Identification and analysis of known security vulnerabilities across applications, systems and networks.", cta: "Get Security Consultation" },
      { name: "Penetration Testing", description: "Authorized security testing designed to identify and validate exploitable security weaknesses in a controlled environment.", cta: "Get Security Consultation" },
      { name: "Web Application Security Testing", description: "Security testing of websites and web applications to identify common vulnerabilities and security weaknesses.", cta: "Get Security Consultation" },
      { name: "Mobile Application Security Testing", description: "Security assessment of mobile applications to identify potential vulnerabilities and insecure implementation.", cta: "Get Security Consultation" },
      { name: "Network Security", description: "Assessment and improvement of network security controls, configurations and potential exposure points.", cta: "Get Security Consultation" },
      { name: "Security Monitoring", description: "Monitoring-focused solutions designed to help identify suspicious activities and potential security events.", cta: "Get Security Consultation" },
      { name: "Security Audit & Compliance", description: "Review of security practices, controls, configurations and applicable compliance requirements.", cta: "Get Security Consultation" },
      { name: "Cybersecurity Consulting", description: "Practical cybersecurity guidance for businesses looking to improve their security posture, processes and protection strategies.", cta: "Get Security Consultation" }
    ]
  },
  {
    id: "compliance",
    number: "04",
    title: "Business Compliance & Solutions",
    description: "Reliable business compliance and support services to help businesses manage their registrations, taxation, accounting and documentation requirements.",
    mainCta: "Contact Compliance Specialist",
    items: [
      { name: "GST Registration & Compliance", description: "Assistance with GST registration and related compliance requirements for businesses.", cta: "Enquire Now" },
      { name: "GST Return Filing", description: "Support for periodic GST return filing and related documentation requirements.", cta: "Enquire Now" },
      { name: "ITR / Income Tax Services", description: "Assistance with income-tax return related requirements and documentation.", cta: "Enquire Now" },
      { name: "MSME Registration", description: "Support with MSME/Udyam registration requirements for eligible businesses.", cta: "Enquire Now" },
      { name: "Business Registration", description: "Assistance with applicable business registration processes and related documentation.", cta: "Enquire Now" },
      { name: "Accounting & Bookkeeping", description: "Organized accounting and bookkeeping support to help businesses maintain proper financial records.", cta: "Enquire Now" },
      { name: "Business Documentation", description: "Assistance with essential business documentation required for business operations and compliance.", cta: "Enquire Now" },
      { name: "Compliance Management", description: "Support for managing recurring business compliance requirements and maintaining necessary records.", cta: "Enquire Now" },
      { name: "Business Process Solutions", description: "Practical administrative and business process support designed to improve business operations and organization.", cta: "Enquire Now" }
    ]
  }
];


// Legacy services object for modal compatibility
const services = {

  web: {
    number: "01",

    title: "Website Development",

    intro:
      "Build a strong digital presence with modern, responsive and scalable websites designed around your business needs.",

    items: [
      ["Business Websites", "Professional websites for startups, small businesses and growing companies that need a strong online presence."],
      ["Corporate Websites", "Professional and structured corporate websites designed to present company information, services, products and business capabilities."],
      ["E-commerce Websites", "Online stores with product catalogues, shopping functionality, order management and customer-focused experiences."],
      ["Custom Web Applications", "Custom web-based applications designed around specific business requirements, workflows and operational needs."],
      ["CMS Development", "Custom content management solutions that allow businesses to manage website content efficiently without depending on developers for every update."],
      ["Landing Pages", "Professional and conversion-focused landing pages for products, services, campaigns and marketing activities."],
      ["Website Maintenance & Support", "Ongoing website maintenance, updates, improvements, bug fixing, performance optimization and technical support."]
    ]
  },


  mobile: {
    number: "02",

    title: "Mobile Application Development",

    intro:
      "Transform your ideas into reliable and user-friendly mobile applications built for modern Android experiences.",

    items: [
      ["Android Application Development", "Development of modern Android applications focused on performance, usability, reliability and scalable architecture."],
      ["Business Applications", "Custom mobile applications designed to support business operations, customer engagement and digital services."],
      ["Custom Mobile Solutions", "Mobile solutions developed according to specific business requirements, workflows and user needs."],
      ["UI/UX for Mobile Apps", "Clean, intuitive and user-friendly mobile interfaces designed to provide a smooth application experience."],
      ["API Integration", "Integration of mobile applications with backend systems, APIs and required third-party services."],
      ["App Maintenance & Support", "Application updates, bug fixing, performance improvements, compatibility updates and ongoing technical support."],
      ["App Deployment", "Assistance with application packaging, release preparation and deployment processes."]
    ]
  },


  security: {
    number: "03",

    title: "Cybersecurity Services",

    intro:
      "Protect your applications, networks and digital infrastructure with practical cybersecurity solutions.",

    items: [
      ["Security Assessment", "Assessment of applications, systems and infrastructure to identify potential security weaknesses and areas requiring improvement."],
      ["Vulnerability Assessment", "Identification and analysis of known security vulnerabilities across applications, systems and networks."],
      ["Penetration Testing", "Authorized security testing designed to identify and validate exploitable security weaknesses in a controlled environment."],
      ["Web Application Security Testing", "Security testing of websites and web applications to identify common vulnerabilities and security weaknesses."],
      ["Mobile Application Security Testing", "Security assessment of mobile applications to identify potential vulnerabilities and insecure implementation."],
      ["Network Security", "Assessment and improvement of network security controls, configurations and potential exposure points."],
      ["Security Monitoring", "Monitoring-focused solutions designed to help identify suspicious activities and potential security events."],
      ["Security Audit & Compliance", "Review of security practices, controls, configurations and applicable compliance requirements."],
      ["Cybersecurity Consulting", "Practical cybersecurity guidance for businesses looking to improve their security posture, processes and protection strategies."]
    ]
  },


  tax: {
    number: "04",

    title: "Business Compliance & Solutions",

    intro:
      "Reliable business compliance and support services to help businesses manage their registrations, taxation, accounting and documentation requirements.",

    items: [
      ["GST Registration & Compliance", "Assistance with GST registration and related compliance requirements for businesses."],
      ["GST Return Filing", "Support for periodic GST return filing and related documentation requirements."],
      ["ITR / Income Tax Services", "Assistance with income-tax return related requirements and documentation."],
      ["MSME Registration", "Support with MSME/Udyam registration requirements for eligible businesses."],
      ["Business Registration", "Assistance with applicable business registration processes and related documentation."],
      ["Accounting & Bookkeeping", "Organized accounting and bookkeeping support to help businesses maintain proper financial records."],
      ["Business Documentation", "Assistance with essential business documentation required for business operations and compliance."],
      ["Compliance Management", "Support for managing recurring business compliance requirements and maintaining necessary records."],
      ["Business Process Solutions", "Practical administrative and business process support designed to improve business operations and organization."]
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
   SERVICES ACCORDION
========================================================= */

let currentExpandedCategory = null;

function expandServiceCategory(categoryId) {
  // If clicking the same category, collapse it
  if (currentExpandedCategory === categoryId) {
    collapseServiceCategory(categoryId);
    return;
  }

  // Close previously opened category
  if (currentExpandedCategory) {
    collapseServiceCategory(currentExpandedCategory);
  }

  // Open new category
  const categoryElement = document.querySelector(`[data-category="${categoryId}"]`);
  if (categoryElement) {
    categoryElement.classList.add("expanded");
    currentExpandedCategory = categoryId;
  }
}

function collapseServiceCategory(categoryId) {
  const categoryElement = document.querySelector(`[data-category="${categoryId}"]`);
  if (categoryElement) {
    categoryElement.classList.remove("expanded");
    if (currentExpandedCategory === categoryId) {
      currentExpandedCategory = null;
    }
  }
}

function selectService(serviceName) {
  // Update the service select field in the inquiry form
  const serviceSelect = document.getElementById("service");
  if (serviceSelect) {
    serviceSelect.value = serviceName;
  }

  // Scroll to the inquiry form
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    setTimeout(() => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

// Event delegation for service category toggles
document.addEventListener("click", (e) => {
  if (e.target.closest(".service-category-toggle")) {
    const toggle = e.target.closest(".service-category-toggle");
    const categoryId = toggle.dataset.categoryId;
    expandServiceCategory(categoryId);
  }

  if (e.target.closest(".service-inquiry-btn")) {
    const btn = e.target.closest(".service-inquiry-btn");
    const serviceName = btn.dataset.serviceName;
    selectService(serviceName);
  }
});

// Keyboard accessibility for accordion
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    if (e.target.closest(".service-category-toggle")) {
      e.preventDefault();
      const toggle = e.target.closest(".service-category-toggle");
      const categoryId = toggle.dataset.categoryId;
      expandServiceCategory(categoryId);
    }
  }
});


/* =========================================================
   COMPLIANCE SPECIALIST CONTACT
========================================================= */

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-compliance-action]")) {
    const btn = e.target.closest("[data-compliance-action]");
    const action = btn.dataset.complianceAction;

    if (action === "call") {
      window.location.href = `tel:${COMPLIANCE_SPECIALIST_PHONE}`;
    } else if (action === "whatsapp") {
      const whatsappUrl = `https://wa.me/${COMPLIANCE_SPECIALIST_WHATSAPP}?text=Hi%20Tervoxa%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20business%20compliance%20services.`;
      window.open(whatsappUrl, "_blank");
    }
  }
});




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
