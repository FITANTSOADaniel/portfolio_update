// Centralized portfolio content. Update these values to personalize the site.
export const profile = {
  name: "Alex Martin",
  title: "Développeur FullStack",
  tagline:
    "Je conçois et développe des applications web modernes, performantes et accessibles — du design system jusqu'au déploiement.",
  email: "hello@alexmartin.dev",
  location: "Paris, France",
  githubUsername: "vercel", // Used for GitHub API demo (any public username works)
  cvUrl: "/cv.pdf",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
};

export const skills = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker / CI", level: 75 },
];

export const technologies = [
  "TypeScript", "React", "Next.js", "Node.js", "Tailwind", "PostgreSQL",
  "Prisma", "tRPC", "Docker", "AWS", "Figma", "Vitest",
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
};

export const fallbackProjects: Project[] = [
  {
    title: "Nimbus Analytics",
    description: "Tableau de bord temps réel pour suivre les KPIs SaaS avec graphiques interactifs.",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Tailwind"],
    github: "https://github.com/",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Orbit Commerce",
    description: "Plateforme e-commerce headless avec CMS sur-mesure et paiements Stripe.",
    stack: ["React", "Node.js", "Stripe", "Prisma"],
    github: "https://github.com/",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Pulse Chat",
    description: "Application de messagerie temps réel avec WebSockets et chiffrement end-to-end.",
    stack: ["TypeScript", "Socket.io", "Redis", "React"],
    github: "https://github.com/",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

export const experiences = [
  {
    period: "2023 — Présent",
    role: "Lead Developer FullStack",
    company: "Atlas Studio",
    description: "Direction technique d'une équipe de 5 ingénieurs sur des produits SaaS B2B. Architecture, code review, mentorat.",
  },
  {
    period: "2021 — 2023",
    role: "Software Engineer",
    company: "Northwind",
    description: "Développement d'un produit de data visualization servant 50k+ utilisateurs. Migration vers Next.js et amélioration des performances de 60%.",
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Freelance",
    description: "Conception et développement de sites et applications pour des startups early-stage et agences créatives.",
  },
  {
    period: "2018",
    role: "Diplôme Master Informatique",
    company: "Université Paris-Saclay",
    description: "Spécialisation en génie logiciel et systèmes distribués.",
  },
];
