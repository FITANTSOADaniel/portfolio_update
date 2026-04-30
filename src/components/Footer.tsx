import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name} — Conçu et codé avec passion.
      </p>
    </footer>
  );
}
