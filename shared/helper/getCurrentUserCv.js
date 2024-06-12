import Http from "./htttp";

export const getCurrentUserCv = async ({ cvId, type }) => {
  const baseApiPath = `/api/User/`;
  let endpoint;

  if (type === "CoverLetter") {
    endpoint = `${baseApiPath}CoverLetter/getAllCoverLetter/${cvId}`;
  } else {
    // Default to CV if type is not CoverLetter
    endpoint = `${baseApiPath}Cv/getAllUserCv/${cvId}`;
  }

  return await Http.get({ endpoint });
};
