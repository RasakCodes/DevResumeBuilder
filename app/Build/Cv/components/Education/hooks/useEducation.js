"use client";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { enhanceCv } from "../../../api/enhanceCv";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateCv } from "../../../hooks/useUpdateCv";

export const useEducation = () => {
  const [isLoading, setisLoading] = useState(false);
  const { currentCv, isLoading: loading } = useGetCurrentUserResume();
  const AllOldEducation = currentCv?.message?.education || [];
  const cvId = currentCv?.message?._id;
  const { toast } = useToast();
  const router = useRouter();
  const { updateCvData } = useUpdateCv();
  const queryClient = useQueryClient();

  const [education, setEducation] = useState();
  const [isGeneratingCv, setisGeneratingCv] = useState(false);

  useEffect(() => {
    setEducation(
      AllOldEducation.length > 0
        ? AllOldEducation
        : [
            {
              institutionName: "",
              degreeName: "",
              fieldOfStudy: "",
              graduationYear: "",
              currentlyStudying: false,
              errors: {},
            },
          ]
    );
  }, [currentCv]);
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newValue = name === "currentlyStudying" ? e.target.checked : value;
    const newEducation = education?.map((edu, i) =>
      i === index
        ? {
            ...edu,
            [name]: newValue,
            errors: { ...edu.errors, [name]: "" },
          }
        : edu
    );

    setEducation(newEducation);
  };

  const handleDelete = async (index) => {
    const filteredEducation = education.filter((_, i) => i !== index);
    setEducation(filteredEducation);
    await updateCvData({ education: filteredEducation });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    let allValid = true;
    const newEducation = education?.map((edu) => {
      return { ...edu };
    });

    if (allValid) {
      await updateCvData({ education: newEducation, isComplete: true });
      toast({
        title: "Success! ✅",
        description: "Education details added successfully",
      });
      queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);

      setisGeneratingCv(true);

      await enhanceCv(cvId);
      setisGeneratingCv(false);
      router.push(`/Build/Cv/${cvId}`);
    } else {
      setEducation(newEducation);
    }
    setisLoading(false);
  };

  return {
    education,
    setEducation,
    handleInputChange,
    handleDelete,
    handleSubmit,
    isLoading,
    isGeneratingCv,
  };
};
