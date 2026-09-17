import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import "./Projects.css";

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Proyectos</span>
          <h2>Cosas que he construido</h2>
          <p>Una selección de proyectos personales y de práctica, de API reactivas a plataformas con impacto social.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              className={`project-card card ${p.featured ? "is-featured" : ""}`}
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <div className="project-top">
                <h3>{p.title}</h3>
                <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${p.title} en GitHub`} className="project-link">
                  <FaGithub />
                </a>
              </div>

              <p className="project-desc">{p.description}</p>

              {p.highlight && (
                <p className="project-highlight">
                  <FaArrowUpRightFromSquare /> {p.highlight}
                </p>
              )}

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> Ver todos los proyectos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
