/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        realinov: {
          background: '#0B1220',
          surface: '#111C2E',
          'surface-light': '#162338',
          primary: '#2563EB',
          accent: '#06B6D4',
          foreground: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};