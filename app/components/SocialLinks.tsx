import { profile } from "~/data/profile";
import { SafeMailto } from "./SafeMailto";

export function SocialLinks() {
  return (
    <ul>
      <li>
        <SafeMailto email={profile.email}>
          <span suppressHydrationWarning>{profile.email}</span>
        </SafeMailto>
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
