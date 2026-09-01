import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        >
          <div
            className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-panel border border-line viewfinder"
          >
            <span className="vf-tr" />
            <span className="vf-br" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 flex items-center justify-center h-10 w-10 border border-line bg-ink/70 text-bone hover:border-rec hover:text-rec transition-colors"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* MEDIA */}
            <div className="aspect-video w-full bg-ink border-b border-line overflow-hidden">
              {project.type === "video" ? (
                <video
                  src={project.video} 
                  controls 
                  playsInline 
                  preload="metadata" 
                  className="w-full h-full object-contain bg-ink" 
                  onError={(e) => { 
                    console.error("Erreur vidéo :", project.video, e.currentTarget.error); 
                  }} 
                > 
                  Votre navigateur ne peut pas lire cette vidéo. 
                </video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-ink"
                />
              )}
            </div>

            {/* INFORMATIONS */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 font-mono text-xs text-mute mb-4">
                <span className="text-rec">{project.category}</span>
                <span>·</span>
                <span>{project.duration}</span>
              </div>

              <h3 className="font-display font-semibold text-3xl md:text-4xl text-bone leading-tight">
                {project.title}
              </h3>

              <p className="mt-5 text-mute leading-relaxed max-w-xl">
                {project.detail}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-bone/80 border border-line px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}