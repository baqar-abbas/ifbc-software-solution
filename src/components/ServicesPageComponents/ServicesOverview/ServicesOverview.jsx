import React, { useState } from "react";
import "./ServicesOverview.css";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    category: "Web",
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Custom web solutions tailored for performance and scalability.",
  },
  {
    id: 2,
    category: "Mobile",
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with seamless UX.",
  },
  {
    id: 3,
    category: "Cloud",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services for modern businesses.",
  },
  {
    id: 4,
    category: "Security",
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with top-tier security solutions.",
  },
];

const categories = ["All", "Web", "Mobile", "Cloud", "Security"];

const ServicesOverview = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section className="so-section">
      <h2 className="so-title">Our Expertise</h2>
      <p className="so-subtitle">
        Cutting-edge technology solutions designed for growth and security.
      </p>

      {/* Filter Buttons */}
      <div className="so-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`so-filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid with Animation */}
      <motion.div layout className="so-grid">
        {filteredServices.map((service) => (
          <motion.div
            layout
            key={service.id}
            className="so-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="so-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-To-Action Section */}
      <div className="so-cta">
        <h3>Ready to Transform Your Business?</h3>
        <p>
          Get in touch with our experts today and take your project to the next
          level!
        </p>
        <a href="/contact" className="so-cta-btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default ServicesOverview;
