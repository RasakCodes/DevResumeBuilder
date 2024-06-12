import pdfParse from "pdf-parse";
import mammoth from "mammoth";

export async function extractPdfText(pdfBuffer) {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text;
  } catch (error) {
    console.error("Error parsing PDF: ", error);
    throw new Error("Failed to parse PDF");
  }
}

export async function extractDocxText(docxBuffer) {
  console.log("started");
  try {
    const { value } = await mammoth.extractRawText({ buffer: docxBuffer });
    return value;
  } catch (error) {
    console.error("Error parsing DOCX: ", error);
    throw new Error("Failed to parse DOCX");
  }
}
// import mammoth from "mammoth";
// import pdfParse from "pdf-parse";

// export async function extractTextFromBuffer(fileBuffer, fileType) {
//   try {
//     if (fileType === "application/pdf") {
//       const data = await pdfParse(fileBuffer);
//       return data.text;
//     } else if (
//       fileType ===
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
//       fileType === "application/msword"
//     ) {
//       const { value } = await mammoth.extractRawText({ buffer: fileBuffer });
//       return value;
//     } else {
//       throw new Error("Unsupported file type");
//     }
//   } catch (error) {
//     console.error("Error extracting text: ", error);
//     throw new Error("Failed to extract text");
//   }
// }
