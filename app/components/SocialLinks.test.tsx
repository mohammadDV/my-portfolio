import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SocialLinks } from "./SocialLinks";
import { profile } from "~/data/profile";

describe("SocialLinks", () => {
  it("renders mailto, telegram, and social links", () => {
    render(<SocialLinks />);

    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(
      screen.getByRole("link", { name: `Telegram ${profile.telegramHandle}` }),
    ).toHaveAttribute("href", profile.telegram);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.linkedIn,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      profile.github,
    );
    expect(screen.queryByRole("link", { name: /\+49/ })).toBeNull();
  });
});
