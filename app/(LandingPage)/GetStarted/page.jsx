import React, { Suspense } from "react";
import GetStarted from ".";
import Spin from "@/shared/spin";

const page = () => {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <GetStarted />
      </Suspense>
    </div>
  );
};

export default page;
