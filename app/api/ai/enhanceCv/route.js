import openai from "@/app/util/OpenAI";
import Cv from "@/app/util/model/Cv";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  let id = data.id;

  if (!id) {
    return NextResponse.json({ message: "invalid request" }, { status: 400 });
  }

  try {
    let CvData = await Cv.findById(id);

    if (!CvData) {
      return NextResponse.json({ message: "CV not found" }, { status: 404 });
    }

    if (CvData.isAiGenerate) {
      return NextResponse.json({ message: CvData }, { status: 200 });
    }
    const resumeCV = await generateResumeText(CvData);
    const parsedResponse = JSON.parse(resumeCV);

    console.log("results", parsedResponse);
    const update = {
      $set: {
        summary: parsedResponse.personalInformation.summary,
        education: parsedResponse.education,
        experience: parsedResponse.experience,
        isAiGenerate: true,
      },
    };

    const options = { new: true };
    const updatedCvData = await Cv.findByIdAndUpdate(
      CvData.id,
      update,
      options
    );

    if (!updatedCvData) {
      return NextResponse.json(
        { message: "CV not found or could not be updated" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: updatedCvData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error },
      { status: 500 }
    );
  }
};

async function generateResumeText(details) {
  const keys = `
    skills: [
    {
      label: "Label for a skill related to web design.",
      selected: "Boolean indicating if the skill is selected.",
    },
  education: [
    {
      institutionName: "Name of the educational institution.",
      degreeName: "Name of the degree obtained.",
      fieldOfStudy: "Field of study for the degree.",
      graduationYear: "Year of graduation.",
      currentlyStudying: "Boolean indicating if currently studying or not.",
    },
  ],
  experience: [
    {
      companyName: "Name of the company where experience was gained.",
      startDate: "Start date of the experience.",
      endDate: "End date of the experience.",
      currentlyWorking: "Boolean indicating if currently working in this position.",
      jobTitle: "Title of the job position.",
      responsibilities: "Description of responsibilities in the job rol, This responsibility is coming in the form of HTML. Please professionalize it and also return the responsibility back in HTML, ensuring it has been well enhanced.",
      achievements: "Notable achievements in the job role.",
    },
  ],
   personalInformation:{
    email: "Email address of the user.",
    firstName: "First name of the user.",
    lastName: "Last name of the user.",
    linkedin: "URL to the user's LinkedIn profile.",
    summary: "Professional summary of the user. This summary is coming in the form of HTML. Please professionalize it and also return the summary back in HTML, ensuring it has been well enhanced also 
     a well curated professional summary that highlights Skills, Experience, and Education."
   } 
  `;
  z;
  const messages = [
    {
      role: "system",
      content: `Please create a detailed and professional CV based on the following information: ${keys}. Analyze the provided details thoroughly and write a comprehensive description that showcases the user's skills, education, and experience in a professional manner. The output should be structured as a JSON object with appropriate keys and values, focusing on clarity, coherence, and richness of content. Aim for a length that fully captures the user's qualifications and achievements without being overly concise. and also return the key in camelcase, return personalInformation key object as personalInformation`,
      //   content: `Role Prompting You are a highly skilled creative resume writer with a special ability to craft successful resumes that pass
      //             ATS screening and catch recruiters’ attention for SharePoint, power Apps, and Power BI professionals.
      //             #Task Create a professional resume for the specified Profession by combining user’s information and relevant skills. Fill in
      //             relevant information that may have not been provided by the user using placeholders like {ABC Company}, {X years}, etc. Use a chain of
      //             thought to think step by step, ensuring the resume includes a personal info, professional summary, skills ${details.jobTitle},
      //             experience, and education.
      //             #Specific This task is essential for our service. Do not send any response other than the final product.
      //             #Context You are operating in a professional SaaS business environment with no room for error. Maintain a high level of professionalism.
      //             #Examples
      //             User Input (Complete):
      //             Personal Info: ${details} Expected Output: A complete resume
      //             with all sections filled that follows the following structure
      //             ${keys}.
      //              Do not send incomplete, or irrelevant responses.
      //             Make sure the resume is ATS and Recruiters friendly by incorporating the right keywords`,
    },
    {
      role: "user",
      content: `Here are the JSON details for generating the CV: ${details}.`,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    // model: "gpt-3.5-turbo-instruct",
    messages: messages,
    max_tokens: 1024,
    temperature: 0.7,
    response_format: { type: "json_object" },
  });
  return response.choices[0].message.content;
}
