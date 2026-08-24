# Slim Vitrine — Product Requirements Document

## 1. Product overview

Slim Vitrine is a single-page, public-facing brand experience for Slim, an Algerian gazouz and soft-drink brand. The site presents the brand’s heritage, flavor range, cultural identity, and social content through an editorial visual system rather than a conventional catalogue or e-commerce flow.

The current repository is a Vite + React + TypeScript website with a centralized content model, custom SVG bottle illustrations, scroll-led storytelling, a flavor selector, heritage timeline, social gallery, and responsive navigation. The product goal is to make visitors remember Slim, understand its Algerian roots, explore the flavors, and reach the brand’s official social presence.

## 2. Target users

The primary audience is Algerian and diaspora consumers discovering or revisiting Slim on mobile devices. Secondary audiences include families, young adults, retailers, partners, journalists, and culturally curious visitors looking for a concise, visually distinctive introduction to the brand.

The experience must work in French and support Arabic content and right-to-left presentation where Arabic copy is used. The current product is not an authenticated application and does not require user accounts, checkout, or personalized data.

## 3. Goals and success criteria

The product should establish a clear brand impression within the first viewport, make the flavor range easy to browse, communicate heritage without becoming a long-form archive, and drive qualified visitors toward the brand’s social channel or future contact destination. A successful session should allow a visitor to understand what Slim is, where it comes from, what flavors exist, and how to continue discovering it.

Success criteria include a stable production build, fast first meaningful paint, no horizontal overflow at supported widths, keyboard-operable navigation, readable contrast, meaningful metadata for sharing and search, and a maintainable content model that allows future copy and asset updates without rewriting layout components.

## 4. Core user journey

1. A visitor lands on the hero and immediately sees the Slim identity, a concise proposition, and a clear route into the experience.
2. The visitor scrolls through the flavor range and selects a flavor to see its color, name, Arabic name, and descriptive note.
3. The visitor encounters cultural pillars and social-style content that connect the beverage to Algerian life and family occasions.
4. The visitor explores the heritage timeline and closing call to action.
5. The visitor follows an official social or contact link, or returns to another section through the site navigation.

## 5. Feature requirements

### Required features

- Responsive single-page navigation with desktop and mobile behavior.
- Branded hero section with product illustration, motion enhancement, and reduced-motion fallback.
- Scroll progress indicator and editorial section transitions.
- Flavor range with six named flavors, Arabic labels, palette changes, and descriptive notes.
- Cultural content pillars covering freshness, Algerian culture, family and sharing, and product nouveautés.
- Curated social gallery with accessible alternative text and intentional SVG fallback visuals.
- Heritage timeline beginning with the Hammoud limonaderie and Slim’s 1950 origin story.
- Closing call to action and meaningful footer destinations.
- SEO metadata, Open Graph metadata, semantic headings, JSON-LD, robots rules, and sitemap.
- Accessible focus states, skip link, keyboard-safe mobile menu, visible labels, and reduced-motion behavior.

### Future features, not required for the current release

- Real Instagram or social API ingestion.
- Product purchasing, checkout, delivery, or account creation.
- Full CMS or authenticated content editing.
- Multi-route editorial archive.
- Full English localization or a complete Arabic mirror beyond the current bilingual content support.
- Analytics unless a privacy-conscious implementation is explicitly approved.

## 6. Page and section inventory

| Section | Purpose | Primary content |
| --- | --- | --- |
| Preloader | Establish the opening brand moment without blocking repeat visitors | Slim wordmark and transition |
| Header | Provide orientation and anchor navigation | Brand mark, section links, menu control |
| Hero | Communicate the central promise and brand character | Headline, product bottle, CTA, Arabic support |
| Ticker | Reinforce concise brand messages | Heritage, flavor, and culture phrases |
| Flavor range | Support discovery and selection | Six flavors, color tokens, notes, bottle illustration |
| Cultural pillars | Explain emotional and cultural relevance | Four editorial pillars |
| Social gallery | Show how the product lives in context | Six-to-eight curated visual tiles |
| Heritage | Build credibility and continuity | Timeline from 1878, 1889, 1950, today |
| Closing CTA | Provide the final next action | Brand statement and social/contact route |
| Footer | Close the experience responsibly | Legal, social, contact, and brand information |

