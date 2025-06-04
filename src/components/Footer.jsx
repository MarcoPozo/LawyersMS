import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-light)] text-white px-4 sm:px-6 py-12 font-body">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-titulo text-xl mb-4 text-[var(--color-gold)]">
            LawyersMS
          </h3>
          <p className="text-sm">
            Defendemos tus derechos con ética, profesionalismo y cercanía.
            Contáctanos para una asesoría personalizada.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[var(--color-gold)]">
            Enlaces
          </h4>
          <ul className="space-y-2 text-sm">
            {["inicio", "nosotros", "servicios", "contacto"].map((seccion) => (
              <li key={seccion}>
                <Link
                  to={seccion}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:underline">
                  {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[var(--color-gold)]">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📞 (02) 345 6789</li>
            <li>📱 +593 997 75 0258</li>
            <li>✉️ moonstudioopro@gmail.com</li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg">
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition"
              aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition"
              aria-label="Instagram">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition"
              aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-gold)] transition"
              aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[var(--color-gold)]">
            Horario
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Lunes a Viernes: 08h00 - 17h00</li>
            <li>Sábado: 08h00 - 12h00</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white border-t border-[var(--color-border)] pt-6">
        Desarrollado por MoonStudio 💛💙❤️
      </div>
    </footer>
  );
}
