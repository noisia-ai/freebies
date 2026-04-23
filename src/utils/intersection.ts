export const revealOnScroll = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  if (reducedMotion || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  sections.forEach((section) => observer.observe(section));
};

export const countUp = (node: HTMLElement, target: number) => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  if (reducedMotion) {
    node.textContent = target.toFixed(1);
    return;
  }

  const duration = 900;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = (target * eased).toFixed(1);

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};
