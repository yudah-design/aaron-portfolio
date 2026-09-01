import { motion } from "framer-motion";
import { skills } from "../data/content";

const MAX = 5;

export default function Skills() {
  return (
    <section id="competences" className="bg-ink px-6 md:px-10 py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs text-rec">COMPÉTENCES</span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone mt-4 leading-tight text-balance">
            Les outils derrière chaque projet.
          </h2>
          <p className="mt-6 text-mute leading-relaxed max-w-sm">
            Niveau de maîtrise indicatif, affiné projet après projet — de la
            conception graphique à la stratégie de contenu.
          </p>
        </div>

        <div className="md:col-span-8 flex flex-col divide-y divide-line border-t border-b border-line">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-between gap-6 py-5"
            >
              <span className="font-body text-bone/90 text-[15px] md:text-base">{s.name}</span>
              <div className="flex items-end gap-1 shrink-0" aria-label={`Niveau ${s.level} sur ${MAX}`}>
                {Array.from({ length: MAX }).map((_, bar) => (
                  <span
                    key={bar}
                    className={`w-1.5 ${bar < s.level ? "bg-rec" : "bg-line"}`}
                    style={{ height: `${10 + bar * 5}px` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
