/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeUp: "fadeUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0%",
            transform: "translate(0,10rem)",
          },
          "100%": {
            opacity: "100%",
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
