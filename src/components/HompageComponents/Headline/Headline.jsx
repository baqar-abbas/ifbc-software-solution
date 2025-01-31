import React from "react";
import { motion } from "framer-motion";
import "./headline.css";

const Headline = () => {
  return (
    <section className="headline">
      <motion.div
        className="overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="headline-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Innovative Software Solutions for Your Business
        </motion.h1>
        <motion.p
          className="headline-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          We help businesses thrive with cutting-edge technology and custom
          software solutions.
        </motion.p>
        <motion.button
          className="headline-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Headline;
