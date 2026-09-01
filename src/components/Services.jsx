import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "../data/content";

export default function Services() {
  const [openId, setOpenId] = useState(services[0].id);

  return (
    <section id="services" className="bg-ink px-6 md:px-10 py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-rec">SERVICES</span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone mt-4 max-w-lg text-balance">
              Quatre métiers, une seule direction créative.
            </h2>
          </div>
          <p className="text-mute max-w-xs leading-relaxed">
            Chaque projet peut s'appuyer sur une seule expertise — ou sur toutes,
            pour une image cohérente du premier visuel à la dernière publication.
          </p>
        </div>

        <div className="border-t border-line">
          {services.map((s) => {
            const isOpen = openId === s.id;
            return (
              <div key={s.id} className="border-b border-line">
                <button
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="w-full flex items-center gap-6 md:gap-10 py-7 md:py-9 text-left group"
                >
                  <span className="font-mono text-xs text-mute w-16 shrink-0">{s.code}</span>
                  <span className="font-display font-medium text-2xl md:text-4xl text-bone group-hover:text-rec transition-colors duration-300 flex-1">
                    {s.label}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-bone shrink-0"
                  >
                    <Plus size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-0 md:pl-[6.5rem] pb-9 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                        <p className="col-span-full text-mute leading-relaxed mb-2">{s.summary}</p>
                        {s.items.map((item) => (
                          <div key={item} className="flex items-center gap-3 text-bone/85 text-[15px]">
                            <span className="h-1 w-1 bg-rec shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