## 7. Navigation structure

The current experience is a single document with anchored sections. Navigation should remain shallow and predictable. Header links should use meaningful anchors or real destinations; placeholder `#` links are not acceptable in production. If legal pages are not yet supplied, the interface should clearly label the destination as pending rather than pretending to provide a completed legal document.

## 8. Content and data model

Content is centralized in `src/data/content.ts`. The current model includes:

- `FLAVORS`: flavor identifier, sequence number, French name, Arabic name, liquid color, deep color, tint, and descriptive note.
- `PILLARS`: editorial pillar number, title, body, and tag.
- `GALLERY`: post identifier, scene type, flavor association, responsive span, aspect ratio, alt text, caption, and tag.
- `TIMELINE`: year and historical copy.
- `TICKER_ITEMS`: short brand messages for the scrolling ticker.

The model should remain serializable, typed, and independent from presentation. New content should be added through the data layer wherever possible.

## 9. API and integration requirements

No API is required for the current release. The site should remain deployable as a static Vite build. External integrations must be optional and should not block rendering. If a social feed is introduced later, it should have a cached or static fallback and should never expose private credentials in the client bundle.

## 10. Authentication and permissions

No visitor authentication is required. The public site contains no protected user data. Any future content-management or analytics integration must be reviewed separately and must keep credentials server-side.

## 11. Error, empty, and loading states

The preloader must fail open and reveal the site if a transition or browser storage operation fails. The flavor selector must have a deterministic initial selection. The gallery must remain usable if an optional image or external social asset is unavailable. Future dynamic content must provide loading, empty, and error states rather than leaving blank regions or broken links.

## 12. Responsive behavior

The design must be intentionally authored for 320px, 768px, 1024px, 1440px, and wide desktop widths. Mobile behavior must include a keyboard-safe menu, body-scroll locking while open, Escape-to-close, focus return, touch-sized controls, stable image ratios, and no horizontal overflow. Desktop-only enhancements such as custom cursor, parallax, and horizontal pinned tracks must have reduced-motion and small-screen fallbacks.

## 13. Accessibility requirements

Use semantic landmarks, one clear page heading, ordered heading levels, descriptive link names, accessible button labels, a skip link, visible `:focus-visible` styles, sufficient color contrast, logical tab order, correct Arabic `lang` and `dir` attributes, meaningful image alternative text, and a global reduced-motion fallback. Decorative SVG elements must be hidden from assistive technology unless they convey product information.

## 14. Performance requirements

The site should remain static-first with no unnecessary runtime dependencies. Images must have explicit dimensions or aspect ratios and should be optimized when bitmap assets are introduced. Animation should use transforms and opacity where possible, pause when off-screen, and avoid permanent requestAnimationFrame loops when the relevant section is not visible. The preloader should not add an artificial delay on repeat visits.

## 15. SEO and sharing requirements

The document must include a precise title and description, canonical strategy appropriate to the deployment URL, Open Graph and Twitter metadata, meaningful headings, JSON-LD for the organization and product range where claims are verified, `robots.txt`, and `sitemap.xml`. Social preview assets must exist before metadata references them. Claims and historical statements should be treated as brand-provided content unless independently verified.

## 16. Deployment assumptions

The current project is suitable for static deployment to GitHub Pages or a modern static host. The existing repository includes a GitHub remote and a Vite base path. The final deployment instructions must distinguish repository-path hosting from a future custom domain and explain which base, canonical URL, and sitemap values need to change together.

## 17. Product risks and assumptions

Verified repository findings and brand claims are not the same as independently verified historical facts. The site currently uses intentional SVG demonstration scenes rather than a live social feed. Brand marks, historical copy, social handles, and product claims are assumed to be authorized by the project owner. Real product photography and final legal text may be supplied later.

## 18. Release acceptance criteria

The release is acceptable when the production build passes, the main navigation and flavor journey work, no placeholder links remain, mobile and keyboard interaction are usable, metadata and robots/sitemap files are present, no secrets are committed, documentation is complete, and the final Git state is reviewed before publication.
