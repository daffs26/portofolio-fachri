import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Antonio"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#4F46E5',
          accent: '#6366F1',
        },
      },
    },
  },
  plugins: [animate],
};

