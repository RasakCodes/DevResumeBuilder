import { getCookie } from "cookies-next";

const fetchApi = async (url, config) => {
  const token = getCookie("token");
  const authorization = token
    ? { Authorization: `Bearer ${token}` }
    : { Authorization: "" };

  config = {
    ...config,
    headers: {
      ...authorization,
      "Content-Type": "application/json",
      ...(config && config.headers),
    },
  };
  return await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}${url}`, config);
};

export default fetchApi;
