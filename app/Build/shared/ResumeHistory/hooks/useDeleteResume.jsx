import Http from "@/shared/helper/htttp";
import { useState } from "react";

export const useDeleteResume = () => {
  const [isDeleting, setisDeleting] = useState(false);

  const handleDelete = async (id) => {
    console.log(id);
    const endpoint = "/api/User/Cv/delete-cv";
    try {
      setisDeleting(true);
      await Http.delete({ endpoint, body: { id } });
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
