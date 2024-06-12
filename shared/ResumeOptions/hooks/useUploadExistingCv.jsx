import WINDOW from "@/shared/lib/mockWindow";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useUploadExistingCv = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isloading, setisloading] = useState();
  const router = useRouter();

  const handleUpload = async (file) => {
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
    const endpoint = `/api/User/Cv/pdfTextToJson`;
    setisloading(true);
    try {
      const formData = new FormData();
      formData.append("resumePDF", selectedFile);
      WINDOW.localStorage.setItem("CvCurrentStep", 0);
      const res = await axios.post(endpoint, formData);
      if (res?.data?._id) {
        router.push(`/Build/Cv?id=${res?.data?._id}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setisloading(false);
    }
  };
  return {
    handleDrop,
    handleFileChange,
    handleSubmitCvToExtract,
    isloading,
    selectedFile,
  };
};
