"use client";
import { motion } from "framer-motion";
import React from "react";

export const YellowBgText = ({ text, className }) => {
  const breathingVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex px-4 py-2 justify-center items-center space-x-2.5 rounded-full  ${className}`}
      variants={breathingVariants}
      animate="animate"
    >
      <p className={`text-black text-center font-normal text-lg leading-6`}>
        {text}
      </p>
    </motion.div>
  );
};
