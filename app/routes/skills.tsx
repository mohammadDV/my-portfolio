import type { Route } from "./+types/skills";
import { SkillGroups } from "~/components/SkillGroups";
import { skills } from "~/data/skills";
import { buildRouteMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: "Skills",
    description:
      "Backend, frontend, infrastructure, messaging, and AI skills — Mohammad Daneshmandvojdani.",
    path: "/skills",
  });
}

export default function SkillsPage() {
  return (
    <div className="container page page-enter">
      <span className="section-label">Capabilities</span>
      <h1>Skills</h1>
      <p className="muted" style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
        Tools and practices used across production systems, from PHP and Go services to
        cloud infrastructure and AI workflows.
      </p>
      <SkillGroups groups={skills} />
    </div>
  );
}
