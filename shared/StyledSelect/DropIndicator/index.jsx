import { ChevronArrowDown } from "@/shared/component/icons/ChevronArrowDown";
import { components } from "react-select";

export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronArrowDown className="h-4 w-4 stroke-black stroke-2" />
    </components.DropdownIndicator>
  );
};
