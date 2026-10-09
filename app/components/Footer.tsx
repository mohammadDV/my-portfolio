import { profile } from "~/data/profile";
import { SafeMailto } from "./SafeMailto";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <div className={styles.brand}>
            <span className={styles.mark} aria-hidden="true" />
            {profile.shortName}
          </div>
          <p className={styles.copy}>
            © {year} {profile.name}. Senior full-stack engineer building reliable
            systems and AI-aware products in {profile.location}.
          </p>
        </div>
        <div className={styles.links}>
          <a href={profile.github} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <a href={profile.linkedIn} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={profile.telegram} rel="noopener noreferrer" target="_blank">
            Telegram
          </a>
          <SafeMailto email={profile.email}>Email</SafeMailto>
        </div>
      </div>
    </footer>
  );
}
