import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  const variantClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    primary:
      "bg-primary-light/20 text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark",
    secondary:
      "bg-secondary-light/20 text-secondary-light dark:bg-secondary-dark/20 dark:text-secondary-dark",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
