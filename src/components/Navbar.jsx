import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-bone">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-rec animate-rec" />
          </span>
          Aaron
        </a>

        <ul className="hidden md:flex items-center gap-9 font-body text-sm text-mute">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bone transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-line px-5 py-2.5 text-sm font-body text-bone hover:border-rec hover:text-rec transition-colors duration-200"
        >
          Me contacter
        </a>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-bone"
          aria-label="Ouvrir le menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-display font-semibold text-lg text-bone">Aaron</span>
              <button onClick={() => setOpen(false)} className="text-bone" aria-label="Fermer le menu">
                <X size={26} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6 mt-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-4xl py-3 text-bone border-b border-line"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
