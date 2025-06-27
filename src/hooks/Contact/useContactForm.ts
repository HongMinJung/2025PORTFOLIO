import { useState } from 'react';
import { FormData, FormErrors } from '@/types/Contact/types';
import { validateForm } from '@/lib/Contact/validation';

const initialFormData: FormData = {
  name: "",
  contact: "",
  company: "",
  companyEmail: "",
  subject: "",
  message: "",
  email: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사
    const validationErrors = validateForm(formData);
    const hasErrors = validationErrors && Object.keys(validationErrors).length > 0;
    
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    // 제출 상태 초기화
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      // TODO: 실제 이메일 전송 API 호출 구현
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // 성공 처리
      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      // 에러 처리
      setSubmitStatus("error");
      console.error('Form submission error:', error);
    } finally {
      // 제출 상태 해제
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    setFormData,
  };
}; 