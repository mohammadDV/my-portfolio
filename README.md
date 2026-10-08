# Mohammad Daneshmandvojdani — Portfolio

Static SPA portfolio built with **React 19** and **React Router 7** (prerendered for SEO).

See [`SPEC.md`](./SPEC.md) and [`PLAN.md`](./PLAN.md).

## Scripts

```bash
npm install
npm run dev          # local SPA
npm run typecheck
npm test
npm run build        # static output in build/client + sitemap/robots
```

## Content updates

Edit typed modules under `app/data/` (not Markdown at runtime), then rebuild and redeploy.

## Deploy

Host the `build/client` folder on Cloudflare Pages, GitHub Pages, or Netlify.

Set `VITE_SITE_URL` (no trailing slash) for canonical URLs and sitemap generation, e.g.:

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```
