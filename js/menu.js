// Controla o menu mobile e o estado elevado do cabeçalho.

export function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  const header = document.getElementById("site-header");
  if (!toggle || !nav || !header) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("no-scroll");
  };

  const open = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    document.body.classList.add("no-scroll");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? close() : open();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => close());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) close();
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    close();
  });

  const onScroll = () => {
    header.dataset.elevated = window.scrollY > 24 ? "true" : "false";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

export function initActiveSection() {
  const links = document.querySelectorAll(".primary-nav ul a");
  const sections = Array.from(links)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
