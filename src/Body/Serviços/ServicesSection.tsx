import ServiceArticle from "./ServiceArticle";

const midiaDigitalPlanning = [
  {
    imgSrc: "planejamentoDigital/schedule.png",
    color: "mainOrange",
    title: "PLANEJAMENTO",
    description: "Planejamento estratégico de campanhas para awareness ou performance",
  },
  {
    imgSrc: "planejamentoDigital/infographic.png",
    color: "mainOrange",
    title: "OPERAÇÃO",
    description: "Compra, construção de setup, otimização e análise de performance.",
  },
  {
    imgSrc: "planejamentoDigital/shield.png",
    color: "mainOrange",
    title: "BRAND SAFETY",
    description: "Utilização de ferramentas que garantem a segurança de marca nas veiculações.",
  },
  {
    imgSrc: "planejamentoDigital/pencil.png",
    color: "mainOrange",
    title: "ANÚNCIOS PERSONALIZADOS",
    description: "Operação de anúncios programáticos de formatos diversos.",
  },
];

const dataInteligence = [
  {
    imgSrc: "InteligenciaDados/DashBoard.png",
    color: "white",
    title: "DashBoard",
    description: "Para acompanhamento de métricas diárias, com filtros por canais, métricas e períodos",
  },
  {
    imgSrc: "InteligenciaDados/WebAnalytics.png",
    color: "white",
    title: "Service 6",
    description: "Análise de websites em parâmetros de performance e tagueamento personalizado.",
  },
  {
    imgSrc: "InteligenciaDados/DataAnalytics.png",
    color: "white",
    title: "Service 7",
    description: "Ferramentas para análise de audiência, comportamento e consumo.",
  },
];

const ServicesSection = () => {
  return (
    <section>
      <ServiceArticle
        backgroundName="sejaquem"
        title="Nave"
        arrayOfServiceItems={midiaDigitalPlanning}
      />
      <ServiceArticle
        backgroundName="sejaquem"
        title="Inteligência De Dados"
        arrayOfServiceItems={dataInteligence}
      />
    </section>
  );
};

export default ServicesSection;
