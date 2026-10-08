import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "sevenground",
    role: "Senior Full Stack Developer (PHP, Python, Go)",
    company: "Sevenground Trading B.V.",
    location: "Netherlands (Remote)",
    start: "2022-10",
    end: null,
    summary:
      "Implemented and supported multiple web applications using Laravel (v9–12), Vue.js (v2–3), and Symfony (v4–7). Contributed to REST API development for a polling platform using Laravel, Symfony, and Python, along with integrating AI-powered features into backend services and IaC for AWS (SQS, SNS, Lambda, Terraform).",
    achievements: [
      "Managed large-scale platforms and expanded technical expertise across JWT, OIDC, OAuth2, and Filament, while applying LLM integration, prompt engineering, and RAG-based solutions.",
      "Led the migration from Redis Streams to RabbitMQ for asynchronous processing, addressing consumer group limitations and failure recovery. Designed production-grade messaging with DLQ/DLX, controlled retries, and idempotency guarantees, plus monitoring for throughput and backlog.",
    ],
    links: [
      { label: "sevenground.com", href: "https://www.sevenground.com" },
      { label: "intellivy.net", href: "https://intellivy.net" },
    ],
  },
  {
    id: "ekar",
    role: "Senior Full Stack Developer",
    company: "Ekar Company",
    location: "Dubai, UAE (Remote)",
    start: "2021-06",
    end: "2022-09",
    summary:
      "Ekar is an on-demand mobility platform providing access to a network of thousands of cars bookable via the Ekar App.",
    achievements: [
      "Engineered microservices from concept to launch and re-engineered critical modules for performance and scalability across AWS (EC2, S3, RDS, CloudWatch, SQS, SNS, CodePipeline), RabbitMQ, and RPC.",
      "Designed and operated a Wallet microservice with high-sensitivity transactional APIs: strong consistency, atomic balance updates, idempotent operations, and strict validation to prevent double execution.",
    ],
    links: [{ label: "ekar.app", href: "https://ekar.app" }],
  },
  {
    id: "webideh",
    role: "Lead and Senior PHP Developer",
    company: "WebIdeh Company",
    location: "Tehran, Iran",
    start: "2018-05",
    end: "2020-05",
    summary:
      "Refactored and enhanced a legacy MVC-based SMS panel using modern HTML, CSS, JavaScript, Tailwind CSS, and Alpine.js, boosting message delivery reliability by more than 30% while improving Core Web Vitals, accessibility, and SEO.",
    achievements: [
      "Led a team to deliver large-scale projects on schedule while strengthening leadership and project planning.",
      "Refactored a large-scale PHP backend handling millions of records and high QPS: Service Layer and Repository Pattern, eliminated N+1 queries, optimized joins and indexing, introduced caching and background jobs.",
      "Implemented database replication (one master, multiple read-only slaves) combined with query optimization and caching for low-latency reads and strong transactional consistency.",
    ],
    links: [{ label: "webideh.com", href: "https://www.webideh.com" }],
  },
  {
    id: "partodesign",
    role: "PHP Developer",
    company: "PartoDesign Company",
    location: "Tehran, Iran",
    start: "2016-12",
    end: "2018-04",
    summary:
      "Worked on backend applications (Android, iOS) and websites using Laravel, Symfony, and Pure PHP, plus CMS platforms such as Shopify and WordPress.",
    achievements: [
      "Built foundational skills in Laravel, Symfony, and RESTful API development.",
      "Developed and maintained transactional APIs with attention to data consistency, input validation, and error handling.",
    ],
    links: [{ label: "partodesign.com", href: "https://partodesign.com" }],
  },
  {
    id: "darkob",
    role: "PHP Developer",
    company: "Darkob Company",
    location: "Tehran, Iran",
    start: "2016-08",
    end: "2016-11",
    summary:
      "Started career at a WordPress-focused CMS company, learning WordPress and developing custom modules.",
    achievements: [
      "Gained hands-on experience in WordPress plugin and theme development and PHP-based CMS customization.",
    ],
    links: [{ label: "darkoob.co.ir", href: "https://darkoob.co.ir" }],
  },
];
