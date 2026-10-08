import { describe, expect, it } from "vitest";
import { buildPageTitle, buildRouteMeta } from "./seo";

describe("buildPageTitle", () => {
  it("prefixes section titles with the site name", () => {
    expect(buildPageTitle("Projects")).toContain("Projects");
    expect(buildPageTitle("Projects")).toContain("·");
  });
});

describe("buildRouteMeta", () => {
  it("includes title, description, and canonical", () => {
    const meta = buildRouteMeta({
      title: "Contact",
      description: "Get in touch",
      path: "/contact",
    });

    expect(meta).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: expect.stringContaining("Contact") }),
        expect.objectContaining({
          name: "description",
          content: "Get in touch",
        }),
        expect.objectContaining({
          tagName: "link",
          rel: "canonical",
        }),
      ]),
    );
  });

  it("adds noindex when requested", () => {
    const meta = buildRouteMeta({
      title: "Not found",
      description: "Missing",
      path: "/missing",
      noIndex: true,
    });

    expect(meta).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "robots",
          content: "noindex, nofollow",
        }),
      ]),
    );
  });
});
