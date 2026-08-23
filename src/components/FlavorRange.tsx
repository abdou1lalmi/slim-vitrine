import { useState } from "react";
import { FLAVORS } from "../data/content";
import { Bottle } from "./Bottle";
import { SectionLabel } from "./SectionLabel";

export function FlavorRange() {
  const [active, setActive] = useState(0);
  const flavor = FLAVORS[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + FLAVORS.length) % FLAVORS.length;
    setActive(next);
    document.getElementById(`flavor-${FLAVORS[next].id}`)?.focus();
  };

  return (
    <section id="gamme" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="gamme-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel>La gamme</SectionLabel>
            <h2 id="gamme-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
              Six saveurs, une seule règle&nbsp;: très frais.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink/60 lg:col-span-4">
            Verre 25&nbsp;cl &amp; 1&nbsp;L · PET 33&nbsp;cl à 2&nbsp;L · canettes 24 &amp; 33&nbsp;cl.
            Embouteillée en Algérie par Hamoud Boualem.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Sélecteur */}
          <div
            data-reveal
            role="radiogroup"
            aria-label="Choisir une saveur"
            onKeyDown={onKeyDown}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {FLAVORS.map((f, i) => {
                const selected = i === active;
                return (
                  <li key={f.id} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      id={`flavor-${f.id}`}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center justify-between gap-6 rounded-card border px-5 py-4 text-left transition-all duration-300 lg:border-x-0 lg:border-t-0 lg:px-4 lg:py-6 lg:first:rounded-t-card lg:last:rounded-b-card ${
                        selected
                          ? "border-ligne bg-paper shadow-[0_14px_34px_-18px_rgba(20,56,43,0.35)] lg:border-ligne"
                          : "border-ligne bg-transparent hover:bg-paper/60 lg:border-b-ligne lg:bg-transparent lg:hover:bg-paper/50 lg:shadow-none"
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-sm text-ink/40">N°{f.num}</span>
                        <span className="font-display text-xl sm:text-2xl">{f.name}</span>
                      </span>
                      <span className="flex items-center gap-4">
                        <span lang="ar" dir="rtl" className="hidden font-arabic text-sm text-ink/50 sm:inline">
                          {f.nameAr}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-5 w-5 rounded-full border border-verre/25 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: f.liquid }}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Visuel */}
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="order-1 lg:order-2 lg:col-span-5">
            <div
              className="relative flex flex-col items-center overflow-hidden rounded-card px-6 pb-8 pt-10 transition-colors duration-500"
              style={{ backgroundColor: flavor.tint }}
            >
              <Bottle liquid={flavor.liquid} deep={flavor.deep} className="w-36 sm:w-44" />
              <p aria-live="polite" className="mt-6 min-h-10 max-w-xs text-center text-sm leading-relaxed text-ink/75">
                {flavor.note}
              </p>
              <p className="mt-1 font-display text-lg font-medium">
                Slim {flavor.name}{" "}
                <span lang="ar" dir="rtl" className="font-arabic text-sm text-ink/50">
                  {flavor.nameAr}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
