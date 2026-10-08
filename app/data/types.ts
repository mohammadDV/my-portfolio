export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  firstName: string;
  familyName: string;
  /** Compact public label for nav / marks (e.g. Mohammad DV). */
  shortName: string;
  /** Nickname — mention at most once in the UI. */
  nickname: string;
  title: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  telegram: string;
  telegramHandle: string;
  summary: string;
  headline: string;
  /** Short hero supporting line (first viewport). */
  lede: string;
  portrait: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  summary: string;
  achievements: string[];
  links: LinkItem[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status?: string;
  highlights: string[];
  links: LinkItem[];
  featured: boolean;
};

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};
