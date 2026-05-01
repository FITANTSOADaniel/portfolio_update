import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills, technologies } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about" eyebrow="À propos" title="Le développeur derrière le code">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            Passionné par le web depuis plus de 6 ans, je conçois des produits qui
            allient performance, design et expérience utilisateur. Mon terrain de
            jeu : du <span className="text-foreground font-medium">React</span> moderne
            au <span className="text-foreground font-medium">Node.js</span> côté serveur,
            avec une obsession pour le code propre et la maintenabilité.
          </p>
          <p>
            J'aime collaborer avec des équipes ambitieuses, transformer des idées
            complexes en interfaces simples, et apprendre continuellement.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {technologies.map((t) => (
              <span
                key={t}
                className="glass px-3 py-1 rounded-full text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full gradient-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
