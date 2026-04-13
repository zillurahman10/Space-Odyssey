/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void:    '#050508',
        cosmos:  '#0a0a14',
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        cosmic: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
        star: {
          100: '#e2e8f0',
          200: '#cbd5e1',
          400: '#94a3b8',
          600: '#475569',
        },
        mars: {
          400: '#f87171',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Orbitron"', 'sans-serif'],
        body:    ['"Syne"', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}