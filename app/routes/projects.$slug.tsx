import { data } from "react-router";
import type { Route } from "./+types/projects.$slug";
import { ProjectDetail } from "~/components/ProjectDetail";
import { getProjectBySlug } from "~/data/helpers";
import { buildRouteMeta } from "~/lib/seo";

export function meta({ params }: Route.MetaArgs) {
  const project = getProjectBySlug(params.slug ?? "");
  if (!project) {
    return buildRouteMeta({
      title: "Project not found",
      description: "This project does not exist.",
      path: `/projects/${params.slug ?? ""}`,
      noIndex: true,
    });
  }

  return buildRouteMeta({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

export async function loader({ params }: Route.LoaderArgs) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    throw data("Not Found", { status: 404 });
  }
  return { project };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    throw data("Not Found", { status: 404 });
  }
  return { project };
}

export function HydrateFallback() {
  return (
    <div className="container page page-enter">
      <p className="muted">Loading project…</p>
    </div>
  );
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container page">
      <ProjectDetail project={loaderData.project} />
    </div>
  );
}
