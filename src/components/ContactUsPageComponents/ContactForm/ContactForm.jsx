import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4egetd4",
        "template_7785occ",
        e.target,
        "ARNBPThqfQDsrc9j9"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent! We'll get back to you shortly.");
          reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("An error occurred, please try again.");
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
          onSubmit={handleSubmit(sendEmail)}
          className="cuf-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cuf-row">
            <div className="cuf-field">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className={`cuf-input ${errors.user_name ? "input-error" : ""}`}
                {...register("user_name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.user_name && (
                <span className="error-message">
                  {errors.user_name.message}
                </span>
              )}
            </div>
            <div className="cuf-field">
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className={`cuf-input ${
                  errors.user_email ? "input-error" : ""
                }`}
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.user_email && (
                <span className="error-message">
                  {errors.user_email.message}
                </span>
              )}
            </div>
          </div>
          <div className="cuf-field">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className={`cuf-input ${errors.subject ? "input-error" : ""}`}
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 5,
                  message: "Subject must be at least 5 characters",
                },
              })}
            />
            {errors.subject && (
              <span className="error-message">{errors.subject.message}</span>
            )}
          </div>
          <div className="cuf-field">
            <textarea
              placeholder="Your Message"
              name="message"
              className={`cuf-textarea ${errors.message ? "input-error" : ""}`}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>
          <button type="submit" className="cuf-button">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
