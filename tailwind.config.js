/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14243A',
          deep: '#0E1A2B',
          light: '#1B2F4B',
        },
        slate: {
          blue: '#263F60',
          dark: '#1C2E46',
        },
        royal: {
          DEFAULT: '#356AE6',
          hover: '#2954BD',
          soft: '#EAF1FF',
          dark: '#1E42A8',
        },
        orange: {
          DEFAULT: '#FD6C00',
          soft: '#FFF1E6',
        },
        teal: {
          accent: '#36B49B',
          dark: '#1F7262', // darkened from #278A76 for 4.5:1 text contrast
          soft: '#E6F7F4',
        },
        neutral: {
          bg: '#F7F8FA',
          card: '#FFFFFF',
          text: '#202B3C',
          muted: '#5B6577', // darkened from #738096 for 4.5:1 text contrast
          border: '#E5EAF1',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '18px',
        'card-sm': '14px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(20, 36, 58, 0.04)',
        'premium': '0 8px 30px rgba(20, 36, 58, 0.07)',
        'hover': '0 14px 40px rgba(20, 36, 58, 0.11)',
      },
    },
  },
  plugins: [],
}

