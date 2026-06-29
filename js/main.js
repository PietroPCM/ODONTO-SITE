import { clinicConfig, buildWhatsappLink } from "./config.js";
import { journeySteps, specialties, teamMembers } from "./data.js";
import { initMenu, initActiveSection } from "./menu.js";
import { initReveal } from "./animations.js";
import { renderFaq, renderConcerns } from "./faq.js";
import { initContactForm, initWhatsappFloating, initWhatsappCtas } from "./contact.js";

function getInitials(name) {
  return name
    .replace(/(Dra?\.?|Sr\.?|Sra\.?)/gi, "")
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function renderJourney() {
  const list = document.getElementById("journey-steps");
  if (!list) return;
  list.innerHTML = journeySteps
    .map(
      (step) => `
      <li class="journey__step" data-reveal>
        <span class="journey__step-number">${step.number}</span>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </li>
    `
    )
    .join("");
}

const SPECIALTY_ICONS = ["✿", "✦", "❋", "✺", "✸", "❖"];

function renderSpecialties() {
  const grid = document.getElementById("specialties-grid");
  if (!grid) return;
  grid.innerHTML = specialties
    .map(
      (s, i) => `
      <article class="specialty" data-reveal>
        <span class="specialty__icon" aria-hidden="true">${SPECIALTY_ICONS[i % SPECIALTY_ICONS.length]}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </article>
    `
    )
    .join("");
}

function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = teamMembers
    .map(
      (m) => `
      <article class="team-card" data-reveal>
        <div class="team-card__media">
          ${
            m.image
              ? `<img src="${m.image}" alt="${m.name}" loading="lazy" width="400" height="500" />`
              : `<span class="team-card__initials" aria-hidden="true">${getInitials(m.name)}</span>`
          }
        </div>
        <div class="team-card__body">
          <h3 class="team-card__name">${m.name}</h3>
          <p class="team-card__role">${m.role}</p>
          <p class="team-card__desc">${m.description}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function applyContactInfo() {
  const root = document.getElementById("contact-info");
  const footer = document.getElementById("site-footer-contact");

  const map = {
    phone: (v) => v ? { text: v, href: `tel:${v.replace(/\D/g, "")}` } : null,
    whatsapp: () => {
      const url = buildWhatsappLink();
      return url ? { text: "Falar pelo WhatsApp", href: url } : null;
    },
    email: (v) => v ? { text: v, href: `mailto:${v}` } : null,
    address: (v) => v ? { text: v } : null,
    hours: (v) => v ? { text: v } : null
  };

  const data = {
    phone: clinicConfig.phone,
    whatsapp: clinicConfig.whatsapp,
    email: clinicConfig.email,
    address: clinicConfig.address,
    hours: clinicConfig.openingHours
  };

  [root, footer].forEach((container) => {
    if (!container) return;
    container.querySelectorAll("[data-info]").forEach((li) => {
      const key = li.dataset.info;
      if (!(key in map)) return;
      const result = map[key](data[key]);
      if (!result) { li.hidden = true; return; }
      const target = li.querySelector("a, span");
      if (!target) return;
      target.textContent = result.text;
      if (target.tagName === "A" && result.href) target.setAttribute("href", result.href);
      li.hidden = false;
    });
  });
}

function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

function markReveal() {
  document.querySelectorAll(
    ".hero__content, .hero__visual, .about__visual, .about__content, .section-header, .sedation__content, .sedation__panel, .ambience__content, .ambience__media, .faq__intro, .faq__list, .contact__intro, .contact__form, .trust__list li"
  ).forEach((el) => el.setAttribute("data-reveal", ""));
}

document.addEventListener("DOMContentLoaded", () => {
  renderJourney();
  renderSpecialties();
  renderTeam();
  renderFaq();
  renderConcerns();
  applyContactInfo();
  initWhatsappFloating();
  initWhatsappCtas();
  initMenu();
  initActiveSection();
  initContactForm();
  markReveal();
  initReveal();
  setFooterYear();
});
