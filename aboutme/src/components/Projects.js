import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import "./Projects.css";

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-blobs" aria-hidden="true">
        <span className="blob blob-projects-a" />
        <span className="blob blob-projects-b" />
      </div>

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
      </div>

      <div className="container project-stack-container">
        <div className="project-stack">
          {projects.map((p, i) => (
            <div className="project-frame" key={p.title}>
              <motion.article
                className={`project-stack-card glass ${p.featured ? "is-featured" : ""}`}
                style={{ top: `${88 + i * 16}px`, zIndex: i + 1 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-top">
                  <h3>{p.title}</h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${p.title} en GitHub`}
                    className="project-link"
                  >
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
            </div>
          ))}
        </div>
      </div>

      <div className="container">
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
