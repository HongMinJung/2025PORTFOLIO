// .storybook/preview.js
import '../styles/globals.css';    // TailwindCSS 전역 스타일
import '../styles/fonts.css';      // Pretendard 등 폰트 설정

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};