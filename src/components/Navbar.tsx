import { motion } from "framer-motion";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-4 z-50 mx-auto max-w-5xl"
    >
      <nav className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-card">
        <a href="#hero" className="flex items-center gap-2 font-semibold">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">F.Daniel</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label="Basculer le thème"
          className="p-2 rounded-full hover:bg-secondary/60 transition-colors"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </motion.header>
  );
}
