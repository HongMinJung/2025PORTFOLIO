import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva("inline-flex items-center rounded-full font-medium", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-300",
      primary:
        "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
      secondary:
        "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      warning:
        "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    size: {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export const Badge = ({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span className={badgeVariants({ variant, size, className })} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};
