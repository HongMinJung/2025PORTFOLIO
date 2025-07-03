"use client";

import { useContactForm } from "@/hooks/Contact/useContactForm";
import { Toast } from "@/components/ui/Toast/toast";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { contactStyles } from "@/styles/contact";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { validateForm } from '@/lib/Contact/validation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    setFormData,
    setErrors,
  } = useContactForm();

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (submitStatus === "success") {
      setToastType("success");
      setToastMessage("문의가 성공적으로 전송되었습니다.");
      setShowToast(true);
    } else if (submitStatus === "error") {
      setToastType("error");
      setToastMessage("문의 접수에 실패했습니다. 다시 시도해주세요.");
      setShowToast(true);
    }
  }, [submitStatus]);

  if (!isOpen) return null;

  const renderInput = (
    id: string,
    label: string,
    type: string = "text",
    placeholder: string,
    required: boolean = true,
    maxLength?: number
  ) => (
    <div>
      <label htmlFor={id} className={contactStyles.label}>
        {label}{required && <span className="red-text">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={formData[id as keyof typeof formData]}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`${contactStyles.input.base} ${errors[id as keyof typeof errors] ? contactStyles.input.error : contactStyles.input.normal}`}
      />
      {errors[id as keyof typeof errors] && (
        <p className="pl-8 mt-1 text-xs text-red-500 hidden md:block">
          {errors[id as keyof typeof errors]}
        </p>
      )}
    </div>
  );

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 검증
    const validationErrors = validateForm(formData);
    const hasErrors = validationErrors && Object.keys(validationErrors).length > 0;
    if (hasErrors) {
      setErrors(validationErrors);
      setToastType('error');
      setToastMessage('필수 항목을 모두 입력해주세요.');
      setShowToast(true);
      return;
    }

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_5r40hrj',
        'template_wxwx7ok',
        formRef.current,
        'lWYFjSULxwGBSAmlM'
      )
      .then(
        () => {
          setToastType('success');
          setToastMessage('메일이 성공적으로 전송되었습니다.');
          setShowToast(true);
          formRef.current?.reset();
          setFormData({
            name: "",
            contact: "",
            company: "",
            companyEmail: "",
            subject: "",
            message: "",
            email: ""
          });
          setErrors({});
        },
        () => {
          setToastType('error');
          setToastMessage('메일 전송에 실패했습니다.');
          setShowToast(true);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={contactStyles.modal.container}
      >
        <div className={contactStyles.modal.header}>
          <h2 className="text-2xl font-bold">연락하기</h2>
          <button
            onClick={onClose}
            className={contactStyles.modal.closeButton}
          >
            <X size={24} />
          </button>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-1 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {renderInput("name", "이름", "text", "성함을 입력해주세요.")}
            {renderInput("contact", "연락처", "text", "연락처를 입력해주세요.", true, 11)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {renderInput("company", "회사명", "text", "회사명을 입력해주세요.")}
            {renderInput("companyEmail", "회사 이메일", "email", "이메일을 입력해주세요.")}
          </div>

          {renderInput("subject", "제목", "text", "제목을 입력해주세요.")}

          <div>
            <label htmlFor="message" className={contactStyles.label}>
              문의 내용<span className="red-text">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="문의 내용을 입력해주세요."
              className={`${contactStyles.input.base} ${errors.message ? contactStyles.input.error : contactStyles.input.normal} resize-none`}
            />
            {errors.message && (
              <p className="pl-8 mt-1 text-xs text-red-500 hidden md:block">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 md:mt-8 py-4 md:py-8 rounded-lg bg-primary-400 dark:bg-secondary-500 text-white font-medium text-sm transition-all hover:bg-primary-700 dark:hover:bg-secondary-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? "전송 중" : "문의하기"}
          </button>
        </form>
      </motion.div>

      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
