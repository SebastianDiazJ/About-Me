import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Sebastián Díaz Jiménez</h1>
      <p>Desarrollador Full Stack Junior</p>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">
        Descargar CV
      </a>
    </motion.header>
  );
}

export default Header;
