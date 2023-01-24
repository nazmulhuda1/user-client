/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
        Anton: ['Anton', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
