import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 lg:gap-4 text-foreground justify-center rounded-xl lg:rounded-2xl text-xl font-extrabold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/70",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-white text-primary hover:bg-primary/10",
        secondary:
          "bg-white text-secondary-foreground hover:bg-white/80 border",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        game: "relative border-b-4 2xl:border-b-8 border-b-yellow-500 bg-yellow-300 py-2.5 2xl:px-7 2xl:py-2 rounded-lg 2xl:rounded-2xl shadow-lg active:shadow-inner hover:bg-yellow-400 focus:outline-none transform active:translate-y-0.5 active:border-none transition duration-150 ease-in-out",
        gameSecondary:
          "text-white font-semibold bg-[#11A7FC] 2xl:!py-7 w-fit rounded-2xl transform border-b-4 2xl:border-b-8 border-blue-500 py-8 transform active:translate-y-1 active:border-none transition duration-150 ease-in-out z-10",
      },
      size: {
        default: "px-5 py-2.5 lg:px-7 lg:py-4",
        sm: "px-2 py-2 text-sm !rounded-lg !lg:rounded-2xl",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        ghost: "px-0 py-0 h-fit w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
