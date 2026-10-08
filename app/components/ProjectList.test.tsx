import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { ProjectList } from "./ProjectList";
import type { Project } from "~/data/types";

const sample: Project[] = [
  {
    slug: "demo",
    title: "Demo Project",
    tagline: "A sample tagline",
    description: "Desc",
    tech: ["Go", "Redis"],
    highlights: [],
    links: [],
    featured: true,
  },
];

describe("ProjectList", () => {
  it("renders project titles as links", () => {
    render(
      <MemoryRouter>
        <ProjectList items={sample} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Demo Project/i })).toHaveAttribute(
      "href",
      "/projects/demo",
    );
  });
});
