

# The Knockout Automations — Implementation Plan

## Inputs Confirmed
- **Shopify checkout URL**: `https://theknockoutautomations.myshopify.com/cart/51439558426935:1`
- **Workflow data**: 1,967 workflows with name, description, score, categories, tools, quality_label, badge_color, keywords
- **Scope**: Phase 1 (Core Conversion) + Phase 2 (Trust & Depth)

---

## File Structure

```text
src/
├── data/
│   └── workflows.json          (copied from upload — lite version for bundle size)
├── lib/
│   ├── constants.ts            (Shopify URL, pricing, brand copy)
│   └── utils.ts                (existing)
├── hooks/
│   ├── useCountdown.ts         (announcement bar + exit-intent timers)
│   ├── useCountUp.ts           (stat counter animation)
│   ├── useScrollReveal.ts      (intersection observer fade-in)
│   └── useExitIntent.ts        (mouse leave detection)
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatCounter.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQSection.tsx
│   ├── GuaranteeSection.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── MobileStickyBar.tsx
│   ├── ExitIntentPopup.tsx
│   ├── PurchaseToast.tsx
│   ├── LogoMarquee.tsx
│   ├── IndustryCards.tsx
│   ├── CategoryGrid.tsx
│   ├── TestimonialCarousel.tsx
│   ├── ComparisonTable.tsx
│   ├── HowItWorks.tsx
│   ├── WorkflowExplorerPreview.tsx  (homepage teaser)
│   └── WorkflowCard.tsx
├── pages/
│   ├── Index.tsx               (homepage — all sections composed)
│   ├── Workflows.tsx           (full explorer with filters)
│   ├── Docs.tsx
│   ├── Contact.tsx
│   ├── RefundPolicy.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
└── index.css                   (dark theme design system)
```

---

## Design System (index.css)

Replace the default light theme with the brand dark theme:
- Background: `#0D0D1A` (HSL ~240 33% 8%)
- Card: `#16213E` (HSL ~217 45% 16%)
- CTA/Destructive: `#E53E3E` (HSL ~0 76% 57%)
- Text primary: white, secondary: `#A0AEC0`
- Success green: `#38A169`, Gold accent: `#ECC94B`
- Font: Inter (already available via system), JetBrains Mono for code elements
- No `.dark` class needed — the site is always dark

---

## Implementation Order

Due to the large scope, this will be built across multiple implementation rounds:

### Round 1: Foundation + Hero + Core Sections
1. Design system (index.css), constants, copy workflow data to `src/data/`
2. Navbar, AnnouncementBar, HeroSection, StatCounter
3. ProblemSection, SolutionSection, PricingSection

### Round 2: Trust + Conversion
4. FAQSection, GuaranteeSection, FinalCTA, Footer
5. MobileStickyBar, ExitIntentPopup, PurchaseToast
6. All CTA buttons wired to Shopify checkout URL with UTM passthrough

### Round 3: Phase 2 Sections
7. LogoMarquee, IndustryCards, CategoryGrid
8. TestimonialCarousel, ComparisonTable, HowItWorks
9. WorkflowExplorerPreview (homepage) + WorkflowCard

### Round 4: Pages + Polish
10. Workflows page (full explorer with search, filter by category/tool/score, pagination)
11. Docs, Contact, RefundPolicy, Privacy, Terms pages
12. Route wiring in App.tsx

---

## Key Technical Details

- **Workflow data**: Use the lite JSON (~47KB) to keep bundle small. Copy to `src/data/workflows.json` and import statically. The explorer will use client-side filtering/search with `useMemo`.
- **Countdown timer**: `localStorage` key `knockout_first_visit` stores timestamp. 24hr countdown from first visit. Resets display to "SALE ENDING SOON" after expiry.
- **Exit-intent**: `mouseout` event on document top edge, fires once per session via `sessionStorage`.
- **Purchase toast**: Rotating fake social proof notifications from a curated list of names/cities, appearing every 30-45s.
- **Shopify redirect**: `window.location.href = "https://theknockoutautomations.myshopify.com/cart/51439558426935:1"` with UTM params appended from `window.location.search`.
- **Animations**: CSS `@keyframes` for pulse/glow, Intersection Observer for scroll reveals, CSS transitions for hovers. No heavy animation libraries.
- **Logo marquee**: CSS `@keyframes scroll` animation with duplicated logo sets for seamless loop. Tool names from workflow data rendered as styled text badges (no external logo images needed initially).
- **Mobile sticky CTA**: Fixed bottom bar, shown via scroll position state (appears after scrolling past hero).

---

## Stat Figures Used
- 8,000+ Workflows (marketing number from spec, not the 1,967 in JSON — spec says "8,000+" is the product claim)
- $24.99 price, $497 original price, 95% OFF
- 3,200+ customers, 20hrs saved/week, 4.9/5 rating

