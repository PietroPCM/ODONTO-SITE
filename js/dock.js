// Barra de WhatsApp do celular: aparece depois do hero e some no fechamento,
// onde a ação principal já está na tela.

export function initDock() {
  const dock = document.querySelector("[data-dock]");
  const hero = document.querySelector(".hero__actions");
  const closing = document.querySelector("[data-closing]");
  if (!dock || !hero || !closing || !("IntersectionObserver" in window)) return;

  let heroVisible = true;
  let closingVisible = false;

  const update = () => {
    dock.classList.toggle("is-visible", !heroVisible && !closingVisible);
  };

  new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting || entry.boundingClientRect.top > 0;
    update();
  }).observe(hero);

  new IntersectionObserver(([entry]) => {
    closingVisible = entry.isIntersecting || entry.boundingClientRect.top < 0;
    update();
  }).observe(closing);
}
