/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
