/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

         fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        montserrat: ['"Montserrat-Light"', "sans-serif"],
        montserratMedium: ['"Montserrat-Medium"', "sans-serif"],
      },

      colors: {
        'background': '#FEFEFE',
        'title': '#B28528',
        'texto': '#8F8F8E',
        'lunamiel': '#c7dae6',
        'asistencia': '#d6d0c8',
      },
      
    },
  },
  plugins: [],
}

