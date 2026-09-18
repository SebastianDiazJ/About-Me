import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-blobs" aria-hidden="true">
        <span className="blob blob-experience-a" />
      </div>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Experiencia</span>
          <h2>Dónde he trabajado</h2>
          <p>De soporte en producción a desarrollo Full Stack: así ha sido mi camino en los últimos años.</p>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              className="timeline-item"
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <span className={`timeline-dot ${exp.current ? "is-current" : ""}`} />

              <div className="timeline-card card">
                <div className="timeline-top">
                  <span className="mono-tag timeline-period">{exp.period}</span>
                  {exp.current && <span className="chip timeline-badge">Actual</span>}
                </div>

                <h3>{exp.role}</h3>
                <p className="timeline-company">
                  {exp.company} <span className="dot-sep">·</span>{" "}
                  <span className="timeline-modality">
                    <FaMapMarkerAlt /> {exp.modality}
                  </span>
                </p>

                <ul className="timeline-impact">
                  {exp.impact.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {exp.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
