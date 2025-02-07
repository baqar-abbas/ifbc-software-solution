import React from "react";
import ContactUsHeadline from "../components/ContactUsPageComponents/ContactUsHeadline";
import ContactForm from "../components/ContactUsPageComponents/ContactForm/ContactForm";
import ContactInfo from "../components/ContactUsPageComponents/ContactInfo/ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <ContactUsHeadline />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
