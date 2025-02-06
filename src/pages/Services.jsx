import React from "react";
import HeadlineServices from "../components/ServicesPageComponents/HeadlineServices/HeadlineServices";
import ServicesOverview from "../components/ServicesPageComponents/ServicesOverview/ServicesOverview";
import HowWeWork from "../components/ServicesPageComponents/HowWeWork/HowWeWork";
import WhyChooseUs from "../components/ServicesPageComponents/WhyChooseUs/WhyChooseUs";
import ClientTestimonials from "../components/ServicesPageComponents/ClientTestimonials/ClientTestimonials";

const Services = () => {
  return (
    <div>
      <HeadlineServices />
      <ServicesOverview />
      <HowWeWork />
      <WhyChooseUs />
      <ClientTestimonials />
    </div>
  );
};

export default Services;
