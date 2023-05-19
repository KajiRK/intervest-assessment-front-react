/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {"purple":"#694bdb"}
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}

