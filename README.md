# Aerolith — Enterprise AI Platform Marketing Site

A high-end, fully responsive marketing site for a fictional enterprise AI platform, **Aerolith**.
Built as a design-led redesign concept in the spirit of Scale AI, Anthropic, Vercel, and Linear.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS 3.4 · Framer Motion. Zero-config, Vercel-ready.

```bash
npm install
npm run build   # tsc -b && vite build  → clean
npm run dev     # local dev server
```

---

## Brand concept

**Aerolith** ("a stone fallen from the sky") signals something precise, rare, and trustworthy
arriving from above. The positioning: *production AI on your data, governed by default* — built
for regulated enterprises (finance, healthcare, insurance, public sector) that cannot afford to
guess. The visual language is confident and quiet: deep ink backgrounds, an iris→teal gradient as
the single accent, and product UI that looks like real software rather than decoration.

## Design system

**Color tokens** (`tailwind.config.js`)
- `ink` 950→600 — near-black to slate, the surface ramp for backgrounds, cards, and hairlines.
- `mist` 50→400 — cool off-whites to muted slate for text hierarchy.
- `iris` 300→600 — indigo primary (CTAs, focus, highlights).
- `teal` 300→500 — secondary accent for "trust / live / verified" signals.
- The brand gradient (`iris → teal`) is reserved for emphasis: the logo, key metrics, and one word in the hero.

**Typography**
- *Inter* for UI/body, *JetBrains Mono* for code, paths, and metrics.
- Fluid `clamp()` scale: `display` (hero), `h1`, `h2` — all with tightened tracking for an enterprise feel.

**Spacing & layout**
- 1200px max content width via `.container-x` with responsive gutters.
- Sections breathe at `py-24 → py-28`; consistent 4/8px-based rhythm.
- Reusable primitives in `index.css`: `.eyebrow`, `.btn-primary`, `.btn-ghost`, `.card`, `.gradient-text`, `.iris-text`.

**Motion**
- Hero: staggered reveals + an animated mesh gradient and faint grid.
- Scroll-reveals via a shared `<Reveal>` wrapper (Framer Motion, `once: true`).
- Metrics band uses an `IntersectionObserver` count-up.
- Restrained hover states on cards, nav, and integrations.

## Section rationale

1. **Sticky nav** — Platform / Solutions / Security / Customers / Pricing + "Book a demo". Becomes opaque on scroll; full mobile sheet.
2. **Hero** — sharp value prop, dual CTAs, compliance chips, and a realistic product UI mock (live agent dashboard with sparkline + governed-response row).
3. **Logo cloud** — six hand-built SVG enterprise wordmarks establishing credibility.
4. **Platform** — five capability blocks, each with a bespoke HTML/SVG micro-mock (connectors, eval bars, policy-as-code, trace timeline, deploy targets).
5. **How it works** — four-step lifecycle the buyer's platform & security teams can sign off on.
6. **Enterprise & security** — the heart of an enterprise sale: SOC 2, SSO/SAML & SCIM, RBAC, data residency, PII redaction, tamper-evident audit log, compliance badges.
7. **Integrations** — sixteen-tile grid of the real enterprise stack.
8. **Metrics band** — animated count-up impact numbers.
9. **Testimonial + case study** — quote with a stat panel teaser.
10. **Pricing** — Team / Enterprise / Public sector tiers; "talk to sales" motion.
11. **CTA band** — demo conversion with a mesh backdrop.
12. **Footer** — full sitemap, legal, socials.

## Accessibility & quality
- Skip-to-content link, semantic landmarks, `aria-label`s on icon-only controls, visible focus rings.
- Mobile-first responsive at every breakpoint.
- Builds clean with strict TypeScript (`noUnusedLocals` / `noUnusedParameters`).
