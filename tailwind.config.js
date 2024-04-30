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
        formGray: " #eaeaea",
      },
      backgroundImage: {
        planejamentoMidia: "url('/assets/backgrounds/Serviços/PlanejamentoMidia.png')",
        dataIntelligence: "url('/assets/backgrounds/Serviços/InteligenciaDados.png')",
        dataIntelligenceMobile: "url('/assets/backgrounds/Serviços/InteligenciaDadosMobile.png')",
        projetoEspecialMobile: "url('/assets/backgrounds/Serviços/ProjetoEspecialMobile.png')",
        projetoEspecial: "url('/assets/backgrounds/Serviços/ProjetoEspecial.png')",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
