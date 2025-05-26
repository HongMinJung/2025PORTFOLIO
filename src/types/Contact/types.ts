export interface FormData {
  name: string;
  email: string;
  company: string;
  companyEmail: string;
  contact: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  companyEmail?: string;
  contact?: string;
  subject?: string;
  message?: string;
}

export type SubmitStatus = "success" | "error" | null; 