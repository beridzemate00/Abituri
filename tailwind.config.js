/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          light: '#6366f1',
          dark: '#4338ca',
        },
        surface: {
          DEFAULT: '#faf8ff',
          low: '#f2f3ff',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Georgian"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

