import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Http from "@/shared/helper/htttp";

export const useGetAllCoverLetter = () => {
  const { toast } = useToast();

  const [coverLetterData, setcoverLetterData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const getAllCoverLetter = async () => {
    setisLoading(true);
    try {
      const endpoint = `/api/User/CoverLetter/getAllCoverLetter`;
      const data = await Http.get({ endpoint });
      console.log(data);
      setcoverLetterData(data?.message);
    } catch (error) {
      toast({
        title: "error",
        description: error?.response?.data?.error,
      });
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getAllCoverLetter();
  }, []);
  return {
    coverLetterData,
    isLoading,
  };
};
