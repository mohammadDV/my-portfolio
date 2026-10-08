import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend",
    items: ["PHP 5–8 / MVC", "Laravel", "Symfony", "Go", "Python"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["Vue.js", "React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "data",
    label: "Databases & Search",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"],
  },
  {
    id: "infra",
    label: "Infrastructure & DevOps",
    items: [
      "Linux / Ubuntu",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Jenkins",
      "SNS / SQS / Lambda",
    ],
  },
  {
    id: "messaging",
    label: "Messaging",
    items: ["RabbitMQ", "RPC"],
  },
  {
    id: "ai",
    label: "AI & Automation",
    items: ["Cursor / Claude", "LLM integration", "RAG", "Prompt engineering", "N8N"],
  },
  {
    id: "cms",
    label: "CMS",
    items: ["Shopify", "WordPress"],
  },
  {
    id: "practices",
    label: "Practices",
    items: ["TDD", "REST", "GraphQL", "Agile / JIRA", "CI/CD"],
  },
];
