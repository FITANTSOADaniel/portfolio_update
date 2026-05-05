// Centralized portfolio content. Update these values to personalize the site.
export const profile = {
  name: "Fitantsoa Daniel",
  title: "Développeur FullStack",
  tagline:
    "Je conçois et développe des applications web et mobiles modernes, performantes.",
  email: "fitantsoadaniel8@gmail.com",
  location: "Ivato, Madagascar",
  // githubUsername: "vercel", // Used for GitHub API demo (any public username works)
  cvUrl: "/src/assets/CV_Fitantsoa_Daniel.pdf",
  socials: {
    github: "https://github.com/FITANTSOADaniel",
    facebook: "https://www.facebook.com/daniel.rabemanantsoa.2025",
  },
};

export const skills = [
  { name: "Laravel", level: 95 },
  { name: "Node js", level: 92 },
  { name: "SQL", level: 80 },
  { name: "Angular", level: 88 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 75 },
];

export const technologies = [
  "React", "Angular", "Next.js", "Node.js", "Laravel", "Symfony","PostgreSQL", "MySQL",
  "Prisma", "Git/Github", "Docker",
];

export const funFacts = [
  { label: "Projets Réalisés", value: 6, icon: "Code" },
  { label: "Technologies Maîtrisées", value: 11, icon: "Zap" },
  { label: "Années d'Expérience", value: 2, icon: "Clock" },
  { label: "Langues Parlées", value: 3, icon: "Globe" },
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
    title: "Plateforme de covoiturage",
    description: "Gestion des trajets et des utilisateurs, les utilisateurs peuvent rechercher et réserver un trajet, historiques des réservations.",
    stack: ["Angular", "SpringBoot", "PostgreSQL", "JWT"],
    github: "https://github.com/back_covoiturage",
    demo: "https://example.com",
    image: "/src/assets/cov.png",
  },
  {
    title: "Page admin gestion association",
    description: "Gestion des associations et des membres, validation d'une demande d'adhésion par un nouveau utilisateur.",
    stack: ["React", "Laravel", "MySQL", "PrimeNG"],
    github: "https://github.com/gestion_association",
    demo: "https://example.com",
    image: "/src/assets/admin_assoc.png",
  },
  {
    title: "Page utilisateur gestion association",
    description: "Un réseau social permetant à l'utilisateur de lister et créer des nouvelles publications, consultation et modification des informations parsonnelles.",
    stack: ["React", "Laravel", "MySQL", "PrimeNG"],
    github: "https://github.com/gestion_association",
    demo: "https://example.com",
    image: "/src/assets/user_assoc.png",
  },
  {
    title: "Site e-commerce",
    description: "Site permetant à l'utilisateur de voir la liste et commander des produits par leurs catégories.",
    stack: ["React js", "TypeScript", "Firebase"],
    github: "https://github.com/user_ecommerce",
    demo: "https://example.com",
    image: "/src/assets/ecomm_user.png",
  },
  {
    title: "Chat mobile instantané",
    description: "Application mobile pour l'envoye des messages entre les utilisateurs avec React Native.",
    stack: ["React Native", "Node.js", "Firebase", "NoSQL"],
    github: "https://github.com/chatApp",
    demo: "https://example.com",
    image: "/src/assets/chat.jpg",
  },
  {
    title: "Dashboard admin e-commerce",
    description: "L'application permet de gérer les produits par catégories. Voir les listes, supprimer et modifier les utilisateurs et les produits.",
    stack: ["TypeScript", "React", "Firebase"],
    github: "https://github.com/admin_ecommerce",
    demo: "https://example.com",
    image: "/src/assets/ecomm_admin.png",
  },
];

export const experiences = [
  {
    period: "Janvier 2026",
    role: "Licence en Informatique",
    company: "Ecole Nationale d'Informatique",
    description: "",
  },
  {
    period: "Octobre 2025 - Décembre 2025",
    role: "Stagiaire Développeur web Full Stack",
    company: "Start up",
    description: "Conception et réalisation d'une plateforme de covoiturage.",
  },
  {
    period: "Septembre 2024 - Novembre 2024",
    role: "Stagiaire Développeur web Full Stack",
    company: "IRATRAVO",
    description: "Conception et développement de sites pour la gestion des associations.",
  }
];
