/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff8f5',
          100: '#fff0ea',
          200: '#ffe4d5',
          300: '#ffd0b5',
          400: '#ffb088',
          500: '#ff9466',
          600: '#ff7a4d',
          700: '#f5603a',
          800: '#e2482b',
          900: '#c73d24',
          950: '#871e10'
        },
        secondary: {
          50: '#f0f5fa',
          100: '#e1eaf4',
          200: '#c7d6e7',
          300: '#9db6d3',
          400: '#7091bc',
          500: '#5073a8',
          600: '#3d5c8f',
          700: '#324a75',
          800: '#2c3e62',
          900: '#1a2744',
          950: '#101730'
        },
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '8': '0.5rem', //8px
        '16': '1rem', //16px
        '18': '1.125rem', // 18px
        '32': '2rem', //32px
        '52': '3.25rem',   // 52px
        '60': '3.75rem',   // 60px
        '512': '32rem',    // 512px
        '576': '36rem',    // 576px
      },
      
      screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px'
    },
    },
  },
  plugins: [],
}