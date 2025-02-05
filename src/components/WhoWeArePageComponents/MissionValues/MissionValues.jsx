import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaAward,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import "./missionValues.css";

const MissionValues = () => {
  return (
    <section className="mission-values-section">
      <div className="mission-values-container">
        <motion.div
          className="mission-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-description">
            At IFBC Info Tech, our mission is to revolutionize the software
            industry by providing cutting-edge, client-focused solutions that
            drive innovation and success. We are committed to building a future
            where technology empowers businesses to achieve more.
          </p>
          <p className="mission-description">
            We believe in harnessing the power of modern technologies to craft
            scalable, efficient, and user-friendly applications that cater to
            diverse business needs. Our approach is centered on continuous
            learning, adaptation, and leveraging emerging trends to deliver
            future-proof solutions.
          </p>
          <p className="mission-description">
            By fostering a culture of innovation, collaboration, and integrity,
            we strive to make a lasting impact on businesses worldwide. Our goal
            is not just to build software but to create meaningful digital
            experiences that enhance productivity, engagement, and long-term
            growth.
          </p>
        </motion.div>
        <motion.div
          className="values-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="values-title">Core Values</h2>
          <div className="values-list">
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h3>Innovation</h3>
              <p>Pushing boundaries with creative and advanced solutions.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Integrity</h3>
              <p>Building trust through transparency and honesty.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Client-Centric</h3>
              <p>Prioritizing customer success with tailored solutions.</p>
            </div>
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>Delivering high-quality, reliable, and scalable products.</p>
            </div>
            <div className="value-card">
              <FaRocket className="value-icon" />
              <h3>Collaboration</h3>
              <p>Growing together as a team and with our clients.</p>
            </div>
            <div className="value-card">
              <FaSyncAlt className="value-icon" />
              <h3>Adaptability</h3>
              <p>Embracing change and evolving with technology trends.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;
