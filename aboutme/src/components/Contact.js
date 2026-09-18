import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import "./Contact.css";

const contactLinks = [
  { icon: <FaEnvelope />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "sebastian-diaz-jimenez", href: profile.linkedin },
  { icon: <FaGithub />, label: "GitHub", value: "@SebastianDiazJ", href: profile.github },
];

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-blobs" aria-hidden="true">
        <span className="blob blob-contact-a" />
        <span className="blob blob-contact-b" />
      </div>
      <div className="container contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contacto</span>
          <h2>
            ¿Construimos algo <span className="gradient-text">juntos?</span>
          </h2>
          <p className="contact-lead">
            Estoy buscando nuevas oportunidades como desarrollador. Si tienes un proyecto, una vacante o simplemente
            quieres conversar de tecnología, escríbeme.
          </p>

          <div className="contact-links">
            {contactLinks.map((c) => (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="contact-link" key={c.label}>
                <span className="contact-link-icon">{c.icon}</span>
                <span>
                  <strong>{c.label}</strong>
                  <span className="contact-link-value">{c.value}</span>
                </span>
              </a>
            ))}
            <div className="contact-link contact-link-static">
              <span className="contact-link-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                <strong>Ubicación</strong>
                <span className="contact-link-value">{profile.location}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form card"
          action="https://formspree.io/f/xwprozon"
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="form-row">
            <label>
              <span>Nombre</span>
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="tu@email.com" required />
            </label>
          </div>
          <label>
            <span>Mensaje</span>
            <textarea name="message" rows="5" placeholder="Cuéntame en qué estás trabajando..." required />
          </label>

          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_captcha" value="true" />

          <button type="submit" className="btn btn-primary" disabled={status !== "idle"}>
            {status === "sending" && "Enviando..."}
            {status === "sent" && "¡Mensaje enviado!"}
            {status === "idle" && (
              <>
                <FaPaperPlane /> Enviar mensaje
              </>
            )}
          </button>
          {status === "sent" && <p className="form-success">Gracias, te responderé pronto.</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
