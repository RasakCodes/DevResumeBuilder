"use client";
import React from "react";
import { useParams } from "next/navigation";
import ResumePreview from "../../shared/ResumePreview";
import GoBackToResumeEdit from "../../shared/ResumePreview/shared/GoBackToResumeEdit";
import ChangeResume from "../../shared/ResumePreview/shared/ChangeResume";
import PreviewCoverLetter from "./components/PreviewCoverLetter";
import CoverLetterStylesChoose from "../CoverLetterStylesChoose";
import IsLoading from "@/shared/loading/IsLoading";
import { useGetCoverLetter } from "../hooks/useGetCoverLetter";
import TopBar from "./TopBar";
import CustomResumePreviews from "../../shared/CustomResumePreviews";

const Results = () => {
  const { Resultid } = useParams();
  const { loading, description, setDescription } = useGetCoverLetter(Resultid);

  if (loading && !description) {
    return <IsLoading />;
  }

  return (
    <CustomResumePreviews
      topBar={<TopBar />}
      goBackToResumeEdit={
        <GoBackToResumeEdit type={"CoverLetter"} cvId={Resultid} />
      }
      ChangeResume={<ChangeResume />}
      resumePreview={
        <ResumePreview>
          <PreviewCoverLetter />
        </ResumePreview>
      }
      cvStylesChoose={<CoverLetterStylesChoose />}
    />
  );
};

export default Results;
