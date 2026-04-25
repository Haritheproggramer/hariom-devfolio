/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#02040a',
        },
        brand: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          900: '#0f1f4d',
          950: '#0a1330',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.2), 0 10px 28px rgba(37, 99, 235, 0.3)',
      },
    },
  },
  plugins: [],
}
