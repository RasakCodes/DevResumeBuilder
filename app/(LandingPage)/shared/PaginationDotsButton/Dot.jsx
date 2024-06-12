import React from "react";

const Dot = ({ count, activeIndex }) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`inline-block h-2 w-2 rounded-full ${
            index === activeIndex ? "bg-yellow-500" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
  );
};

export default Dot;
