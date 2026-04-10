/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cobalt: '#1B4DC0',
        navy: '#0D2B6E',
        yellow: '#F5C518',
        teal: '#27AECA',
        warm: '#F8F7F2',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px',
      },
    },
  },
  plugins: [],
}
