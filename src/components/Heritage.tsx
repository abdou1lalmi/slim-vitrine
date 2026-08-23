import { TIMELINE } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Heritage() {
  return (
    <section id="histoire" className="scroll-mt-24 px-5 py-10 md:px-8" aria-labelledby="histoire-title">
      <div className="on-dark mx-auto max-w-7xl rounded-[28px] bg-verre px-6 py-14 text-cream sm:px-12 sm:py-20">
        <div data-reveal className="max-w-2xl">
          <SectionLabel tone="dark">L'histoire</SectionLabel>
          <h2 id="histoire-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
            Une histoire algérienne, pétillante depuis 1878.
          </h2>
          <p className="mt-5 leading-relaxed text-cream/70">
            Avant d'être un compte Instagram, Slim est une histoire de famille — celle de la
            maison Hamoud Boualem, limonaderie d'Alger devenue institution nationale.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 border-l border-ligne-light pl-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pl-10">
          {TIMELINE.map((t, i) => (
            <li key={t.year} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties} className="relative">
              <span aria-hidden="true" className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full bg-citron ring-4 ring-verre lg:-left-[49px]" />
              <p className="font-display text-3xl text-citron">{t.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{t.text}</p>
            </li>
          ))}
        </ol>

        <p data-reveal className="mt-12 max-w-2xl text-sm leading-relaxed text-cream/60">
          Aujourd'hui encore embouteillée à Alger, la gamme traverse la Méditerranée et se trouve
          dans les épiceries maghrébines des deux rives — preuve qu'un gazouz bien fait n'a pas
          besoin de passer de mode.
        </p>
      </div>
    </section>
  );
}
