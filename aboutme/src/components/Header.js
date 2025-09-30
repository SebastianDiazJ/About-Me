import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Header() {
  return (
    <motion.header
      className="header-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sebastián Díaz Jiménez
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Desarrollador Full Stack Junior
        </motion.p>

        <motion.a
          href="/SebasCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Ver CV
        </motion.a>

        {/* Flecha animada para guiar hacia abajo */}
        <motion.div
          className="scroll-down"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about">
            <FaArrowDown size={28} />
            <p>Clic aquí</p>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
