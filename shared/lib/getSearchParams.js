import { useSearchParams } from "next/navigation";

export const getSearchParams = (text) => {
  const searchParams = useSearchParams();
  const cvId = searchParams.get(text);
  return cvId;
};
