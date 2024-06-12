import React from "react";
import EducationComp from "./EducationComp";
import { useEducation } from "./hooks/useEducation";
import ButtonComp from "../../shared/Button";
import AnimateLoader from "@/app/Build/shared/AnimateLoader";
import { Delete } from "lucide-react";

const Education = () => {
  const {
    education,
    setEducation,
    handleInputChange,
    handleDelete,
    handleSubmit,
    isLoading,
    isGeneratingCv,
  } = useEducation();

  if (isGeneratingCv) {
    return <AnimateLoader />;
  }

  return (
    <div className="flex flex-col gap-y-7">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-accent mb-3">
          Education
        </h2>
        <p className="text lg">
          Add details of your education below. Start by listing your most recent
          educational institution.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {education?.map((edu, index) => (
          <div key={index} className="my-5 boxDetails border p-3">
            <div className="flex justify-end items-end w-full ">
              <button type="button" onClick={() => handleDelete(index)}>
                <Delete />
              </button>
            </div>
            <EducationComp
              index={index}
              formData={edu}
              handleInputChange={handleInputChange}
              errors={edu.errors}
            />
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={() =>
              setEducation([
                ...education,
                {
                  institutionName: "",
                  degreeName: "",
                  fieldOfStudy: "",
                  graduationYear: "",
                  currentlyStudying: false,
                  errors: {},
                },
              ])
            }
            className="text-black border border-[#F9E547] hover:bg-[#F9E547] focus:outline-none focus:ring-4 focus:ring-[#F9E547] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#F9E547] dark:hover:bg-[#F9E547] dark:focus:ring-[#F9E547]"
          >
            Add Education
          </button>
          <ButtonComp
            disabled={isLoading}
            type="submit"
            text={isLoading ? "loading..." : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
