"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(
  ({ className, value, max, fill, placeholder, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-foreground/25",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute text-white text-xs lg:text-base lg:text-[26px] left-1/2 -translate-x-1/2 whitespace-nowrap top-1/2 -translate-y-1/2 z-10 animate-pulse ",
          { hidden: !placeholder }
        )}
      >
        {placeholder}
      </span>
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 bg-primary transition-all", fill)}
        style={{
          transform: `translateX(-${(max - (value || 0)) / (max / 100)}%)`,
          transition: "transform 1s linear", // Add CSS transition property
        }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
