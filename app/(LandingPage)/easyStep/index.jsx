import React from "react";
import ProcessSteps from "./ProcessStep";
import { YellowBgText } from "../shared/Text/YellowBgText";
import { Paragraph } from "../shared/Text/Paragraph";
import AnimateImage from "@/shared/animate/AnimateImage";
import { AnimateText } from "@/shared/animate/AnimateText";
import ButtonComp from "@/shared/Button";
import Link from "next/link";

const EasySteps = () => {
  return (
    <div className=" border-b-2 py-5">
      <div className="max-w-[90%] mx-auto mt-20 mb-40 ">
        <div className="flex justify-start md:justify-between items-center flex-wrap">
          <div className="md:w-1/2  flex gap-y-3 flex-col ">
            {/* <YellowBgText text="Easy Steps" className={" w-36"} /> */}

            <AnimateText text={"How It Works"} className={"text-start "} />
            <Paragraph
              text="Effortless 4-Step Process to Build Your Resume that will make you standout from the crowd!"
              className={"text-start"}
            />
            <Link href={"/service"}>
              <ButtonComp text={"Start Building"} />
            </Link>

            <div>
              <AnimateImage
                src={"/assets/easyStep.svg"}
                alt="easy step"
                className={"w-[50%]"}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <ProcessSteps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
