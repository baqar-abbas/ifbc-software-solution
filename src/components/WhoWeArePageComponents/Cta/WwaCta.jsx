import React from "react";
import { motion } from "framer-motion";
import "./wwaCta.css";

const WwaCta = () => {
  return (
    <section className="wwa-cta">
      <motion.div
        className="wwa-cta-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="wwa-cta-title">Let's Build Something Great Together</h2>
        <p className="wwa-cta-text">
          Partner with <strong>IFBC Infotech</strong> to transform your ideas
          into cutting-edge digital solutions. Whether it's a new website,
          mobile app, or an enterprise solution, we've got you covered.
        </p>
        <a href="/contact" className="wwa-cta-button">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default WwaCta;
