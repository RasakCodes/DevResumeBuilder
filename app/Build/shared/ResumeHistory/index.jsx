"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetAllCvHistory } from "./hooks/useGetAllCvHistory";
import { useDeleteResume } from "./hooks/useDeleteResume";
import resumeTemplates from "@/app/Build/Cv/[Resultid]/components/resumeTemplates";
import { ResumeSkeleton } from "@/shared/SkeletonsComponents";
import { ImgComp } from "@/shared/ImgComp";
import { formatDistanceToNow } from "date-fns";

const ResumeItem = ({ item, templateComponents }) => {
  const TemplateComponent =
    templateComponents[item?.templateId || "Dev Resume 1"];
  const { handleDelete, isDeleting } = useDeleteResume();

  return (
    <div
      key={item?._id}
      className="border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer relative bg-white"
    >
      <div className="flex flex-col p-6 items-center">
        <div className="w-20 h-20 mb-4">
          <ImgComp
            src={TemplateComponent}
            alt={item.templateId}
            className="rounded-full"
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Created:{" "}
            <span className="text-gray-800">
              {formatDistanceToNow(new Date(item?.createdAt))} ago
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Updated:{" "}
            <span className="text-gray-800">
              {formatDistanceToNow(new Date(item?.updatedAt))} ago
            </span>
          </p>
        </div>
        <Link
          href={`/Build/Cv/${
            item?.isComplete ? item?._id : `?id=${item?._id}`
          }`}
        >
          <Button className="bg-yellow-500 text-black mt-4 w-full rounded-lg">
            {item?.isComplete ? "View" : "Continue"}
          </Button>
        </Link>
        <p className="text-xs text-gray-500 mt-2">{item.templateId}</p>
      </div>
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => handleDelete(item?._id)}
          disabled={isDeleting}
          className="bg-red-500 text-white rounded-full p-2"
        >
          {isDeleting ? "Deleting" : "Delete"}
        </Button>
      </div>
    </div>
  );
};

const ResumeHistory = () => {
  const { cvData, isLoading } = useGetAllCvHistory();

  const templateComponents = resumeTemplates.reduce((acc, current) => {
    acc[current.name] = current.thumbnails;
    return acc;
  }, {});

  if (isLoading) {
    return (
      <div className="loading-indicator">
        <ResumeSkeleton />
      </div>
    );
  }

  if (!cvData.length) {
    return (
      <div className="text-center text-gray-600">No CV history available.</div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 px-4 py-8">
      {cvData.map((item) => (
        <div
          key={item._id}
          className="w-full md:w-[300px] lg:w-[350px] bg-white rounded-2xl shadow-md overflow-hidden relative"
        >
          <ResumeItem item={item} templateComponents={templateComponents} />
        </div>
      ))}
    </div>
  );
};

export default ResumeHistory;
