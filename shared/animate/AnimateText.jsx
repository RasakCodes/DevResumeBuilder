"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const AnimateText = ({ text, className }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.1, // 10% should be visible before animation starts
  });

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.h1
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`text-3xl text-center md:text-start font-semibold text-gray-900 lg:text-4xl lg:leading-[3.25rem] xl:text-5xl xl:leading-[3.75rem] ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block m"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};
