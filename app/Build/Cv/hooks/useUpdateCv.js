import { useToast } from "@/components/ui/use-toast";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import axios from "axios";
import { useParams } from "next/navigation";

export const useUpdateCv = (page) => {
  let cvId;
  const { Resultid } = useParams();

  if (page == "resultPage") {
    cvId = Resultid;
  } else {
    cvId = getSearchParams("id");
  }
  const { toast } = useToast();
  const updateCvData = async (data) => {
    try {
      const endpoint = `${window.location.origin}/api/User/Cv/${cvId}`;

      const res = await axios.patch(endpoint, data);
      toast({
        title: "Success! ✅",
        description: "Cv Updated",
      });
      return res;
    } catch (error) {
      const errorJson = JSON.parse(error.message);
      toast({
        title: "Error",
        description:
          errorJson.error || "Something went wrong, please try again.",
        variant: "destructive",
        className: "rounded-xl",
      });
    }
  };

  return {
    updateCvData,
  };
};
