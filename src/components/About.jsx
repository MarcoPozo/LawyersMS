import { motion } from "framer-motion";
import abogadosTeam from "../assets/abogadosTeam.jpg";

export default function About() {
  return (
    <section
      id="nosotros"
      className="w-full bg-[var(--color-bg)] text-[var(--color-text)] font-body px-6 py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-12 md:gap-20 items-center">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <img
            src={abogadosTeam}
            alt="Equipo de abogados"
            className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[450px]"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-titulo mb-4 text-[var(--color-text)]">
            Comprometidos con tu defensa
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            En LawyersMS, nuestro equipo de abogados altamente capacitados se
            dedica a brindar soluciones legales efectivas y personalizadas.
            Nuestro compromiso es defender tus derechos con integridad,
            experiencia y cercanía humana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
