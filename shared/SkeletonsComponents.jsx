import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const ProgressTrackerSkeleton = () => {
  return (
    <div className="p-4 max-w-sm w-full mx-auto flex flex-col gap-y-5">
      {[...Array(4)].map((_, i) => {
        return (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="w-24 h-1 hidden sm:block" />
            <Skeleton className="h-4 w-32" />
          </div>
        );
      })}
    </div>
  );
};

export const MainFormSkeleton = () => {
  return (
    <div className="p-4 max-w-4xl w-full mx-auto space-y-6">
      <Skeleton className="h-6 w-1/4 mb-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(7)].map((_, i) => {
          return <Skeleton key={i} className="h-12" />;
        })}
      </div>
    </div>
  );
};

export const GetStartedSkeletonCard = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="p-4 max-w-sm w-full">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-32 w-32 mb-4" />
          <Skeleton className="h-4 w-full mb-4" />{" "}
          <Skeleton className="h-4 w-5/6 mb-4" />{" "}
          <Skeleton className="h-10 w-24" />
        </div>
      ))}
    </div>
  );
};

export const ResumeSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-1/3">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-24 w-full mb-4" />
        <Skeleton className="h-6 w-11/12 mb-2" />
        <Skeleton className="h-6 w-10/12 mb-2" />
        <Skeleton className="h-6 w-9/12 mb-2" />
        <Skeleton className="h-6 w-8/12" />
      </div>

      {/* Center Column */}
      <div className="flex flex-col w-full lg:w-1/3">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-36 w-full mb-4" />
        <Skeleton className="h-6 w-11/12 mb-2" />
        <Skeleton className="h-6 w-10/12 mb-2" />
        <Skeleton className="h-6 w-9/12 mb-2" />
        <Skeleton className="h-6 w-8/12" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-full lg:w-1/3">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-36 w-full mb-4" />
        <Skeleton className="h-6 w-11/12 mb-2" />
        <Skeleton className="h-6 w-10/12 mb-2" />
        <Skeleton className="h-6 w-9/12 mb-2" />
        <Skeleton className="h-6 w-8/12" />
      </div>
    </div>
  );
};
