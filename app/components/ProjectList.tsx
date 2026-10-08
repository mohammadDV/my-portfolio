import { Link } from "react-router";
import type { Project } from "~/data/types";
import styles from "./ProjectList.module.css";

type ProjectListProps = {
  items: Project[];
};

export function ProjectList({ items }: ProjectListProps) {
  return (
    <ul className={`${styles.list} stagger`}>
      {items.map((project) => (
        <li key={project.slug} className={styles.item}>
          <Link to={`/projects/${project.slug}`}>
            <div className={styles.top}>
              <span className={styles.badge}>Featured</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.tagline}>{project.tagline}</p>
            <div className={styles.meta}>
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
              {project.status ? (
                <span className={styles.status}>{project.status}</span>
              ) : null}
            </div>
            <span className={styles.visit}>View project</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
