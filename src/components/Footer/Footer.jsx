import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-title">IFBC Info Tech</h3>
          <p>
            Delivering innovative software solutions to empower your business.
          </p>
          <p className="footer-contact">
            {/* <strong>Email:</strong> info@ifbcsmarttech.com */}
            <strong>Email:</strong> info@ifbc.co
          </p>
          <p className="footer-contact">
            {/* <strong>Phone:</strong> +1 (234) 567-890 */}
            <strong>Phone: </strong>
            323-GET-WORK 323-438-9675
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/who-we-are">Who We Are</a>
            </li>
            <li>
              <a href="/our-work">Our Work</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IFBC Info Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
