// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apikey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
//
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["NEXT_PUBLIC_OPENAI_API_KEY"],
});
export default openai;
