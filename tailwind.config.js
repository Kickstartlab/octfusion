/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "50": "#2C4D8D",
        "100": "#2745EA"
      },
      black: {
        "50": "#667279",
        "100": "#010101",
      },
      white: {
        "50": "#FFFFFF29",
        "70": "#FFFFFF99",
        "100": "#fff",
      }
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif;"],
      'montserat': ["'Montserrat', sans-serif"]
    }
  },
  plugins: [],
}
