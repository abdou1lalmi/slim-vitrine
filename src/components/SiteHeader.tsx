import { useEffect, useRef, useState } from "react";
import { IG_HANDLE, IG_URL } from "../data/content";
import { InstagramIcon } from "./icons";

const NAV = [
  { href: "#gamme", label: "La gamme" },
  { href: "#compte", label: "Le compte" },
  { href: "#histoire", label: "Histoire" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])'),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    firstLink?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-ligne bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] md:px-8">
        <a href="#top" className="group flex items-baseline gap-2" aria-label="SLIM — retour en haut">
          <span className="font-display text-[26px] font-semibold leading-none tracking-tight">SLIM</span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-ink/60 sm:inline">
            par Hamoud Boualem
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="link-line text-sm font-medium">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-verre px-4 py-2 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 sm:flex"
          >
            <InstagramIcon />
            Suivre {IG_HANDLE}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ligne md:hidden"
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        ref={menuRef}
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ligne bg-cream px-5 pb-6 pt-2 md:hidden"
      >
        <nav aria-label="Navigation mobile" className="flex flex-col">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ligne py-3.5 font-display text-xl"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={IG_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-full bg-verre px-4 py-3 text-sm font-semibold text-cream"
        >
          <InstagramIcon />
          Suivre {IG_HANDLE}
        </a>
      </div>
    </header>
  );
}
