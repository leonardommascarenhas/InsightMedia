/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        serviceSecondLayout: ["serviceItem1 serviceItem2", "serviceItem3 serviceItem3"],
      },
      colors: {
        mainOrange: "#e84e0e",
      },
      backgroundImage: {
        sejaquem: "url('/assets/backgrounds/SejaQuem.png')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
