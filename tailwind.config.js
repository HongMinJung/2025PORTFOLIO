/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff8f5",
          100: "#fff0ea",
          200: "#ffe4d5",
          300: "#ffd0b5",
          400: "#ffb088",
          500: "#ff9466",
          600: "#ff7a4d",
          700: "#f5603a",
          800: "#e2482b",
          900: "#c73d24",
          950: "#871e10",
        },
        secondary: {
          50: "#f0f5fa",
          100: "#e1eaf4",
          200: "#c7d6e7",
          300: "#9db6d3",
          400: "#7091bc",
          500: "#5073a8",
          600: "#3d5c8f",
          700: "#324a75",
          800: "#2c3e62",
          900: "#1a2744",
          950: "#101730",
        },
        neutral: {
          50: "#ffffff",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-2": ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        h5: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        h6: ["1rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        4: "0.25rem", // 4px
        6: "0.375rem", // 6px
        8: "0.5rem", // 8px
        10: "0.625rem", // 10px
        12: "0.75rem", // 12px
        14: "0.875rem", // 14px
        16: "1rem", // 16px
        18: "1.125rem", // 18px
        20: "1.25rem", // 20px
        24: "1.5rem", // 24px
        28: "1.75rem", // 28px
        32: "2rem", // 32px
        36: "2.25rem", // 36px
        40: "2.5rem", // 40px
        44: "2.75rem", // 44px
        48: "3rem", // 48px
        52: "3.25rem", // 52px
        56: "3.5rem", // 56px
        60: "3.75rem", // 60px
        64: "4rem", // 64px
        72: "4.5rem", // 72px
        80: "5rem", // 80px
        96: "6rem", // 96px
        120: "7.5rem", // 120px
        160: "10rem", // 160px
        200: "12.5rem", // 200px
        240: "15rem", // 240px
        280: "17.5rem", // 280px
        320: "20rem", // 320px
        384: "24rem", // 384px
        448: "28rem", // 448px
        512: "32rem", // 512px
        576: "36rem", // 576px
      },

      gap: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.5rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.5rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.5rem",
        35: "8.75rem",
      },

      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        twinkle: {
          '0%': { opacity: 1, fill: 'none' },
          '50%': { opacity: 0.7, fill: 'currentColor' },
          '100%': { opacity: 1, fill: 'none' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "twinkle": "twinkle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
