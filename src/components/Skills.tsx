import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Section } from "./Section";
import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Compétences" title="Mes technologies maîtrisées">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}