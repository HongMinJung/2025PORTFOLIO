import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import Typography from "@/components/atoms/Typography";

const cardVariants = cva(
  "rounded-lg overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-dark-800 shadow-md hover:shadow-lg",
        outline:
          "bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:shadow-md",
        elevated: "bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl",
        flat: "bg-gray-50 dark:bg-dark-900 hover:bg-gray-100 dark:hover:bg-dark-800",
      },
      padding: {
        none: "",
        sm: "p-3",
        md: "p-5",
        lg: "p-7",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
  fullHeight?: boolean;
}

export const Card = ({
  className,
  variant,
  padding,
  title,
  subtitle,
  footer,
  image,
  imageAlt = "",
  imagePosition = "top",
  fullHeight = false,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cardVariants({ variant, padding, className })}
      style={{ height: fullHeight ? "100%" : "auto" }}
      {...props}
    >
      {/* 이미지 (위치 상단) */}
      {image && imagePosition === "top" && (
        <div className="relative w-full aspect-video">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 제목과 부제목 */}
      {(title || subtitle) && (
        <div className={padding === "none" ? "p-5" : ""}>
          {title && (
            <Typography variant="h4" className="mb-1">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-400"
            >
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      {/* 본문 컨텐츠 */}
      <div className={padding === "none" && !(title || subtitle) ? "p-5" : ""}>
        {children}
      </div>

      {/* 이미지 (위치 하단) */}
      {image && imagePosition === "bottom" && (
        <div className="relative w-full aspect-video">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 푸터 */}
      {footer && (
        <div
          className={`mt-4 border-t border-gray-200 dark:border-dark-700 pt-4 ${
            padding === "none" ? "px-5 pb-5" : ""
          }`}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
