import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { roles } from "../data/content";

const headline = "Je transforme vos idées en expériences visuelles.";

export default function Hero() {
  const words = headline.split(" ");

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink grain">
      {/* video reel placeholder background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-panel via-ink to-ink" />
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-rec/10 blur-[140px]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.14]">
          <span className="font-mono text-[13vw] leading-none tracking-tighter text-bone select-none">
            SHOWREEL
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 pt-40 pb-16">
        <div className="viewfinder p-8 md:p-14">
          <span className="vf-tr" />
          <span className="vf-br" />

          <div className="flex items-center gap-2 font-mono text-xs text-mute mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-rec animate-rec" />
            REC · PORTFOLIO 2026 · ABIDJAN, CI
          </div>

          <h1 className="font-display font-semibold text-[11vw] md:text-[6.4vw] leading-[0.95] tracking-tight text-bone max-w-5xl text-balance">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-mute"
          >
            {roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                <span className="text-bone">{r}</span>
                {i < roles.length - 1 && <span className="text-rec">/</span>}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              className="group inline-flex items-center gap-2 bg-bone text-ink px-7 py-4 font-body text-sm font-medium hover:bg-rec hover:text-bone transition-colors duration-300"
            >
              Voir mes projets
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-line text-bone px-7 py-4 font-body text-sm font-medium hover:border-bone transition-colors duration-300"
            >
              <Play size={15} className="fill-bone" />
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
