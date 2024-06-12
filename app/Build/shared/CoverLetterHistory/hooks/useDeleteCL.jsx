import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import WINDOW from "@/shared/lib/mockWindow";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDeleteCL = () => {
  const [isDeleting, setisDeleting] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const handleDelete = async (id) => {
    const endpoint = "/api/User/CoverLetter/delete-cv";
    try {
      setisDeleting(true);
      await Http.delete({ endpoint, body: { id } });
      WINDOW.location.reload;

      toast({
        title: "Success! ✅",
        description: "Coverletter deleted",
      });

      queryClient.invalidateQueries(["getAllUserCvs"]);
      window.location.reload();
    } catch (error) {
    } finally {
      setisDeleting(false);
    }
  };
  return {
    handleDelete,
    isDeleting,
  };
};
