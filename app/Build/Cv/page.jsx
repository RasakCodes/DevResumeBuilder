import React, { Suspense } from "react";
import Cv from ".";

const page = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <Cv />
      </Suspense>
    </div>
  );
};

export default page;
