import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white",
      h2: "text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white",
      h3: "text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white",
      h4: "text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white",
      body1: "text-base text-neutral-700 dark:text-neutral-300",
      body2: "text-sm text-neutral-600 dark:text-neutral-400",
      caption: "text-xs text-neutral-500 dark:text-neutral-400",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body1",
    weight: "normal",
    align: "left",
  },
});

const tagMapping: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body2: "p",
  caption: "span",
};

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  weight,
  align,
  className,
  children,
  as,
  ...props
}) => {
  const Component = as || tagMapping[variant as string] || "span";

  return (
    <Component
      className={typographyVariants({ variant, weight, align, className })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
