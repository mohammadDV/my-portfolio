# Portfolio Website — Product Spec

**Owner:** Mohammad Daneshmandvojdani (Sasha)  
**Purpose:** Personal portfolio that showcases senior full-stack / AI engineering work  
**Source of truth for content:** [`CV.md`](./CV.md) (synced into typed data files)  
**Status:** Ready for implementation  
**Last updated:** 2026-10-08

---

## 1. Goals

1. Present a credible, distinctive personal brand suitable for recruiters and hiring managers.
2. Ship a **static**, **SPA** experience (client-side navigation, no full-page reloads after first load).
3. Satisfy **SEO** for public routes via **build-time prerender** (real HTML in the initial response).
4. Keep the codebase **light**, **typed**, and **testable** — content edits every few months only.

### Non-goals

- CMS, admin panel, or database
- Auth, blog platform, or multi-language (v1)
- Server-side runtime (SSR at request time)
- Contact form backend (v1 uses mailto + social links)
- Perfect pixel clone of any third-party site

---

## 2. Stack (locked)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| UI | **React 19** + TypeScript | Latest React; showcase modern frontend |
| App / routing | **React Router 7** (framework mode) | Official SPA + prerender story |
| Build | Vite (via RR7 toolchain) | Fast DX; static output |
| Rendering | `ssr: false` + **prerender all public routes** | Static host + SEO |
| Styling | CSS Modules + CSS variables (no UI kit) | Light, controllable, no generic look |
| Content | Typed modules under `app/data/` | Edit TS/JSON, rebuild, deploy |
| Tests | Vitest + React Testing Library + jsdom | Clear, unit/component focus |
| Lint/format | ESLint + Prettier (RR7 defaults where sensible) | Consistent quality |
| Host | Static (Cloudflare Pages / GitHub Pages / Netlify) | Free, CDN, no server |

---

## 3. Design direction (locked)

**dark AI (adapted for personal portfolio)**

- Atmosphere: deep navy/black (`#03040a`), electric blue (`#3b82f6` / `#2563eb`), soft cyan/violet washes
- Typography: Newsreader (serif headlines) + Plus Jakarta Sans + IBM Plex Mono
- First viewport: full-bleed portrait as cinematic hero; brand mark + serif headline + CTA group
- UI: floating glass nav, rounded glass project cards, pill tags, ecosystem strip, closing CTA band
- Motion: page enter, hero fade, card hover lift — respect reduced motion
- Responsive: desktop + mobile; no horizontal overflow

Accessibility: WCAG 2.2 AA targets (contrast, focus visible, semantic landmarks, skip link).

---

## 4. Information architecture & routes

All routes prerendered at build time. Client navigation after hydration.

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | Brand, summary, primary CTAs (Projects / Contact), skills snapshot |
| `/experience` | Experience | Career timeline from CV |
| `/projects` | Projects index | List of personal/startup projects |
| `/projects/:slug` | Project detail | Deep dive (inspired structure) |
| `/skills` | Skills | Grouped skills from CV |
| `/contact` | Contact | Mailto, LinkedIn, GitHub, location |
| `*` | Not found | Soft 404 UI; `noindex` |

### Project slugs (initial)

| Slug | Project |
|------|---------|
| `boofstore` | Boofstore |
| `varzeshpod` | Varzeshpod |
| `telegram-game` | Telegram Game Bot (Go) |
| `intellivy` | Intellivy |
| `oshtow` | Oshtow |
| `finybo` | Finybo |

Company work appears on Experience with external links; personal/startup work owns project detail pages.

---

## 5. Content model

Content lives in typed files (not parsed from Markdown at runtime). `CV.md` remains the human-editable draft; data modules are the site source.

```ts
// Conceptual shapes — exact types live in app/data/types.ts

type Profile = {
  name: string;
  displayName: string; // e.g. "Sasha"
  title: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  telegram: string;
  telegramHandle: string;
  summary: string;
  headline: string; // short hero line
};

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string; // ISO month YYYY-MM
  end: string | null; // null = current
  summary: string;
  achievements: string[];
  links: { label: string; href: string }[];
};

type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string; // longer body, markdown-lite or plain paragraphs
  tech: string[];
  status?: string; // e.g. "~70% completed"
  highlights: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};
```

**Privacy:** Do not publish date of birth, nationality, or phone number on the public site. Contact uses email, Telegram (`@mohammaddv`), LinkedIn, GitHub, and Berlin.

---

## 6. SEO & document head (required)

### Build / crawl

