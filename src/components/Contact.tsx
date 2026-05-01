import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contact portfolio — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Travaillons ensemble">
      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Vous avez un projet en tête ou cherchez à renforcer votre équipe ?
            Écrivez-moi, je réponds sous 24h.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> {profile.email}</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</li>
          </ul>
          <div className="flex gap-2">
            {[
              { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: TwitterIcon, href: profile.socials.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass p-3 rounded-xl hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium block mb-1.5">Nom</label>
              <input
                id="name" name="name" required maxLength={100}
                className="w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email</label>
              <input
                id="email" name="email" type="email" required maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium block mb-1.5">Message</label>
            <textarea
              id="message" name="message" required rows={5} maxLength={1000}
              className="w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
          >
            {sent ? <><CheckCircle2 className="h-4 w-4" /> Envoyé</> : <><Send className="h-4 w-4" /> Envoyer</>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
