import ServiceArticle from "./ServiceArticle";

const midiaDigitalPlanning: ArrayOfServiceItems = [
  {
    imgSrc: "planejamentoDigital/schedule.png",
    color: "mainYellow",
    title: "PLANEJAMENTO",
    description: "Planejamento estratégico de campanhas para awareness ou performance",
  },
  {
    imgSrc: "planejamentoDigital/infographic.png",
    color: "mainYellow",
    title: "OPERAÇÃO",
    description: "Compra, construção de setup, otimização e análise de performance.",
  },
  {
    imgSrc: "planejamentoDigital/shield.png",
    color: "mainYellow",
    title: "BRAND SAFETY",
    description: "Utilização de ferramentas que garantem a segurança de marca nas veiculações.",
  },
  {
    imgSrc: "planejamentoDigital/pencil.png",
    color: "mainYellow",
    title: "ANÚNCIOS PERSONALIZADOS",
    description: "Operação de anúncios programáticos de formatos diversos.",
  },
];

const dataInteligence: ArrayOfServiceItems = [
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
      <div className="w-full flex justify-center items-center bg-mainOrange text-3xl py-6">
        <h2 className="text-white font-black">SERVIÇOS</h2>
      </div>
      <ServiceArticle
        iconImgSrc="planejamentoDigital/Icon.png"
        backgroundMobile="planejamentoMidia"
        backgroundName="planejamentoMidia"
        title="Planejamento de Mídia Digital"
        arrayOfServiceItems={midiaDigitalPlanning}
        id="planejamentoDigital"
      />
      <ServiceArticle
        description="Ferramentas para análise de audiência, comportamento e consumo."
        backgroundMobile="inteligenciaDados"
        iconImgSrc="InteligenciaDados/Icon.png"
        backgroundName="inteligenciaDados"
        title="Inteligência De Dados"
        arrayOfServiceItems={dataInteligence}
        id="inteligenciaDados"
      />
      <ServiceArticle
        description="Seja através de campanhas personalizadas, otimização de mídia paga ou iniciativas de marketing de conteúdo, estamos aqui para impulsionar o crescimento do seu negócio. Nosso foco é tornar seus objetivos digitais uma
        realidade palpável. Nosso time está pronto para atender seu projeto especial."
        backgroundMobile="projetoEspecial"
        iconImgSrc="ProjetoEspecial/Icon.png"
        backgroundName="projetoEspecial"
        title="Projetos Especiais"
        id="projetosEspeciais"
      />
    </section>
  );
};

export default ServicesSection;
