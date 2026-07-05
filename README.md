# Aazhmeer Chhapra — Portfolio

Futuristic 3D portfolio built with Next.js 14, TypeScript, Tailwind CSS, Three.js (React Three Fiber), Framer Motion, GSAP, and Lenis smooth scrolling.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset is auto-detected as Next.js. No env vars needed. Deploy.

Or with the CLI:

```bash
npm i -g vercel
vercel
```

## Before deploying — 3 quick edits in `lib/data.ts`

- `site.github` — set your actual GitHub profile URL
- `site.linkedin` — set your actual LinkedIn profile URL
- `site.url` — set your final deployed domain (used for SEO metadata, sitemap, and JSON-LD)

## Structure

```
app/              layout (SEO, fonts, JSON-LD), page, sitemap, robots
components/
  three/          Neural core 3D scene, particle field (React Three Fiber)
  sections/       Hero, About, Skills, Experience, Projects, Research, Contact
  ui/             Navbar, MagneticButton, SmoothScroll (Lenis+GSAP), CursorGlow, SectionHeading
lib/data.ts       All content — single source of truth, edit here
public/           CV PDF (served at /Aazhmeer_Chhapra_CV.pdf)
```

## Notes

- All content is centralized in `lib/data.ts` — edit copy without touching components.
- Respects `prefers-reduced-motion` (smooth scroll, GSAP, and CSS animations disable).
- The 3D hero is client-only (`ssr: false`) and tuned for performance (precomputed geometry, capped DPR).
