import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaLanguage } from "react-icons/fa";
import { profile } from "../data/profile";
import aboutWebp from "../assets/images/sebastian-about.webp";
import aboutJpg from "../assets/images/sebastian-about.jpg";
import "./About.css";

const facts = [
  { icon: <FaMapMarkerAlt />, label: "Medellín, Colombia" },
  { icon: <FaGraduationCap />, label: "Ingeniería de Software · 8.º semestre" },
  { icon: <FaBriefcase />, label: "3.5+ años de experiencia" },
  { icon: <FaLanguage />, label: "Español nativo · Inglés B2" },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <motion.div
          className="about-media"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-photo-wrap">
            <picture>
              <source srcSet={aboutWebp} type="image/webp" />
              <img src={aboutJpg} alt="Sebastián Díaz" className="about-photo" />
            </picture>
            <div className="about-photo-overlay" />
            <motion.div
              className="about-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="dot-live" />
              {profile.location.split(",")[0]}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">Sobre mí</span>
          <h2>Más que escribir código</h2>
          {profile.bio.map((p, i) => (
            <p key={i} className="about-p">
              {p}
            </p>
          ))}

          <div className="about-facts">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <span className="fact-icon">{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>

          <div className="about-strengths">
            <p className="mono-tag">{"// Fortalezas"}</p>
            <div className="strength-tags">
              {profile.strengths.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
