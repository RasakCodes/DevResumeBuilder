import JsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";
// import axios from "axios";

// export const useDownloadDocument = () => {
//   const [isLoading, setisLoading] = useState();
//   const data = { templateId: "Dev Resume 2" };
//   const downloadPdfDocument = async (id) => {
//     setisLoading(true);
//     // const endpoint = `/api/User/Cv/${id}`;
//     try {
//       const input = document.getElementById("resumePreview");

//       const { width, height } = input.getBoundingClientRect();
//       console.log(`Width: ${width}px, Height: ${height}px`);

//       const canvas = await html2canvas(input);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new JsPDF({
//         orientation: "portrait",
//       });
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       console.log({ pdfHeight });
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, height);
//       pdf.save("resume.pdf");
//       // await axios.patch(endpoint, data);
//       setisLoading(false);
//     } catch (error) {
//       console.error("Could not download the file - ", error);
//       setisLoading(false);
//     }
//   };
//   return {
//     downloadPdfDocument,
//     isLoading,
//   };
// };

export const useDownloadDocument = () => {
  const [isLoading, setisLoading] = useState(false);
  const data = { templateId: "Dev Resume 2" };

  const downloadPdfDocument = async (id) => {
    setisLoading(true);
    // const endpoint = `/api/User/Cv/${id}`;
    try {
      const input = document.getElementById("resumePreview");

      const { width, height } = input.getBoundingClientRect();
      console.log(`Width: ${width}px, Height: ${height}px`);

      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF({
        orientation: "portrait",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let position = 0;

      while (position < height) {
        const remainingHeight = height - position;
        const pageHeight =
          remainingHeight > pdfHeight ? pdfHeight : remainingHeight;

        pdf.addImage(
          imgData,
          "PNG",
          0,
          -position,
          pdfWidth,
          (canvas.height * pdfWidth) / canvas.width
        );
        position += pageHeight;

        if (position < height) {
          pdf.addPage();
        }
      }

      pdf.save("resume.pdf");
      // await axios.patch(endpoint, data);
      setisLoading(false);
    } catch (error) {
      console.error("Could not download the file - ", error);
      setisLoading(false);
    }
  };

  return { downloadPdfDocument, isLoading };
};
