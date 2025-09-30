import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2025 Sebastián Díaz – Todos los derechos reservados</p>
    </motion.footer>
  );
}

export default Footer;
