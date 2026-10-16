// O arco-íris do logo se completa, um arco por etapa da consulta, quando entra
// na tela. Sem JS ou com movimento reduzido, os cinco arcos já aparecem completos.

const STEP_INTERVAL = 320;

export function initJourney() {
  const arcs = document.querySelector("[data-arcs]");
  const total = document.querySelectorAll("[data-steps] > li").length;
  if (!arcs || !total || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  arcs.dataset.step = "0";

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      for (let step = 1; step <= total; step++) {
        setTimeout(() => {
          arcs.dataset.step = String(step);
        }, (step - 1) * STEP_INTERVAL);
      }
    },
    { threshold: 0.7 }
  );

  observer.observe(arcs);
}
