import axios from "axios";
import { useState } from "react";

export const useGetCv = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getCv = async (id) => {
    try {
      setLoading(true);
      const endpoint = `/api/User/Cv/getAllUserCv/${id}`;
      const res = await axios.get(endpoint);
      setData(res.data.message);
    } catch (error) {
      console.error("Error fetching CV data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getCv,
    data,
    loading,
  };
};
