import { Variants } from 'framer-motion';

// 페이드 인 애니메이션
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay: number = 0.2
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// 스태거 자식 요소 애니메이션
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// 텍스트 애니메이션
export const textVariant = (delay: number = 0.2): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay,
      },
    },
  };
};