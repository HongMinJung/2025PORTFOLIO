import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  FC,
} from "react";
import { createPortal } from "react-dom";
import { cva, type VariantProps } from "class-variance-authority";
import {
  FiX,
  FiInfo,
  FiCheck,
  FiAlertTriangle,
  FiAlertCircle,
} from "react-icons/fi";
import Typography from "@/components/atoms/Typography";

const toastVariants = cva(
  "fixed flex items-center w-auto max-w-sm p-4 mb-4 rounded-lg border shadow-lg transition-opacity duration-300 z-50",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200",
        success:
          "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300",
        info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300",
        warning:
          "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300",
        error:
          "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300",
      },
      position: {
        "top-center": "top-4 left-1/2 transform -translate-x-1/2",
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top-center",
    },
  }
);

// Toast Props 정의
export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  message: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseTime?: number;
  showIcon?: boolean;
  showCloseButton?: boolean;
}

export const Toast = ({
  className,
  variant,
  position,
  message,
  description,
  icon,
  onClose,
  autoClose = true,
  autoCloseTime = 5000,
  showIcon = true,
  showCloseButton = true,
  ...props
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // 토스트 닫기
  const closeToast = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // 페이드 아웃 애니메이션 후 콜백 실행
  }, [onClose]);

  // 자동 닫기
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(closeToast, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, closeToast]);

  // 기본 아이콘 선택
  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return <FiCheck size={18} />;
      case "info":
        return <FiInfo size={18} />;
      case "warning":
        return <FiAlertTriangle size={18} />;
      case "error":
        return <FiAlertCircle size={18} />;
      default:
        return <FiInfo size={18} />;
    }
  };

  const finalIcon = icon || getDefaultIcon();

  if (!isVisible) return null;

  const toastContent = (
    <div
      className={toastVariants({
        variant,
        position,
        className: `${isVisible ? "opacity-100" : "opacity-0"} ${
          className || ""
        }`,
      })}
      role="alert"
      {...props}
    >
      {showIcon && <div className="flex-shrink-0 mr-3">{finalIcon}</div>}

      <div className="flex-1">
        <Typography variant="body2" weight="medium">
          {message}
        </Typography>
        {description && (
          <Typography variant="caption" className="mt-1">
            {description}
          </Typography>
        )}
      </div>

      {showCloseButton && (
        <button
          type="button"
          className="ml-3 flex-shrink-0 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none"
          onClick={closeToast}
          aria-label="알림 닫기"
        >
          <FiX size={16} />
        </button>
      )}
    </div>
  );

  return createPortal(toastContent, document.body);
};

// 토스트 컨텍스트, 프로바이더 및 useToast 훅
interface ToastOptions extends Omit<ToastProps, "message"> {
  id?: string;
}

interface ToastContextType {
  showToast: (message: string, options?: ToastOptions) => string;
  closeToast: (id: string) => void;
  closeAllToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastItem extends ToastProps {
  id: string;
}

export const ToastProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, options: ToastOptions = {}): string => {
    const id = options.id || Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = { id, message, ...options };
    setToasts((prev) => [...prev, newToast]);
    return id;
  };

  const closeToastById = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const closeAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, closeToast: closeToastById, closeAllToasts }}
    >
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => closeToastById(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
};

// useToast 훅
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default Toast;
