import { useEffect, useRef, useState } from "react";
import { PILLARS } from "../data/content";
import { SectionLabel } from "./SectionLabel";
import { ArrowIcon } from "./icons";

function PillarCard({ p, i }: { p: (typeof PILLARS)[number]; i: number }) {
  return (
    <li
      data-reveal
      style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
      className={`group w-[78vw] shrink-0 rounded-card border border-ligne bg-paper p-7 transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_26px_50px_-28px_rgba(20,56,43,0.5)] sm:w-[360px] ${
        i % 2 ? "rotate-[1.1deg]" : "-rotate-[0.9deg]"
      }`}
    >
      <p aria-hidden="true" className="font-display text-5xl font-medium text-citron transition-transform duration-500 group-hover:-rotate-6">
        {p.num}
      </p>
      <h3 className="mt-8 font-display text-xl font-medium sm:text-2xl">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{p.tag}</p>
    </li>
  );
}

const canScrollH = () =>
  window.matchMedia("(min-width: 1024px)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Pillars() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  // Décidé au montage : défilement horizontal réservé desktop + mouvement autorisé.
  const [horizontal] = useState(canScrollH);

  useEffect(() => {
    if (!horizontal) return;
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const dist = Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      track.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [horizontal]);

  return (
    <section id="compte" className="scroll-mt-20" aria-labelledby="compte-title">
      {/*
        Desktop : section épinglée, cartes traduites horizontalement au scroll.
        Mobile/tablette & mouvement réduit : grille statique classique.
      */}
      {horizontal ? (
        <div ref={wrapRef} className="relative hidden lg:block" style={{ height: "300vh" }}>
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div data-reveal className="mx-auto w-full max-w-7xl px-8">
              <SectionLabel>Le compte @slimofficielle</SectionLabel>
              <h2 id="compte-title" className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
                Ce que vous trouverez dans le fil.
              </h2>
            </div>
            <ul ref={trackRef} className="mt-12 flex w-max items-stretch gap-7 px-[max(2rem,calc((100vw-80rem)/2))] will-change-transform">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.num} p={p} i={i} />
              ))}
              {/* Carte de sortie */}
              <li className="flex w-[260px] shrink-0 items-center justify-center rounded-card bg-verre p-7 text-cream">
                <a href="#contact" className="link-line flex items-center gap-2 font-display text-xl">
                  Rejoindre la table <ArrowIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
            <p aria-hidden="true" className="mx-auto mt-12 w-full max-w-7xl px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">
              Continuez à scroller →
            </p>
          </div>
        </div>
      ) : (
        <div className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div data-reveal className="max-w-2xl">
              <SectionLabel>Le compte @slimofficielle</SectionLabel>
              <h2 id="compte-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
                Ce que vous trouverez dans le fil.
              </h2>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.num} p={p} i={i} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
