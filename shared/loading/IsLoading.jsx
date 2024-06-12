import React from "react";
import "./loading.css";
import Lottie from "react-lottie";
import animationData from "./Animation-1717164675670.json";

const IsLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie options={defaultOptions} height={400} width={400} />

    // <div className="h-[100vh] flex justify-center items-center">
    //   <div className="flex justify-center items-center">
    //     <div className="loader"></div>
    //   </div>
    // </div>
  );
};

export default IsLoading;
