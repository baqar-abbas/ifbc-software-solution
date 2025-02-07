import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Award } from "lucide-react";
import "./whyChooseUs.css";

const reasons = [
  {
    icon: <ShieldCheck size={48} />,
    title: "Reliable & Secure",
    description: "We prioritize security and reliability in all our solutions.",
  },
  {
    icon: <Users size={48} />,
    title: "Customer-Centric Approach",
    description: "Our clients are at the heart of everything we do.",
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Innovative & Scalable",
    description: "Future-proof and scalable solutions tailored for growth.",
  },
  {
    icon: <Award size={48} />,
    title: "Proven Expertise",
    description: "Years of experience delivering high-quality tech solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      <div className="wcu-container">
        <motion.h2
          className="wcu-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="wcu-grid">
          {reasons.map((reason, index) => (
            <motion.div
              className="wcu-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="wcu-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
