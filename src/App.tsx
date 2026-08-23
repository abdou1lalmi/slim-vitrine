import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { FlavorRange } from "./components/FlavorRange";
import { Pillars } from "./components/Pillars";
import { SocialGallery } from "./components/SocialGallery";
import { Heritage } from "./components/Heritage";
import { ClosingCTA } from "./components/ClosingCTA";
import { SiteFooter } from "./components/SiteFooter";
import { useRevealRoot } from "./hooks/useReveal";

export default function App() {
  useRevealRoot();

  return (
    <div className="grain min-h-screen overflow-x-clip">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-verre focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Aller au contenu principal
      </a>

      <SiteHeader />

      <main id="contenu">
        <Hero />
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
