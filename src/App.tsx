import { useCallback, useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { FlavorRange } from "./components/FlavorRange";
import { Pillars } from "./components/Pillars";
import { SocialGallery } from "./components/SocialGallery";
import { Heritage } from "./components/Heritage";
import { ClosingCTA } from "./components/ClosingCTA";
import { SiteFooter } from "./components/SiteFooter";
import { initReveals } from "./hooks/useReveal";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const [ready, setReady] = useState(false);
  const handleReveal = useCallback(() => setReady(true), []);

  useSmoothScroll();

  // Les révélations ne démarrent qu'une fois le rideau levé.
  useEffect(() => {
    if (!ready) return;
    return initReveals();
  }, [ready]);

  return (
    <div className="grain min-h-screen overflow-x-clip">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-verre focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Aller au contenu principal
      </a>

      {!ready && <Preloader onReveal={handleReveal} />}
      <Cursor />
      <ScrollProgress />

      <SiteHeader />

      <main id="contenu">
        <Hero ready={ready} />
        <Ticker />
        <FlavorRange />
        <Pillars />
        <SocialGallery />
        <Heritage />
        <ClosingCTA />
      </main>

      <SiteFooter />
    </div>
  );
}
