import ResumeOption from "@/shared/ResumeOptions";
import React, { Suspense } from "react";
import { GetStartedSkeletonCard } from "@/shared/SkeletonsComponents";
import ResumeHistory from "../../Build/shared/ResumeHistory";

const GetStarted = async () => {
  return (
    <>
      <Suspense fallback={<GetStartedSkeletonCard />}>
        <ResumeOption className={"flex justify-center gap-x-8 items-center"} />
      </Suspense>
      <h1 className="text-center text-4xl text-bold my-5">Continue</h1>
      <ResumeHistory />
    </>
  );
};

export default GetStarted;
