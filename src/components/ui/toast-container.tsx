import { Toast } from "./toast";
import { Toast as ToastType } from "@/types/toast";

interface ToastContainerProps {
  toasts: ToastType[];
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  onRemove: (id: string) => void;
}

export function ToastContainer({
  toasts,
  position = "top-right",
  onRemove,
}: ToastContainerProps) {
  // 위치에 따른 스타일 클래스
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`fixed z-50 p-4 flex flex-col ${positionClasses[position]}`}
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}
