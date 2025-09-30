import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaCloud } from "react-icons/fa";

const experiences = [
  {
    title: "Seti SA – Desarrollador Backend Java-Spring",
    period: "Septiembre 2025 - Actual",
    description:
      "Desarrollo backend con Java y Spring Boot, despliegues en AWS y mantenimiento de microservicios.",
    icon: <FaCloud />,
  },
  {
    title: "Protección S.A. – Desarrollador Pasante",
    period: "Enero 2025 - Julio 2025",
    description:
      "Soluciones empresariales con Microsoft Power Apps, Power Automate y Power BI. Co-líder comunidad técnica interna +50 personas. Mantenimiento microservicios Java & Spring Boot.",
    icon: <FaServer />,
  },
  {
    title: "Soval – Líder de desarrollo digital",
    period: "2023 - 2024",
    description:
      "Diseño y desarrollo de plataformas web y e-commerce con React y JavaScript. Mejora de UX y automatización de flujos.",
    icon: <FaLaptopCode />,
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experiencia Laboral</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span>{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
