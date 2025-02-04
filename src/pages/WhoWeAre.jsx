import React from "react";
import WhoWeAreHeadline from "../components/WhoWeArePageComponents/Headline/WhoWeAreHeadline";
import CeoSection from "../components/WhoWeArePageComponents/CeoSection/CeoSection";
import OurTeam from "../components/WhoWeArePageComponents/OurTeam/OurTeam";

const WhoWeAre = () => {
  return (
    <div>
      <WhoWeAreHeadline />
      <CeoSection />
      <OurTeam />
    </div>
  );
};

export default WhoWeAre;
