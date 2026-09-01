import { motion } from "framer-motion";
import { Palette, Clapperboard, Video, Megaphone, TrendingUp } from "lucide-react";
import photoProfil from "../assets/photo-profil.jpg";

const capabilities = [
  { icon: Palette, text: "Créer des identités visuelles" },
  { icon: Clapperboard, text: "Concevoir des affiches et visuels professionnels" },
  { icon: Video, text: "Réaliser et monter des vidéos" },
  { icon: Megaphone, text: "Produire du contenu pour les réseaux sociaux" },
  { icon: TrendingUp, text: "Gérer et développer la présence digitale d'une marque" },
];

export default function About() {
  return (
    <section id="apropos" className="bg-ink px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="viewfinder aspect-[4/5] bg-panel overflow-hidden">
            <span className="vf-tr" />
            <span className="vf-br" />
            <div className="h-full w-full">
              <img
                src={photoProfil}
                alt="Aaron"
              className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 md:pt-6"
        >
          <span className="font-mono text-xs text-rec">À PROPOS</span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone mt-4 leading-tight max-w-xl text-balance">
            Un créatif polyvalent, entre image fixe et image en mouvement.
          </h2>
          <p className="mt-6 text-mute leading-relaxed max-w-lg">
            Passionné par le design, l'audiovisuel et la communication digitale,
            j'aide les marques, entreprises, artistes et événements à construire
            une image forte — cohérente à l'écran comme sur papier.
          </p>

          <ul className="mt-10 flex flex-col divide-y divide-line border-t border-line max-w-lg">
            {capabilities.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 py-4">
                <Icon size={18} className="text-rec shrink-0" />
                <span className="text-bone/90 font-body text-[15px]">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
