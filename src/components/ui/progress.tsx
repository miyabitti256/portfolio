"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full transition-all duration-1000 ease-out",
  {
    variants: {
      variant: {
        default: "bg-secondary-200",
        skill: "bg-secondary-200",
        success: "bg-green-100",
        warning: "bg-yellow-100",
        danger: "bg-red-100",
      },
      size: {
        default: "h-2",
        sm: "h-1.5",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-1000 ease-out rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary-500",
        skill: "bg-gradient-to-r from-primary-400 to-primary-600",
        success: "bg-gradient-to-r from-green-400 to-green-600",
        warning: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        danger: "bg-gradient-to-r from-red-400 to-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number
}

function Progress({
  className,
  value,
  variant,
  size,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressVariants({ variant, size, className }))}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
