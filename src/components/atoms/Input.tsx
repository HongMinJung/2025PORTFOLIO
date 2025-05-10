import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500",
        error:
          "border-red-500 bg-red-50 dark:bg-red-900/10 text-red-900 dark:text-red-300 focus:ring-red-500 focus:border-red-500",
        success:
          "border-green-500 bg-green-50 dark:bg-green-900/10 text-green-900 dark:text-green-300 focus:ring-green-500 focus:border-green-500",
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3 text-base",
        lg: "p-4 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, size, fullWidth, leftIcon, rightIcon, ...props },
    ref
  ) => {
    const inputClasses = inputVariants({ variant, size, fullWidth, className });

    // 아이콘이 있는 경우 패딩 조정
    const withIconClasses = leftIcon ? "pl-10" : rightIcon ? "pr-10" : "";

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          className={`${inputClasses} ${withIconClasses}`}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
