"use client";

import { useContactForm } from '@/hooks/Contact/useContactForm';
import { Toast } from "@/components/ui/Toast/toast";
import { useState, useEffect } from "react";

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
    <section className="min-h-svh md:min-h-[calc(100vh-112px)] max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 snap-start">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col  items-center justify-between bg-primary-300/10 dark:bg-secondary-300/10 rounded-xl shadow-lg py-20 h-full gap-4">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-200 text-lg font-semibold">
              프로젝트나 협업에 대해 이야기하고 싶으시다면
              <br />
              언제든지 연락주세요.
            </p>
          </div>
          <div className="w-full gap-3 space-y-4 flex flex-col items-center">
            <div className="flex flex-col space-y-20">
              <div className="flex items-center text-center gap-3">
                <span className="text-xl">📧 메일</span>
                <a
                  href="mailto:hminjung99@gmail.com"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition"
                >
                  hminjung99@gmail.com
                </a>
              </div>
              <div className="flex items-center text-center gap-3">
                <span className="text-xl">📱 번호</span>
                <p className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                  82-10-5965-1504
                </p>
              </div>

              <div className="flex items-center text-center gap-3">
                <span className="text-xl">📍 위치</span>
                <p className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                  서울시 중랑구
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/HongMinJung"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:border-b-2 hover:border-primary-600 dark:hover:border-secondary-300  hover:text-primary-600 dark:hover:text-secondary-300"
              aria-label="GitHub"
            >
              <span className="text-xl">GitHub</span>
            </a>
          </div>
        </div>
        {/* 문의 폼 */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-20"
        >
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* 이름 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
                >
                  이름<span className="red-text">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성함을 입력해주세요."
                  className={`text-sm w-full rounded-lg border ${errors.name ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500`}
                />
                {errors.name && (
                  <p className="pl-8 mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              {/* 연락처 */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
                >
                  연락처<span className="red-text">*</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  maxLength={11}
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="연락처를 입력해주세요."
                  className={`text-sm w-full rounded-lg border ${errors.contact ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500`}
                />
                {errors.contact && (
                  <p className="pl-8 mt-1 text-xs text-red-500">{errors.contact}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* 회사명 */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
                >
                  회사명<span className="red-text">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="회사명을 입력해주세요."
                  className={`text-sm w-full rounded-lg border ${errors.company ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500`}
                />
                {errors.company && (
                  <p className="pl-8 mt-1 text-xs text-red-500">{errors.company}</p>
                )}
              </div>
              {/* 회사 이메일 */}
              <div>
                <label
                  htmlFor="companyEmail"
                  className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
                >
                  회사 이메일<span className="red-text">*</span>
                </label>
                <input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="이메일을 입력해주세요."
                  className={`text-sm w-full rounded-lg border ${errors.companyEmail ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500`}
                />
                {errors.companyEmail && (
                  <p className="pl-8 mt-1 text-xs text-red-500">
                    {errors.companyEmail}
                  </p>
                )}
              </div>
            </div>
            {/* 제목 */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
              >
                제목<span className="red-text">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="제목을 입력해주세요."
                className={`text-sm w-full rounded-lg border ${errors.subject ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500`}
              />
              {errors.subject && (
                <p className="pl-8 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>
            {/* 내용 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1 text-gray-800 dark:text-white"
              >
                문의 내용<span className="red-text">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요."
                className={`text-sm w-full rounded-lg border ${errors.message ? "border-red-500" : "border-gray-200"} bg-white dark:bg-zinc-900  px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2  focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500 resize-none`}
              />
              {errors.message && (
                <p className="pl-8 text-xs text-red-500">{errors.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 py-3 rounded-lg bg-primary text-gray-800 dark:text-white border dark:border-gray-700 font-medium text-md transition hover:bg-primary-100 hover:border-primary-300 dark:hover:bg-secondary-200/10 focus:outline-none focus:border-2 focus:bg-primary-300/40 dark:focus:bg-secondary-400/20 focus:border-primary-300 dark:focus:border-secondary-800 focus:ring-offset-2"
          >
            {isSubmitting ? "전송 중" : "문의하기"}
          </button>
          
          <Toast
            message={toastMessage}
            type={toastType}
            isVisible={showToast}
            onClose={() => setShowToast(true)}
          />
        </form>
      </div>
    </section>
  );
}
