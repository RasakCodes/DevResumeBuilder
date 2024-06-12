"use client";
import * as React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        auth: "h-11 w-full font-semibold text-base",
        default: "h-12 px-4 py-2 text-base",
        icon: "h-10 w-10",
        lg: "h-12 lg:h-[3.75rem] rounded-md px-7  text-lg",
        sm: "h-9 rounded-md px-3",
      },
      variant: {
        default:
          "bg-primaryx text-slate-50 hover:bg-primaryx-500/90 dark:bg-primaryx dark:text-slate-900 dark:hover:bg-primaryx-800",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 text-primaryx-500",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        outline:
          "border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
      },
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      hasAnimaion = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    if (hasAnimaion) {
      return (
        <motion.div
          className="w-full "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Comp
            className={cn(buttonVariants({ className, size, variant }))}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const ButtonIcon = ({ id }) => {
  return (
    <Button
      id={id}
      variant="outline"
      className="h-7 w-7 rounded-full border-primaryx text-primaryx"
      size="icon"
    >
      <ChevronRightIcon className="h-4 w-4 text-sm" />
    </Button>
  );
};

ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, buttonVariants };
