"use client";
import { useToast } from "@/components/ui/use-toast";
import { useHandleStepChangeFunc } from "./usehandleStepChangeFunc";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { useUpdateCv } from "./useUpdateCv";

export function useSkills() {
  const { incrementSteps } = useHandleStepChangeFunc();
  const queryClient = useQueryClient();
  const cvId = getSearchParams("id");

  const [isLoading, setisLoading] = useState(false);
  const { toast } = useToast();
  const { updateCvData } = useUpdateCv();

  const onSubmit = async () => {
    const data = JSON.parse(localStorage.getItem("skills"));
    if (data.length < 1) {
      toast({
        title: "Error",
        description: "Skills cannot be empty",
      });
      return;
    }
    setisLoading(true);

    await updateCvData({ skills: data });
    toast({
      title: "Success! ✅",
      description: "Skills  Added Successfully",
    });
    setisLoading(false);
    queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);

    incrementSteps();
  };

  return {
    onSubmit,
    isLoading,
  };
}
