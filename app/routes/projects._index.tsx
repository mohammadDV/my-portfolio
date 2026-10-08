import type { Route } from "./+types/projects._index";
import { ProjectList } from "~/components/ProjectList";
import { projects } from "~/data/projects";
import { buildRouteMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: "Projects",
    description:
      "Personal projects and startups by Mohammad Daneshmandvojdani — Go bots, SaaS, delivery, and discovery platforms.",
    path: "/projects",
  });
}

export default function ProjectsIndex() {
  return (
    <div className="container page page-enter">
      <span className="section-label">Work</span>
      <h1>Projects</h1>
      <p className="muted" style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
        Selected personal projects and startups — architecture, implementation, and shipping.
      </p>
      <ProjectList items={projects} />
    </div>
  );
}
