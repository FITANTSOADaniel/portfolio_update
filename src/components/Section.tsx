import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Reusable animated section wrapper with consistent spacing and entry animation.
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
