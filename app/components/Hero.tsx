import { Link } from "react-router";
import { profile } from "~/data/profile";
import styles from "./Hero.module.css";

const chips = ["Organize", "Understand", "Automate", "Improve"];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.media} aria-hidden="true">
        <img
          className="hero-media-anim"
          src={profile.portrait}
          alt=""
          width={1200}
          height={1500}
          decoding="async"
          fetchPriority="high"
        />
        <div className={styles.scrim} />
      </div>

      <div className={styles.content}>
        <div className={styles.brandRow}>
          <span className={styles.brandMark} aria-hidden="true" />
          <p className={styles.brandName}>{profile.shortName}</p>
        </div>
        <p className={styles.kicker}>
          {profile.location} · Full Stack · AI
        </p>
        <h1 id="hero-name" className={styles.headline}>
          <span className={styles.firstName}>{profile.firstName}</span>
          <span className={styles.familyName}>{profile.familyName}</span>
        </h1>
        <p className={styles.nickname}>
          Also known as {profile.nickname}
        </p>
        <p className={styles.tagline}>{profile.headline}</p>
        <p className={styles.lede}>{profile.lede}</p>
        <div className={styles.actions}>
          <Link className="btn btn-primary" to="/projects">
            Explore projects
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact
          </Link>
        </div>
        <div className={styles.chips} aria-label="Focus areas">
          {chips.map((chip) => (
            <span key={chip} className={styles.chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
