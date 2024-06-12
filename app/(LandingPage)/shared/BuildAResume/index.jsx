import React from "react";
import Card from "./Card";
import { ResumeIcon } from "@/shared/component/icons/Resume";
import { CoverLetter } from "@/shared/component/icons/coverLetter";
import { InterViewIcon } from "@/shared/component/icons/interviewIcon";
import { OptimizeResume } from "@/shared/component/icons/OptimizeResume";

const BuildAResume = () => {
  return (
    <div className=" border-b-2 py-5 max-w-[90%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-y-3 my-16">
        <div className="flex w-24 p-px px-2.5 justify-center items-center space-x-2.5 rounded-full">
          <p className=" text-center font-normal text-lg leading-6">Create</p>
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 lg:text-4xl lg:leading-[3.25rem] xl:text-5xl xl:leading-[3.75rem]">
          Build A Resume
        </h1>
        <p className="text-gray-600 mb-8 text-lg text-center">
          Craft your perfect resume with our easy-to-use builder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 justify-center items-start bg-[#fefdf6] px-2">
          <Card
            title={"Build a Resume"}
            descrip={
              "Transform your professional story into a compelling resume that stands out in the tech industry."
            }
            Icon={<ResumeIcon />}
            link="GetStarted"
            iconBgColor="#f9e54733"
            borderColor="F9E547"
          />{" "}
          <Card
            title={"Build a Cover Letter"}
            descrip={
              "Create a personalized cover letter that speaks directly to your dream employer."
            }
            Icon={<CoverLetter />}
            link="/Build/CoverLetter/TemplateSelectStarter"
            iconBgColor="#1293ec33"
            borderColor="1293EC"
          />
          <div className="relative">
            <Card
              title={"Interview Prep Template"}
              descrip={
                "Ace your interviews with customized preparation templates designed for developers"
              }
              Icon={<InterViewIcon />}
              link="/Build/InterviewPrepTemplate"
              iconBgColor="#1293ec33"
              borderColor="F5749B"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg font-bold">Coming Soon</span>
            </div>
          </div>
          <Card
            title={"Optimize Your Resume"}
            descrip={
              "Enhance your resume's impact with by tailoring it to your target job."
            }
            Icon={<OptimizeResume />}
            link="/Build/OptimizeResume/TemplateSelectStarter"
            iconBgColor="#9747ff33"
            borderColor="9747FF"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildAResume;
