import type { ReactNode } from "react";

type Props = {
  email: string;
  children: ReactNode;
  className?: string;
};

/**
 * Cloudflare "Email Address Obfuscation" rewrites mailto links in HTML.
 * That changes the DOM vs React's tree and breaks hydration / client routing.
 * These HTML comments tell Cloudflare to leave this markup alone.
 */
export function SafeMailto({ email, children, className }: Props) {
  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: "<!--email_off-->" }} />
      <a className={className} href={`mailto:${email}`} suppressHydrationWarning>
        {children}
      </a>
      <span dangerouslySetInnerHTML={{ __html: "<!--email_on-->" }} />
    </>
  );
}
