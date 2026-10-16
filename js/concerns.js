// Dúvidas dos pais: acordeão no celular, painel único ao lado no desktop.

export function initConcerns() {
  const root = document.querySelector("[data-concerns]");
  if (!root) return;

  const buttons = [...root.querySelectorAll("[data-concern]")];
  const desktop = window.matchMedia("(min-width: 960px)");
  const panelOf = (button) => document.getElementById(button.getAttribute("aria-controls"));

  const set = (button, expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    panelOf(button).hidden = !expanded;
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      // No desktop sempre há uma resposta aberta; no celular dá para fechar todas.
      if (expanded && desktop.matches) return;
      buttons.forEach((other) => set(other, other === button ? !expanded : false));
    });

    button.addEventListener("keydown", (e) => {
      const keys = { ArrowDown: 1, ArrowUp: -1 };
      if (e.key in keys) {
        e.preventDefault();
        buttons[(index + keys[e.key] + buttons.length) % buttons.length].focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        buttons[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        buttons[buttons.length - 1].focus();
      }
    });
  });

  // Ao voltar para o desktop sem nenhuma resposta aberta, abre a primeira.
  desktop.addEventListener("change", (e) => {
    if (e.matches && !buttons.some((b) => b.getAttribute("aria-expanded") === "true")) set(buttons[0], true);
  });
}
