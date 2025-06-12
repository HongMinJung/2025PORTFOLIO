"use client";

import { useContactForm } from '@/hooks/Contact/useContactForm';
import { Toast } from "@/components/ui/Toast/toast";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (submitStatus === "success") {
      setToastType("success");
      setToastMessage("문의가 성공적으로 접수되었습니다.");
      setShowToast(true);
    } else if (submitStatus === "error") {
      setToastType("error");
      setToastMessage("문의 접수에 실패했습니다. 다시 시도해주세요.");
      setShowToast(true);
    }
  }, [submitStatus]);

  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-112px)] snap-start">
      <div className="max-w-7xl px-4 md:px-8 w-full">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-7xl font-bold md:mb-8">
            CONTACT
          </h2>
          <p className="w-[60%] text-base md:text-xl font-semibold text-gray-500 px-4">
            프로젝트나 협업 관련하여 이야기하고 싶으시면 언제든지 연락주세요.
          </p>
        </motion.div>

        {/* 문의 폼 */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-[80%] md:max-w-2xl mx-auto bg-primary-500/10 dark:bg-secondary-500/10 rounded-2xl p-10 md:p-18 shadow-lg dark:shadow-gray-700/40 mt-24"
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
                  className={`text-sm w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
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
                  className={`text-sm w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
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
                  className={`text-sm w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
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
                className={`text-sm w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900 px-4 py-2.5 md:py-3 focus:outline-none focus:border-primary-500 dark:focus:border-secondary-500 pl-8 placeholder:text-gray-500 dark:placeholder:text-gray-500 transition-all`}
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
                placeholder="문의 내용을 입력해주세요."
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
                <Send className="w-4 h-4 md:w-5 md:h-5" />
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
