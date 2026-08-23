import { useEffect } from "react";

/** Défilement lissé type « lerp » — molette uniquement, pointeur fin,
 *  neutralisé si prefers-reduced-motion. Clavier/tactile : natif. */
export function useSmoothScroll() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    let active = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const loop = () => {
      const m = maxScroll();
      if (target > m) target = m;
      current += (target - current) * 0.1;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        active = false;
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!active) {
        active = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // zoom pincé : natif
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      target = Math.min(maxScroll(), Math.max(0, target + delta));
      start();
    };

    // Synchronisation : barre d'espace/flèches/hash/scrollbar → on adopte la position.
    const onScroll = () => {
      if (Math.abs(window.scrollY - current) > 60 || !active) {
        target = current = window.scrollY;
      }
    };

    // Ancres internes : défilement lissé avec compensation de l'en-tête.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      target = Math.min(maxScroll(), Math.max(0, y));
      history.replaceState(null, "", href);
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      root.style.scrollBehavior = prevBehavior;
    };
  }, []);
}
