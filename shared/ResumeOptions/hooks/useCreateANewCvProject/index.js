import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import WINDOW from "@/shared/lib/mockWindow";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateANewCvProject = () => {
  const [isLoading, setisLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function createProject() {
    WINDOW.localStorage.setItem("CvCurrentStep", 0);
    setisLoading(true);
    try {
      const endpoint = "/api/User/Cv/createCv";
      const data = await Http.post({ endpoint });
      setisLoading(false);
      toast({
        title: "Success! ✅",
        description: "Project created",
      });
      console.log(data, "data");
      router.push(`/Build/Cv?id=${data.message}`);
    } catch (error) {
      console.log(error);
      toast({
        title: "error",
        description: "Error Creating Project",
      });
    }
  }
  return {
    createProject,
    isLoading,
  };
};
