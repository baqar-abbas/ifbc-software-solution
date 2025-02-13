import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4egetd4",
        "template_7785occ",
        form.current,
        "ARNBPThqfQDsrc9j9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent! We'll get back to you shortly.");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section className="cuf-section">
      <div className="cuf-container">
        <motion.h2
          className="cuf-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="cuf-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We would love to hear from you! Please fill out the form below and
          we'll get in touch shortly.
        </motion.p>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="cuf-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cuf-row">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="cuf-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              className="cuf-input"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="cuf-input"
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            className="cuf-textarea"
            required
          ></textarea>
          <button type="submit" className="cuf-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
