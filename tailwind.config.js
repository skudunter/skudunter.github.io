/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./app/pages/*.html"],
  theme: {
    extend: {
      colors:{
      primary:"#32373B",
      secondary:"#04F06A",
      tersiary:"#ABEBD2"
      },
      fontFamily:{
      "Roboto":["'Roboto'","serif"],
      "Press Play 2P":["'Press Play 2P'","cursive"]
      },
      keyframes:{
      fadein:{
        "0%, 100%":{opacity:1}
      }
      }
    }
  },
  plugins: [],
}
