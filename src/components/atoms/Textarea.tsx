import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "w-full rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 resize-y",
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
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, label, error, ...props }, ref) => {
    // 에러 상태에 따라 변형 조정
    const resolvedVariant = error ? "error" : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          className={textareaVariants({
            variant: resolvedVariant,
            size,
            className,
          })}
          {...props}
        />

        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
