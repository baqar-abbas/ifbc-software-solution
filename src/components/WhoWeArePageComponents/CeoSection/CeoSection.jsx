import React from "react";
import { motion } from "framer-motion";
import "./ceoSection.css";

const CeoSection = () => {
  return (
    <section className="ceo-section">
      <div className="ceo-container">
        <motion.div
          className="ceo-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="ceo-title">About IFBC-President & CEO</h2>
          <h3 className="ceo-name">
            H.S.Tiwana: Navigating Diverse Entrepreneurial Horizons with
            Expertise
          </h3>
          <p>
            Welcome to a world where your business aspirations take flight. H.S.
            Tiwana, a seasoned entrepreneur and franchise expert, invites you to
            embark on a journey through the dynamic realm of business, marked by
            rich experiences and proven success across various industries.
          </p>
          <h4>Educational and Professional Pillars</h4>
          <p>
            H.S.Tiwana melds the academic and practical, fortified by an MBA in
            Sales and Marketing Operations. His educational foundation serves as
            the bedrock upon which his practical experiences across varied
            business ventures are built, offering a holistic and well-rounded
            approach to business consultancy and franchise advice.
          </p>
          <h4>A Spectrum of Entrepreneurial Ventures</h4>
          <p>
            From restaurants and coffee shops to grocery stores and gas
            stations, H.S.Tiwana’s entrepreneurial journey has woven through
            various industries, each offering its own unique insights and
            challenges. His successful ownership and operation of various
            enterprises across different sectors stand testament to his
            versatile and pragmatic approach to business.
          </p>
          <h4>In the Realm of Real Estate and Finance</h4>
          <p>
            H.S.Tiwana’s ventures are not confined to the tangible aspects of
            business but extend into the realms of property and finance. His
            experience as a Realtor provides him a deep understanding of market
            dynamics and property valuation, while his tenure as a Loan Officer
            equips him with the financial acumen to navigate the complex
            financial landscapes of mortgages and loans.
          </p>
          <h4>Guidance Through Retail and Management</h4>
          <p>
            Recognized for his skills in retail and merchandising, Harjeet
            unveils a treasure trove of knowledge in retail operations. His
            insights into customer engagement, inventory management, and
            operational efficiency are pivotal for steering a franchise towards
            success and sustainability.
          </p>
        </motion.div>

        <motion.div
          className="ceo-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/harjeettiwana.jpg"
            alt="H.S. Tiwana"
            className="ceo-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CeoSection;
