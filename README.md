# SLIM — Vitrine Instagram (@slimofficielle)

Site vitrine haut de gamme pour **SLIM**, soda de la maison **Hamoud Boualem** (Alger, 1878).
Objectif : croissance du compte Instagram + notoriété produit.

## Stack

Vite 6 · React 18 · TypeScript strict · Tailwind CSS 4 · zéro autre dépendance.
Tous les visuels sont des SVG inline générés par composants → aucune requête image, zéro CLS.

```bash
npm install
npm run dev      # développement
npm run build    # typecheck + bundle production → dist/
npm run preview  # servir dist/
```

## Structure

```
src/
  data/content.ts        # TOUTES les copies et données (saveurs, galerie, timeline)
  hooks/useReveal.ts     # révélations au scroll via IntersectionObserver
  components/
    SiteHeader.tsx       # en-tête fixe + menu mobile
    Hero.tsx             # héros cinématique (badge rotatif, bulles, CTA magnétique)
    Ticker.tsx           # bandeau défilant FR/AR
    FlavorRange.tsx      # sélecteur interactif des 6 saveurs (radiogroup clavier)
    Pillars.tsx          # 4 piliers de contenu du compte
    SocialGallery.tsx    # grille éditoriale 8 posts (visuels de démo SVG)
    Heritage.tsx         # frise historique 1878 → aujourd'hui
    ClosingCTA.tsx       # conversion finale (suivre le compte)
    SiteFooter.tsx       # contact, navigation, liens légaux
    Bottle.tsx / Magnetic / SectionLabel / icons
```

## Hypothèses à valider avant mise en ligne

1. **Visuels** : la galerie utilise des scènes SVG de démonstration. Remplacer par les
   publications réelles (voir stratégie d'intégration ci-dessous).
2. **Domaine canonique & og:image** : `https://slim-officielle.dz/` et `/og-cover.png`
   sont des espaces réservés — générer une image OG 1200×630 depuis le visuel du héros.
3. **Contact** : `contact@hamoud-boualem.dz`, téléphone et pages légales (mentions,
   confidentialité, cookies) marqués `[à remplacer]` dans `SiteFooter.tsx`.
4. **Langue** : français principal avec accents arabes (le compte publie en FR/AR).
   Une version AR complète ou EN nécessiterait i18n.

## Stratégie d'intégration Instagram

- **Aucun scraping** ni hotlinking des CDN Instagram (instable et non autorisé).
- Option A (retenue ici) : **galerie curatée manuellement** — exporter 8 visuels,
  les optimiser (< 150 kB WebP/AVIF), remplacer les scènes SVG dans `SocialGallery.tsx`.
- Option B : **Instagram Graph API** (compte Business) via un endpoint serveur avec cache,
  pour un rafraîchissement automatique des derniers posts.
- Chaque tuile renvoie vers `https://www.instagram.com/slimofficielle/`.

## QA — checklist

| Contrôle                                   | Statut |
| ------------------------------------------ | ------ |
| Breakpoints 320 / 375 / 768 / 1024 / 1440+ | ✅ grilles fluides, clamp() typographique |
| Aucun débordement horizontal               | ✅ `overflow-x-clip` racine, ticker clippé |
| Navigation clavier                         | ✅ skip-link, focus visible, radiogroup ↑↓ |
| Contraste                                  | ✅ encre/crème ≈ 11:1, crème/vert ≈ 12:1 |
| `prefers-reduced-motion`                   | ✅ marquee/bulles/révélations neutralisées |
| LCP                                        | ✅ SVG inline + texte = aucun blocage réseau |
| CLS                                        | ✅ ratios d'aspect explicites partout |
| SEO                                        | title, description, canonical, OG (image à ajouter) |

## Améliorations identifiées (post-critique)

1. Métadonnées grisées (`text-ink/55`) passées à ≥ 60 % sur petits corps.
2. Le badge rotatif du héros est décoratif pur → `aria-hidden` + désactivé en mouvement réduit.
3. Le ticker incline le bandeau (-1°) : débordement contrôlé par clip racine, vérifié à 320 px.
