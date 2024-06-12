"use client";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputEnum } from "@/shared/api/enums";
import { useEffect, useState } from "react";
import { enhanceCoverLetter } from "../api/enhanceCoverLetter";
import { useRouter } from "next/navigation";
import { useUpdateCoverLetterData } from "./useUpdateCoverLetter";
import { useToast } from "@/components/ui/use-toast";

export function useJobDesc() {
  const [isLoading, setisLoading] = useState(false);
  const [isGeneratingCoverLetter, setisGeneratingCoverLetter] = useState(false);
  const { updateCoverLetter } = useUpdateCoverLetterData();
  const { toast } = useToast();

  const router = useRouter();
  const { currentCv: CoverLetter, loading } =
    useGetCurrentUserResume("CoverLetter");

  const savedData = CoverLetter?.message;
  const formSchema = z.object({
    companyName: z.string().optional().nullable(),
    companyAddress: z.string().optional().nullable(),
    companyCity: z.string().optional().nullable(),
    jobDescription: z.string().nullable().optional(),
  });

  const jobDescriptionFields = [
    {
      label: "Company",
      name: "companyName",
      placeholder: "Enter your company",
      type: InputEnum.TEXT,
    },
    {
      label: "Address",
      name: "companyAddress",
      placeholder: "Enter Job address",
      type: InputEnum.TEXT,
    },
    {
      label: "City",
      name: "companyCity",
      placeholder: "Enter Job city",
      type: InputEnum.TEXT,
    },

    {
      label: "Job Description",
      name: "jobDescription",
      placeholder: "Enter a brief description of the job area",
      required: true,
      type: InputEnum.TEXTAREA,
    },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getFormDefaultValues(savedData),
  });

  const onSubmit = async (data) => {
    setisLoading(true);
    try {
      await updateCoverLetter({ jobInfo: data });

      setisGeneratingCoverLetter(true);
      const res = await enhanceCoverLetter(savedData._id);
      setisGeneratingCoverLetter(false);
      if (res.message) router.push(`/Build/CoverLetter/${savedData?._id}`);
    } catch (error) {
      // const errorJson = JSON.parse(error.message);
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
        variant: "destructive",
        className: "rounded-xl",
      });
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && savedData) {
      form.reset(getFormDefaultValues(savedData));
    }
  }, [loading, savedData]);

  return {
    jobDescriptionFields,
    form,
    isLoading,
    isGeneratingCoverLetter,
    onSubmit,
  };
}
function getFormDefaultValues(savedData) {
  return {
    companyName: savedData?.jobInfo?.companyName || "",
    companyAddress: savedData?.jobInfo?.companyAddress || "",
    companyCity: savedData?.jobInfo?.companyCity || "",
    jobDescription: savedData?.jobInfo?.jobDescription || "",
  };
}
