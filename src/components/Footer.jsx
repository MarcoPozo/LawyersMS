import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-light)] text-white px-6 py-12 font-body">
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
            <li>
              <Link
                to="inicio"
                smooth
                duration={500}
                className="cursor-pointer hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="nosotros"
                smooth
                duration={500}
                className="cursor-pointer hover:underline">
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="servicios"
                smooth
                duration={500}
                className="cursor-pointer hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                smooth
                duration={500}
                className="cursor-pointer hover:underline">
                Contacto
              </Link>
            </li>
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
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[var(--color-gold)]">
            Horario
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Lunes a Viernes: 08h00 - 17h00</li>
            <li>Sábado: 08h00 - 12h00</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white border-t border-[var(--color-border)] pt-6">
        Desarrollado por MoonStudio 💛💙❤️
      </div>
    </footer>
  );
}
