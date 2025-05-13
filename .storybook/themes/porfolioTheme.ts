import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: '포트폴리오 컴포넌트 라이브러리',
  brandUrl: 'https://your-portfolio-url.com',
  brandTarget: '_self',
  
  // UI
  appBg: '#F8F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Pretendard", sans-serif',
  
  // Text colors
  textColor: '#1A202C',
  textInverseColor: '#FFFFFF',
  
  // Toolbar colors
  barTextColor: '#475569',
  barSelectedColor: '#0369A1',
  barBg: '#FFFFFF',
  
  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputTextColor: '#1A202C',
  inputBorderRadius: 4,
});