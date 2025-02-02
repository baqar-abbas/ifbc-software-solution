import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Database } from "lucide-react";
import { Link } from "react-router-dom";
import "./ourServices.css";

const services = [
  {
    icon: <Code size={48} />,
    title: "Custom Software Development",
    description:
      "Tailored solutions to streamline your business processes with state-of-the-art technology.",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Mobile App Development",
    description:
      "Engaging and intuitive mobile experiences designed to captivate your audience.",
  },
  {
    icon: <Cloud size={48} />,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud architectures to power your digital transformation.",
  },
  {
    icon: <Database size={48} />,
    title: "Data Analytics",
    description:
      "Harnessing the power of data to drive informed decision-making and growth.",
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="os-container">
        <motion.h2
          className="os-section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Services
        </motion.h2>
        <div className="os-grid">
          {services.map((service, index) => (
            <motion.div
              className="os-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="os-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="os-btn">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
