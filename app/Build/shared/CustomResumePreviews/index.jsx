"use client";
import React from "react";

const CustomResumePreviews = ({
  topBar,
  goBackToResumeEdit,
  resumePreview,
  cvStylesChoose,
  ChangeResume,
}) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="max-w-[90%] mx-auto">
      {topBar}

      <div className="block md:flex  justify-center  gap-x-5">
        <div className="flex justify-center items-center md:block">
          {goBackToResumeEdit}
        </div>
        {resumePreview}

        <div className="hidden flex-col lg:flex">{ChangeResume}</div>
      </div>
      <div className="mt-20">{cvStylesChoose}</div>
    </div>
  );
};

export default CustomResumePreviews;
