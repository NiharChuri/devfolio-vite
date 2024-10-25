/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'yellow': '#a7fd00',
        'cyan': '#09ff9b',
        'blink': '#121212'
      },
    },
  },
  plugins: [],
};