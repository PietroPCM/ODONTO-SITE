// Menu do celular, cabeçalho elevado e seção ativa na navegação.

export function initMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const list = document.querySelector("[data-nav-list]");
  const header = document.querySelector("[data-header]");
  if (!toggle || !list || !header) return;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const close = ({ returnFocus = false } = {}) => {
    list.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle.focus();
  };

  const open = () => {
    list.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    list.querySelector("a")?.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => (isOpen() ? close() : open()));
  list.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close({ returnFocus: true });
  });

  document.addEventListener("click", (e) => {
    if (isOpen() && !list.contains(e.target) && !toggle.contains(e.target)) close();
  });

  // Ao passar para o layout de desktop, o menu volta ao estado padrão.
  window.matchMedia("(min-width: 960px)").addEventListener("change", () => close());

  const onScroll = () => {
    header.dataset.elevated = window.scrollY > 8 ? "true" : "false";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

export function initActiveSection() {
  const links = [...document.querySelectorAll("[data-nav-list] a[href^='#']")];
  const sections = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
  const top = document.querySelector("#topo");
  if (top) sections.push(top);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
