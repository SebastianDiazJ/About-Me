import React, { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { profile } from "../data/profile";
import avatar from "../assets/images/sebastian-avatar.webp";
import "./Navbar.css";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#top" className="navbar-brand">
            <img src={avatar} alt={profile.name} className="navbar-avatar" />
            <span>
              Sebastián <span className="gradient-text">Díaz</span>
            </span>
          </a>

          <nav className="navbar-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="navbar-cta">
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <FaDownload /> CV
            </a>
          </div>

          <button className="navbar-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menú">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
              <FaDownload /> Descargar CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
