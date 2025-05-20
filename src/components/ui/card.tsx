import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", href, onClick }: CardProps) {
  const baseClasses =
    "bg-surface-light dark:bg-surface-dark rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg";

  const content = (
    <div className={`${baseClasses} ${className}`}>{children}</div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left">
        {content}
      </button>
    );
  }

  return content;
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}
