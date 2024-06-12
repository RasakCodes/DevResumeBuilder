import Http from "@/shared/helper/htttp";

export const enhanceCoverLetter = async (id) => {
  const endpoint = `/api/ai/EnhanceCoverLetter`;
  try {
    return await Http.post({
      body: { id: id },
      endpoint: endpoint,
    });
  } catch (error) {
    return error;
  }
};
