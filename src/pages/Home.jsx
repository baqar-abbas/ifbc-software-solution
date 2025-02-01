import React from "react";
import Headline from "../components/HompageComponents/Headline/Headline";
import TabsSection from "../components/HompageComponents/TabsSection/TabsSection";
import WhyChooseUs from "../components/HompageComponents/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Headline />
      <TabsSection />
      <WhyChooseUs />
      <h1>This is Home page</h1>
    </div>
  );
};

export default Home;
