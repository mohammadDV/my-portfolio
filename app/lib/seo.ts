import { absoluteUrl, SITE_NAME } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export function buildPageTitle(pageTitle: string): string {
  if (pageTitle === SITE_NAME) {
    return pageTitle;
  }
  return `${pageTitle} · ${SITE_NAME}`;
}

export function buildRouteMeta({
  title,
  description,
  path,
  noIndex = false,
  image,
}: PageMetaInput) {
  const fullTitle = buildPageTitle(title);
  const url = absoluteUrl(path);
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : undefined;

  const tags: Array<
    | { title: string }
    | { name: string; content: string }
    | { property: string; content: string }
    | { tagName: "link"; rel: string; href: string }
  > = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: imageUrl ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: url },
  ];

  if (imageUrl) {
    tags.push(
      { property: "og:image", content: imageUrl },
      { name: "twitter:image", content: imageUrl },
    );
  }

  if (noIndex) {
    tags.push({ name: "robots", content: "noindex, nofollow" });
  }

  return tags;
}

export function personJsonLd(profile: {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  summary: string;
  portrait?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    image: profile.portrait
      ? absoluteUrl(profile.portrait)
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    url: absoluteUrl("/"),
    sameAs: [profile.linkedIn, profile.github],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
  };
}
