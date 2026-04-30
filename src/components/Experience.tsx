import { motion } from "framer-motion";
import { Section } from "./Section";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Parcours" title="Expérience & formation">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>div]:col-start-2"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full gradient-primary -translate-x-1/2 ring-4 ring-background" />

              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <p className="text-sm text-primary font-medium mb-1">{exp.period}</p>
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
