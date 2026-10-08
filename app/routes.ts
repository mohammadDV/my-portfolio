import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("experience", "routes/experience.tsx"),
  route("projects", "routes/projects._index.tsx"),
  route("projects/:slug", "routes/projects.$slug.tsx"),
  route("skills", "routes/skills.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
