// @type {import('tailwindcss').Config}
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans-serif'],
      },
      colors: {
        'primary-light': '#3182ce',
        'secondary-light': '#2c5282',
        'background-light': '#ffffff',
        'surface-light': '#f7fafc',
        'text-light': '#1a202c',
        
        // 다크 모드 색상
        'primary-dark': '#90cdf4',
        'secondary-dark': '#63b3ed',
        'background-dark': '#1a202c',
        'surface-dark': '#2d3748',
        'text-dark': '#f7fafc',
      },
    },
  },
  plugins: [],
}