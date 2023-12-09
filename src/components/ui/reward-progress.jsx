"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const RewardProgress = React.forwardRef(
  ({ className, value, max, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-foreground/25",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{
          transform: `translateX(-${(max - (value || 0)) / (max / 100)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
);
RewardProgress.displayName = ProgressPrimitive.Root.displayName;

export { RewardProgress };
