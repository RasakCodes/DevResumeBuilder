import React from "react";

const HeroPage = () => {
  return (
    <div className="flex justify-between items-center  py-12 bg-white">
      <h1 className="md:text-5xl font-extrabold text-gray-900">
        Choose Your Plan
      </h1>
      <p className="text-lg text-gray-600 max-w-[50%]">
        Unlock the full potential of our AI-powered resume generator with our
        flexible subscription plans. Choose the plan that suits your needs and
        start creating professional resumes effortlessly.
      </p>
    </div>
  );
};

export default HeroPage;
