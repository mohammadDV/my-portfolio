import { formatDateRange } from "~/data/helpers";
import type { ExperienceItem } from "~/data/types";
import styles from "./ExperienceList.module.css";

type ExperienceListProps = {
  items: ExperienceItem[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ol className={`${styles.list} stagger`}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>
                {item.company} · {item.location}
              </p>
            </div>
            <p className={styles.dates}>{formatDateRange(item.start, item.end)}</p>
          </div>
          <p>{item.summary}</p>
          <ul>
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          {item.links.length > 0 ? (
            <div className={styles.links}>
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
