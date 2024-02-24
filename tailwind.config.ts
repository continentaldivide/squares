import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        boxBounce: 'boxBounce .3s ease-out',
      },
      keyframes: {
        boxBounce: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px)' },
          '50%, 100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
