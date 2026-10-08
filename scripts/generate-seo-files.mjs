import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = (process.env.VITE_SITE_URL ?? "https://mohammaddv.dev").replace(
  /\/$/,
  "",
);

const routes = [
  "/",
  "/experience",
  "/projects",
  "/projects/boofstore",
  "/projects/telegram-game",
  "/projects/intellivy",
  "/projects/oshtow",
  "/projects/finybo",
  "/skills",
  "/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = route === "/" ? siteUrl : `${siteUrl}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const outDir = path.resolve("build/client");
await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "sitemap.xml"), sitemap);
await writeFile(path.join(outDir, "robots.txt"), robots);

// Also keep copies in public for local preview of static assets
await mkdir(path.resolve("public"), { recursive: true });
await writeFile(path.resolve("public/sitemap.xml"), sitemap);
await writeFile(path.resolve("public/robots.txt"), robots);

console.log(`Wrote robots.txt and sitemap.xml for ${siteUrl}`);
