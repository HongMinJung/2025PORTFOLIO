"use client";

import { useContactForm } from '@/hooks/Contact/useContactForm';
import { Toast } from "@/components/ui/Toast/toast";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { validateForm } from '@/lib/Contact/validation';

export function Contact() {
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (submitStatus === "success") {
      setToastType("success");
      setToastMessage("메일이 성공적으로 전송되었습니다.");
      setShowToast(true);
    } else if (submitStatus === "error") {
      setToastType("error");
      setToastMessage("메일 전송에 실패했습니다. 다시 시도해주세요.");
      setShowToast(true);
    }
  }, [submitStatus]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 폼 검증 수행
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
        'service_5r40hrj', // emailjs 서비스 ID
        'template_wxwx7ok', // emailjs 템플릿 ID
        formRef.current,
        'lWYFjSULxwGBSAmlM' // emailjs public key
      )

      .then(
        () => {
          setToastType('success');
          setToastMessage('메일이 성공적으로 전송되었습니다.');
          setShowToast(true);
          formRef.current?.reset();
          if (typeof setFormData === 'function') {
            setFormData({
              name: "",
              contact: "",
              company: "",
              companyEmail: "",
              subject: "",
              message: "",
              email: ""
            });
          }
          // 에러 상태 초기화
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
    <section id="contact" ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start">
      <div className="flex flex-col xl:flex-row items-center justify-center max-w-8xl 3xl:max-w-10xl px-4 md:px-8 w-full">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full text-center mb-8 md:mb-16 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold md:mb-8">
            CONTACT
          </h2>
          <p className="text-md md:text-xl font-semibold text-gray-500 px-4">
            프로젝트 또는 협업 관련하여 이야기 나누고 싶으시면<br />
            메일로 보내주시면 빠르게 답변드리겠습니다.
          </p>
        </motion.div>

        {/* 문의 폼 */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onSubmit={sendEmail}
          className="w-[90%] md:w-full mx-auto bg-primary-500/10 dark:bg-secondary-500/10 rounded-2xl p-10 md:p-18 shadow-lg dark:shadow-gray-700/40 mt-24"
        >
          <div className="space-y-4 md:space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
              {/* 이름 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2"
                >
                  이름<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성함을 입력해주세요."
                  className={`text-sm w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 ml-2 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              {/* 연락처 */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm mb-2"
                >
                  연락처<span className="text-red-500">*</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  maxLength={11}
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="연락처를 입력해주세요."
                  className={`text-sm w-full rounded-xl border ${errors.contact ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
                />
                {errors.contact && (
                  <p className="mt-1 ml-2 text-xs text-red-500">{errors.contact}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
              {/* 회사명 */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm mb-2"
                >
                  회사명<span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="회사명을 입력해주세요."
                  className={`text-sm w-full rounded-xl border ${errors.company ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
                />
                {errors.company && (
                  <p className="mt-1 ml-2 text-xs text-red-500">{errors.company}</p>
                )}
              </div>
              {/* 회사 이메일 */}
              <div>
                <label
                  htmlFor="companyEmail"
                  className="block text-sm mb-2"
                >
                  회사 이메일<span className="text-red-500">*</span>
                </label>
                <input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="이메일을 입력해주세요."
                  className={`text-sm w-full rounded-xl border ${errors.companyEmail ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
                />
                {errors.companyEmail && (
                  <p className="mt-1 ml-2 text-xs text-red-500">{errors.companyEmail}</p>
                )}
              </div>
            </div>

            {/* 제목 */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm mb-2"
              >
                제목<span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="제목을 입력해주세요."
                className={`text-sm w-full rounded-xl border ${errors.subject ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
              />
              {errors.subject && (
                <p className="mt-1 ml-2 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            {/* 내용 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-2"
              >
                문의 내용<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요. (최소 10자 이상)"
                className={`text-sm w-full rounded-xl border ${errors.message ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 resize-none transition-all`}
              />
              {errors.message && (
                <p className="mt-1 ml-2 text-xs text-red-500">{errors.message}</p>
              )}
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 md:mt-8 py-4 md:py-8 rounded-lg bg-primary-400 dark:bg-secondary-500 text-white font-medium text-sm transition-all hover:bg-primary-700 dark:hover:bg-secondary-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "전송 중..."
            ) : (
              <>
                <Send className="w-3 h-3" />
                문의하기
              </>
            )}
          </motion.button>
          
          <Toast
            message={toastMessage}
            type={toastType}
            isVisible={showToast}
            onClose={() => setShowToast(false)}
          />
        </motion.form>
      </div>
    </section>
  );
}
