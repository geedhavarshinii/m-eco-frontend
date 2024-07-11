/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krub: ['Krub'],
        sansSerif: ['"Sans Serif"'],
        robotocon: ['Roboto Condensed']

      },
      colors: {
        pinkone: "#ff3e6c",
        greenone: "#5bb02b",
      }
    },
  },
  plugins: [],
}

