/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./app/pages/*.html","./app/pages/projects/*.html"],
  theme: {
    extend: {
      colors:{
      primary:"#32373B",
      secondary:"#04F06A",
      tersiary:"#ABEBD2"
      },
      fontFamily:{
      "Roboto":["'Roboto'","serif"],
      },
      keyframes:{
      fadein:{
        "0%, 100%":{opacity:1}
      }
      },
      backgroundImage:{
        "aboutBackground":"url('/app/images/background.png')"
      },
      spacing:{
        '17%':"17%"
      }
    }
  },
  plugins: [],
}
