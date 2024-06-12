import { getSearchParams } from "@/shared/lib/getSearchParams";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

export const useUpdateCoverLetterData = (page) => {
  const [isLoading, setisLoading] = useState();

  let coverLetterId;
  const { Resultid } = useParams();

  if (page == "resultPage") {
    coverLetterId = Resultid;
  } else {
    coverLetterId = getSearchParams("id");
  }

  const updateCoverLetter = async (data) => {
    setisLoading(true);
    try {
      const endpoint = `${window.location.origin}/api/User/CoverLetter/${coverLetterId}`;
      return await axios.patch(endpoint, data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return {
    updateCoverLetter,
    isLoading,
  };
};
