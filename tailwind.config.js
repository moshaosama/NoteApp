/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        minColor: "#eee",
      },

      screens: {
        sm: "640px",
      },
    },
  },
  plugins: [],
};
