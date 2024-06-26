import openai from "@/app/util/OpenAI";
import Cv from "@/app/util/model/Cv";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  const id = data?.id;
  console.log(id, "data");

  if (!id) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  try {
    let cvData = await Cv.findById(id);
    if (!cvData) {
      return NextResponse.json({ message: "CV not found" }, { status: 404 });
    }

    if (cvData.isAiGenerate) {
      return NextResponse.json(
        { message: "CV already generated by AI", data: cvData },
        { status: 200 }
      );
    }
    const generatedResume = await generateResumeText(
      cvData?.optimizeResume[0]?.extractedCvText?.parsedText,
      cvData?.optimizeResume?.[0]?.jobDesc
    );

    const parsedResume = JSON.parse(generatedResume);

    const update = {
      $set: {
        firstName: parsedResume?.firstName,
        lastName: parsedResume?.lastName,
        email: parsedResume?.email,
        linkedin: parsedResume?.linkedin,
        address: parsedResume?.address,
        phone: parsedResume?.phone,
        summary: parsedResume?.summary,
        education: parsedResume?.education,
        experience: parsedResume?.experience,
        skills: parsedResume?.skills,
        isAiGenerate: true,
      },
    };

    const updatedCvData = await Cv.findByIdAndUpdate(id, update, { new: true });
    if (!updatedCvData) {
      return NextResponse.json(
        { message: "Failed to update CV" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "CV updated successfully with AI-generated content.",
        data: updatedCvData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during CV update:", error);
    return NextResponse.json(
      { message: "An error occurred", error: error.toString() },
      { status: 500 }
    );
  }
};

async function generateResumeText(details, jobDescription) {
  const keys = `
    {
        "email": "Email address of the user.",
        "firstName": "First name of the user.",
        "lastName": "Last name of the user.",
        "linkedin": "URL to the user's LinkedIn profile.",
        "summary": "Professional summary of the user."

      "skills": [
        {
          "label": "Example skill label, e.g., 'Web Design'.",
          "selected": true
        }
      ],
      "education": [
        {
          "institutionName": "Example institution, e.g., 'MIT'.",
          "degreeName": "Degree obtained, e.g., 'BSc in Computer Science'.",
          "fieldOfStudy": "Field of study, e.g., 'Computer Science'.",
          "graduationYear": "Year of graduation, e.g., '2024'.",
          "currentlyStudying": false
        }
      ],
      "experience": [
        {
          "companyName": "Example company name, e.g., 'Google'.",
          "startDate": "Start date of the experience, e.g., 'January 2020'.",
          "endDate": "End date or 'Present' if currently working.",
          "currentlyWorking": true,
          "jobTitle": "Job position, e.g., 'Senior Web Developer'.",
          "responsibilities": "HTML-formatted description of job responsibilities.",
          "achievements": "Notable achievements, e.g., 'Developed a key software solution.'"
        }
      ]
    }
  `;

  const messages = [
    {
      role: "system",
      content: `Please create a detailed and professional CV based on the information provided below. Analyze the details thoroughly and write a comprehensive description that showcases the user's skills, education, and experience, summary in a professional manner. The output should be structured as a JSON object with this keys ${keys} make it focusing on clarity, coherence, and richness of content. Ensure that the personal information is returned under the 'personalInformation' key.`,
    },
    {
      role: "user",
      content: `Here are the JSON details for generating the CV: ${details}. Tailor the resume to fit this job description: ${jobDescription}. also make sure to use the same information on the resume for the new one you are creating. please follow all the keys we have in here ${keys} no mistake, also don't add the personalInformation key, the firstName, lastName linkedin, email should be added directly to the object `,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: messages,
    max_tokens: 1024,
    temperature: 0.7,
    response_format: { type: "json_object" },
  });

  return response.choices[0].message.content;
}
