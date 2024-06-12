import useResumeStore from "@/shared/store/PreviewResumeSelect";
import React from "react";
import resumeTemplates from "../resumeTemplates";

const PreviewResume = () => {
  const { selectedTemplateIndex, resumeData } = useResumeStore((state) => ({
    selectedTemplateIndex: state.selectedTemplateIndex,
    resumeData: state.resumeData,
  }));
  const TemplateComponent =
    resumeTemplates[selectedTemplateIndex || 0].component;

  return (
    <div>{TemplateComponent && <TemplateComponent data={resumeData} />}</div>
  );
};

export default PreviewResume;
