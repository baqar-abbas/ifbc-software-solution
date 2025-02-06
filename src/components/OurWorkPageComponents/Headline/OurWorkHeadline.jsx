import React from "react";
import { motion } from "framer-motion";
import "./ourWorkHeadline.css";

const OurWorkHeadline = () => {
  return (
    <section className="our-work-headline">
      <motion.div
        className="our-work-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="our-work-title">
          Transforming Ideas into Reality – Our Work Speaks for Itself!
        </h1>
        <p className="our-work-subtitle">
          At IFBC Info Tech, we create cutting-edge digital solutions that drive
          business success. Explore our portfolio and see how we bring visions
          to life!
        </p>
      </motion.div>
    </section>
  );
};

export default OurWorkHeadline;
