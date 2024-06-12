import { useQuery } from "@tanstack/react-query";
import { getCurrentUserCv } from "../helper/getCurrentUserCv";
import { getSearchParams } from "../lib/getSearchParams";

const useGetCurrentUserResume = (type) => {
  const cvId = getSearchParams("id");
  const { data, isError, isLoading } = useQuery(
    ["useGetCurrentUserResume", cvId],
    () => getCurrentUserCv({ cvId, type }),
    {
      enabled: !!cvId,
    }
  );

  return {
    currentCv: data,
    isLoading,
    isError,
  };
};

export default useGetCurrentUserResume;
