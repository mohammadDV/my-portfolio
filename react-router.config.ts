import type { Config } from "@react-router/dev/config";

const projectSlugs = [
  "boofstore",
  "varzeshpod",
  "telegram-game",
  "intellivy",
  "oshtow",
  "finybo",
] as const;

export default {
  ssr: false,
  async prerender() {
    return [
      "/",
      "/experience",
      "/projects",
      ...projectSlugs.map((slug) => `/projects/${slug}`),
      "/skills",
      "/contact",
    ];
  },
} satisfies Config;
