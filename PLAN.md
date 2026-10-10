# Implementation Plan

Derived from [`SPEC.md`](./SPEC.md). Execute in order; each phase has a clear done check.

---

## Phase 0 — Repo prep

- Keep [`CV.md`](./CV.md) and [`SPEC.md`](./SPEC.md); replace placeholder [`README.md`](./README.md) with run/deploy docs after scaffold.
- Do not commit secrets; no `.env` with private data required beyond public `SITE_URL`.

**Done when:** Spec and plan are in repo; ready to scaffold.

---

## Phase 1 — Scaffold

1. Initialize React Router 7 (framework) + React 19 + TypeScript via official template (`create-react-router` / current RR7 Vite template).
2. Configure `react-router.config.ts`:
   - `ssr: false`
   - `prerender`: `/`, `/experience`, `/projects`, `/projects/boofstore`, `/projects/varzeshpod`, `/projects/telegram-game`, `/projects/intellivy`, `/projects/oshtow`, `/projects/finybo`, `/skills`, `/contact`
3. Add Vitest + React Testing Library + jsdom; scripts: `test`, `typecheck`, `build`, `dev`.
4. Add global CSS tokens (charcoal / slate / amber accent), display + body fonts (Google or Fontshare with `font-display: swap`), subtle gradient + grain on `body`.
5. Create app shell: `Header`, `Footer`, `SkipLink`, outlet layout.

**Done when:** `npm run dev` shows shell; `npm run build` succeeds with prerender config present.

---

## Phase 2 — Content layer

1. Add `app/data/types.ts` with `Profile`, `ExperienceItem`, `Project`, `SkillGroup`.
2. Port content from `CV.md` into:
   - `app/data/profile.ts`
   - `app/data/experience.ts`
   - `app/data/projects.ts`
   - `app/data/skills.ts`
3. Helpers: `getProjectBySlug`, `formatDateRange`, `getFeaturedProjects`.
4. Unit tests for helpers (known slug, unknown slug, current role date range).

**Done when:** Data compiles; helper tests green; no DOB/nationality in public data.

---

## Phase 3 — Routes & UI

| Route module | UI work |
|--------------|---------|
| `home` | Hero (brand-first), CTAs, featured projects, experience teaser, skills snapshot |
| `experience` | Timeline list from data |
| `projects._index` | Project list with links to detail |
| `projects.$slug` | Detail page (back link, tech tags, body, highlights, external links); 404 if missing |
| `skills` | Grouped skill lists |
| `contact` | Mailto + LinkedIn + GitHub + Berlin |
| `$.tsx` or splat | Not found UI |

Components (thin, testable): `Hero`, `Nav`, `ExperienceList`, `ProjectList`, `ProjectDetail`, `SkillGroups`, `SocialLinks`, `Seo` / meta via RR7 `meta` exports.

**Done when:** All routes navigate client-side; mobile nav works; unknown project slug shows 404.

---

## Phase 4 — SEO

1. Per-route `meta` function: title, description, canonical, OG/Twitter.
2. Home: JSON-LD `Person` (+ `WebSite`).
3. Generate `public/robots.txt` and build-time or static `sitemap.xml` using `SITE_URL`.
4. Verify with `curl`/`grep` that prerendered HTML contains `h1` text for `/` and one project URL.
5. 404: `robots: noindex`.

**Done when:** SPEC §6 and acceptance criteria for SEO are met.

---

## Phase 5 — Polish & a11y

1. Page enter / list stagger (CSS or minimal motion; respect `prefers-reduced-motion`).
2. Focus styles, skip link, landmark audit.
3. Responsive pass at 375 / 768 / 1280.
4. README: scripts, content edit workflow, deploy notes.

**Done when:** Visual matches SPEC §3; a11y basics pass keyboard check.

---

## Phase 6 — Verify

1. `npm run typecheck && npm test && npm run build`
2. Curl prerender checks
3. Optional Lighthouse on preview deploy
4. Update SPEC acceptance checkboxes when verified

**Done when:** SPEC §10 checklist complete.

---

## File map (target)

```
app/
  root.tsx
  routes.ts
  routes/
    home.tsx
    experience.tsx
    projects._index.tsx
    projects.$slug.tsx
    skills.tsx
    contact.tsx
    not-found.tsx
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    ...
  data/
    types.ts
    profile.ts
    experience.ts
    projects.ts
    skills.ts
    helpers.ts
  styles/
    tokens.css
    global.css
public/
  robots.txt
  favicon.svg
react-router.config.ts
vitest.config.ts
SPEC.md
PLAN.md
CV.md
```

---

## Out of scope until asked

- Formspree / contact API
- Blog, i18n, dark/light toggle
- Custom domain DNS (document only)
