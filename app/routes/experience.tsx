import type { Route } from "./+types/experience";
import { ExperienceList } from "~/components/ExperienceList";
import { experience } from "~/data/experience";
import { buildRouteMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: "Experience",
    description:
      "Career timeline for Mohammad Daneshmandvojdani — senior full-stack roles across Netherlands, UAE, and Iran.",
    path: "/experience",
  });
}

export default function ExperiencePage() {
  return (
    <div className="container page page-enter">
      <span className="section-label">Career</span>
      <h1>Experience</h1>
      <p className="muted" style={{ maxWidth: "40rem", marginBottom: "2rem" }}>
        Nine-plus years shipping production systems — from high-QPS PHP backends to
        event-driven services, wallets, and AI-assisted platforms.
      </p>
      <ExperienceList items={experience} />
    </div>
  );
}
