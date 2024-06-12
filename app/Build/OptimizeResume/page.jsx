import React, { Suspense } from "react";
import OptimizeResume from ".";
import Spin from "@/shared/spin";

const page = () => {
  return (
    <Suspense fallback={<Spin />}>
      <OptimizeResume />
    </Suspense>
  );
};

export default page;
