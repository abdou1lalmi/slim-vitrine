# Slim Vitrine — Design System

## 1. Creative direction

Slim Vitrine uses a **Mediterranean editorial poster** direction: a deep bottle-green field, warm cream paper, citrus yellow accents, hand-set display typography, and SVG product illustrations. The experience should feel like a contemporary Algerian brand archive brought to life, not a generic SaaS dashboard or a catalogue template.

The visual system uses one memorable motif: **the bottle as a cultural object**. Flavor colors, oversized wordmarks, liquid-like transitions, paper cards, and restrained scroll motion all reinforce that motif.

## 2. Color roles

| Token or role | Use |
| --- | --- |
| `verre` | Deep bottle green for dark sections, header shell, footer, and primary contrast fields |
| `cream` | Warm paper background and light section surfaces |
| `paper` | Slightly differentiated card surface and editorial panel background |
| `citron` | Primary accent for calls to action, progress, highlights, and flavor energy |
| `ink` | Deep text color for light surfaces |
| `ligne` | Low-opacity border/divider token |
| Flavor liquid/deep/tint | Typed per-flavor colors used by the bottle, selector, and local atmosphere |

New colors should enter the system through theme tokens or typed content rather than arbitrary one-off declarations.

## 3. Typography

The display voice uses a high-contrast serif for brand statements and an accessible sans-serif for navigation, metadata, and body copy. Arabic text uses the configured Arabic typeface and must be marked with `lang="ar"` and `dir="rtl"` where appropriate.

| Role | Guidance |
| --- | --- |
| Hero display | Large, compact, high-contrast serif with fluid sizing using `clamp()` |
| Section heading | Serif display, usually `clamp(2rem, 4.5vw, 3.4rem)` |
| Flavor title | Serif display, usually `clamp(1.8rem, 4.5vw, 3.3rem)` |
| Body | Sans-serif at readable small/base/large sizes with relaxed leading |
| Overline | 11px-style uppercase sans-serif, semibold, tracking approximately `.18em–.24em` |
| Arabic support | Arabic typeface, deliberate line height, and correct directionality |

Avoid long paragraphs at display sizes. Keep body line length comfortable and maintain clear hierarchy from overline to heading to supporting copy.

## 4. Layout and spacing

The primary container is centered with a maximum width around 80rem and responsive horizontal padding around `1.25rem` on small screens and `2rem` on medium screens. Major sections use generous vertical rhythm, approximately `py-20` to `py-32`, adjusted when the narrative requires a tighter transition.

The page uses a twelve-column desktop grid where editorial compositions benefit from asymmetry. Mobile layouts collapse to one column while preserving intentional crop ratios, readable ordering, and touch-sized controls. Avoid stranded headings, accidental large gaps, and horizontal overflow.

## 5. Shape, borders, and elevation

Cards use a restrained editorial radius around 18px, while prominent feature panels may use larger radii around 32px when the shape supports the composition. Pills are reserved for tags and action controls. Borders are hairline dividers with low-opacity color tokens; they should clarify grouping without turning the page into a grid of boxes.

Elevation is used sparingly. Product bottles and featured cards may use soft, large shadows that suggest physical presence. Avoid stacking multiple shadows or using glassmorphism as a default treatment.

## 6. Components

### Header and navigation

The header maintains a clear brand anchor and a small set of section links. The mobile menu is a real disclosure control with an accessible name, Escape-to-close, focus return, and body-scroll locking while open. Links must have meaningful targets.

### Hero

The hero combines concise brand copy, a bottle illustration, a clear primary route into the page, and a small amount of parallax or reveal motion. The bottle is informative when it represents a flavor and decorative when it is purely atmospheric. The hero remains fully understandable with motion disabled.

### Section label

`SectionLabel` pairs a small spark icon, uppercase overline, and a flexible hairline. It provides a repeatable rhythm cue across light and dark sections and supports tone variants.

### Bottle illustration

`Bottle` is an SVG primitive with typed color props, an explicit viewBox, and accessible labeling when informative. Decorative internal shapes remain hidden from assistive technology. New bottle variants should extend props or data rather than duplicating SVG markup.

### Flavor range

The flavor range uses a selected state that is conveyed visually and programmatically. Color changes are atmospheric, not the sole carrier of meaning. Names, Arabic labels, notes, and selection state remain readable in text.

### Pillar cards

Pillar cards use paper surfaces, alternating slight rotations, strong numbers, and compact copy. Rotation is decorative and must not reduce legibility or create clipping at narrow widths.

### Social gallery

Gallery tiles use explicit aspect ratios, useful alternative text, and captions that stand on their own. SVG demonstration scenes are valid intentional art direction while real photography remains a future content swap.

### Buttons and links

Primary actions use the citron accent against the green field. Secondary actions use outline or text treatments. Every interactive element needs hover, focus-visible, and disabled/loading states where applicable. Links should use an animated underline only as enhancement, never as the sole indication of interactivity.

## 7. Motion system

Motion exists to establish hierarchy, show continuity, reveal content, and confirm interaction. Typical transitions are 150–400ms; longer timings are reserved for storytelling sequences. Preferred easing is an expo or quart curve such as `cubic-bezier(0.16, 1, 0.3, 1)`.

The system includes reveal transitions, line-in effects, flavor atmosphere changes, magnetic button feedback, cursor follow, hero parallax, ticker movement, and optional horizontal pillar travel. Every motion feature must:

- Respect `prefers-reduced-motion: reduce`.
- Avoid layout-changing animation when transform/opacity is sufficient.
- Pause visibility-dependent work when the section is off-screen.
- Clean up listeners, timers, and animation frames on unmount.
- Never hide essential content behind animation.

## 8. Accessibility

Use semantic landmarks, a single clear `h1`, ordered headings, skip navigation, descriptive labels, visible focus rings, keyboard access, sufficient contrast, and correct language metadata. Focus-visible outlines should be high contrast and offset from the control. Selection colors, scrollbar styling, and custom cursors must never obscure focus or reduce discoverability.

Small text should use at least the stronger contrast tokens. Low-opacity ink is appropriate only for large decorative labels or where the computed contrast remains compliant. Interactive color changes should be paired with text, shape, or state indicators.

## 9. Responsive behavior

The design is evaluated at 320px, 768px, 1024px, 1440px, and wide desktop widths. The smallest viewport is a first-class layout, not a compressed desktop. Test nav, hero bottle placement, flavor controls, cards, gallery crops, timeline, and footer at each breakpoint.

Touch targets should be comfortably tappable. Any desktop-only custom cursor or horizontal scroll effect must be disabled or replaced with a simpler interaction on touch and reduced-motion devices.

## 10. Content rules

Keep copy specific, concise, and culturally grounded. French is the primary content language in the current repository; Arabic support should remain intentional and correctly formatted. Brand history and product claims are owner-supplied content unless separately verified. Do not invent addresses, phone numbers, legal text, social URLs, or product promises.

## 11. Image and asset rules

Prefer the existing SVG art direction where it communicates the concept. Any bitmap asset must have an explicit aspect ratio, useful alt text when informative, optimized dimensions, and a deliberate crop position. Future Open Graph artwork should be a real 1200×630 asset rather than a missing reference.

## 12. QA checklist

Before release, inspect the site visually and functionally at the target widths. Confirm navigation, menu focus behavior, reduced-motion behavior, flavor selection, CTA destinations, overflow, text wrapping, image crops, contrast, and keyboard operation. Run the production build, review console output, and check that generated metadata and static SEO files match the final deployment URL.
