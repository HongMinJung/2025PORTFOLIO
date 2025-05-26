import { FormData, FormErrors } from '@/types/Contact/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{11}$/;

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name?.trim()) {
    errors.name = "이름을 입력해주세요";
  }

  if (!formData.company?.trim()) {
    errors.company = "회사명을 입력해주세요";
  }

  if (!formData.companyEmail?.trim()) {
    errors.companyEmail = "회사 이메일을 입력해주세요";
  } else if (!EMAIL_REGEX.test(formData.companyEmail)) {
    errors.companyEmail = "유효한 회사 이메일 주소를 입력해주세요";
  }

  if (!formData.contact?.trim()) {
    errors.contact = "연락처를 입력해주세요";
  } else if (!PHONE_REGEX.test(formData.contact)) {
    errors.contact = "유효한 연락처를 입력해주세요";
  }

  if (!formData.subject?.trim()) {
    errors.subject = "제목을 입력해주세요.";
  } else if (formData.subject.length < 5) {
    errors.subject = "제목은 최소 5자 이상이어야 합니다";
  }

  if (!formData.message?.trim()) {
    errors.message = "메시지를 입력해주세요";
  } else if (formData.message.length < 10) {
    errors.message = "메시지는 최소 10자 이상이어야 합니다";
  }

  return errors;
}; 