import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "animate-spin rounded-full border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        default: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-[3px]",
        xl: "h-12 w-12 border-4",
      },
      variant: {
        default: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        muted: "text-muted-foreground/60",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ size, variant }), className)}
        ref={ref}
        role="status"
        aria-label="로딩 중"
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
