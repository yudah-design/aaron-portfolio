import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { projects, filters } from "../data/content";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState("Tous");
  const [selected, setSelected] = useState(null);

  const visible =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projets"
      className="bg-ink px-6 md:px-10 py-28 md:py-36 border-t border-line"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITRE + FILTRES */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="font-mono text-xs text-rec">
              SÉLECTION
            </span>

            <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone mt-4 max-w-lg text-balance">
              Une planche-contact de projets récents.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs px-4 py-2.5 border transition-colors duration-200 ${
                  active === f
                    ? "border-rec text-rec"
                    : "border-line text-mute hover:text-bone hover:border-bone"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* PROJETS */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line"
        >
          {visible.map((p) => (
            <motion.button
              layout
              key={p.id}
              onClick={() => setSelected(p)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-ink aspect-[4/5] overflow-hidden text-left"
            >

              {/* IMAGE / VIDÉO */}
              {p.type === "video" ? (
                <video
                  src={p.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-contain bg-panel transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-contain bg-panel transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* VOILE SOMBRE */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* ICÔNE VIDÉO */}
              {p.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/60 bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play
                      size={22}
                      className="text-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              )}

              {/* DURÉE / TYPE */}
              <div className="absolute top-4 left-4 font-mono text-[11px] text-white drop-shadow-md">
                {p.duration}
              </div>

              {/* INFOS AU SURVOL */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="glass p-4">

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[10px] text-rec">
                        {p.category}
                      </span>

                      <h3 className="font-display text-lg text-bone mt-1 leading-snug">
                        {p.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-bone shrink-0"
                    />
                  </div>

                </div>
              </div>

            </motion.button>
          ))}
        </motion.div>

      </div>

      {/* MODAL */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}