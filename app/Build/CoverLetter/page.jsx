import React, { Suspense } from "react";
import CoverLetter from ".";
import Spin from "@/shared/spin";

const page = () => {
  return (
    <Suspense fallback={<Spin />}>
      <CoverLetter />;
    </Suspense>
  );
};

export default page;
