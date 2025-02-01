import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Briefcase, TrendingUp } from "lucide-react";
import "./whyChooseUs.css";

const features = [
  {
    icon: <Rocket size={48} />,
    title: "Innovation-Driven Solutions",
    description:
      "We leverage cutting-edge technologies to create powerful, scalable solutions tailored to your needs.",
  },
  {
    icon: <ShieldCheck size={48} />,
    title: "Security & Reliability",
    description:
      "Our software solutions prioritize security, ensuring data protection and compliance with industry standards.",
  },
  {
    icon: <Briefcase size={48} />,
    title: "Expertise Across Industries",
    description:
      "From FinTech to AI-powered automation, we build solutions that drive real impact.",
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Proven Track Record",
    description:
      "With a history of successful projects, our team consistently delivers excellence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="wc-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Why Businesses Trust IFBC?
        </motion.h2>
        <div className="features-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
