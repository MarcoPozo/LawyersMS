import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="w-full bg-[var(--color-primary)] text-white px-6 py-20 md:py-28 font-body">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-titulo mb-12 text-center text-[var(--color-gold)]">
          Contáctanos
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.form
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div>
              <label className="block mb-1 text-sm text-white">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md bg-transparent text-white outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-white">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md bg-transparent text-white outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-white">Mensaje</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md bg-transparent text-white outline-none focus:ring-2 focus:ring-[var(--color-gold)]"></textarea>
            </div>

            <button
              type="submit"
              className="bg-[var(--color-gold)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-md shadow hover:bg-opacity-90 transition text-sm cursor-pointer">
              Enviar Mensaje
            </button>
          </motion.form>

          <motion.div
            className="w-full md:w-1/2 h-[350px] md:h-auto"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9084040547173!2d-79.93592742593043!3d-2.1482315372285784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6da57ff88903%3A0x9cf4c01d8fa6e272!2sGuayaquil%2C%20Ecuador!5e0!3m2!1ses-419!2sec!4v1717528414000!5m2!1ses-419!2sec"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md border border-[var(--color-border)]"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
