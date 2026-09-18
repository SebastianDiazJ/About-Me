import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";
import { profile } from "../data/profile";
import heroPhotoWebp from "../assets/images/sebastian-hero.webp";
import heroPhotoJpg from "../assets/images/sebastian-hero.jpg";
import "./Hero.css";

function useTypewriter(words, typingMs = 55, pauseMs = 1400, deletingMs = 30) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
        setText(next);
      }, deleting ? deletingMs : typingMs);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index]);

  return text;
}

const badges = [
  { label: "Aprendizaje continuo", className: "badge-top" },
  { label: "Resolución de problemas", className: "badge-left" },
  { label: "Foco en resultados", className: "badge-right" },
];

function Hero() {
  const typed = useTypewriter(profile.roles);
  const visualRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = visualRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <div className="hero-grid dot-grid" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {profile.available && (
            <span className="availability-pill">
              <span className="dot-live" /> Disponible para nuevos retos
            </span>
          )}

          <p className="hero-kicker mono-tag">&lt;{profile.role.replace(/\s/g, "")} /&gt;</p>

          <h1 className="hero-title">
            Hola, soy <span className="gradient-text">{profile.firstName}</span>
          </h1>

          <div className="hero-role" aria-live="polite">
            <span>{typed}</span>
            <span className="caret" />
          </div>

          <p className="hero-desc">{profile.tagline} {profile.bio[0]}</p>

          <div className="hero-actions">
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaDownload /> Descargar CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Hablemos
            </a>
          </div>

          <div className="hero-social">
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

          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ perspective: 1000 }}
        >
          <motion.div className="photo-card" style={{ rotateX, rotateY }}>
            <div className="photo-frame dot-grid" />
            <picture>
              <source srcSet={heroPhotoWebp} type="image/webp" />
              <img src={heroPhotoJpg} alt={profile.name} className="hero-photo" />
            </picture>

            {badges.map((b) => (
              <motion.span
                key={b.label}
                className={`float-badge ${b.className}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {b.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-cue"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;
