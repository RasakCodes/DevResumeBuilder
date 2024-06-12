import { useState, useCallback } from "react";
import { useUpdateCv } from "../../hooks/useUpdateCv";
import useResumeStore from "@/shared/store/PreviewResumeSelect";

export const useEditForm = (cvData, setCvData) => {
  const { updateCvData } = useUpdateCv("resultPage");
  const setResumeData = useResumeStore((state) => state.setResumeData);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditForm = useCallback(async () => {
    setIsLoading(true);
    console.log("heyy");
    try {
      await updateCvData(cvData);
    } catch (error) {
      console.error("Error updating CV data", error);
    }
    setIsLoading(false);
  }, [cvData, updateCvData]);

  const handleSummaryChange = useCallback(
    (value) => {
      const newCvData = { ...cvData, summary: value?.target?.value };
      setCvData(newCvData);
      setResumeData(newCvData);
    },
    [cvData, setCvData, setResumeData]
  );

  const handleExperienceChange = useCallback(
    (index, value, field) => {
      const newCvData = {
        ...cvData,
        experience: cvData.experience.map((item, idx) =>
          idx === index ? { ...item, [field]: value } : item
        ),
      };
      setCvData(newCvData);
      setResumeData(newCvData);
    },
    [cvData, setCvData, setResumeData]
  );

  return {
    isLoading,
    handleEditForm,
    handleSummaryChange,
    handleExperienceChange,
  };
};
