import * as React from "react";

import { cn } from "@/lib/utils";
import { Input, InputProps } from "./input";

interface InputGroupProps {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  hideLabel?: boolean;
  className?: string;
  inputProps?: InputProps;
  children?: React.ReactNode;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      label,
      id,
      error,
      helperText,
      hideLabel = false,
      className,
      inputProps,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("grid w-full gap-1.5", className)}
        {...props}
      >
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            hideLabel && "sr-only"
          )}
        >
          {label}
        </label>

        {children || (
          <Input
            id={id}
            aria-invalid={!!error}
            aria-describedby={`${id}-error ${id}-helper`}
            {...inputProps}
          />
        )}

        {error ? (
          <p id={`${id}-error`} className="text-sm text-destructive">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${id}-helper`} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export { InputGroup };
