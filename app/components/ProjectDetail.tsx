import { Link } from "react-router";
import type { Project } from "~/data/types";
import styles from "./ProjectDetail.module.css";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="page-enter">
      <Link className={styles.back} to="/projects">
        ← Back to projects
      </Link>
      <div className={styles.layout}>
        <div>
          <h1>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          {project.status ? <p className={styles.status}>{project.status}</p> : null}
          <div className={styles.tech}>
            {project.tech.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
          <p className={styles.body}>{project.description}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className={styles.side}>
          <p className={styles.sideTitle}>Links</p>
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.href}
                className="btn btn-ghost"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
