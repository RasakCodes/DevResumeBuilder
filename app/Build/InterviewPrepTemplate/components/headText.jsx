import React from "react";

const HeadText = ({ title }) => {
  return (
    <div className="bg-[#EEEEEE] border border-[#C4C4C4] w-full py-1 px-3 my-3">
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default HeadText;
