import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";
import { fallbackProjects, profile, type Project } from "@/lib/portfolio-data";

// Fetches the user's top public repos from the GitHub API and falls back to
// curated projects if the request fails or returns nothing useful.
function useGitHubProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`,
      { signal: ctrl.signal },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((repos: any[]) => {
        const mapped: Project[] = repos
          .filter((r) => !r.fork && r.description)
          .slice(0, 3)
          .map((r) => ({
            title: r.name,
            description: r.description,
            stack: [r.language, ...(r.topics ?? []).slice(0, 3)].filter(Boolean),
            github: r.html_url,
            demo: r.homepage || r.html_url,
            image: `https://opengraph.githubassets.com/1/${r.full_name}`,
          }));
        if (mapped.length) setProjects(mapped);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, []);

  return { projects, loading };
}

export function Projects() {
  const { projects } = useGitHubProjects();

  return (
    <Section id="projects" eyebrow="Projets" title="Sélection de réalisations">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                  <GithubIcon className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
