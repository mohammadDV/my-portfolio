import { Link } from "react-router";
import type { Route } from "./+types/home";
import { ExperienceList } from "~/components/ExperienceList";
import { Hero } from "~/components/Hero";
import homeStyles from "~/components/HomeSections.module.css";
import { JsonLd } from "~/components/JsonLd";
import { ProjectList } from "~/components/ProjectList";
import { SkillGroups } from "~/components/SkillGroups";
import { experience } from "~/data/experience";
import { getFeaturedProjects, getLatestExperience } from "~/data/helpers";
import { profile } from "~/data/profile";
import { skills } from "~/data/skills";
import { buildRouteMeta, personJsonLd, websiteJsonLd } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildRouteMeta({
    title: profile.name,
    description: profile.summary,
    path: "/",
    image: profile.portrait,
  });
}

const ecosystem = ["Backend", "Frontend", "Cloud", "Messaging", "AI", "DevOps"];

export default function Home() {
  const featured = getFeaturedProjects();
  const recent = getLatestExperience(experience, 2);

  return (
    <div>
      <JsonLd data={[personJsonLd(profile), websiteJsonLd()]} />
      <Hero />

      <section className={homeStyles.band} aria-labelledby="home-projects">
        <div className={`${homeStyles.inner} ${homeStyles.split}`}>
          <div className={homeStyles.header}>
            <span className="section-label">Selected work</span>
            <h2 id="home-projects">Focused projects. One engineering direction.</h2>
            <p className="muted">
              Personal systems and startups — from concurrent Go services to multi-tenant
              SaaS and delivery platforms.
            </p>
            <Link className={homeStyles.more} to="/projects">
              View all projects →
            </Link>
          </div>
          <ProjectList items={featured} />
        </div>
      </section>

      <section className={homeStyles.band} aria-labelledby="home-experience">
        <div className={homeStyles.inner}>
          <div className={homeStyles.header}>
            <span className="section-label">Experience</span>
            <h2 id="home-experience" className={homeStyles.oneLine}>
              Recent roles that shaped the craft.
            </h2>
            <Link className={homeStyles.more} to="/experience">
              Full timeline →
            </Link>
          </div>
          <ExperienceList items={recent} />
        </div>
      </section>

      <section className={homeStyles.band} aria-labelledby="home-skills">
        <div className={homeStyles.inner}>
          <div className={homeStyles.ecosystem}>
            <div>
              <span className="section-label">Ecosystem</span>
              <h2 id="home-skills" style={{ marginBottom: "0.75rem" }}>
                {profile.shortName}
              </h2>
              <p className="muted">
                Connected skills across finance-grade backends, cloud infrastructure, and
                practical AI integration.
              </p>
            </div>
            <div className={homeStyles.pills}>
              {ecosystem.map((item) => (
                <span key={item} className={homeStyles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <SkillGroups groups={skills.slice(0, 4)} />
            <Link className={homeStyles.more} to="/skills" style={{ marginTop: "1.25rem" }}>
              All skills →
            </Link>
          </div>
        </div>
      </section>

      <section className={homeStyles.ctaBand} aria-labelledby="home-cta">
        <h2 id="home-cta">Build clearer. Ship smarter. Scale further.</h2>
        <Link className="btn btn-primary" to="/contact">
          Contact {profile.name}
        </Link>
      </section>
    </div>
  );
}
