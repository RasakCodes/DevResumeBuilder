import React from "react";
import ButtonComp from "@/shared/Button";
import { useEditForm } from "../hook/useEditForm";
import ReactQuill from "react-quill";

const QuillEditor = ({ id, label, value, onChange, placeholder }) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block mb-2 text-xl font-bold text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <ReactQuill
      onChange={onChange}
      value={value || ""}
      id={id}
      className="block p-2.5 w-full text-sm h-[25vh] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-scroll no-scrollbar "
      placeholder={placeholder}
    />
  </div>
);

const EditForm = ({ cvData, setCvData }) => {
  const {
    isLoading,
    handleEditForm,
    handleSummaryChange,
    handleExperienceChange,
  } = useEditForm(cvData, setCvData);

  const handleQuillChange = (fieldName, value, index = null) => {
    const changeEvent = { target: { name: fieldName, value } };
    if (index !== null) {
      handleExperienceChange(index, value, fieldName);
    } else {
      handleSummaryChange(changeEvent);
    }
  };

  return (
    <div className="my-20 flex flex-col gap-2">
      <QuillEditor
        id="summary"
        label="Summary"
        value={cvData?.summary}
        onChange={(content) => handleQuillChange("summary", content)}
        placeholder="Edit Your Summary"
      />

      {/* Render all experiences first */}
      {cvData?.experience?.map((exp, index) => (
        <QuillEditor
          key={`exp-${index}`}
          id={`responsibilities-${index}`}
          label={`Experience #${index + 1}`}
          value={exp?.responsibilities}
          onChange={(content) =>
            handleQuillChange("responsibilities", content, index)
          }
          placeholder="Edit Your Experience Responsibilities"
        />
      ))}

      {/* Render all achievements after experiences */}
      {cvData?.experience?.map((exp, index) => (
        <QuillEditor
          key={`ach-${index}`}
          id={`achievements-${index}`}
          label={`Achievements #${index + 1}`}
          value={exp?.achievements}
          onChange={(content) =>
            handleQuillChange("achievements", content, index)
          }
          placeholder="Edit Your Achievements"
        />
      ))}

      <div onClick={handleEditForm}>
        <ButtonComp
          disabled={isLoading}
          text={isLoading ? "Loading..." : "Save"}
        />
      </div>
    </div>
  );
};

export default EditForm;
