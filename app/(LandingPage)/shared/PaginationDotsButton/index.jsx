import React from "react";
import Dot from "./Dot";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const PaginateDotButton = ({ count, activeIndex, scroll }) => {
  return (
    <div className="mt-8 flex justify-between items-center gap-4 lg:gap-8">
      <Dot count={count} activeIndex={activeIndex} />
      <div className="flex gap-x-3">
        <Button
          className="group h-12 w-12 rounded-full border border-gray-200 bg-white lg:h-14 lg:w-14"
          onClick={() => scroll("left")}
        >
          <ArrowLeftIcon className="h-6 w-6 stroke-gray-500 " />
        </Button>
        <Button
          className="group h-12 w-12 rounded-full border border-gray-200 bg-white lg:h-14 lg:w-14"
          onClick={() => scroll("right")}
        >
          <ArrowRightIcon className="h-6 w-6 stroke-gray-500 " />
        </Button>
      </div>
    </div>
  );
};

export default PaginateDotButton;
