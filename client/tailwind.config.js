/** @type {import('tailwindcss').Config} */
const color = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'black': {
        DEFAULT: "#09090B",
        sec: "#444444"
      },
      'yellow': {
        DEFAULT: "#FF8B00",
        sec: "#FFC60B"
      },
      'white': {
        DEFAULT: "#FFFFFF",
        sec: "#FEFFDB"
      },
      'blue': {
        DEFAULT: "#39A9CB"
      }
    },
    extend: {
      boxShadow: {
        'center-s' : '0 0 20px',
        'center-l' : '0 0 30px'
      }
    },
  },
  plugins: [],
}