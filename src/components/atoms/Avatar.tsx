import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-dark-700",
  {
    variants: {
      variant: {
        circular: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-none",
      },
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl",
      },
    },
    defaultVariants: {
      variant: "circular",
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string | React.ReactNode;
  status?: "online" | "away" | "busy" | "offline";
}

export const Avatar = ({
  className,
  variant,
  size,
  src,
  alt = "Avatar",
  fallback,
  status,
  ...props
}: AvatarProps) => {
  // 이니셜 생성 (fallback이 문자열인 경우)
  const initials =
    typeof fallback === "string" && fallback.length > 0
      ? fallback
          .split(" ")
          .map((part) => part[0])
          .join("")
          .toUpperCase()
      : alt
      ? alt
          .split(" ")
          .map((part) => part[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "";

  // 상태 표시 색상
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    offline: "bg-gray-500",
  };

  return (
    <div className={avatarVariants({ variant, size, className })} {...props}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-medium text-gray-600 dark:text-gray-300">
          {typeof fallback === "string" ? initials : fallback || initials}
        </div>
      )}

      {status && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-dark-800 ${statusColors[status]}`}
          style={{
            width: "calc(33% - 2px)",
            height: "calc(33% - 2px)",
            minWidth: "8px",
            minHeight: "8px",
            maxWidth: "12px",
            maxHeight: "12px",
          }}
        />
      )}
    </div>
  );
};
