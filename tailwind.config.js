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
        secondary: {
          100: "#fff",
          200: "#f2f2f2",
          300: "#dfdfdf",
          400: "#505050",
          500: "#333333",
        },
      },
      // boxShadow: {
      //   selectBox: "0px 0px 0px 8px rgba(77, 37, 115, 0.7)",
      // },
      backgroundImage: {
        footer:
          'linear-gradient(to right, rgba(77, 37, 115, 0.7), rgba(77, 37, 115, 0.7)),url("/assets/images/home.jpg")',
        categoriesBg:
          'linear-gradient(to right, rgba(77, 37, 115, 0.7), rgba(77, 37, 115, 0.7)),url("/assets/images/categories-bg.jpg")',
        companyProfileBg: 'url("/assets/images/companyprofile-bg.jpg")',
      },
    },
  },
  plugins: [],
};
