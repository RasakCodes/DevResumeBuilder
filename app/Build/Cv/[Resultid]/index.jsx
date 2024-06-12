"use client";
import React, { useEffect, useState } from "react";
import ResumePreview from "../../shared/ResumePreview";
import GoBackToResumeEdit from "../../shared/ResumePreview/shared/GoBackToResumeEdit";
import { useParams } from "next/navigation";
import ChangeResume from "../../shared/ResumePreview/shared/ChangeResume";
import { useGetCv } from "../hooks/useGetCv";
import IsLoading from "@/shared/loading/IsLoading";
import CvStylesChoose from "../CvStylesChoose";
import PreviewResume from "./components/PreviewResume";
import useResumeStore from "@/shared/store/PreviewResumeSelect";
import TopBar from "./components/TopBar";
import CustomResumePreviews from "../../shared/CustomResumePreviews";

const Results = () => {
  const { Resultid } = useParams();

  const setResumeData = useResumeStore((state) => state.setResumeData);

  const { getCv, loading, data } = useGetCv();
  const [cvData, setCvData] = useState(data);
  useEffect(() => {
    getCv(Resultid);
  }, [Resultid]);

  useEffect(() => {
    setCvData(data);
    setResumeData(data);
  }, [data]);

  if (loading || !data) {
    return <IsLoading />;
  }
  return (
    <CustomResumePreviews
      topBar={<TopBar setCvData={setCvData} cvData={cvData} />}
      goBackToResumeEdit={<GoBackToResumeEdit type={"Cv"} cvId={Resultid} />}
      ChangeResume={<ChangeResume />}
      resumePreview={
        <ResumePreview>
          <PreviewResume />
        </ResumePreview>
      }
      cvStylesChoose={<CvStylesChoose />}
    />
  );
};

export default Results;
