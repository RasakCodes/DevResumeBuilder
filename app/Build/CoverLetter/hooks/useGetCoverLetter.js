import { useEffect, useState } from "react";
import useCoverLetterStore from "@/shared/store/PreviewCoverLetterSelect";
import Http from "@/shared/helper/htttp";

export const useGetCoverLetter = (resultId) => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);

  const setcoverLetterData = useCoverLetterStore(
    (state) => state.setcoverLetterData
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!resultId) return;
      setLoading(true);
      try {
        const endpoint = `/api/User/CoverLetter/getAllCoverLetter/${resultId}`;
        const response = await Http.get({ endpoint });
        setDescription(response?.message.result);
        setcoverLetterData(response?.message);
      } catch (error) {
        console.error("Failed to fetch cover letter", error);
        setDescription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resultId]);

  // useEffect(() => {
  //   if (description) {
  //     setcoverLetterData(description);
  //   }
  // }, [description, setcoverLetterData]);

  return { description, loading, setDescription };
};
