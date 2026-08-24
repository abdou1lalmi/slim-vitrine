import { useEffect, useRef, type ReactNode } from "react";
import { IG_HANDLE, IG_URL } from "../data/content";
import { Bottle } from "./Bottle";
import { ArrowIcon } from "./icons";

const BUBBLES = [
  { left: "14%", size: 10, t: "5.5s", dl: "0s" },
  { left: "30%", size: 6, t: "4.2s", dl: "1.1s" },
  { left: "62%", size: 8, t: "6s", dl: "0.6s" },
  { left: "76%", size: 5, t: "4.8s", dl: "1.8s" },
  { left: "88%", size: 9, t: "5.2s", dl: "0.3s" },
] as const;

/** Ligne de titre masquée — révélée en coulissant quand `ready`. */
function MaskedLine({ d, go, children }: { d: number; go: boolean; children: ReactNode }) {
  return (
    <span className="line-mask">
      <span className={`line-in ${go ? "is-go" : ""}`} style={{ "--d": `${d}ms` } as React.CSSProperties}>
        {children}
      </span>
    </span>
  );
}

export function Hero({ ready }: { ready: boolean }) {
  const waterRef = useRef<HTMLSpanElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  /* Parallaxe souris sur le produit + dérive du filigrane au scroll. */
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let mx = 0;
    let my = 0;
    let raf = 0;
    let visible = true;
    const section = artRef.current?.closest("section");
    const onMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const loop = () => {
      if (!visible) {
        raf = 0;
        return;
      }
      if (artRef.current) {
        artRef.current.style.transform = `translate3d(${mx * -18}px, ${my * -12}px, 0)`;
      }
      if (waterRef.current) {
        waterRef.current.style.transform = `translate3d(${mx * 22}px, ${
          window.scrollY * -0.08 + my * 10
        }px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const observer = section
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !raf) raf = requestAnimationFrame(loop);
          if (!visible && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        }, { threshold: 0 })
      : null;

    window.addEventListener("pointermove", onMove, { passive: true });
    if (observer && section) observer.observe(section);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      observer?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-28 pb-10 sm:pb-12" aria-labelledby="hero-title">
      {/* Filigrane monumental */}
      <span
        ref={waterRef}
        aria-hidden="true"
        className="text-outline-faint pointer-events-none absolute -right-[4vw] top-[6vh] select-none font-display text-[38vw] font-semibold uppercase leading-none will-change-transform"
      >
        SLIM
      </span>
      {/* Halo citron */}
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[18%] h-[46vh] w-[46vh] rounded-full bg-citron/25 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Surtitre */}
        <p
          data-reveal
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/60 sm:text-xs"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          <span>Hamoud Boualem · Alger — depuis 1878</span>
          <span aria-hidden="true" className="h-px w-8 bg-ligne" />
          <a href={IG_URL} target="_blank" rel="noreferrer" className="link-line inline-flex items-center gap-1.5">
            Soda officiel {IG_HANDLE} <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </p>

        {/* Titre + produit superposé */}
        <div className="relative mt-5 sm:mt-7">
          <h1
            id="hero-title"
            className="relative z-10 font-display text-[clamp(3rem,10.5vw,10rem)] font-medium uppercase leading-[0.94] tracking-[-0.02em]"
          >
            <MaskedLine d={60} go={ready}>
              Le gazouz
            </MaskedLine>
            <MaskedLine d={170} go={ready}>
              qui{" "}
              <em className="relative whitespace-nowrap not-italic">
                <span className="relative z-10 italic">prime</span>
                <svg
                  viewBox="0 0 200 22"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-[0.06em] left-0 z-0 h-[0.14em] w-full text-citron"
                >
                  <path d="M4 16 C 50 4, 150 4, 196 14" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
                </svg>
              </em>
            </MaskedLine>
            <MaskedLine d={280} go={ready}>
              depuis 1950.
            </MaskedLine>
          </h1>

          {/* Bouteille — desktop : posée sur le titre */}
          <div
            ref={artRef}
            className="absolute bottom-[-0.06em] right-[4%] z-[5] hidden w-[clamp(104px,12vw,172px)] will-change-transform sm:block"
            aria-hidden="true"
          >
            <div className="floaty relative">
              <svg
                viewBox="0 0 140 140"
                className="absolute -left-12 -top-8 z-10 h-20 w-20 animate-[spin_18s_linear_infinite] text-verre sm:h-24 sm:w-24"
              >
                <defs>
                  <path id="badge-circle" d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
                </defs>
                <circle cx="70" cy="70" r="66" fill="#fcf8ef" stroke="#14382b" strokeWidth="2" />
                <text fontSize="13.5" fontFamily="Archivo, sans-serif" fontWeight="600" letterSpacing="2.5" fill="currentColor">
                  <textPath href="#badge-circle">SLIM · DEPUIS 1950 · LE CITRON QUI PRIME ·</textPath>
                </text>
                <path d="M70 56c.6 4.4 3 6.8 8 8-5 1.2-7.4 3.6-8 8-.6-4.4-3-6.8-8-8 5-1.2 7.4-3.6 8-8Z" fill="#d9a914" />
              </svg>
              <Bottle liquid="#ffd84d" deep="#d9a914" className="w-full drop-shadow-[0_30px_36px_rgba(20,56,43,0.22)]" />
              <div className="pointer-events-none absolute inset-x-2 bottom-4 h-40">
                {BUBBLES.map((b, i) => (
                  <span
                    key={i}
                    className="bubble absolute bottom-0 rounded-full border border-verre/30 bg-white/40"
                    style={{ left: b.left, width: b.size, height: b.size, "--t": b.t, "--dl": b.dl } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bouteille — mobile : dans le flux */}
        <div className="mt-8 flex justify-center sm:hidden" aria-hidden="true">
          <Bottle liquid="#ffd84d" deep="#d9a914" className="floaty w-32 drop-shadow-[0_24px_28px_rgba(20,56,43,0.2)]" />
        </div>

        {/* Bas de héros : accroche, arabe, stats */}
        <div className="mt-9 grid items-end gap-8 md:mt-12 md:grid-cols-12">
          <p data-reveal style={{ "--d": "480ms" } as React.CSSProperties} className="max-w-md text-base leading-relaxed text-ink/75 sm:text-lg md:col-span-5">
            Citron, orange, pomme et compagnie&nbsp;: Slim, c'est le soda algérien de la maison
            Hamoud Boualem, servi très frais entre frères, sœurs et voisins.
          </p>
          <p
            dir="rtl"
            lang="ar"
            data-reveal
            style={{ "--d": "560ms" } as React.CSSProperties}
            className="font-arabic text-base leading-relaxed text-ink/70 md:col-span-3"
          >
            عيشوا، اكتشفوا و اشربوا سليم
          </p>
          <dl
            data-reveal
            style={{ "--d": "640ms" } as React.CSSProperties}
            className="grid grid-cols-3 divide-x divide-ligne border-y border-ligne md:col-span-4"
          >
            {[
              ["06", "saveurs"],
              ["1878", "maison mère"],
              ["100%", "algérien"],
            ].map(([v, k]) => (
              <div key={k} className="px-4 py-3 first:pl-0">
                <dt className="sr-only">{k}</dt>
                <dd className="font-display text-xl sm:text-2xl">{v}</dd>
                <dd className="text-[10px] uppercase tracking-[0.18em] text-ink/55 sm:text-[11px]">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Indice de scroll */}
      <a
        href="#gamme"
        data-reveal
        style={{ "--d": "800ms" } as React.CSSProperties}
        aria-label="Faire défiler vers la gamme"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink lg:flex"
      >
        <span className="sr-only">Scroll</span>
        <span aria-hidden="true" className="cue-line block h-10 w-px bg-current" />
      </a>
    </section>
  );
}
