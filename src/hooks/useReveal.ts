/** Observe tous les éléments [data-reveal] et ajoute .is-in à l'entrée dans
 *  le viewport. À initialiser une fois le préchargeur levé.
 *  Retourne la fonction de nettoyage. */
export function initReveals(): () => void {
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -24px 0px" },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
