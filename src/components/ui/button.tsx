import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  as?: string;
  href?: string;
  target?: string;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  const variantClasses = {
    primary:
      "bg-primary-light hover:bg-primary-light/90 text-white dark:bg-primary-dark dark:hover:bg-primary-dark/90 dark:text-background-dark focus:ring-primary-light dark:focus:ring-primary-dark",
    secondary:
      "bg-secondary-light hover:bg-secondary-light/90 text-white dark:bg-secondary-dark dark:hover:bg-secondary-dark/90 dark:text-background-dark focus:ring-secondary-light dark:focus:ring-secondary-dark",
    outline:
      "border border-primary-light text-primary-light hover:bg-primary-light/10 dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark/10 focus:ring-primary-light dark:focus:ring-primary-dark",
  };

  const sizeClasses = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
