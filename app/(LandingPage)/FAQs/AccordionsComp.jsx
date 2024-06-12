"use client";
import PopUpAnimate from "@/shared/animate/PopUpAnimate";
import AccordionCompo from "@/shared/component/accordion";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Questions } from "./data";

const Accordions = () => {
  return (
    <AccordionCompo>
      {Questions.map((quest, i) => (
        <PopUpAnimate hoverAnimate key={i}>
          <AccordionItem
            value={`item-${i}}`}
            className="py-1 border-2 md:border-0 md:shadow-md px-10 my-4 accordionShadcn"
          >
            <AccordionTrigger className="font-bold text-lg md:text-2xl text-start">
              {quest.title}
            </AccordionTrigger>
            <AccordionContent className="md:w-[50%] text-sm md:text-lg">
              {quest.desc}
            </AccordionContent>
          </AccordionItem>
        </PopUpAnimate>
      ))}
    </AccordionCompo>
  );
};

export default Accordions;
