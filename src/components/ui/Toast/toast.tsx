"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      <div className="max-w-8xl 3xl:max-w-10xl fixed top-[8%] left-1/2 transform -translate-x-1/2 z-50">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className=" w-fit"
          >
            <div
              className={`flex items-center gap-2 px-2 py-3 rounded-lg shadow-lg ${
                type === "success"
                  ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                  : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
              }`}
            >
              {type === "success" ? (
                <CheckCircle2 className="hidden md:block w-5 h-5" />
              ) : (
                <XCircle className="hidden md:block w-5 h-5" />
              )}
              <p className="text-xs md:text-sm font-medium">{message}</p>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
} 