import React from "react";
import { motion } from "framer-motion";
import { approach } from "../data/approach";
import "./Approach.css";

function Approach() {
  return (
    <section className="section approach">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Cómo trabajo</span>
          <h2>Cinco ideas, un mismo objetivo</h2>
          <p>Cinco ideas que guían cómo encaro cada proyecto, del primer requerimiento al último despliegue.</p>
        </motion.div>

        <div className="approach-list">
          {approach.map((step, i) => (
            <motion.div
              className="approach-item"
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
            >
              <span className="approach-number">{step.n}</span>
              <div className="approach-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
