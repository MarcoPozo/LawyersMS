import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "testimonios", label: "Testimonios" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 font-body">
      <div className="flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-[var(--color-border)] text-white shadow-md">
        <h1 className="text-xl font-bold tracking-wide font-titulo">
          LawyersMS
        </h1>

        {!menuOpen && (
          <button
            className="md:hidden text-2xl z-50 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú">
            <FaBars />
          </button>
        )}

        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={500}
                className="cursor-pointer relative after:content-[''] after:block after:h-[2px] after:bg-[var(--color-gold)] after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key={"mobile-menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-lg uppercase font-medium z-40">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-3xl text-[var(--color-primary)] cursor-pointer"
              aria-label="Cerrar menú">
              <FaTimes />
            </button>

            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-[var(--color-primary)] hover:text-[var(--color-gold)] transition">
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
