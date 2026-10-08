import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "boofstore",
    title: "Boofstore",
    tagline: "E-commerce platform for chain stores and online sports retail.",
    description:
      "A robust e-commerce system for managing chain stores and online retail operations. The Laravel backend covers product management, user reviews, content publishing, and customer support. The storefront is a Next.js frontend for browsing and purchasing sports equipment and related products.",
    tech: ["Laravel", "Next.js", "E-commerce", "MySQL"],
    highlights: [
      "Laravel backend for chain-store and online retail operations",
      "Comprehensive product management, reviews, and content publishing",
      "Customer support features built into the platform",
      "Next.js storefront for a fast shopping experience",
    ],
    links: [{ label: "Live site", href: "https://boofstore.com/" }],
    featured: true,
  },
  {
    slug: "telegram-game",
    title: "Telegram Game Bot",
    tagline: "Concurrent quiz matchmaking and multiplayer scoring in Go.",
    description:
      "A concurrent Telegram quiz game platform built with Go, featuring Redis-based matchmaking, real-time multiplayer question sessions, and automatic scoring.",
    tech: ["Go", "Redis", "Lua", "Telegram Bot API"],
    status: "~70% completed",
    highlights: [
      "Matchmaking and lobby management with Redis and Lua scripts",
      "Concurrent multiplayer game flow with real-time scoring and winner calculation",
      "Telegram bot interactions with inline keyboards and state management",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mohammadDV/telegram-game",
      },
    ],
    featured: true,
  },
  {
    slug: "intellivy",
    title: "Intellivy",
    tagline: "Multi-tenant collaborative SaaS with a domain-oriented architecture.",
    description:
      "A SaaS multi-tenant collaborative platform built with a structured Domain Pattern for scalable development, organized into independent feature domains.",
    tech: ["Laravel", "Domain Pattern", "Vibe Coding", "Multi-tenant"],
    highlights: [
      "Built using Vibe Coding principles",
      "Custom Domain Pattern inspired by DDD",
      "Independent domains for Models, Services, Repositories, and more",
      "DomainExceptions and feature-based middleware",
    ],
    links: [{ label: "Live site", href: "https://intellivy.net" }],
    featured: true,
  },
  {
    slug: "oshtow",
    title: "Oshtow",
    tagline: "Peer-to-peer delivery connecting senders with travelers.",
    description:
      "A peer-to-peer delivery platform connecting senders with travelers. Senders can create delivery requests or connect with travelers; travelers browse and accept delivery tasks.",
    tech: ["Full stack", "Async workflows", "Caching", "Object storage"],
    highlights: [
      "Built end-to-end: frontend, backend, and infrastructure",
      "Designed and implemented async processing workflows",
      "Configured server infrastructure, caching, and object storage",
      "Managed email server setup and delivery",
    ],
    links: [{ label: "Live site", href: "https://oshtow.com" }],
    featured: true,
  },
  {
    slug: "finybo",
    title: "Finybo",
    tagline: "Location and business discovery, starting with Istanbul.",
    description:
      "A location and business discovery platform initially focused on Istanbul, helping users explore places and businesses.",
    tech: ["Full stack", "Scalable data", "Async processes"],
    status: "~90% completed (not yet launched)",
    highlights: [
      "Fully developed system architecture: backend, frontend, and infrastructure",
      "Implemented scalable data handling and async processes",
    ],
    links: [{ label: "Website", href: "https://finybo.com" }],
    featured: true,
  },
];
