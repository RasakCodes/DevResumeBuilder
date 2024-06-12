import { useState, useEffect } from "react";
import Http from "@/shared/helper/htttp";

const fetchAllUserCoverLetter = async () => {
  const endpoint = "/api/User/CoverLetter/getAllCoverLetter";
  try {
    const response = await Http.get({ endpoint });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetAllCoverLetterHistory = () => {
  const [cvData, setCvData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    try {
      const result = await fetchAllUserCoverLetter();
      setCvData(result.message || []);
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return {
    cvData,
    isLoading,
    isError,
    error,
    refetch,
  };
};
