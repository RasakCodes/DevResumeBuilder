import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PopUpAnimate from "@/shared/animate/PopUpAnimate";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceCard = ({ Icon, title, descrip, borderColor, bgColor, link }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      transition={{ type: "spring", damping: 15, stiffness: 300 }}
      className="px-3 md:px-10 max-w-[95%] md:max-w-[50%] my-3 shadow-xl rounded-2xl"
      style={{
        boxShadow:
          "10px 0 15px rgba(249, 229, 71, 0.2), -10px 0 15px rgba(249, 229, 71, 0.1)",
        borderTop: `3px solid ${borderColor}`,
      }}
    >
      <PopUpAnimate>
        <div className=" flex flex-col gap-y-5 py-5 p-5">
          <div
            className="w-[70px] h-[70px] rounded-full flex justify-center items-center p-4"
            style={{ backgroundColor: bgColor }}
          >
            <Icon />
          </div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <div
            className="text-gray-600 flex gap-y-2 flex-col w-full break-words"
            dangerouslySetInnerHTML={{ __html: descrip }}
          />
          <Link href={link || ""}>
            <button className="inline-flex items-center py-2  text-xl text-center text-black rounded-lg focus:ring-4 focus:outline-none">
              Start building
              <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
            </button>
          </Link>
        </div>
      </PopUpAnimate>
    </motion.div>
  );
};

export default ServiceCard;
