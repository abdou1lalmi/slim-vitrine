import { useState } from "react";
import { FLAVORS } from "../data/content";
import { Bottle } from "./Bottle";
import { SectionLabel } from "./SectionLabel";

/** Section gamme immersive : tout le fond bascule dans la teinte de la
 *  saveur, bouteille + nom monumental en swap animé. */
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
    <section
      id="gamme"
      className="scroll-mt-20 transition-colors duration-700 ease-out"
      style={{ backgroundColor: flavor.tint }}
      aria-labelledby="gamme-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28 md:px-8">
        {/* En-tête */}
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
          {/* Liste typographique */}
          <div data-reveal role="radiogroup" aria-label="Choisir une saveur" onKeyDown={onKeyDown} className="lg:col-span-7">
            <ul className="divide-y divide-ligne border-y border-ligne">
              {FLAVORS.map((f, i) => {
                const selected = i === active;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      id={`flavor-${f.id}`}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-baseline gap-x-5 py-4 text-left sm:py-[1.15rem]"
                    >
                      <span className={`font-display text-xs tracking-wide transition-colors duration-300 sm:text-sm ${selected ? "text-ink/60" : "text-ink/30"}`}>
                        N°{f.num}
                      </span>
                      <span
                        className={`font-display text-[clamp(1.8rem,4.5vw,3.3rem)] leading-none tracking-tight transition-all duration-500 ${
                          selected
                            ? "-translate-y-0 text-ink"
                            : "translate-y-0 text-ink/25 group-hover:translate-x-1.5 group-hover:text-ink/55"
                        }`}
                      >
                        {f.name}
                      </span>
                      <span className="ml-auto flex shrink-0 items-center gap-4 self-center">
                        <span lang="ar" dir="rtl" className={`hidden font-arabic text-sm transition-colors duration-300 sm:inline ${selected ? "text-ink/70" : "text-ink/40"}`}>
                          {f.nameAr}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`h-5 w-5 rounded-full border transition-all duration-300 group-hover:scale-110 ${
                            selected ? "scale-110 border-verre/50 ring-4 ring-verre/10" : "border-verre/25"
                          }`}
                          style={{ background: f.liquid }}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
              {flavor.num} / 06 — sélectionnez une saveur
            </p>
          </div>

          {/* Visuel immersif */}
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="lg:col-span-5">
            <div
              className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden rounded-[32px] px-6 pb-9 pt-14 transition-colors duration-700 ease-out"
              style={{ backgroundColor: flavor.deep }}
            >
              {/* Nom monumental en fond */}
              <span
                key={`name-${flavor.id}`}
                aria-hidden="true"
                className="flavor-name pointer-events-none absolute left-1/2 top-7 w-max -translate-x-1/2 select-none font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold uppercase leading-none tracking-tight text-outline-cream"
              >
                {flavor.name}
              </span>

              {/* Halo */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-18%] h-64 w-64 rounded-full opacity-40 blur-[70px] transition-colors duration-700"
                style={{ backgroundColor: flavor.liquid }}
              />

              <Bottle key={`bottle-${flavor.id}`} liquid={flavor.liquid} deep={flavor.deep} className="flavor-bottle relative z-10 w-36 drop-shadow-[0_26px_30px_rgba(0,0,0,0.35)] sm:w-44" />

              <p aria-live="polite" className="relative z-10 mt-7 min-h-16 max-w-xs text-center text-sm leading-relaxed text-paper/85">
                {flavor.note}
              </p>
              <p className="relative z-10 mt-3 font-display text-lg font-medium text-paper">
                Slim {flavor.name}{" "}
                <span lang="ar" dir="rtl" className="font-arabic text-sm text-paper/60">
                  {flavor.nameAr}
                </span>
              </p>

              {/* Compteur */}
              <span aria-hidden="true" className="absolute bottom-5 right-6 font-display text-sm tracking-widest text-paper/50">
                {flavor.num} — 06
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
