import { useEffect, useRef, useState } from "react";

const WORDS = ["GAZOUZ", "FRAÎCHEUR", "SIX SAVEURS", "ALGER", "DEPUIS 1878"] as const;

/** Rideau de préchargement : compteur eased, mot cyclique, sortie en rideau.
 *  Appelle `onReveal` au moment exact où le contenu doit entrer en scène. */
export function Preloader({ onReveal }: { onReveal: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const [gone, setGone] = useState(false);
  const wordRef = useRef(0);
  const [word, setWord] = useState<(typeof WORDS)[number]>(WORDS[0]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("slim-vitrine-preloader-seen") === "1";
    } catch {
      // Storage can be blocked by privacy settings; keep the full reveal.
    }

    if (reduced || seen) {
      onReveal();
      setGone(true);
      return;
    }

    let raf = 0;
    let timer = 0;
    const DURATION = 1600;
    const t0 = performance.now();

    // Cycle des mots pendant le chargement
    timer = window.setInterval(() => {
      wordRef.current = (wordRef.current + 1) % WORDS.length;
      setWord(WORDS[wordRef.current]);
    }, 240);

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      window.clearInterval(timer);
      try {
        window.sessionStorage.setItem("slim-vitrine-preloader-seen", "1");
      } catch {
        // The preloader still completes when session storage is unavailable.
      }
      onReveal();
      // double rAF : laisse React peindre l'état final avant la transition
      requestAnimationFrame(() => requestAnimationFrame(() => setExit(true)));
      window.setTimeout(() => setGone(true), 1000);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
    };
  }, [onReveal]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[80] flex flex-col justify-between overflow-hidden bg-verre px-6 py-6 text-cream transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:px-10 sm:py-8 ${
        exit ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Barre de progression pleine largeur, en haut */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-cream/15">
        <div
          className="h-full origin-left bg-citron"
          style={{ transform: `scaleX(${progress / 100})`, width: "100%" }}
        />
      </div>

      <div className="flex items-baseline justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/60">
        <span className="font-display text-lg font-semibold normal-case tracking-tight text-cream">
          SLIM<span className="align-super text-[9px]">®</span>
        </span>
        <span>Vitrine — Hamoud Boualem</span>
      </div>

      <p
        key={word}
        className="preword self-start font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium uppercase leading-none tracking-tight text-outline-cream"
      >
        {word}
      </p>

      <div className="flex items-end justify-between">
        <span className="mb-3 h-px w-24 bg-ligne-light sm:w-40" aria-hidden="true" />
        <span className="font-display text-[clamp(4.5rem,16vw,11rem)] font-medium leading-none tracking-tight tabular-nums">
          {progress}
          <span className="text-citron">%</span>
        </span>
      </div>
    </div>
  );
}
