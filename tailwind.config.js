/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./app/*.html"],
  theme: {
    extend: {
      colors:{
      primary:"#32373B",
      secondary:"#FF0095"
      },
      fontFamily:{
      "Roboto":["'Roboto'","serif"]
      }
    },
  },
  plugins: [],
}
