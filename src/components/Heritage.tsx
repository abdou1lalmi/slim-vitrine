import { TIMELINE } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Heritage() {
  return (
    <section id="histoire" className="scroll-mt-20 px-5 py-10 md:px-8" aria-labelledby="histoire-title">
      <div className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-verre px-6 py-16 text-cream sm:px-12 sm:py-24">
        {/* Filigrane */}
        <span
          aria-hidden="true"
          className="text-outline-citron pointer-events-none absolute -right-4 top-6 select-none font-display text-[24vw] font-semibold leading-none sm:text-[18vw]"
        >
          1878
        </span>

        <div data-reveal className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="dark">L'histoire</SectionLabel>
            <h2 id="histoire-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
              Une histoire algérienne, pétillante depuis 1878.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/70 lg:col-span-5">
            Avant d'être un compte Instagram, Slim est une histoire de famille — celle de la
            maison Hamoud Boualem, limonaderie d'Alger devenue institution nationale. Aujourd'hui
            encore embouteillée à Alger, la gamme traverse la Méditerranée : un gazouz bien fait
            n'a pas besoin de passer de mode.
          </p>
        </div>

        <ol className="relative mt-14 border-t border-ligne-light">
          {TIMELINE.map((t, i) => (
            <li
              key={t.year}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              className="group grid items-baseline gap-x-8 gap-y-1 border-b border-ligne-light py-7 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-12 sm:py-8"
            >
              <span aria-hidden="true" className="font-display text-xs tracking-widest text-citron/60 sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-4xl font-medium tracking-tight text-citron transition-transform duration-500 group-hover:translate-x-2 sm:col-span-4 sm:text-5xl">
                {t.year}
              </p>
              <p className="text-sm leading-relaxed text-cream/75 sm:col-span-7">{t.text}</p>
            </li>
          ))}
        </ol>

        <p data-reveal className="mt-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/50">
          Alger · Médaille d'or — Exposition universelle de Paris, 1889
        </p>
      </div>
    </section>
  );
}
