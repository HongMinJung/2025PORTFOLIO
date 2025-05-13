import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINTS } from '@/lib/design-tokens';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 미디어 쿼리 확인 훅
export function getMediaQuery(breakpoint: keyof typeof BREAKPOINTS) {
  return `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
}