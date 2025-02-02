import React from "react";
import Headline from "../components/HompageComponents/Headline/Headline";
import TabsSection from "../components/HompageComponents/TabsSection/TabsSection";
import WhyChooseUs from "../components/HompageComponents/WhyChooseUs/WhyChooseUs";
import OurServices from "../components/HompageComponents/OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Headline />
      <TabsSection />
      <WhyChooseUs />
      <OurServices />
    </div>
  );
};

export default Home;
