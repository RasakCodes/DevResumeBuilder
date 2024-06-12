import React from "react";

const ResumeCard = ({ img, title, description }) => {
  return (
    <div>
      <div className="flex-shrink-0 justify-center items-center flex-col gap-y-1 w-full md:w-[300px] bg-[#F4F4F4] p-6 md:p-10 shadow-lg mx-2">
        <div className="h-[200px] flex justify-center items-center">{img}</div>
        <h2 className="font-semibold text-lg mb-2 text-center">{title}</h2>
        <p className="text-gray-500 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
