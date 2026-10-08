import type { SkillGroup } from "~/data/types";
import styles from "./SkillGroups.module.css";

type SkillGroupsProps = {
  groups: SkillGroup[];
};

export function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <div className={`${styles.grid} stagger`}>
      {groups.map((group) => (
        <section
          key={group.id}
          className={styles.group}
          aria-labelledby={`skill-${group.id}`}
        >
          <h3 id={`skill-${group.id}`}>{group.label}</h3>
          <ul className={styles.items}>
            {group.items.map((item) => (
              <li key={item}>
                <span className="tag">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
