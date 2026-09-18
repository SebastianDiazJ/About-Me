import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";
import "./Footer.css";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="section-blobs" aria-hidden="true">
        <span className="blob blob-footer-a" />
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">Sebastián Díaz</p>
            <p className="footer-tag">Desarrollador Full Stack · Medellín, Colombia</p>
          </div>

          <nav className="footer-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          SEBASTIÁN DÍAZ
        </div>

        <div className="footer-bottom">
          <p>© {year} Sebastián Díaz Jiménez. Todos los derechos reservados.</p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Volver arriba">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
