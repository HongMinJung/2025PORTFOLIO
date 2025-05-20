import { ReactNode } from "react";

interface FullpageSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "dark" | "gradient";
}

export function FullpageSection({
  children,
  className = "",
  id,
  background = "light",
}: FullpageSectionProps) {
  const backgroundClasses = {
    light:
      "bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark",
    dark: "bg-surface-light text-text-light dark:bg-surface-dark dark:text-text-dark",
    gradient:
      "bg-gradient-to-br from-primary-light/20 to-secondary-light/30 dark:from-primary-dark/20 dark:to-secondary-dark/30",
  };

  return (
    <div
      className={`section ${backgroundClasses[background]} ${className}`}
      id={id}
    >
      <div className="container flex items-center h-full px-4 mx-auto">
        {children}
      </div>
    </div>
  );
}
