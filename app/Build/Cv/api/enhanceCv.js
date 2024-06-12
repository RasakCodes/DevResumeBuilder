import Http from "@/shared/helper/htttp";

export const enhanceCv = async (id) => {
  const endpoint = `/api/ai/enhanceCv`;
  try {
    return await Http.post({
      body: { id: id },
      endpoint: endpoint,
    });
  } catch (error) {
    return error;
  }
};
