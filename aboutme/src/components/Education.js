import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    title: "Universidad Pascual Bravo",
    period: "En curso",
    description: "Tecnología en Desarrollo de Software e Ingeniería de Software (6.º semestre).",
    icon: <FaGraduationCap />,
  },
  {
    title: "Colegio I.E. Dinamarca",
    period: "2012 – 2022",
    description: "Bachiller Técnico.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Certificación PL-900",
    period: "2025",
    description: "Microsoft Power Platform Fundamentals.",
    icon: <FaCertificate />,
  },
  {
    title: "Certificación PL-200",
    period: "2025",
    description: "Microsoft Power Platform Functional Consultant.",
    icon: <FaCertificate />,
  },
  {
    title: "Scrum Fundamentals Certification",
    period: "2024",
    description: "CertiProf – Metodologías ágiles y Scrum.",
    icon: <FaCertificate />,
  },
  {
    title: "Inglés B2 Conversacional",
    period: "2024 – 2025",
    description: "CIA Idiomas – Inglés Intensivo.",
    icon: <FaCertificate />,
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <h2>Educación & Certificaciones</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <span>{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