- Prerender HTML for every public route listed above (including each project slug).
- Unique `<title>` and meta description per route.
- Canonical URL per route (`https://<domain><path>` — domain configurable via env).
- Open Graph + Twitter card tags (title, description, url, type=website; OG image optional v1 placeholder).
- `robots.txt` allowing `/`, disallow nothing critical; point to sitemap.
- `sitemap.xml` generated at build listing all indexable URLs.
- JSON-LD `Person` (+ optional `WebSite`) on Home.
- Semantic HTML: one `h1` per page, landmark regions (`header`, `main`, `nav`, `footer`).
- 404 route: `meta robots noindex`.

### Performance (SEO-adjacent)

- Prefer system-friendly font loading (`font-display: swap`).
- Avoid layout shift from fonts/images.
- Keep JS bundle lean; no unnecessary client libraries.

### SPA behavior vs SEO

- First paint for shared URLs: prerendered HTML (bots and social previews see content).
- In-app navigation: client-side transitions without full document reload.

---

## 7. UI structure

### Shell

- Sticky/compact header: name mark + nav (Home, Experience, Projects, Skills, Contact)
- Mobile: accessible menu (button + focus trap or simple disclosure)
- Footer: short credit + social links + year

### Home (first viewport budget)

- Brand/name (dominant)
- One headline
- One supporting sentence (from summary, shortened)
- CTA group: View projects / Contact
- No stats, schedules, or secondary promo blocks in the first viewport
- Below fold: condensed experience teaser + featured projects + skills strip

### Project detail (inspiration only)

- Back to projects
- Title + tagline
- Tech tag list
- Narrative body + highlights
- External links (GitHub / live site)

### Contact

- Email (`mailto:`), LinkedIn, GitHub
- Location: Berlin, Germany
- No form in v1

---

## 8. Quality bar — code & tests

### Code

- TypeScript strict mode
- Colocate route modules under `app/routes/` (RR7 convention)
- Pure presentational components under `app/components/`
- No business logic in JSX beyond mapping data → UI
- Prefer small, named functions; avoid clever abstractions
- CSS variables for tokens (`--color-bg`, `--color-accent`, `--font-display`, etc.)

### Tests (minimum)

| Area | Coverage |
|------|----------|
| Data helpers | Date range formatting, project lookup by slug |
| Components | Nav renders links; ProjectCard/list shows title; Contact shows mailto |
| Routes / loaders | Unknown slug → 404 behavior; known slug returns project |
| SEO helpers | Title/description builders produce expected strings |

Scripts: `npm test`, `npm run build`, `npm run typecheck`.

CI (optional v1): GitHub Action running typecheck + test + build.

---

## 9. Deployment

1. `npm run build` emits static assets + prerendered HTML.
2. Host `build/client` (or RR7 static output path) on Cloudflare Pages / GitHub Pages / Netlify.
3. Configure SPA fallback for non-prerendered paths if host requires it (404 → `index.html` only for true SPA fallback; prefer real prerendered files for known routes).
4. Env: `SITE_URL` for canonical/sitemap absolute URLs.

---

## 10. Acceptance criteria

- [ ] Site is a React 19 + React Router 7 SPA with client-side navigation between routes.
- [ ] `npm run build` produces prerendered HTML for `/`, `/experience`, `/projects`, each `/projects/:slug`, `/skills`, `/contact`.
- [ ] Viewing page source (or curl) for `/` and a project URL includes the main heading text (not an empty root shell only).
- [ ] Each route has unique title + meta description + canonical.
- [ ] `robots.txt` and `sitemap.xml` present and valid.
- [ ] Content matches CV professional story without DOB/nationality.
- [ ] Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90 on Home (target; network-dependent).
- [ ] Keyboard: all nav and CTAs reachable; visible focus.
- [ ] `npm test` and `npm run typecheck` pass.
- [ ] Mobile layout usable at 375px width; desktop polished at 1280px+.

---

## 11. Implementation phases (summary)

1. **Scaffold** — RR7 + React 19 + TS + Vitest + base tokens/layout.
2. **Data** — Port CV into typed modules; unit tests for lookups/formatters.
3. **Routes & UI** — Shell + all pages; project detail; responsive nav.
4. **SEO** — Meta, JSON-LD, sitemap, robots, prerender config.
5. **Polish** — Motion, typography, a11y pass.
6. **Verify** — Tests, build, curl prerender checks, Lighthouse.

Detailed task breakdown lives in [`PLAN.md`](./PLAN.md).
