import React from "react";

const FileDetails = ({
  fileName,
  uploadProgress,
  parsedText,
  selectedFile,
}) => {
  if (!selectedFile) return null;

  const extract = selectedFile.name || fileName;
  const fileType = extract?.split(".").pop().toLowerCase();
  const isPdf = fileType === "pdf";
  const isWord = fileType === "doc" || fileType === "docx";

  let iconSrc = "/assets/Group 6.png";
  if (isWord) {
    iconSrc = "/assets/word.png";
  }

  return (
    <div>
      <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <img
            alt={isPdf ? "PDF icon" : "Word icon"}
            className="mr-2"
            height="32"
            src={iconSrc}
            width="32"
          />
          <div>
            <p className="font-medium">{selectedFile.name || fileName}</p>
            <p className="text-xs text-gray-500">
              {uploadProgress < 100 && !parsedText && "Uploading"}
              {uploadProgress === 100 && parsedText && "Uploaded"}
            </p>
          </div>
        </div>
        {/* {uploadProgress < 100 && (
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={onRemoveFile}
        >
          <i className="fas fa-times">X</i>
        </button>
      )} */}
      </div>
      {selectedFile && (
        <div
          className={`w-full ${
            isWord ? "bg-blue-100" : "bg-yellow-100"
          } rounded-full h-1.5 mt-3`}
        >
          <div
            className={`${
              isWord ? "bg-blue-600" : "bg-[#f9e547]"
            } h-1.5 rounded-full`}
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FileDetails;
