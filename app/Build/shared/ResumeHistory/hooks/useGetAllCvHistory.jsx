import { useState, useEffect } from "react";
import Http from "@/shared/helper/htttp";

const fetchAllUserCvs = async () => {
  const endpoint = "/api/User/Cv/getAllUserCv";
  try {
    const response = await Http.get({ endpoint });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetAllCvHistory = () => {
  const [cvData, setCvData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);
      try {
        const result = await fetchAllUserCvs();
        setCvData(result.message || []);
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    cvData,
    isLoading,
    isError,
    error,
  };
};
