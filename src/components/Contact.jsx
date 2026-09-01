import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { socials } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Branche ici ton service d'envoi (Formspree, EmailJS, backend, ...)
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-ink px-6 md:px-10 py-28 md:py-36 border-t border-line grain overflow-hidden">
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-rec/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6"
        >
          <span className="font-mono text-xs text-rec">CONTACT</span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone mt-4 leading-tight text-balance">
            Une idée ? Transformons-la en quelque chose d'inoubliable.
          </h2>
          <p className="mt-6 text-mute leading-relaxed max-w-md">
            Décris ton projet en quelques lignes — événement, marque, contenu
            ou stratégie réseaux sociaux — et je reviens vers toi rapidement.
          </p>

          <div className="mt-10 flex items-center gap-3 font-mono text-sm">
            <Mail size={16} className="text-rec" />
            <a href="mailto:aaronamadyg@gmail.com" className="text-bone hover:text-rec transition-colors">
              aaronamadyg@gmail.com
            </a>
            <a
              href="https://wa.me/2250501600372?text=Bonjour%20Aaron%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio."
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 font-mono text-sm text-bone hover:text-rec transition-colors w-fit"
            >
  <MessageCircle size={16} className="text-rec" />
  +225 05 01 60 03 72
</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-xs border border-line px-4 py-2.5 text-mute hover:border-rec hover:text-rec transition-colors"
              >
                {s.label}
                <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-6"
        >
          {sent ? (
            <div className="viewfinder p-10 flex flex-col items-start justify-center min-h-[360px]">
              <span className="vf-tr" />
              <span className="vf-br" />
              <span className="font-mono text-xs text-rec mb-4">MESSAGE ENVOYÉ</span>
              <p className="font-display text-2xl text-bone leading-snug">
                Merci ! Ton message est bien parti — réponse sous peu.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field label="Nom" name="name" type="text" placeholder="Ton nom" />
              <Field label="Email" name="email" type="email" placeholder="ton@email.com" />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs text-mute">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Parle-moi de ton projet..."
                  className="bg-transparent border border-line px-4 py-3 text-bone placeholder:text-mute/60 focus:outline-none focus:border-rec transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 bg-bone text-ink px-7 py-4 font-body text-sm font-medium hover:bg-rec hover:text-bone transition-colors duration-300 w-fit"
              >
                Envoyer le message
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs text-mute">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="bg-transparent border border-line px-4 py-3 text-bone placeholder:text-mute/60 focus:outline-none focus:border-rec transition-colors"
      />
    </div>
  );
}
