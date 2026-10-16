// Dúvidas dos pais: acordeão com uma resposta aberta por vez.

export function initConcerns() {
  const root = document.querySelector("[data-concerns]");
  if (!root) return;

  const buttons = [...root.querySelectorAll("[data-concern]")];
  const panelOf = (button) => document.getElementById(button.getAttribute("aria-controls"));

  const set = (button, expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    panelOf(button).hidden = !expanded;
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
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
}
