import React from "react";
import { motion } from "framer-motion";
import "./headlineServices.css";

const HeadlineServices = () => {
  return (
    <section className="services-headline">
      <motion.div
        className="headline-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="headline-title">
          Empowering Businesses with Cutting-Edge Solutions
        </h1>
        <p className="headline-subtext">
          At IFBC Smart Tech, we deliver innovative and scalable software
          solutions tailored to your business needs.
        </p>
        <motion.a
          href="#services"
          className="headline-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeadlineServices;
