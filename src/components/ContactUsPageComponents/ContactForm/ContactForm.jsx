import React from "react";
import { motion } from "framer-motion";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <section className="cuf-section">
      <div className="cuf-container">
        <motion.h2
          className="cuf-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="cuf-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We would love to hear from you! Please fill out the form below and
          we'll get in touch shortly.
        </motion.p>
        <motion.form
          className="cuf-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cuf-row">
            <input
              type="text"
              placeholder="Your Name"
              className="cuf-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="cuf-input"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="cuf-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="cuf-textarea"
            required
          ></textarea>
          <button type="submit" className="cuf-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
