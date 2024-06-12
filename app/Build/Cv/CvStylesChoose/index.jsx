import { ImgComp } from "@/shared/ImgComp";
import useResumeStore from "@/shared/store/PreviewResumeSelect";
import React from "react";
import resumeTemplates from "../[Resultid]/components/resumeTemplates";

const CvStylesChoose = () => {
  const setSelectedTemplateIndex = useResumeStore(
    (state) => state.setSelectedTemplateIndex
  );

  const handleSelectResume = (index) => {
    setSelectedTemplateIndex(index);
    scroll(0, 0);
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="text-3xl text-center mb-6">Styles</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {resumeTemplates.map((template, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => handleSelectResume(index)}
          >
            <ImgComp
              src={template.thumbnails}
              alt={template.name}
              className="w-full h-auto"
            />
            <div className="p-2 text-center">
              <div className="font-bold">{template.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvStylesChoose;
