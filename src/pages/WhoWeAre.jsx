import React from "react";
import WhoWeAreHeadline from "../components/WhoWeArePageComponents/Headline/WhoWeAreHeadline";
import CeoSection from "../components/WhoWeArePageComponents/CeoSection/CeoSection";
import OurTeam from "../components/WhoWeArePageComponents/OurTeam/OurTeam";
import MissionValues from "../components/WhoWeArePageComponents/MissionValues/MissionValues";
import WhyChooseUs from "../components/WhoWeArePageComponents/WhyChooseUs/WhyChooseUs";
import WwaCta from "../components/WhoWeArePageComponents/Cta/WwaCta";

const WhoWeAre = () => {
  return (
    <div>
      <WhoWeAreHeadline />
      <CeoSection />
      <OurTeam />
      <MissionValues />
      <WhyChooseUs />
      <WwaCta />
    </div>
  );
};

export default WhoWeAre;
