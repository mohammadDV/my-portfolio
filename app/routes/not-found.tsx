import { Link } from "react-router";
import type { Route } from "./+types/not-found";
import { buildRouteMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: "Not found",
    description: "The requested page could not be found.",
    path: "/404",
    noIndex: true,
  });
}

export default function NotFoundPage() {
  return (
    <div className="container page page-enter">
      <h1>Page not found</h1>
      <p className="muted" style={{ marginBottom: "1.5rem" }}>
        That route does not exist. Head back home or browse projects.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
}
