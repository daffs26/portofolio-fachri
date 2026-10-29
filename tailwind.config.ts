import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4F46E5',
          accent: '#6366F1',
        },
      },
      fontFamily: {
        display: ['var(--font-antonio)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
