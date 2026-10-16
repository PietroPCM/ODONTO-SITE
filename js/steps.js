// Primeira consulta: a trilha tracejada se desenha quando a seção entra na tela.

export function initSteps() {
  const steps = document.querySelector(".steps");
  if (!steps || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  steps.dataset.draw = "pending";

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      steps.dataset.draw = "done";
      observer.disconnect();
    },
    { rootMargin: "0px 0px -25% 0px" }
  );

  observer.observe(steps);
}
