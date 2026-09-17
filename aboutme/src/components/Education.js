import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { education, certifications } from "../data/education";
import "./Education.css";

function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Formación</span>
          <h2>Educación & certificaciones</h2>
          <p>Formación académica y certificaciones que respaldan lo que hago día a día.</p>
        </motion.div>

        <div className="education-grid">
          {education.map((e, i) => (
            <motion.div
              className="edu-card card"
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="edu-icon">
                <FaGraduationCap />
              </span>
              <div>
                <h3>{e.title}</h3>
                <p className="edu-institution">{e.institution}</p>
                <span className="mono-tag">{e.period}</span>
                <p className="edu-desc">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <motion.div
              className="cert-card card"
              key={c.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="cert-icon">
                <FaCertificate />
              </span>
              <span className="cert-code">{c.title}</span>
              <p>{c.name}</p>
              <span className="mono-tag">{c.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
