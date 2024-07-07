/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: {
          DEFAULT: '#000000', // The base color
          10: 'rgba(0, 0, 0, 0.05)', // 5% opacity
        },
      },
    },
  },
  plugins: [],
}