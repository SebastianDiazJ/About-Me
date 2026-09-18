import React from "react";
import { motion } from "framer-motion";
import { approach } from "../data/approach";
import "./Approach.css";

function Approach() {
  return (
    <section className="section approach">
      <div className="section-blobs" aria-hidden="true">
        <span className="blob blob-approach-a" />
        <span className="blob blob-approach-b" />
      </div>

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
      </div>

      <div className="container approach-stack-container">
        <div className="approach-stack">
          {approach.map((step, i) => (
            <div className="approach-frame" key={step.n}>
              <motion.div
                className="approach-stack-card glass"
                style={{ top: `${88 + i * 18}px`, zIndex: i + 1 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <span className="approach-stack-sheen" aria-hidden="true" />
                <div className="approach-stack-inner">
                  <span className="approach-number">{step.n}</span>
                  <div className="approach-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
