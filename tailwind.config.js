/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      neutral: "#171717",
      primary: "#c4b5fd",
      secundary: "#f7eeff",
      violet: "#d472e9",
      white: "#ffffff",
      "pastel-pink": "#d4afb9",
      "pastel-blue": "#daeaf6",
      "pastel-yellow": "#f6eac2",
      "pastel-green": "#ddedea",
      "pastel-lilac": "#d8d5ff",
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
