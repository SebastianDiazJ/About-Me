import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de Ingeniería de Software y tecnólogo en Desarrollo de
        Software, con 2 años de experiencia en desarrollo Front-End y Back-End. 
        He trabajado en diseño y optimización de aplicaciones web y bases de datos. 
        Manejo tecnologías como <b>JavaScript, C#, .NET, Python, ReactJS, NodeJS, 
        Java y Spring Boot</b>, además de <b>Power Platform</b> 
        (Power Apps, Automate, BI, Pages y Copilotos IA).
      </p>

      <p>
        Me destaco por mi proactividad, análisis y orientación a resultados, siempre 
        en constante aprendizaje. Actualmente trabajo como <b>Desarrollador Backend 
        en Seti SA</b> con Java, Spring Boot y AWS.
      </p>

      <div className="about-buttons">
        <a href="#experience" className="btn">Mi experiencia</a>
        <a href="#contact" className="btn btn-alt">Contáctame</a>
      </div>
    </motion.section>
  );
}

export default About;
