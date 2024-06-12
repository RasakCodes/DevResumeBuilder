import { extractDocxText, extractPdfText } from "@/app/util/ExtractPdfText";
import connect from "@/app/util/db/connect";
import Cv from "@/app/util/model/Cv";

export async function PATCH(request) {
  const formData = await request.formData();
  const id = formData.get("id");
  const uploadedFiles = formData.get("resumePDF");
  console.log("started");
  if (!uploadedFiles) {
    return new Response(JSON.stringify({ message: "No files uploaded." }), {
      status: 400,
    });
  }

  try {
    await connect();
    const cvData = await Cv.findById(id);
    if (!cvData) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    const fileBuffer = Buffer.from(await uploadedFiles.arrayBuffer());
    // const parsedText = await extractPdfText(fileBuffer);
    const fileType = uploadedFiles.type;
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

    await Cv.findByIdAndUpdate(
      id,
      {
        $set: {
          "optimizeResume.0.extractedCvText.parsedText": parsedText,
          "optimizeResume.0.extractedCvText.fileName": uploadedFiles.name,
          //   // Assuming you're also updating jobDesc or other fields at the same index
          //   "optimizeResume.0.jobDesc": "New job description",
        },
      },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "Data updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in PDF handling: ", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
