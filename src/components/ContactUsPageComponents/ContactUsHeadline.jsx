import React from "react";
import { motion } from "framer-motion";
import "./contactUsHeadline.css";

const ContactUsHeadline = () => {
  return (
    <section className="cuh-section">
      <motion.div
        className="cuh-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="cuh-title">Get in Touch</h1>
        <p className="cuh-subtitle">
          We’d love to hear from you. Whether you have a question or need
          assistance, we’re here for you.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactUsHeadline;
