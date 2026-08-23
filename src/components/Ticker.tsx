import { TICKER_ITEMS } from "../data/content";
import { Spark } from "./icons";

function Track({ reverse = false }: { reverse?: boolean }) {
  return (
    <span className="flex shrink-0 items-center" aria-hidden="true">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={
              /[\u0600-\u06FF]/.test(item)
                ? "whitespace-nowrap px-7 font-arabic text-lg sm:text-xl"
                : "whitespace-nowrap px-7 font-display text-lg font-semibold uppercase tracking-[0.14em] sm:text-2xl"
            }
          >
            {item}
          </span>
          <Spark className="h-4 w-4 shrink-0 text-citron" />
        </span>
      ))}
      {/* sens inverse : le séparateur passe en vert sur fond citron */}
      {reverse && null}
    </span>
  );
}

/** Double bandeau croisé — un vert, un citron, directions opposées. */
export function Ticker() {
  return (
    <div className="relative z-10 my-8 select-none py-10" aria-hidden="true">
      <div className="relative">
        {/* Bande arrière — citron, sens inverse */}
        <div
          className="absolute inset-x-[-3%] top-1/2 -translate-y-1/2 rotate-[1.4deg] bg-citron py-3 text-verre shadow-[0_18px_40px_-24px_rgba(20,56,43,0.5)]"
        >
          <div className="marquee-track-slow flex w-max" style={{ animationDirection: "reverse" }}>
            <Track reverse />
            <Track reverse />
          </div>
        </div>
        {/* Bande avant — verre */}
        <div className="relative -rotate-[1.6deg] bg-verre py-4 text-cream">
          <div className="marquee-track flex w-max">
            <Track />
            <Track />
          </div>
        </div>
      </div>
      <p className="sr-only">
        Gazouz depuis 1950. Le citron qui prime. Taste of Algeria. Six saveurs.
      </p>
    </div>
  );
}
