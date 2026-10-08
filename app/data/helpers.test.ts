import { describe, expect, it } from "vitest";
import {
  formatDateRange,
  getFeaturedProjects,
  getProjectBySlug,
} from "./helpers";

describe("formatDateRange", () => {
  it("formats an open-ended role as Present", () => {
    expect(formatDateRange("2022-10", null)).toBe("Oct 2022 – Present");
  });

  it("formats a closed range", () => {
    expect(formatDateRange("2021-06", "2022-09")).toBe("Jun 2021 – Sep 2022");
  });
});

describe("getProjectBySlug", () => {
  it("returns a known project", () => {
    const project = getProjectBySlug("intellivy");
    expect(project?.title).toBe("Intellivy");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("missing-project")).toBeUndefined();
  });
});

describe("getFeaturedProjects", () => {
  it("returns at most 4 featured projects by default", () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeLessThanOrEqual(4);
    expect(featured.every((project) => project.featured)).toBe(true);
  });
});
