import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clientTestimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    feedback:
      "IFBC Smart Tech provided us with an outstanding software solution that streamlined our operations. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Founder, Digital Edge",
    feedback:
      "Their expertise in cloud solutions helped us scale seamlessly. Professional and efficient team!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Brown",
    role: "CTO, NextGen Solutions",
    feedback:
      "The mobile app they developed was beyond our expectations! Great UI/UX and smooth performance.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "James Williams",
    role: "COO, FutureTech",
    feedback:
      "Reliable and innovative solutions. Their team exceeded our expectations with their professionalism and quality work.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Olivia Davis",
    role: "Head of Marketing, SoftEdge",
    feedback:
      "Their analytics solutions transformed our data insights, allowing us to make informed decisions efficiently.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const ClientTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <span className="testimonial-role">{testimonial.role}</span>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestimonials;
