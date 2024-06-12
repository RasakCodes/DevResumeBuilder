import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animation1717158366924.json";

const AnimateLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default AnimateLoader;
