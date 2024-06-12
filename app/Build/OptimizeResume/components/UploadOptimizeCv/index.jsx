import React from "react";
import ButtonComp from "@/app/Build/Cv/shared/Button";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { useSubmitCv } from "../../hooks/useSubmitCv";
import FileDetails from "@/shared/component/FileDetails";

const UploadOptimizeCv = () => {
  const cvId = getSearchParams("id");

  const {
    uploadProgress,
    selectedFile,
    setSelectedFile,
    handleSubmitCvToExtract,
    isLoading,
    fileName,
    parsedText,
    handleFileChange,
    handleDrop,
    error,
  } = useSubmitCv(cvId);

  return (
    <>
      <div className="bg-white  rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6">Upload Resume</h1>
        <div
          className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-10 mb-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p className="text-lg font-medium mb-2">
            Choose a file or drag & drop it here
          </p>
          <p className="text-sm text-gray-500 mb-4">
            PDF or Word format, up to 50MB
          </p>
          <input
            type="file"
            accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="border border-[#F9E547] text-[#F9E547] font-bold py-2 px-4 rounded cursor-pointer"
          >
            Browse File
          </label>
        </div>
        {/* {renderFileDetails()} */}
        <FileDetails
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          fileName={fileName}
          uploadProgress={uploadProgress}
          parsedText={parsedText}
        />
      </div>
      {error && <p className="tect-red-500">Error Occur</p>}
      <div onClick={handleSubmitCvToExtract}>
        <ButtonComp
          disabled={isLoading}
          text={isLoading ? "loading.." : "Next"}
        />
      </div>
    </>
  );
};

export default UploadOptimizeCv;
