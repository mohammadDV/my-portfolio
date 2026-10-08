import type { Route } from "./+types/contact";
import { SocialLinks } from "~/components/SocialLinks";
import { profile } from "~/data/profile";
import { buildRouteMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: "Contact",
    description: `Contact ${profile.name} in ${profile.location} via email, LinkedIn, or GitHub.`,
    path: "/contact",
    image: profile.portrait,
  });
}

export default function ContactPage() {
  return (
    <div className="container page page-enter">
      <span className="section-label">Connect</span>
      <h1>Contact</h1>
      <p className="muted" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        Based in {profile.location}. Reach out for roles, collaborations, or technical
        conversations.
      </p>
      <div className="panel" style={{ maxWidth: "28rem" }}>
        <SocialLinks />
      </div>
    </div>
  );
}
