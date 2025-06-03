import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "Ana Torres",
    comentario:
      "Excelente servicio. Me ayudaron con un caso laboral complicado y siempre me sentí respaldada.",
    profesion: "Contadora",
  },
  {
    nombre: "Carlos Méndez",
    comentario:
      "Su atención fue rápida, clara y efectiva. Volvería a contratarlos sin dudarlo.",
    profesion: "Empresario",
  },
  {
    nombre: "Lucía Rojas",
    comentario:
      "Gracias a su asesoría pude resolver un problema familiar de forma pacífica y legal.",
    profesion: "Psicóloga",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-20 md:py-28 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-titulo mb-12">
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-[var(--color-border)] p-6 rounded-lg shadow-md text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}>
              <p className="text-[var(--color-text-secondary)] mb-4 italic">
                “{testimonio.comentario}”
              </p>
              <h4 className="font-bold text-[var(--color-primary)]">
                {testimonio.nombre}
              </h4>
              <span className="text-sm text-[var(--color-text-secondary)]">
                {testimonio.profesion}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
