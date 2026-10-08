import { useEffect, useId, useState } from "react";
import { Link, NavLink } from "react-router";
import { profile } from "~/data/profile";
import styles from "./Header.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true" />
          {profile.shortName}
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={"end" in link ? link.end : false}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link className={styles.cta} to="/contact">
            Contact
          </Link>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      <nav
        id={menuId}
        className={styles.mobileNav}
        data-open={open}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={"end" in link ? link.end : false}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
