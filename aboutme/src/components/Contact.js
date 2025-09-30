import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Contacto</h2>
      <p>¿Quieres trabajar conmigo o tienes alguna consulta? Escríbeme aquí 👇</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/mgeglqrr" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required />
        <button type="submit" className="btn">Enviar</button>
      </form>

      <div className="social-links">
        <a href="mailto:sebasdj2006@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-diaz-jimenez-5512b7272/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SebastianDiazJ" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
