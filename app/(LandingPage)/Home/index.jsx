import React from "react";
import HeroSection from "../HeroSection";
import BuildAResume from "../shared/BuildAResume";
import EasySteps from "../easyStep";
import Blogs from "../Blogs";
import OurAI from "../OurAi";
import FAQs from "../FAQs";
import Testimonials from "../Testimonials";

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(135deg, #FEFAD9, #EBF6FC)`,
        }}
      >
        <HeroSection />
      </div>
      <OurAI />
      <BuildAResume />
      <EasySteps />
      <Blogs />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default LandingPage;
