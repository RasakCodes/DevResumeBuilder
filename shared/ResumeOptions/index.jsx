"use client";
import React from "react";
import { useHandleCarousel } from "@/app/(LandingPage)/hooks/useHandleCarousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ResumeCard from "./ResumeCard";
import { StartScrashIcon } from "../component/icons/StartScrashIcon";
import { Linkedin } from "../component/icons/Linkedin";
import { ExistingResume } from "../component/icons/ExistingResume";
import useConnectLinkedin from "../hook/useConnectLinkedin";
import { Modal } from "../component/Modal";
import UploadExistingResume from "./components/uploadExistingResume";
import { GetStartedSkeletonCard } from "../SkeletonsComponents";
import { useCreateANewCvProject } from "./hooks/useCreateANewCvProject";
import IsLoading from "../loading/IsLoading";

const ResumeOption = ({ className }) => {
  const { carouselRef, scroll, startAutoScroll } = useHandleCarousel();
  startAutoScroll();

  const { initiateConnectLinkedin, isLoading } = useConnectLinkedin();
  const { createProject, isLoading: cvCreateLoading } =
    useCreateANewCvProject();

  if (isLoading) {
    return <GetStartedSkeletonCard />;
  }

  return (
    <div className="relative">
      {cvCreateLoading && (
        <div className="absolute inset-0 flex justify-center items-start z-10">
          <IsLoading />
        </div>
      )}

      <div className="py-12 overflow-hidden flex justify-center items-center flex-col max-w-[90%] mx-auto">
        <div className="text-center text-2xl font-semibold mb-8 mx-4 md:w-[400px] lg:text-4xl">
          What are your plans for creating Your resume?
        </div>

        <div
          ref={carouselRef}
          className={`flex flex-wrap gap-3 no-scrollbar w-full ${className}`}
        >
          {/* Start from Scratch */}
          <div className="cursor-pointer" onClick={createProject}>
            <ResumeCard
              title={"Start from Scratch"}
              description={
                "Craft a distinctive resume that reflects your unique professional story."
              }
              img={<StartScrashIcon />}
            />
          </div>

          {/* Connect to LinkedIn */}
          <div className="cursor-pointer" onClick={initiateConnectLinkedin}>
            <ResumeCard
              title={"Connect to LinkedIn"}
              description={
                "Seamlessly integrate your LinkedIn for a cohesive professional profile."
              }
              img={<Linkedin />}
            />
          </div>

          {/* Upload existing resume */}
          <Modal
            classStyle={"md:w-[50%]"}
            trigger={
              <button>
                <ResumeCard
                  title={"Upload Existing Resume"}
                  description={
                    "Import your existing resume for a quick and easy start."
                  }
                  img={<ExistingResume />}
                />
              </button>
            }
          >
            <UploadExistingResume />
          </Modal>
        </div>

        <div className="flex justify-end items-end w-full md:hidden">
          <div
            className="bg-[#F4F4F4] font-bold flex justify-center items-center my-4 rounded-full w-[50px] h-[50px]"
            onClick={() => scroll("right")}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOption;
