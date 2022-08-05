/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#4d2573",
      },

      backgroundImage: {
        footer:
          'linear-gradient(to right, rgba(77, 37, 115, 0.7), rgba(77, 37, 115, 0.7)),url("/assets/images/home.jpg")',
      },
    },
  },
  plugins: [],
};
