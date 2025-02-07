import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">IFBC Info Tech</h1>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className={`mobile-menu ${isOpen ? "open" : ""}`}
        >
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/who-we-are" onClick={() => setIsOpen(false)}>
            Who We Are
          </Link>
          <Link to="/our-work" onClick={() => setIsOpen(false)}>
            Our Work
          </Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
