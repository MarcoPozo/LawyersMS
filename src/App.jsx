import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <Hero />
      <About />
    </AnimatePresence>
  );
}
