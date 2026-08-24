# Slim Vitrine — Architecture

## 1. Architecture decision

Slim Vitrine remains a static-first Vite application built with React and TypeScript. The repository already has a focused component architecture and does not require a framework migration, server runtime, database, authentication layer, or API for the current product scope.

The architecture favors a centralized content model, reusable visual primitives, progressive enhancement, and a small runtime surface. The website can be built locally with Vite and deployed to GitHub Pages or another static host.

## 2. System overview

```text
Static host
  └── dist/
       ├── index.html
       ├── assets/
       ├── favicon.svg
       ├── robots.txt
       └── sitemap.xml

Browser
  └── src/main.tsx
       └── App.tsx
            ├── SiteHeader
            ├── Hero
            ├── Ticker
            ├── FlavorRange
            ├── Pillars
            ├── SocialGallery
            ├── Heritage
            ├── ClosingCTA
            └── SiteFooter

Content boundary
  └── src/data/content.ts
       ├── FLAVORS
       ├── PILLARS
       ├── GALLERY
       ├── TIMELINE
       └── TICKER_ITEMS
```

## 3. Repository structure

| Path | Responsibility |
| --- | --- |
| `src/main.tsx` | React entry point and global stylesheet import |
| `src/App.tsx` | Page composition, global interaction lifecycle, and section orchestration |
| `src/components/` | Reusable section components and visual primitives |
| `src/data/content.ts` | Typed brand content and visual associations |
| `src/hooks/` | Reveal and smooth-scroll behavior |
| `src/index.css` | Tailwind theme, design tokens, global styles, motion, responsive rules, and utility classes |
| `public/` | Static assets served without bundling, including favicon and future SEO assets |
| `dist/` | Generated production build; never hand-edit or commit unless the deployment process requires it |
| `docs/` | Product, architecture, and visual system documentation |
| `.github/workflows/` | Existing static deployment automation, if present |

## 4. Runtime flow

The browser loads `index.html`, initializes React through `src/main.tsx`, and renders `App`. `App` mounts the visual effects and scroll lifecycle, then composes the section components in reading order. Components receive typed content from `src/data/content.ts` and keep rendering concerns separate from the content definitions.

Interactive behavior is progressively enhanced. The page remains readable if animation is reduced or unavailable. The custom cursor, magnetic buttons, smooth scrolling, hero parallax, reveal transitions, and horizontal pillar movement are optional enhancements rather than dependencies for navigation or comprehension.

## 5. State ownership

The application has no server state. Local UI state is limited to the selected flavor, mobile menu open/closed state, preloader visibility, and interaction lifecycle. State should remain local to the component that owns the behavior unless a shared page-level concern is genuinely required.

The flavor selection owns the active palette and flavor detail. The header owns menu state and focus behavior. The preloader owns its first-visit transition. The content file owns all brand copy and serializable content records.

## 6. Data and integration boundaries

The content model is typed and static. There are currently no network requests and no sensitive environment variables. If external content is added later, data access must be isolated behind a small adapter with a static fallback. Public client code must never contain private tokens.

Potential future integrations include a curated social feed, privacy-conscious analytics, or a lightweight CMS. None is required for the present release, and each would require an explicit review of caching, failure states, credentials, privacy, and performance impact.

## 7. Accessibility architecture

Semantic HTML is preferred over custom replicas. Navigation uses real links, controls use buttons, SVGs receive explicit decorative or informative treatment, and Arabic content carries the correct language and direction attributes. Focus-visible styling and the skip link are global concerns. Motion hooks and event listeners must respect `prefers-reduced-motion` and clean up on unmount.

The mobile menu must manage Escape-to-close, focus return to the menu trigger, body-scroll locking while open, and a usable tab sequence. Any future dialog or overlay must follow the same focus-management standard.

## 8. Performance architecture

The site is built as a static bundle with no required API round trips. SVG product scenes avoid image requests and can be recolored through typed props. Bitmap assets, if added, must use explicit dimensions or aspect ratios and optimized formats. Animation should prefer transform and opacity, pause when off-screen, and avoid expensive work on low-power devices.

The preloader should provide a branded first visit without imposing a repeated artificial delay. Critical typography and metadata should be available without depending on application JavaScript.

## 9. SEO architecture

The HTML shell owns document metadata that must be available to crawlers and link unfurlers. Structured data should be emitted as valid JSON-LD with only verified or owner-supplied claims. `robots.txt`, `sitemap.xml`, canonical metadata, and Open Graph assets must use the correct URL for the deployment mode.

The Vite base path currently supports repository-path deployment. When a custom domain is introduced, the base path, canonical URL, social image URL, and sitemap URL must be changed together and tested from the final host.

## 10. Build and quality gates

The minimum release gate is:

```text
npm run build
  ├── TypeScript no-emit check
  └── Vite production bundle
```

Additional checks should include formatting/linting if configured, production preview startup, responsive browser checks, keyboard navigation, reduced-motion behavior, and a review for missing or placeholder links. New dependencies should be justified against bundle size, maintenance, licensing, and the existing static architecture.

## 11. Deployment

The expected deployment artifact is `dist/`. A static host must serve the generated files and preserve the configured base path. GitHub Pages is a valid current target if the existing workflow remains correct. A future Vercel, Cloudflare Pages, or custom host deployment should use the same build command and should update the public URL metadata.

No server secrets are required for the current product. Any future environment variables must be documented in `.env.example`, excluded from Git, and kept out of client bundles unless they are explicitly public configuration.

## 12. Operational risks

The principal risks are content authorization, the difference between an intentional SVG art direction and real product photography, URL drift between repository-path and custom-domain hosting, and performance regressions from always-running scroll effects. These risks are addressed through owner-supplied content assumptions, fallback visuals, centralized URL configuration, and viewport/visibility-aware animation.
