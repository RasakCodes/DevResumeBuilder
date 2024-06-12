import React from "react";
import { Accordion } from "@/components/ui/accordion";
const AccordionCompo = ({ children }) => {
  return (
    <Accordion type="single" collapsible>
      {children}
    </Accordion>
  );
};

export default AccordionCompo;
