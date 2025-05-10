import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { FiX } from "react-icons/fi";
import Typography from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

const modalVariants = cva(
  "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-800 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col max-h-[85vh]",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-xl",
        "2xl": "w-full max-w-2xl",
        full: "w-full max-w-full mx-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
}

export const Modal = ({
  className,
  size,
  isOpen,
  onClose,
  title,
  description,
  closeOnOverlayClick = true,
  showCloseButton = true,
  footer,
  children,
  ...props
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 모달이 열리면 body 스크롤 방지
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // 모달 외부 클릭 감지
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // 모달이 닫혀있으면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  // createPortal을 사용하여 모달을 body 직접 자식으로 렌더링
  return createPortal(
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={handleOverlayClick}
      />

      {/* 모달 */}
      <div
        ref={modalRef}
        className={modalVariants({ size, className })}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
        {...props}
      >
        {/* 헤더 */}
        {(title || showCloseButton) && (
          <div className="p-4 border-b border-gray-200 dark:border-dark-700 flex items-center justify-between">
            <div>
              {title && (
                <div id="modal-title">
                  <Typography variant="h4">{title}</Typography>
                </div>
              )}
              {description && (
                <div id="modal-description">
                  <Typography
                    variant="body2"
                    className="mt-1 text-gray-600 dark:text-gray-400"
                  >
                    {description}
                  </Typography>
                </div>
              )}
            </div>

            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                aria-label="닫기"
              >
                <FiX size={20} />
              </button>
            )}
          </div>
        )}

        {/* 본문 */}
        <div className="p-4 overflow-y-auto flex-1">{children}</div>

        {/* 푸터 */}
        {footer && (
          <div className="p-4 border-t border-gray-200 dark:border-dark-700 flex justify-end space-x-3">
            {footer}
          </div>
        )}
      </div>
    </>,
    document.body
  );
};

// 기본 푸터 버튼을 위한 컴포넌트
interface ModalFooterProps {
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelDisabled?: boolean;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm,
  cancelDisabled = false,
  confirmDisabled = false,
  confirmLoading = false,
}) => {
  return (
    <>
      {onCancel && (
        <Button variant="outline" onClick={onCancel} disabled={cancelDisabled}>
          {cancelText}
        </Button>
      )}
      {onConfirm && (
        <Button
          variant="primary"
          onClick={onConfirm}
          disabled={confirmDisabled || confirmLoading}
        >
          {confirmLoading ? "처리 중..." : confirmText}
        </Button>
      )}
    </>
  );
};

Modal.Footer = ModalFooter;

export default Modal;
