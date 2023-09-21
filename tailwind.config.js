/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'middleBlue': '#252F3D',
      'white': '#FFFFFF',
      'gray': '#4D5254',
      'middleGray':'#FAFAFA',
      'greenCyan': '#5BB59A',
      'gray': '#333',
      'semiGray': '#969696',
      'blue': '#2C7EF8',
      'black': '#000',
      'darkBlue': '#37465A',
      'lightBlue': '#EDF3FD',
      'green': '#59AE43',
      'lightGray': '#CFCFCF',
      'red': '#F82C2C'
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    boxShadow: {
      'custom': '0px 24px 24px 0px rgba(15, 29, 11, 0.04)',
    }
  },
  plugins: [],
}