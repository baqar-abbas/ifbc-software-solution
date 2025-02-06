import React from "react";
import { motion } from "framer-motion";
import "./underConstruction.css";

const UnderConstruction = () => {
  return (
    <section className="uc-section">
      <div className="uc-container">
        <motion.h1
          className="uc-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coming Soon!
        </motion.h1>
        <motion.p
          className="uc-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Stay connected for updates. Something amazing is on its way!
        </motion.p>
        <motion.div
          className="uc-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          🚀
        </motion.div>
        <motion.button
          className="uc-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Notify Me
        </motion.button>
      </div>
    </section>
  );
};

export default UnderConstruction;
