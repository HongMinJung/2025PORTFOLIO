import React, { forwardRef } from "react";
import { Input, type InputProps } from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";

export interface InputGroupProps extends Omit<InputProps, "id" | "className"> {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string; // 최상위 div에 적용할 className
  inputClassName?: string; // Input 컴포넌트에 전달할 className
}

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (
    {
      id,
      label,
      helperText,
      error,
      required,
      optional,
      className,
      inputClassName,
      ...props
    },
    ref
  ) => {
    // 에러가 있으면 variant를 error로 변경
    const variant = error ? "error" : props.variant;

    return (
      <div className={`w-full space-y-1.5 ${className || ""}`}>
        {/* 라벨 */}
        {label && (
          <label htmlFor={id} className="flex items-center space-x-1">
            <Typography
              variant="body2"
              weight="medium"
              className="block mb-1 text-gray-700 dark:text-gray-300"
            >
              {label}
            </Typography>

            {/* 필수 표시 */}
            {required && <span className="text-red-500">*</span>}

            {/* 선택 사항 표시 */}
            {optional && (
              <Typography
                variant="caption"
                className="text-gray-500 dark:text-gray-400"
              >
                (선택 사항)
              </Typography>
            )}
          </label>
        )}

        {/* 입력 필드 */}
        <Input
          id={id}
          ref={ref}
          aria-describedby={`${id}-helper ${id}-error`}
          aria-invalid={!!error}
          required={required}
          variant={variant}
          className={inputClassName}
          {...props}
        />

        {/* 도움말 텍스트 */}
        {helperText && !error && (
          <Typography
            variant="caption"
            id={`${id}-helper`}
            className="text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </Typography>
        )}

        {/* 에러 메시지 */}
        {error && (
          <Typography
            variant="caption"
            id={`${id}-error`}
            className="text-red-600 dark:text-red-400"
          >
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
