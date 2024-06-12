import { Button } from "@/components/ui/button";
import React from "react";

const ButtonComp = ({ text, type, className, disabled = false }) => {
  return (
    <div className={`flex justify-end ${className}`}>
      <Button
        disabled={disabled}
        type={type}
        className="bg-[#F9E547] buttonShadow text-black hover:bg-yellow-600  font-bold py-2 px-4 rounded-r"
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComp;
