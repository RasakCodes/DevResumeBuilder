"use client";
import React from "react";
import { motion } from "framer-motion";

const PaginateBox = ({ steps, currentStep, incrementSteps }) => {
  return (
    <div className="border rounded-lg paginateBox">
      <div className="relative">
        <div className="" style={{ padding: "10px" }}>
          <div
            className="absolute w-1 bg-gray-300"
            style={{
              marginLeft: "28px",
              width: "3px",
              top: "30px",
              bottom: "30px",
            }}
          ></div>

          <motion.div
            className="absolute w-1 bg-[#F9E547] origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: (currentStep + 1) / steps.length }}
            transition={{ duration: 0.3 }}
            style={{
              width: "3px",
              marginLeft: "28px",
              top: "30px",
              bottom: `calc(30px + ${(steps.length - currentStep - 1) * 60}px)`,
            }}
          />

          {steps.map((step, index) => (
            <div
              style={{
                padding: "10px",
                zIndex: 999,
              }}
              key={step.title}
              className="flex items-center gap-x-10 gap-y-10 my-2"
            >
              <div
                className={`w-10 z-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer ${
                  index === currentStep ? "text-black" : ""
                }`}
                style={{
                  backgroundColor: index <= currentStep ? "#F9E547" : "#F4F4F4",
                }}
                onClick={() => incrementSteps(index)}
              >
                {index + 1}
              </div>

              <h2 className={`${index <= currentStep ? "font-bold" : ""}`}>
                {step.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginateBox;
