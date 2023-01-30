/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#c4b5fd",
      neutral: "#171717",
      "pastel-pink": "#d4afb9",
      "pastel-blue": "#abdee6",
      "pastel-yellow": "#f6eac2",
    },
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
