"use client";
import React from "react";
import ExperienceComp from "./ExperienceComp";
import ButtonComp from "@/shared/Button";
import { useExperience } from "./hooks/useExperience";
import { Delete } from "lucide-react";

const Experience = () => {
  const {
    experiences,
    setExperiences,
    handleInputChange,
    handleDelete,
    handleSubmit,
    isLoading,
  } = useExperience();

  if (experiences?.length > 0) {
    return (
      <div className="flex flex-col gap-y-7">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-accent mb-3">
            Work Experience
          </h2>
          <p className="text lg">
            Add details of your work experience below. Start by listing the
            latest organization you have worked in.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {experiences != null &&
            experiences?.map((exp, index) => (
              <div key={index} className="my-5 boxDetails border p-3">
                <div className="flex justify-end items-end w-full ">
                  <button type="button" onClick={() => handleDelete(index)}>
                    <Delete />
                  </button>
                </div>
                <ExperienceComp
                  index={index}
                  formData={exp}
                  handleInputChange={handleInputChange}
                  errors={exp.errors}
                />
              </div>
            ))}
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={() =>
                setExperiences([
                  ...experiences,
                  {
                    companyName: "",
                    startDate: "",
                    endDate: "",
                    jobTitle: "",
                    responsibilities: "",
                    achievements: "",
                    errors: {},
                  },
                ])
              }
              className="text-black border border-[#F9E547] hover:bg-[#F9E547] focus:outline-none focus:ring-4 focus:ring-[#F9E547] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#F9E547] dark:hover:bg-[#F9E547] dark:focus:ring-[#F9E547]"
            >
              Add Experience
            </button>
            <ButtonComp
              type="button"
              disabled={isLoading}
              text={isLoading ? "loading.." : "Next"}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default Experience;
