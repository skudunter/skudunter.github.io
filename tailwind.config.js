/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./app/*.html"],
  theme: {
    extend: {
      colors:{
      primary:"#32373B",
      secondary:"#04F06A"
      },
      fontFamily:{
      "Roboto":["'Roboto'","serif"],
      "Press Play 2P":["'Press Play 2P'","cursive"]
      }
    },
  },
  plugins: [],
}
