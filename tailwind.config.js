/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F0F',
        surface: '#1A1A1A',
        'text-primary': '#F2F2F2',
        'rainbow-red': '#FF5F61',
        'rainbow-orange': '#FF9E57',
        'rainbow-yellow': '#F9E65C',
        'rainbow-green': '#5ED88B',
        'rainbow-blue': '#57A4FF',
        'rainbow-purple': '#B979FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}