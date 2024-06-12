import React from "react";
import HeroPage from "./components/HeroPage";
import PricingOptions from "./components/PricingOptions";
import PricingPlan from "./components/PricingPlan";

const Pricing = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <HeroPage />
      <PricingOptions />
      <PricingPlan />
    </div>
  );
};

export default Pricing;
