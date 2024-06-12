import React from "react";
import { motion } from "framer-motion";

const PopUpAnimate = ({ children, hoverAnimate = true }) => {
  const cardVariants = hoverAnimate
    ? {
        hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.99 },
      }
    : {};

  return (
    <motion.div
      whileTap="tap"
      whileHover={hoverAnimate ? "hover" : ""}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default PopUpAnimate;
