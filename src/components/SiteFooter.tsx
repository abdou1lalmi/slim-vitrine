import { IG_HANDLE, IG_URL } from "../data/content";
import { InstagramIcon } from "./icons";

const NAV = [
  { href: "#gamme", label: "La gamme" },
  { href: "#compte", label: "Le compte" },
  { href: "#feed", label: "Le feed" },
  { href: "#histoire", label: "Histoire" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 overflow-hidden border-t border-ligne bg-cream" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">Pied de page — contact et informations légales</h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-semibold tracking-tight">SLIM</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/70">
            par Hamoud Boualem — Alger
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
            Le gazouz algérien aux six saveurs, embouteillé à Alger depuis les années 1950.
            Suivez le compte officiel pour la fraîcheur en continu.
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-verre px-4 py-2 text-sm font-semibold transition-colors hover:bg-verre hover:text-cream"
          >
            <InstagramIcon className="h-4 w-4" />
            {IG_HANDLE}
          </a>
        </div>

        <nav aria-label="Navigation de pied de page" className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">Explorer</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-line">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            <li><a href={IG_URL} target="_blank" rel="noreferrer" className="link-line">Message sur Instagram</a></li>
            <li><span className="text-ink/70">Alger, Algérie</span></li>
          </ul>
        </div>

        <nav aria-label="Liens légaux" className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">Légal</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium">
            <li><span className="text-ink/70">Mentions légales — à publier</span></li>
            <li><span className="text-ink/70">Confidentialité — à publier</span></li>
            <li><span className="text-ink/70">Cookies — à publier</span></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-ligne px-5 py-6 text-xs text-ink/70 sm:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Slim — Hamoud Boualem. Tous droits réservés.</p>
        <p lang="ar" dir="rtl" className="font-arabic text-sm text-ink/70">صحتين !</p>
      </div>

      {/* Wordmark monumental, lettres réactives au survol */}
      <div aria-hidden="true" className="-mb-[0.16em] select-none px-2">
        <p className="flex items-end justify-between px-[2vw] font-display text-[clamp(4rem,19vw,20rem)] font-semibold leading-[0.82] tracking-tight text-verre">
          {"SLIM".split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[0.06em]"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              {ch}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
