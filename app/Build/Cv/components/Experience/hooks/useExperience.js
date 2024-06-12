import { useHandleStepChangeFunc } from "@/app/Build/Cv/hooks/usehandleStepChangeFunc";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateCv } from "../../../hooks/useUpdateCv";

export const useExperience = () => {
  const { currentCv, isLoading: loading } = useGetCurrentUserResume();
  const { toast } = useToast();
  const { incrementSteps } = useHandleStepChangeFunc();
  const { updateCvData } = useUpdateCv();
  const [isLoading, setisLoading] = useState(false);
  const AllOldExperience = currentCv?.message?.experience || [];
  const [experiences, setExperiences] = useState();
  const queryClient = useQueryClient();
  const cvId = getSearchParams("id");
  useEffect(() => {
    setExperiences(
      AllOldExperience?.length > 0
        ? AllOldExperience
        : [
            {
              companyName: "",
              startDate: "",
              endDate: "",
              jobTitle: "",
              responsibilities: "",
              achievements: "",
              currentlyWorking: false,
              errors: {},
            },
          ]
    );
  }, [currentCv, loading]);
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newValue = name === "currentlyWorking" ? e.target.checked : value;
    const newExperiences = experiences?.map((experience, i) =>
      i === index
        ? {
            ...experience,
            [name]: newValue,
            errors: { ...experience.errors, [name]: "" },
          }
        : experience
    );
    if ((name, value)) {
      setExperiences(newExperiences);
    }
  };

  const handleDelete = async (index) => {
    const filteredExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(filteredExperiences);
    await updateCvData({ experience: filteredExperiences });
  };

  const validateForm = (experience) => {
    let errors = {};
    // if (!experience.companyName)
    //   errors.companyName = "Company name is required";
    if (experience.companyName && !experience.startDate)
      errors.startDate = "Start date is required";
    if (!experience.jobTitle) errors.jobTitle = "Job title is required";
    // if (!experience.responsibilities)
    //   errors.responsibilities = "Responsibilities are required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    let allValid = true;
    const newExperiences = experiences?.map((experience) => {
      const errors = validateForm(experience);
      if (Object.keys(errors).length > 0) {
        allValid = false;
      }
      return { ...experience, errors };
    });

    if (allValid) {
      await updateCvData({ experience: newExperiences });
      toast({
        title: "Success! ✅",
        description: "Work Experience Added Successfully",
      });
      queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);

      incrementSteps();
    } else {
      setExperiences(newExperiences);
    }
    setisLoading(false);
  };

  return {
    experiences,
    setExperiences,
    handleInputChange,
    handleDelete,
    handleSubmit,
    isLoading,
  };
};
