import { ImgComp } from "@/shared/ImgComp";
import React from "react";
import useCoverLetterStore from "@/shared/store/PreviewCoverLetterSelect";
import coverLetterTemplates from "../components/coverLetterTemplates";

const CoverLetterStylesChoose = () => {
  const setSelectedTemplateIndex = useCoverLetterStore(
    (state) => state.setSelectedTemplateIndex
  );

  const handleSelectCoverLetter = (index) => {
    console.log(index);
    setSelectedTemplateIndex(index);
    scroll(0, 0);
  };

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="text-3xl text-center mb-6">Styles</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {coverLetterTemplates.map((template, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => handleSelectCoverLetter(index)}
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

export default CoverLetterStylesChoose;
