// O mapa do Google só é carregado quando a pessoa pede: menos peso na página
// e nenhum cookie de terceiros sem ação do visitante.

export function initMap() {
  const root = document.querySelector("[data-map]");
  const button = root?.querySelector("[data-map-load]");
  const template = root?.querySelector("[data-map-template]");
  if (!root || !button || !template) return;

  button.addEventListener("click", () => {
    const frame = template.content.firstElementChild.cloneNode(true);
    frame.setAttribute("tabindex", "0");
    button.remove();
    root.append(frame);
    frame.focus({ preventScroll: true });
  });
}
