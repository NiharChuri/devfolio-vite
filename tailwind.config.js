/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'yellow': '#4286f4',
        'cyan': '#373B44',
        'blink': '#121212'
      },
    },
  },
  plugins: [],
};