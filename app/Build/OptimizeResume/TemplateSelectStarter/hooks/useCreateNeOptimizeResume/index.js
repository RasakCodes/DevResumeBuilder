import axios from "axios";
import { useState } from "react";

export const useCreateNeOptimizeResume = () => {
  const [isLoading, setisLoading] = useState(false);
  async function createProject() {
    try {
      setisLoading(true);
      const res = await axios.post(
        `${window.location.origin}/api/User/Cv/createCv`
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
