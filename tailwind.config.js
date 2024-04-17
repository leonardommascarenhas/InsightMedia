/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        serviceSecondLayout: ["serviceItem1 serviceItem2", "serviceItem3 serviceItem3"],
      },
      colors: {
        mainOrange: "#f84e0a",
        mainYellow: "#f7a600",
      },
      backgroundImage: {
        planejamentoMidia: "url('/src/assets/backgrounds/Serviços/PlanejamentoMidia.png')",
        dataIntelligence: "url('/src/assets/backgrounds/Serviços/InteligenciaDados.png')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
