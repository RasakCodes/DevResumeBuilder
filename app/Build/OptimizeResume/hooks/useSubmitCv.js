"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHandleStepChangeFunc } from "../../Cv/hooks/usehandleStepChangeFunc";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { useQueryClient } from "@tanstack/react-query";

export const useSubmitCv = (cvId) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setisloading] = useState(false);
  const { incrementSteps } = useHandleStepChangeFunc("optimizeResume");
  const { currentCv } = useGetCurrentUserResume();
  const queryClient = useQueryClient();
  const [error, seterror] = useState(false)

  console.log(currentCv, "currentCv");
  const { fileName, parsedText } =
    currentCv?.message?.optimizeResume?.[0]?.extractedCvText ?? {};

  useEffect(() => {
    if (parsedText && fileName) {
      setSelectedFile(true);
    }
  }, [currentCv]);

  const handleUpload = async (file) => {
    const interval = setInterval(() => {
      setUploadProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 200);

    setSelectedFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    handleUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    handleUpload(file);
  };

  const handleSubmitCvToExtract = async () => {
    setisloading(true);
    try {
      const formData = new FormData();
      formData.append("resumePDF", selectedFile);
      formData.append("id", cvId);

      const res = await axios.patch(`/api/User/optimizeResume`, formData);
      console.log(res, "res");
      queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);
      incrementSteps();
    } catch (error) {
      seterror(true)
      console.error("Error uploading file:", error);
    } finally {
      setisloading(false);
    }
  };

  return {
    handleUpload,
    uploadProgress,
    selectedFile,
    setSelectedFile,
    handleSubmitCvToExtract,
    isLoading,
    fileName,
    parsedText,
    handleFileChange,
    handleDrop,
    error,
  };
};
