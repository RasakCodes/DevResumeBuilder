import React from "react";
import { useUploadExistingCv } from "../../hooks/useUploadExistingCv";
import ButtonComp from "@/shared/Button";

const UploadExistingResume = () => {
  const {
    handleDrop,
    handleFileChange,
    handleSubmitCvToExtract,
    isloading,
    selectedFile,
  } = useUploadExistingCv();
  return (
    <div className="flex justify-center items-center flex-col">
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
        </p>{" "}
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
      <div className="border my-4 p-2">{selectedFile?.name}</div>
      <div onClick={handleSubmitCvToExtract}>
        <ButtonComp
          disabled={isloading}
          text={
            isloading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
                <div>please wait</div>
              </div>
            ) : (
              "Upload"
            )
          }
        />
      </div>
    </div>
  );
};

export default UploadExistingResume;
