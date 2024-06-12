import WINDOW from "@/shared/lib/mockWindow";
import axios from "axios";
import { useState } from "react";

export const useCreateNewCoverLetter = () => {
  const [isLoading, setisLoading] = useState(false);
  async function createProject() {
    WINDOW.localStorage.setItem("CoverLetterCurrentStep", 0);

    try {
      setisLoading(true);
      const res = await axios.post(
        `${window.location.origin}/api/User/CoverLetter/createCoverLetter`
      );
      setisLoading(false);
      return res;
    } catch (error) {}
  }
  return {
    createProject,
    isLoading,
  };
};
