import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <section className="ci-section">
      <div className="ci-container">
        <motion.h2
          className="ci-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="ci-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="ci-info-item">
            <FaMapMarkerAlt className="ci-icon" />
            <p>9350 Wilshire Blvd, Suite 203, Beverly Hills, CA 90212</p>
          </div>
          <div className="ci-info-item">
            <FaPhoneAlt className="ci-icon" />
            <p>323-GET-WORK (323-438-9675)</p>
          </div>
          <div className="ci-info-item">
            <FaEnvelope className="ci-icon" />
            {/* <p>info@ifbcinfotech.com</p> */}
            <p>info@ifbc.co</p>
          </div>
        </motion.div>
        <motion.div
          className="ci-socials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
