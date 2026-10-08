import { profile } from "~/data/profile";

export function SocialLinks() {
  return (
    <ul>
      <li>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      <li>
        <a href={profile.telegram} rel="noopener noreferrer" target="_blank">
          Telegram {profile.telegramHandle}
        </a>
      </li>
      <li>
        <a href={profile.linkedIn} rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
      </li>
      <li>
        <a href={profile.github} rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
      </li>
      <li>{profile.location}</li>
    </ul>
  );
}
