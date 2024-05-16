/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        grandstander: ["Grandstander"],
      },
      fontSize: {
        "3xl": "108px",
        "2xl": "64px",
        xl: "40px",
      },
      colors: {
        yellow: "#FC9800",
      },
    },
  },
  plugins: [],
};
