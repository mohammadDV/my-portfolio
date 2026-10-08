import { projects } from "./projects";
import type { ExperienceItem, Project } from "./types";

const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function parseYearMonth(value: string): Date {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1));
}

export function formatDateRange(start: string, end: string | null): string {
  const startLabel = monthFormatter.format(parseYearMonth(start));
  if (end === null) {
    return `${startLabel} – Present`;
  }
  return `${startLabel} – ${monthFormatter.format(parseYearMonth(end))}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count = 4): Project[] {
  return projects.filter((project) => project.featured).slice(0, count);
}

export function getLatestExperience(
  items: ExperienceItem[],
  count = 2,
): ExperienceItem[] {
  return items.slice(0, count);
}
