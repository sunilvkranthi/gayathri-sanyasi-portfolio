# Gayathri Sanyasi — Portfolio

Production-ready portfolio website built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── globals.css               # Global styles + Tailwind base
│   ├── page.tsx                  # Home (/)
│   ├── experience/
│   │   └── page.tsx              # /experience
│   ├── gallery/
│   │   └── page.tsx              # /gallery (with lightbox)
│   ├── case-studies/
│   │   ├── page.tsx              # /case-studies
│   │   └── [slug]/
│   │       ├── page.tsx          # /case-studies/[slug] — server
│   │       └── CaseStudyDetail.tsx  # client component
│   ├── leadership/
│   │   └── page.tsx              # /leadership
│   ├── achievements/
│   │   └── page.tsx              # /achievements
│   └── contact/
│       └── page.tsx              # /contact
│
├── components/
│   ├── ui/                       # Reusable UI primitives
│   │   ├── Navbar.tsx            # Sticky glassmorphism navbar
│   │   ├── Footer.tsx
│   │   ├── CTASection.tsx        # Reusable CTA block
│   │   ├── SectionWrapper.tsx    # Scroll-triggered fade wrapper
│   │   └── CaseStudyCard.tsx     # Case study bento card
│   │
│   └── sections/                 # Page-level sections
│       ├── HeroSection.tsx       # Hero with image + metrics
│       ├── ProofBar.tsx          # Quick proof stats bar
│       ├── QuoteSection.tsx      # Editorial quote block
│       ├── ExperienceSection.tsx
│       ├── CaseStudiesPreview.tsx
│       ├── StrategiesSection.tsx
│       └── SkillsSection.tsx
│
├── data/
│   ├── content.ts                # ALL site content (edit here)
│   └── animations.ts             # Framer Motion variants
│
├── public/                       # Static assets
├── tailwind.config.ts            # Design system tokens
├── next.config.mjs
└── package.json
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, ProofBar, Experience, Case Studies, Strategies, Skills, CTA |
| `/experience` | Full career timeline with metrics and tools |
| `/case-studies` | All case studies grid |
| `/case-studies/[slug]` | Dynamic detail: PAR layout, chart, learnings |
| `/gallery` | Bento image grid with lightbox |
| `/leadership` | VP role, judge experience, key events, quote |
| `/achievements` | Bento awards, recognition, certifications |
| `/contact` | Contact form with availability status |

---

## Design System

Based on the Stitch design exports. Key tokens:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#3525cd` | CTAs, active states |
| `primary-container` | `#4f46e5` | Gradient end |
| `primary-fixed` | `#e2dfff` | Card backgrounds, chips |
| `surface` | `#f9f9ff` | Page base |
| `surface-container-low` | `#f1f3ff` | Section breaks |
| `surface-container-lowest` | `#ffffff` | Cards |
| `on-surface` | `#141b2b` | Body text |
| `outline` | `#777587` | Labels, metadata |
| `secondary` | `#00687a` | Success, metrics |

---

## Animations

All animations use Framer Motion via shared variants in `data/animations.ts`:

- **`fadeInUp`** — default scroll reveal
- **`staggerContainer` + `staggerItem`** — staggered lists
- **`scaleIn`** — cards on mount
- **`cardHover`** — lift on hover

---

## Customisation

### Updating Content
Edit `data/content.ts` — all text, metrics, and case study copy lives here.

### Adding a Case Study
Add a new object to the `caseStudies` array in `data/content.ts` with a unique `slug`. It will automatically appear on the listing page and generate a detail page via `generateStaticParams`.

### Changing Colors
Edit `tailwind.config.ts` to update the design system tokens.

---

## Tech Stack

- **Next.js 14** — App Router, server + client components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Scroll animations, stagger effects, hover states
- **Google Fonts** — Inter typeface
- **Material Symbols** — Icon system

---

Built for Enterprise Excellence · © 2024 Gayathri Sanyasi
