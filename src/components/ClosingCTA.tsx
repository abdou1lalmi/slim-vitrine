import { IG_HANDLE, IG_URL } from "../data/content";
import { InstagramIcon } from "./icons";
import { Magnetic } from "./Magnetic";

export function ClosingCTA() {
  return (
    <section className="on-dark relative overflow-hidden bg-citron py-24 sm:py-32" aria-labelledby="cta-title">
      {/* Marquee monumental en fond */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-[0.55]">
        <div className="marquee-track-slow flex w-max whitespace-nowrap font-display text-[17vw] font-semibold uppercase leading-none tracking-tight text-verre/10">
          <span className="pr-16">Slim · Gazouz · Slim · Gazouz ·&nbsp;</span>
          <span className="pr-16">Slim · Gazouz · Slim · Gazouz ·&nbsp;</span>
        </div>
      </div>

      {/* Bulles décoratives */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-60">
        {[
          { left: "8%", size: 26, t: "7s", dl: "0s" },
          { left: "22%", size: 14, t: "5.4s", dl: "1.4s" },
          { left: "47%", size: 20, t: "8s", dl: "0.7s" },
          { left: "68%", size: 12, t: "5s", dl: "2s" },
          { left: "84%", size: 30, t: "7.4s", dl: "0.4s" },
          { left: "93%", size: 16, t: "6.2s", dl: "1.1s" },
        ].map((b, i) => (
          <span
            key={i}
            className="bubble absolute bottom-0 rounded-full border border-verre/25 bg-white/50"
            style={{ left: b.left, width: b.size, height: b.size, "--t": b.t, "--dl": b.dl } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center text-verre md:px-8">
        <p data-reveal className="text-xs font-semibold uppercase tracking-[0.24em] text-verre/60">
          Le compte officiel Slim
        </p>
        <h2
          id="cta-title"
          data-reveal
          style={{ "--d": "90ms" } as React.CSSProperties}
          className="mt-5 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight"
        >
          Asseyez-vous<br />à la table.
        </h2>
        <p data-reveal style={{ "--d": "180ms" } as React.CSSProperties} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-verre/75">
          Nouveautés, recettes, temps forts : chaque semaine sur Instagram.
          Un abonnement, et vous ne manquerez plus une gorgée.
        </p>
        <div data-reveal style={{ "--d": "270ms" } as React.CSSProperties} className="mt-10 flex justify-center">
          <Magnetic>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full bg-verre px-9 py-4.5 text-base font-semibold text-citron shadow-[0_18px_40px_-16px_rgba(10,37,28,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-5 w-5" />
              Suivre {IG_HANDLE}
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
