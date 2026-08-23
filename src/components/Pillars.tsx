import { PILLARS } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Pillars() {
  return (
    <section id="compte" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="compte-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-reveal className="max-w-2xl">
          <SectionLabel>Le compte @slimofficielle</SectionLabel>
          <h2 id="compte-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
            Ce que vous trouverez dans le fil.
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => (
            <li
              key={p.num}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              className="group rounded-card border border-ligne bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-24px_rgba(20,56,43,0.4)]"
            >
              <p aria-hidden="true" className="font-display text-4xl text-citron transition-transform duration-300 group-hover:-rotate-6">
                {p.num}
              </p>
              <h3 className="mt-6 font-display text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{p.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
