/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#c4b5fd",
      "linkedin-blue": "#0072b1",
      "twitter-blue": "#00acee",
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
