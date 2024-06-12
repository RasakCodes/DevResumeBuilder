"use client";
import { InputEnum } from "@/shared/api/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import jobTitle from "@/data/JobTitle.json";
import { useHandleStepChangeFunc } from "./usehandleStepChangeFunc";
import { useToast } from "@/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { useQueryClient } from "@tanstack/react-query";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { useUpdateCv } from "./useUpdateCv";
import { useUpdateCoverLetterData } from "../../CoverLetter/hooks/useUpdateCoverLetter";
import { useSession } from "next-auth/react";

export function usePersonalInfo(type) {
  const { currentCv } = useGetCurrentUserResume(type);
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const cvId = getSearchParams("id");
  const [summary, setsummary] = useState("");

  const savedData = currentCv?.message;
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);
  const { updateCvData } = useUpdateCv();
  const { updateCoverLetter } = useUpdateCoverLetterData();

  const personalInfo = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
      type: InputEnum.TEXT,
    },
    {
      label: "Last Name",
      name: "lastName",
      placeholder: "Enter your last name",
      required: true,
      type: InputEnum.TEXT,
    },
    {
      label: "Job Title",
      name: "jobTitle",
      placeholder: "job title",
      required: false,
      options: jobTitle,
      type: InputEnum.SELECT_OR_TEXT,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email Address",
      required: true,
      type: InputEnum.EMAIL,
    },
    {
      label: "LinkedIn Profile URL",
      name: "linkedin",
      placeholder: "LinkedIn Profile URL ",
      required: false,
      type: InputEnum.URL,
    },
    {
      label: "Professional Summary",
      name: "summary",
      placeholder: "Summary",
      required: false,
      type: InputEnum.TEXTAREA,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Your Address",
      required: false,
      type: InputEnum.TEXT,
    },
    {
      label: "phone",
      name: "phone",
      placeholder: "Your phone phone",
      required: false,
      type: InputEnum.TEXT,
    },
  ];

  const formSchema = z.object({
    email: z
      .string()
      .optional()
      .nullable()
      .refine(
        (val) =>
          val === null ||
          val === "" ||
          val === undefined ||
          /.+@.+\..+/.test(val),
        {
          message: "Invalid email address",
        }
      ),

    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    jobTitle: z.any(),
    linkedin: z.string().optional().nullable(),
    summary: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getFormDefaultValues(savedData, session),
  });

  useEffect(() => {
    if (savedData) form.reset(getFormDefaultValues(savedData, session));
    setsummary(savedData?.summary);
  }, [savedData, form]);
  const { incrementSteps } = useHandleStepChangeFunc(type);
  const onSubmit = useCallback(
    async (data) => {
      const formatJobTitle = (jobTitle) => {
        if (typeof jobTitle === "object" && jobTitle !== null) {
          return jobTitle.value;
        }
        return jobTitle;
      };

      const submissionData = {
        ...data,
        summary: summary,
        jobTitle: formatJobTitle(data.jobTitle),
      };
      setisLoading(true);
      try {
        if (type === "Cv") {
          await updateCvData(submissionData);
        } else {
          await updateCoverLetter(submissionData);
        }

        toast({
          title: "Success! ✅",
          description: "Personal Info Added Successfully",
        });
        queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);
        incrementSteps(1);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "Failed to update data.",
        });
      } finally {
        setisLoading(false);
      }
    },
    [
      type,
      updateCvData,
      updateCoverLetter,
      toast,
      queryClient,
      cvId,
      incrementSteps,
    ]
  );
  return {
    form,
    onSubmit,
    isLoading,
    personalInfo,
    summary,
    setsummary,
  };
}
// function getFormDefaultValues(savedData, session) {
//   const savedJobTitle = savedData?.jobTitle || "";
//   // const jobTitleOption = jobTitle.find((item) => item.label === savedJobTitle);
//   return {
//     firstName: savedData?.firstName || session?.firstName || "",
//     lastName: savedData?.lastName || session?.lastName || "",
//     jobTitle: { label: savedJobTitle, value: savedJobTitle },

//     email: savedData?.email || session?.email || "",
//     linkedin: savedData?.linkedin || "",
//     summary: savedData?.summary || "",
//     phone: savedData?.phone || "",
//     address: savedData?.address || "",
//   };
// }

function getFormDefaultValues(savedData, session) {
  const savedJobTitle = savedData?.jobTitle;
  let jobTitleOption;

  if (typeof savedJobTitle === "string") {
    jobTitleOption = jobTitle.find((item) => item.label === savedJobTitle) || {
      label: savedJobTitle,
      value: savedJobTitle,
    };
  } else if (savedJobTitle && typeof savedJobTitle === "object") {
    jobTitleOption = savedJobTitle;
  }

  return {
    firstName: savedData?.firstName || session?.firstName || "",
    lastName: savedData?.lastName || session?.lastName || "",
    jobTitle: jobTitleOption || null,
    email: savedData?.email || session?.email || "",
    linkedin: savedData?.linkedin || "",
    summary: savedData?.summary || "",
    phone: savedData?.phone || "",
    address: savedData?.address || "",
  };
}
