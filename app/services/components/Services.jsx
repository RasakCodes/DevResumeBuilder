"use client";
import React from "react";
import { HeaderText } from "../shared/Text/Header";
import { Paragraph } from "../shared/Text/Paragraph";
import ServiceCard from "./ServiceCard";
import { AIGeneration } from "@/shared/component/icons/AIGeneration";
import { CoverLetter } from "@/shared/component/icons/coverLetter";
import { InterViewIcon } from "@/shared/component/icons/interviewIcon";
import { OptimizeResume } from "@/shared/component/icons/OptimizeResume";

const Services = () => {
  return (
    <div>
      <div className=" py-16 px-4 sm:px-6 lg:py-24">
        <div className="max-w-[90%] mx-auto flex flex-wrap lg:flex-nowrap gap-y-5">
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-start text-left lg:pr-10">
            {/* <button className="mb-4 bg-[#ffffff33]  py-2 px-4 rounded-full font-semibold">
              Create
            </button> */}
            <HeaderText text={"Our Services"} className={""} />

            <Paragraph
              text="Discover how our specialized services are designed to elevate your career prospects in the tech industry. Each service is tailored to meet your individual needs, ensuring you not only meet but exceed the expectations of potential employers."
              className={" text-start"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-7 my-20">
        {/* <YellowBgText text="Create" /> */}
        <HeaderText text="Build a Resume" />
        <Paragraph text="Craft your perfect resume with our easy-to-use builder." />
        <ServiceCard
          title={"Build a Resume"}
          descrip={`
            <p>Create a powerful resume that catches the eye of recruiters by telling your professional story. Our AI-driven technology and industry expertise ensure your skills and experiences are showcased in the best light.<p/>
            <p>We personalize your resume to reflect your unique accomplishments while employing impactful design techniques to ensure it's visually appealing and easy to read.</p>
            <p>This service is perfect for job seekers at any career stage, aiming to make a powerful first impression on recruiters.</p>
          `}
          Icon={AIGeneration}
          borderColor={"#f9e54733"}
          bgColor={"#F9E54733"}
          link="GetStarted"
        />
        <ServiceCard
          title={"Build a Cover Letter"}
          descrip={`
          <p> A compelling cover letter can make a significant difference. Our service helps you articulate why you're the perfect fit for the role, connecting your skills with the company's needs.</p>
          <p>This is ideal for making a memorable connection with potential employers and standing out in a competitive job application process.</p>
          `}
          Icon={CoverLetter}
          borderColor={"#1293EC"}
          bgColor={"#1293EC33"}
          link="/Build/CoverLetter/TemplateSelectStarter"
        />{" "}
        <ServiceCard
          title={"Interview Prep Template"}
          descrip={`
           <p>Walk into your interviews with confidence. Our customized prep templates guide you through potential questions and effective responses, tailored specifically to the job you're applying for.</p>
           <p>This comprehensive preparation template not only reduces interview anxiety but also enhances your presentation skills, making you a memorable candidate..</p>
          `}
          Icon={InterViewIcon}
          borderColor={"#F5749B"}
          bgColor={"#F5749B33"}
          link="/Build/InterviewPrepTemplate"
        />{" "}
        <ServiceCard
          title={"Optimize Your Resume"}
          descrip={`
          <p>Perfect your existing resume to precisely match the job you're aiming for. This service fine-tunes your resume by highlighting your most relevant skills and expertise, ensuring it resonates with the specific demands of the job description.</p>
          <p>Ideal for job seekers who have a solid foundation but need that extra edge to align their resume with specific opportunities, enhancing their chances of landing their dream job in the tech industry.</p>
          `}
          Icon={OptimizeResume}
          borderColor={"#9747FF"}
          bgColor={"#9747FF33"}
          link="/Build/OptimizeResume/TemplateSelectStarter"
        />
      </div>
    </div>
  );
};

export default Services;
