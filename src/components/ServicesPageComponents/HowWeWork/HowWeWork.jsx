import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Code, Rocket } from "lucide-react";
import "./howWeWork.css";

const steps = [
  {
    icon: <Lightbulb size={48} />,
    title: "Consultation",
    description:
      "We discuss your ideas, requirements, and goals to ensure the best solution.",
  },
  {
    icon: <Briefcase size={48} />,
    title: "Planning",
    description:
      "Creating a strategic roadmap and wireframes for your project.",
  },
  {
    icon: <Code size={48} />,
    title: "Development",
    description:
      "Our team brings your project to life with clean and efficient code.",
  },
  {
    icon: <Rocket size={48} />,
    title: "Deployment",
    description:
      "Final testing and launching your project for the world to see.",
  },
];

const HowWeWork = () => {
  return (
    <section className="hww-section">
      <div className="hww-container">
        <motion.h2
          className="hww-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <div className="hww-grid">
          {steps.map((step, index) => (
            <motion.div
              className="hww-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="hww-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
