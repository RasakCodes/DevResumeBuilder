"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import ButtonComp from "@/shared/Button";
import { useUpdateCoverLetterData } from "../../hooks/useUpdateCoverLetter";
import useCoverLetterStore from "@/shared/store/PreviewCoverLetterSelect";

const EditForm = () => {
  const { updateCoverLetter, isLoading } =
    useUpdateCoverLetterData("resultPage");

  const { setcoverLetterData, coverLetterData } = useCoverLetterStore(
    (state) => ({
      setcoverLetterData: state.setcoverLetterData,
      coverLetterData: state.coverLetterData,
    })
  );

  const [description, setDescription] = useState(coverLetterData?.result || "");
  useEffect(() => {
    setDescription(coverLetterData?.result || "");
  }, [coverLetterData?.result]);

  const handleQuillChange = (content) => {
    console.log(content, "content");
    const newCoverLetterData = {
      ...coverLetterData,
      result: content,
    };
    setcoverLetterData(newCoverLetterData);
    setDescription(content);
  };

  const handleEditDescription = async () => {
    await updateCoverLetter({ result: description });
    setcoverLetterData({ ...coverLetterData, result: description });
  };

  return (
    <div className="my-20">
      <div className="max-w-2xl mx-auto">
        <ReactQuill
          onChange={handleQuillChange}
          value={description}
          className="block p-2.5 w-full text-sm h-[80vh] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-scroll no-scrollbar"
          placeholder="Edit Your Description"
        />

        <div onClick={handleEditDescription}>
          <ButtonComp
            disabled={isLoading}
            text={isLoading ? "Loading..." : "Save"}
          />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
