/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      colors: {
        primary: "#4d2573",
      },
    },
  },
  plugins: [],
};
