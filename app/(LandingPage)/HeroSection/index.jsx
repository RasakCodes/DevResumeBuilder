import ButtonComp from "@/shared/Button";
import { AnimateText } from "@/shared/animate/AnimateText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-between max-w-[90%] mx-auto">
      <div className="mx-auto p-8">
        <div className=" flex flex-wrap-reverse justify-between items-center relative">
          <div className="md:w-[50%] md:p-8 ">
            <AnimateText
              text={"Unlock Your Dream Tech Job Today!"}
              className="hidden md:block !text-3xl md:!text-6xl !font-bold text-gray-800 mb-3"
            />

            <AnimateText
              text={"Unlock Your Dream Tech Job Today!"}
              className=" md:hidden t!ext-center !text-3xl  font-bold text-gray-800 mb-3"
            />

            <p className="text-gray-600 mb-8 text-lg text-center md:text-start">
              Craft your path to success with Dev's Resume – your ultimate tool
              for landing a job 2 times faster!
            </p>

            <Link className="flex justify-start" href={"/services"}>
              <ButtonComp text={"Start Building Now"} />
            </Link>
          </div>
          <div className=" lg:block md:w-1/2 ">
            <Image
              src={"/assets/Group 35554.svg"}
              className="lg:w-full"
              alt="Resume Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
