import { motion } from "framer-motion";
import {
  FaGavel,
  FaBalanceScale,
  FaHandshake,
  FaUserShield,
  FaFileContract,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Services() {
  const servicios = [
    {
      icon: <FaGavel size={28} />,
      title: "Defensa Penal",
      desc: "Protegemos tus derechos con estrategias sólidas en casos penales.",
    },
    {
      icon: <FaBalanceScale size={28} />,
      title: "Derecho Civil",
      desc: "Resolución de conflictos contractuales, patrimoniales y familiares.",
    },
    {
      icon: <FaHandshake size={28} />,
      title: "Asesoría Legal",
      desc: "Te orientamos legalmente en decisiones personales y empresariales.",
    },
    {
      icon: <FaUserShield size={28} />,
      title: "Derecho Laboral",
      desc: "Defendemos tus derechos como trabajador o empleador.",
    },
    {
      icon: <FaFileContract size={28} />,
      title: "Contratos",
      desc: "Redacción, análisis y validación de contratos legales.",
    },
    {
      icon: <FaBuilding size={28} />,
      title: "Derecho Corporativo",
      desc: "Apoyo legal para empresas, sociedades y emprendimientos.",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-[var(--color-primary)] text-white px-4 sm:px-6 py-20 md:py-28 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-titulo mb-12 text-[var(--color-gold)]">
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--color-primary-light)] p-6 rounded-lg shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}>
              <div className="mb-4 text-[var(--color-gold)]">
                {servicio.icon}
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {servicio.title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
                {servicio.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center">
          <Link
            to="contacto"
            smooth
            duration={600}
            className="inline-block bg-[var(--color-gold)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-md shadow hover:bg-opacity-90 transition cursor-pointer text-sm sm:text-base">
            Solicitar asesoría gratuita
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
