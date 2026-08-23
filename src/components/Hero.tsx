import { IG_HANDLE, IG_URL } from "../data/content";
import { Bottle } from "./Bottle";
import { InstagramIcon } from "./icons";
import { Magnetic } from "./Magnetic";

const BUBBLES = [
  { left: "12%", size: 10, t: "5.5s", dl: "0s" },
  { left: "26%", size: 6, t: "4.2s", dl: "1.1s" },
  { left: "58%", size: 8, t: "6s", dl: "0.6s" },
  { left: "72%", size: 5, t: "4.8s", dl: "1.8s" },
  { left: "86%", size: 9, t: "5.2s", dl: "0.3s" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-6">
        {/* ── Texte ── */}
        <div className="lg:col-span-7">
          <p
            className="hero-in flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/60 sm:text-xs"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            <span>Hamoud Boualem</span>
            <span aria-hidden="true" className="h-px w-8 bg-ligne" />
            <span>Alger — depuis 1878</span>
          </p>

          <h1
            id="hero-title"
            className="hero-in mt-6 font-display text-[clamp(3rem,9.5vw,7rem)] font-medium leading-[0.98] tracking-tight"
            style={{ "--d": "140ms" } as React.CSSProperties}
          >
            Le gazouz qui{" "}
            <em className="relative whitespace-nowrap not-italic">
              <span className="relative z-10">prime</span>
              <svg
                viewBox="0 0 200 22"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 z-0 h-[0.18em] w-full text-citron"
              >
                <path d="M4 16 C 50 4, 150 4, 196 14" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </em>{" "}
            depuis 1950.
          </h1>

          <p
            className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-ink/75"
            style={{ "--d": "240ms" } as React.CSSProperties}
          >
            Citron, orange, pomme et compagnie : Slim, c'est le soda algérien de la maison
            Hamoud Boualem, servi très frais entre frères, sœurs et voisins.
          </p>
          <p
            dir="rtl"
            lang="ar"
            className="hero-in mt-3 max-w-xl font-arabic text-base leading-relaxed text-ink/70"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            عيشوا، اكتشفوا و اشربوا سليم
          </p>

          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-4"
            style={{ "--d": "380ms" } as React.CSSProperties}
          >
            <Magnetic>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-verre px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_10px_30px_-12px_rgba(16,54,42,0.55)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
                Suivre {IG_HANDLE}
              </a>
            </Magnetic>
            <a href="#gamme" className="link-line py-2 text-sm font-semibold">
              Découvrir la gamme ↓
            </a>
          </div>

          <dl
            className="hero-in mt-12 grid max-w-xl grid-cols-3 divide-x divide-ligne border-y border-ligne"
            style={{ "--d": "460ms" } as React.CSSProperties}
          >
            {[
              ["06", "saveurs"],
              ["1878", "maison mère"],
              ["100%", "algérien"],
            ].map(([v, k]) => (
              <div key={k} className="px-4 py-3 first:pl-0">
                <dt className="sr-only">{k}</dt>
                <dd className="font-display text-2xl">{v}</dd>
                <dd className="text-[11px] uppercase tracking-[0.18em] text-ink/55">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Visuel bouteille ── */}
        <div className="lg:col-span-5">
          <div className="hero-in relative mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm" style={{ "--d": "220ms" } as React.CSSProperties}>
            <div aria-hidden="true" className="absolute inset-0 scale-110 rounded-full bg-citron-soft" />
            {/* Badge rotatif */}
            <svg
              viewBox="0 0 140 140"
              aria-hidden="true"
              className="absolute -right-6 -top-8 z-10 h-24 w-24 animate-[spin_18s_linear_infinite] text-verre sm:h-28 sm:w-28"
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

            <Bottle liquid="#ffd84d" deep="#d9a914" className="relative z-[5] mx-auto w-full drop-shadow-[0_24px_32px_rgba(20,56,43,0.18)]" />

            {/* Bulles animées */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-6 top-auto z-[4] h-48">
              {BUBBLES.map((b, i) => (
                <span
                  key={i}
                  className="bubble absolute bottom-0 rounded-full border border-verre/30 bg-white/40"
                  style={{
                    left: b.left,
                    width: b.size,
                    height: b.size,
                    "--t": b.t,
                    "--dl": b.dl,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
