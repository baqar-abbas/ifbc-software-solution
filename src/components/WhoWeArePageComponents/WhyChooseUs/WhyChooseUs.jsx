import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaHeadset,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import "./whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="wwa-why-choose-us">
      <div className="wwa-container">
        <motion.div
          className="wwa-text-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="wwa-section-title">Why Choose IFBC Infotech?</h2>
          <p className="wwa-section-description">
            We are more than just a tech company; we are your strategic partners
            in growth. Our expertise, innovation, and commitment set us apart.
            Here’s why businesses trust us:
          </p>
          <div className="wwa-benefits-grid">
            <div className="wwa-benefit-item">
              <FaCode className="wwa-benefit-icon" />
              <h3>Cutting-Edge Technology</h3>
              <p>
                We harness the latest frameworks and tools to deliver next-gen
                solutions.
              </p>
            </div>
            <div className="wwa-benefit-item">
              <FaUsers className="wwa-benefit-icon" />
              <h3>Client-Centric Approach</h3>
              <p>
                Every solution is tailored to meet the unique needs of our
                clients.
              </p>
            </div>
            <div className="wwa-benefit-item">
              <FaRocket className="wwa-benefit-icon" />
              <h3>Scalable & Efficient</h3>
              <p>
                Our solutions grow with your business, ensuring long-term
                success.
              </p>
            </div>
            <div className="wwa-benefit-item">
              <FaHeadset className="wwa-benefit-icon" />
              <h3>24/7 Support</h3>
              <p>
                Reliable assistance whenever you need it, ensuring business
                continuity.
              </p>
            </div>
            <div className="wwa-benefit-item">
              <FaCogs className="wwa-benefit-icon" />
              <h3>Innovative Solutions</h3>
              <p>We think ahead, solving challenges before they arise.</p>
            </div>
            <div className="wwa-benefit-item">
              <FaShieldAlt className="wwa-benefit-icon" />
              <h3>Security & Reliability</h3>
              <p>
                Your data and systems are always protected with enterprise-grade
                security.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="wwa-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/why-choose-us.jpg"
            alt="Why Choose Us"
            className="wwa-why-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
