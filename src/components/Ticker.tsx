import { TICKER_ITEMS } from "../data/content";
import { Spark } from "./icons";

function Track() {
  return (
    <span className="flex shrink-0 items-center" aria-hidden="true">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={
              /[\u0600-\u06FF]/.test(item)
                ? "whitespace-nowrap px-6 font-arabic text-sm"
                : "whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.24em]"
            }
          >
            {item}
          </span>
          <Spark className="h-3 w-3 shrink-0 text-citron" />
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div className="on-dark relative z-10 -rotate-1 overflow-hidden bg-verre py-3.5 text-cream" role="presentation">
      <div className="marquee-track flex w-max">
        <Track />
        <Track />
      </div>
    </div>
  );
}
