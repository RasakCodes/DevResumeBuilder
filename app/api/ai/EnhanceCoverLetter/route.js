import openai from "@/app/util/OpenAI";
import CoverLetter from "@/app/util/model/CoverLetter";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  let id = data.id;
  if (!id) {
    return NextResponse.json(
      { message: "Invalid request no ID provided" },
      { status: 400 }
    );
  }

  try {
    let coverLetterData = await CoverLetter.findById(id);
    if (!coverLetterData) {
      return NextResponse.json(
        { message: "Cover Letter not found" },
        { status: 404 }
      );
    }

    if (coverLetterData.isAiGenerate) {
      return NextResponse.json({ message: coverLetterData }, { status: 200 });
    }

    const coverLetterText = await generateCoverLetterText(coverLetterData);

    await CoverLetter.findByIdAndUpdate(
      coverLetterData._id,
      { result: coverLetterText, isAiGenerate: true, isComplete: true },
      {
        new: true,
      }
    );

    return NextResponse.json(
      { message: "Cover letter generated successfully", coverLetterText },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
};

// Function to generate cover letter text
async function generateCoverLetterText(details) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `Generate a professional cover letter based on the provided details.`,
      },
      {
        role: "user",
        content: `Create the main content of a cover letter highlighting the applicant's
         strengths and suitability for the position, based on the following
          details: LinkedIn: ${details.linkedin}, Job Title: ${details.jobTitle},
           Personal Summary: ${details.summary}. Resume/CV Overview: ${details.parsedText}.
            The cover letter should be personalized for the following 
            Job Description: ${details.JobDescription}. Exclude any formal greetings, 
            company addresses, and closings, as those will be added separately. Concentrate
             on developing a compelling narrative that aligns the applicant's experience and
              skills with the requirements of the job description.`,
      },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  });

  return response.choices[0].message.content;
}
