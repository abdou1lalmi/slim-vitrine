import { FLAVORS, GALLERY, IG_HANDLE, IG_URL, type GalleryPost } from "../data/content";
import { SectionLabel } from "./SectionLabel";
import { Spark } from "./icons";

/* ── Scènes SVG de démonstration (remplacées par les visuels Instagram réels) ── */
type SceneProps = { liquid: string; deep: string; tint: string };

function SceneBottle({ liquid, deep, tint }: SceneProps) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="500" fill={tint} />
      <circle cx="200" cy="270" r="130" fill="#ffffff" opacity="0.5" />
      <path d="M186 150 L186 190 C186 208 158 216 158 240 L158 380 C158 394 170 402 184 404 L216 404 C230 402 242 394 242 380 L242 240 C242 216 214 208 214 190 L214 150 Z" fill={liquid} stroke="#14382b" strokeWidth="5" strokeLinejoin="round" />
      <rect x="182" y="132" width="36" height="18" rx="4" fill={deep} stroke="#14382b" strokeWidth="5" />
      <rect x="159" y="280" width="82" height="52" fill="#fcf8ef" stroke="#14382b" strokeWidth="5" />
      <text x="200" y="314" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="600" fontSize="26" letterSpacing="3" fill="#14382b">SLIM</text>
      <g transform="translate(300 120)">
        <circle r="46" fill="#ffd84d" stroke="#14382b" strokeWidth="5" />
        <g stroke="#14382b" strokeWidth="4">
          <path d="M0 -44 V44 M-44 0 H44 M-31 -31 L31 31 M-31 31 L31 -31" />
        </g>
        <circle r="12" fill="#fff3c2" />
      </g>
    </svg>
  );
}

function SceneGlass({ liquid, deep }: SceneProps) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="500" fill={deep} opacity="0.14" />
      <circle cx="200" cy="290" r="140" fill="#ffffff" opacity="0.35" />
      <path d="M140 200 L260 200 L244 420 L156 420 Z" fill={liquid} stroke="#14382b" strokeWidth="6" strokeLinejoin="round" />
      <path d="M146 250 L254 250" stroke="#14382b" strokeWidth="5" />
      <path d="M150 210 L166 236 M186 206 L202 232 M222 210 L238 236" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
      <path d="M232 60 L204 205" stroke="#d8504f" strokeWidth="10" strokeLinecap="round" />
      <circle cx="150" cy="160" r="9" fill="#ffffff" stroke="#14382b" strokeWidth="4" />
      <circle cx="255" cy="185" r="6" fill="#ffffff" stroke="#14382b" strokeWidth="4" />
    </svg>
  );
}

function ScenePattern({ liquid, deep }: SceneProps) {
  const diamonds = [];
  for (let x = 0; x < 5; x++)
    for (let y = 0; y < 7; y++)
      diamonds.push(
        <rect
          key={`${x}-${y}`}
          x={20 + x * 80}
          y={-30 + y * 80}
          width="56"
          height="56"
          transform={`rotate(45 ${48 + x * 80} ${-2 + y * 80})`}
          fill={(x + y) % 2 ? liquid : "#fcf8ef"}
          stroke="#14382b"
          strokeWidth="4"
        />,
      );
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="500" fill={deep} />
      {diamonds}
    </svg>
  );
}

function SceneTable({ liquid, deep }: SceneProps) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="500" fill="#ece2cc" />
      <rect y="360" width="400" height="140" fill={deep} opacity="0.85" />
      {[110, 200, 290].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 34} 240 L${x + 34} 240 L${x + 27} ${360 + i * 0} L${x - 27} 360 Z`} fill={i === 1 ? "#fcf8ef" : liquid} stroke="#14382b" strokeWidth="6" strokeLinejoin="round" />
          <path d={`M${x - 28} 285 L${x + 28} 285`} stroke="#14382b" strokeWidth="5" />
        </g>
      ))}
      <circle cx="70" cy="180" r="26" fill={liquid} stroke="#14382b" strokeWidth="5" />
      <circle cx="330" cy="160" r="18" fill="#ffd84d" stroke="#14382b" strokeWidth="5" />
    </svg>
  );
}

const SCENES = { bottle: SceneBottle, glass: SceneGlass, pattern: ScenePattern, table: SceneTable } as const;

function PostTile({ post, index }: { post: GalleryPost; index: number }) {
  const flavor = FLAVORS[post.flavorIndex];
  const Scene = SCENES[post.scene];
  return (
    <li className={`${post.span ?? ""} group`} data-reveal style={{ "--d": `${(index % 4) * 80}ms` } as React.CSSProperties}>
      <a
        href={IG_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`Publication Instagram — ${post.caption} (ouvre le profil ${IG_HANDLE})`}
        className="relative block overflow-hidden rounded-card border border-ligne bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_46px_-26px_rgba(20,56,43,0.5)] focus-visible:outline-offset-4 [&_svg]:transition-transform [&_svg]:duration-700 [&_svg]:ease-out group-hover:[&_svg]:scale-[1.06]"
      >
        <div className={`${post.ratio} w-full`}>
          <Scene liquid={flavor.liquid} deep={flavor.deep} tint={flavor.tint} />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 font-display text-xs tracking-wide">
          P·{String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-verre/90 via-verre/45 to-transparent p-4 pt-10 text-cream transition-transform duration-300 group-hover:-translate-y-1">
          <span className="line-clamp-2 text-sm leading-snug">{post.caption}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-citron">{post.tag}</span>
        </span>
      </a>
    </li>
  );
}

export function SocialGallery() {
  return (
    <section id="feed" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="feed-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>Sélection du feed</SectionLabel>
            <h2 id="feed-title" className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-tight tracking-tight">
              Huit publications <sup className="text-[0.5em] text-citron">(08)</sup>, choisies dans le fil.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm italic leading-relaxed text-ink/55">
              Visuels de démonstration — à remplacer par les publications réelles du compte.
            </p>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="link-line mt-2 inline-flex items-center gap-1.5 text-sm font-semibold">
              Tout voir sur Instagram ↗
            </a>
          </div>
        </div>

        <ul className="mt-12 grid auto-rows-min grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY.map((post, i) => (
            <PostTile key={post.id} post={post} index={i} />
          ))}
        </ul>

        <p data-reveal className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/45">
          <Spark className="h-3 w-3" /> Curated by {IG_HANDLE} <Spark className="h-3 w-3" />
        </p>
      </div>
    </section>
  );
}
