import { NextResponse } from "next/server";
import connect from "@/app/util/db/connect";
import { extractDocxText, extractPdfText } from "@/app/util/ExtractPdfText";
import openai from "@/app/util/OpenAI";
import Cv from "@/app/util/model/Cv";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/lib/auth";

// Function to parse PDF text and return structured JSON
async function parseResumeTextToJson(details) {
  const schemaDetails = {
    skills: [
      {
        label: "Label for a skill related to web design.",
        selected: true,
      },
    ],
    education: [
      {
        institutionName: "Name of the educational institution.",
        degreeName: "Name of the degree obtained.",
        fieldOfStudy: "Field of study for the degree.",
        graduationYear: "Year of graduation.",
        currentlyStudying: false,
      },
    ],
    experience: [
      {
        companyName: "Name of the company where experience was gained.",
        startDate: "Start date of the experience.",
        endDate: "End date of the experience.",
        currentlyWorking: false,
        jobTitle: "Title of the job position.",
        responsibilities: "Description of responsibilities in the job role.",
        achievements: "Notable achievements in the job role.",
      },
    ],
    email: "Email address of the user.",
    firstName: "First name of the user.",
    lastName: "Last name of the user.",
    linkedin: "URL to the user's LinkedIn profile.",
    summary: "Professional summary of the user.",
    jobTitle:
      "pick the one that sult the user profile: Sharepoint Developer or Power Platform Developer or  Power BI Developer",
  };

  const prompt = {
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `Please analyze the extracted CV text and organize it into a structured JSON format according to the predefined categories: ${JSON.stringify(
          schemaDetails
        )}. Additionally, select the job title that best matches the user's skills and experience from the following options: ${
          schemaDetails.jobTitle
        } please make sure you pick either of this for the jobTitle. Sharepoint Developer or Power Platform Developer or Power BI Developer pick the one that sult the user profile`,
      },
      {
        role: "user",
        content: details,
      },
    ],
    max_tokens: 1024,
    temperature: 0.7,
    response_format: { type: "json_object" },
  };

  const response = await openai.chat.completions.create(prompt);
  return response.choices[0].message.content;
}

export const POST = async (request) => {
  const formData = await request.formData();
  const resumePDF = formData.get("resumePDF");

  if (!resumePDF) {
    return new Response(JSON.stringify({ message: "No files uploaded." }), {
      status: 400,
    });
  }

  try {
    await connect();
    const session = await getServerSession(authOptions);
    const fileBuffer = Buffer.from(await resumePDF.arrayBuffer());

    const fileType = resumePDF.type;
    let parsedText;
    if (fileType === "application/pdf") {
      parsedText = await extractPdfText(fileBuffer);
    } else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileType === "application/msword"
    ) {
      parsedText = await extractDocxText(fileBuffer);
    } else {
      return new Response(
        JSON.stringify({ message: "Unsupported file type" }),
        {
          status: 400,
        }
      );
    }
    const extractedData = await parseResumeTextToJson(parsedText);
    const parsedData = JSON.parse(extractedData);
    const cvRecord = await Cv.create({ user: session._id, ...parsedData });

    return NextResponse.json(cvRecord, { status: 200 });
  } catch (error) {
    console.error("Error processing PDF:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
