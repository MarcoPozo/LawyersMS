import { Link } from "react-scroll";
import { motion } from "framer-motion";
import heroImg from "../assets/abogadoFondo.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] h-screen bg-cover bg-center font-body"
      style={{ backgroundImage: `url(${heroImg})`, color: "var(--color-text)" }}>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-full px-6 sm:px-8 md:px-10 xl:px-0 flex flex-col items-start justify-center text-bg max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight font-titulo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Defensa Legal con Ética y Excelencia
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}>
            Asesoramos y representamos tus intereses legales con integridad, experiencia y
            compromiso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="bg-[var(--color-gold)] hover:bg-[var(--color-primary-light)] px-6 py-3 rounded-md font-semibold cursor-pointer transition text-sm sm:text-base">
              Agenda tu consulta
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
