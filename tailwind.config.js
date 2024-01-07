/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif"
      },
      colors: {
        // Color Pallete
        // Earthy #01/Contemporary
        raisingBlack: '#222222',
        coffeeBrown: '#735135',
        feldgrauGreen: '#435e5b',
        white: '#ffffff',

        // Modern/Calming
        gainsboroGrey: '#dbdbdb',
        poseidonBlue: '#133955',

        // Nude/Earthy #02
        desertSandBrown: '#f0cfaa',
        caputMortuumBrown: '#5e2b27',
      },
      screens: {
        sm: '375px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '976px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1440px',
        '6xl': '1536px',
        '7xl': '1600px',
      },
    },
  },
  plugins: [],
}

