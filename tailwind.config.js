/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js}",
    "./app/pages/*.html",
    "./app/pages/projects/*.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32373B",
        secondary: "#04F06A",
        tersiary: "#ABEBD2",
      },
      fontFamily: {
        Roboto: ["'Roboto'", "serif"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        fadein:'fadein 1s ease forwards',
        fadeout:'fadein 1s ease forwards reverse'
      },
      backgroundImage: {
        aboutBackground: "url('/app/images/background.png')",
      },
      spacing: {
        "17%": "17%",
        "40%": "37%",
        "arrows":"7%"
      },
      screens:{
        'xs':'390px'
      }
    },
  },
  plugins: [],
};
