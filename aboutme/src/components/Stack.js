import React from "react";
import { motion } from "framer-motion";
import { skillCategories, marqueeSkills } from "../data/skills";
import "./Stack.css";

function MarqueeRow({ items, reverse, duration }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`} style={{ animationDuration: `${duration}s` }}>
        {doubled.map((item, i) => (
          <span className="chip marquee-chip" key={i}>
            <span className="marquee-icon">{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stack() {
  const half = Math.ceil(marqueeSkills.length / 2);
  const rowA = marqueeSkills.slice(0, half);
  const rowB = marqueeSkills.slice(half);

  return (
    <section className="section stack" id="stack">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Stack</span>
          <h2>Tecnologías con las que trabajo</h2>
          <p>De backend en Java/Spring a low-code empresarial: el stack que uso depende del problema, no al revés.</p>
        </motion.div>
      </div>

      <div className="marquee-wrap">
        <MarqueeRow items={rowA} duration={26} />
        <MarqueeRow items={rowB} reverse duration={30} />
      </div>

      <div className="container">
        <div className="stack-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              className="stack-card card"
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3>{cat.label}</h3>
              <div className="stack-chips">
                {cat.items.map((item) => (
                  <span className="chip" key={item.name}>
                    <span className="marquee-icon">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
