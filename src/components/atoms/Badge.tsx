import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-heading-1 font-heading font-bold",
      h2: "text-heading-2 font-heading font-semibold",
      h3: "text-heading-3 font-heading font-semibold",
      h4: "text-heading-4 font-heading font-semibold",
      "body-xl": "text-body-xl",
      "body-lg": "text-body-lg",
      "body-base": "text-body-base",
      "body-sm": "text-body-sm",
      caption: "text-xs",
    },
    color: {
      default: "text-gray-900 dark:text-white",
      muted: "text-gray-600 dark:text-gray-300",
      primary: "text-primary-600 dark:text-primary-400",
      secondary: "text-secondary-600 dark:text-secondary-400",
      success: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      warning: "text-amber-600 dark:text-amber-400",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body-base",
    color: "default",
    align: "left",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export interface TypographyProps<C extends React.ElementType> {
  component?: C;
  variant?: TypographyVariants["variant"];
  color?: TypographyVariants["color"];
  align?: TypographyVariants["align"];
  weight?: TypographyVariants["weight"];
  className?: string;
  children?: React.ReactNode;
}

type PolymorphicComponentProps<C extends React.ElementType> =
  TypographyProps<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof TypographyProps<C>>;

export const Typography = <C extends React.ElementType = "p">({
  component,
  variant,
  color,
  align,
  weight,
  className,
  children,
  ...rest
}: PolymorphicComponentProps<C>) => {
  // variant가 h1-h6 중 하나이고 component가 지정되지 않았으면 해당 heading 요소 사용
  const Component =
    component ||
    (variant && typeof variant === "string" && variant.startsWith("h")
      ? (variant as unknown as C)
      : ("p" as unknown as C));

  const classNames = typographyVariants({
    variant,
    color,
    align,
    weight,
    className,
  });

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
