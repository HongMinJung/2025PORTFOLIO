import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FiChevronDown } from "react-icons/fi";

const selectVariants = cva(
  "block w-full rounded-md border appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
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
        sm: "py-1.5 pr-8 pl-3 text-sm",
        md: "py-2 pr-10 pl-3 text-base",
        lg: "py-3 pr-12 pl-4 text-lg",
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

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  options: SelectOption[] | string[];
  placeholder?: string;
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      options,
      placeholder,
      label,
      error,
      ...props
    },
    ref
  ) => {
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

        <div className="relative">
          <select
            ref={ref}
            className={selectVariants({
              variant: resolvedVariant,
              size,
              fullWidth,
              className,
            })}
            {...props}
          >
            {placeholder && (
              <option value="" disabled={props.required}>
                {placeholder}
              </option>
            )}

            {options.map((option, index) => {
              // 옵션이 문자열 배열인 경우
              if (typeof option === "string") {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              }

              // 옵션이 객체인 경우
              const { value, label, disabled } = option as SelectOption;
              return (
                <option key={value} value={value} disabled={disabled}>
                  {label}
                </option>
              );
            })}
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 dark:text-gray-400">
            <FiChevronDown />
          </div>
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select, selectVariants };
