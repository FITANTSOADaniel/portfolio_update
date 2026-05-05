import { motion } from "framer-motion";
import { Section } from "./Section";
import { funFacts } from "@/lib/portfolio-data";
import { Code, Zap, Clock, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const iconMap = {
  Code,
  Zap,
  Clock,
  Globe,
};

export function FunFacts() {
  return (
    <Section id="funfacts" eyebrow="Fun Facts" title="Quelques chiffres">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {funFacts.map((fact, index) => {
          const Icon = iconMap[fact.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="flex justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <AnimatedCounter value={fact.value} />
              <p className="text-sm text-muted-foreground">{fact.label}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return <div className="text-3xl font-bold">{count}</div>;
}