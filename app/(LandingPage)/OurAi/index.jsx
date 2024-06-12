import React from "react";
import { HeaderText } from "../shared/Text/Header";
import { Paragraph } from "../shared/Text/Paragraph";
import AnimateImage from "@/shared/animate/AnimateImage";

const OurAI = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5  border-b-2 py-10 pb-20 max-w-[90%] mx-auto">
      {/* <YellowBgText text="AI Specialization" /> */}

      <HeaderText
        text={"Powered By The Latest In AI Technology"}
        className={"xl:leading-[2rem]"}
      />
      <Paragraph text="Our tools analyze job trends and optimize your application materials to give you the best chance at landing your dream job. We utilize an AI that is specifically trained for" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:w-[80%]">
        <AiMEdia
          img="assets/Microsoft_Office_SharePoint_(2019–present).svg"
          text={"SharePoint Developers"}
        />
        <AiMEdia
          img="/assets/Microsoft-Power-BI-Logo.svg"
          text="Power Platform Developers"
        />
        <AiMEdia
          img="/assets/microsoft-power-platform-logo-4E514E7575-seeklogo.svg"
          text={"Power BI Developers"}
        />
      </div>
    </div>
  );
};

export default OurAI;

const AiMEdia = ({ img, text }) => {
  return (
    <div className="flex justify-center  items-center  gap-3 my-5">
      <AnimateImage src={img} alt={text} className={" w-[30px] grayscale"} />
      <h3 className="text-gray-400 font-semibold text-[20px] text-center md:text-left">
        {text}
      </h3>
    </div>
  );
};
