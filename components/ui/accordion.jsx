"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { MinusIcon } from "@/shared/component/icons/MinusIcon";
import { PlusIcon } from "@/shared/component/icons/PlusIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(
  ({ className, noExtaStyle, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    />
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, noExtaStyle, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all",
            className,
            {
              "bg-[var(--Neutral-100, #FFF)] ": isOpen,
            }
          )}
          {...props}
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
          {noExtaStyle ? (
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          ) : (
            <span
              className={`shrink-0 transition-transform duration-200 ${
                isOpen
                  ? "bg-[#f9e547] shadow-lg"
                  : "bg-white shadow-[0_0_10px_rgb(242,222,69)]"
              } md:w-[40px] w-[20px] md:h-[40px] h-[20px] flex justify-center items-center rounded-full`}
            >
              {isOpen && !noExtaStyle ? <MinusIcon /> : <PlusIcon />}
            </span>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
