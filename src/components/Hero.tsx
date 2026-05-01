import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero relative min-h-screen flex items-center px-6 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary mb-4 tracking-wider uppercase"
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold gradient-text mb-6"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="gradient-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Me contacter
          </a>
          <a
            href={profile.cvUrl}
            download
            className="glass px-6 py-3 rounded-full font-medium hover:bg-secondary/60 transition-colors inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Télécharger CV
          </a>
          <div className="flex items-center gap-1 ml-2">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-full hover:bg-secondary/60 transition-colors">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full hover:bg-secondary/60 transition-colors">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Défiler vers le bas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
