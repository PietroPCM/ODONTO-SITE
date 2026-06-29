import { faqItems, parentConcerns } from "./data.js";

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

export function renderFaq() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  list.innerHTML = faqItems
    .map(
      (item, i) => `
      <details class="faq__item" ${i === 0 ? "open" : ""}>
        <summary class="faq__summary">${item.question}</summary>
        <div class="faq__answer">${item.answer}</div>
      </details>
    `
    )
    .join("");

  list.querySelectorAll(".faq__item").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      list.querySelectorAll(".faq__item").forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });
}

export function renderConcerns() {
  const panel = document.getElementById("concerns-panel");
  if (!panel) return;

  panel.innerHTML = parentConcerns
    .map(
      (item) => `
      <details class="concerns__item">
        <summary class="concerns__summary">
          <span class="concerns__icon" aria-hidden="true">${getInitials(item.title) || "?"}</span>
          <span>${item.title}</span>
        </summary>
        <div class="concerns__answer">${item.text}</div>
      </details>
    `
    )
    .join("");
}
