/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lato: "Lato, sans-serif",
      raleway: "Raleway, sans-serif",
    },
  },
  plugins: [],
};
