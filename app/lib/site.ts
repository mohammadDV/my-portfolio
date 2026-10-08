export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://mohammaddv.dev"
).replace(/\/$/, "");

export const SITE_NAME = "Mohammad Daneshmandvojdani";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
