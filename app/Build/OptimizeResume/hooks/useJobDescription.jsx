import { InputEnum } from "@/shared/api/enums";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useJobDescription = () => {
  const cvId = getSearchParams("id");
  const { currentCv } = useGetCurrentUserResume();
  const [isLoading, setisLoading] = useState(false);
  const [isGeneratingCv, setisGeneratingCv] = useState(false);
  const oldJobDes = currentCv?.message?.optimizeResume[0]?.jobDesc;
  const router = useRouter();

  const formSchema = z.object({
    jobDescription: z
      .string()
      .min(1, { message: "Job Description is required" }),
  });
  const jobDescriptionFields = {
    label: "Job Description",
    name: "jobDescription",
    placeholder: "Enter a brief description of the job area",
    required: true,
    type: InputEnum.TEXTAREA,
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { jobDescription: oldJobDes },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("id", cvId);
    formData.append("JobDesc", data?.jobDescription);
    setisLoading(true);
    try {
      const res = await axios.patch(
        "/api/User/optimizeResume/jobDescription",
        formData
      );
      if (res) {
        setisGeneratingCv(true);
        await axios.post("/api/ai/optimize-resume", {
          id: cvId,
        });
        router.push(`/Build/Cv/${cvId}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
      setisGeneratingCv(false);
    }
  };

  return { jobDescriptionFields, onSubmit, form, isLoading, isGeneratingCv };
};
