"use client";

import React from "react";
import Select from "react-select";
import { DropdownIndicator } from "./DropIndicator";
import { MultiValueRemove } from "./MultiValueRemove";
import { cn } from "@/lib/utils";

const StyledSelect = React.forwardRef(
  (
    {
      options,
      defaultValue,
      placeholder,
      isClearable,
      isMulti = false,
      ...props
    },
    ref
  ) => {
    return (
      <Select
        ref={ref}
        isMulti={isMulti}
        isClearable={isClearable}
        unstyled
        components={{ DropdownIndicator, MultiValueRemove }}
        className="min-h-[2.75rem] text-gray-700 no-scrollbar"
        classNames={{
          control: (state) => {
            return cn(
              "border border-gray-300 rounded-md bg-white px-3.5 py-2.5 text-sm ring-offset-white text-sm px-3",
              state.isFocused &&
                "ring-2 ring-primary outline-none ring-offset-2"
            );
          },

          menu: (_) => {
            return cn(
              "relative z-50 min-w-[8rem] mt-2 overflow-hidden rounded-md border border-gray-300 bg-white text-slate-950 shadow-md"
            );
          },
          menuList: (_) => {
            return cn("p-1.5 text-sm z-50");
          },
          multiValue: (_) => {
            return "border border-gray-300 text-gray-700 item-center font-medium rounded-md text-sm px-[0.3125rem] pr-1 mr-1";
          },
          option: (state) => {
            return cn(
              "cursor-default select-none rounded-sm py-1.5 px-2 text-xs text-gray-600 outline-none",
              state.isFocused ? "bg-gray-100 text-gray-900" : ""
            );
          },
          placeholder: (_) => {
            return cn("text-slate-500 ");
          },
          valueContainer: (_) => {
            return cn("flex flex-wrap gap-1.5");
          },
        }}
        {...props}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    );
  }
);

StyledSelect.displayName = "StyledSelect";

export { StyledSelect };
