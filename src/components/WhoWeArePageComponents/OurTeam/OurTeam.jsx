import React from "react";
import { motion } from "framer-motion";
import "./ourTeam.css";

const teamMembers = [
  {
    name: "Baqar Abbas",
    role: "Software Developer",
    image: "/images/baqar2.PNG",
  },
  {
    name: "Omar Farooq Khan",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sohail Ahmed",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "M Shayan Shakeel",
    role: "Software Developer",
    // image: "https://randomuser.me/api/portraits/men/50.jpg",
    image: "/images/shayan.jpg",
  },
  {
    name: "Syed Basit Mehndi",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Emily Davis",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Jane Smith",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="team-section">
      <motion.h2
        className="team-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
