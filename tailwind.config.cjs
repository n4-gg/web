/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "glitch-pattern": "url('/images/bg.webp')",
      },
      colors: {
        "off-white": "#DBDBDB",
        black: "#000000",
        "n4-blue": "#014188",
        "n4-cyan": "#00FEFF",
        "n4-yellow": "#FFE400",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
