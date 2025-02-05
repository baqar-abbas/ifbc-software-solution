import React from "react";
import { motion } from "framer-motion";
import "./whoWeAreHeadline.css";

const WhoWeAreHeadline = () => {
  return (
    <section className="who-we-are-headline">
      <motion.div
        className="headline-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="headline-title">Who We Are</h1>
        <p className="headline-subtext">
          Driving innovation and excellence in the tech industry. Meet the team
          behind IFBC Info Tech.
        </p>
        <motion.a
          href="#services"
          className="headline-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Team
        </motion.a>
      </motion.div>
    </section>
  );
};

export default WhoWeAreHeadline;
