import ServiceArticle from "./ServiceArticle";

const midiaDigitalPlanning: ArrayOfServiceItems = [
  {
    svg: "planejamentoDigital/schedule",
    color: "mainYellow",
    title: "PLANEJAMENTO",
    description: "Planejamento estratégico de campanhas para awareness ou performance",
  },
  {
    svg: "planejamentoDigital/infographic",
    color: "mainYellow",
    title: "OPERAÇÃO",
    description: "Compra, construção de setup, otimização e análise de performance.",
  },
  {
    svg: "planejamentoDigital/shield",
    color: "mainYellow",
    title: "BRAND SAFETY",
    description: "Utilização de ferramentas que garantem a segurança de marca nas veiculações.",
  },
  {
    svg: "planejamentoDigital/pencil",
    color: "mainYellow",
    title: "ANÚNCIOS PERSONALIZADOS",
    description: "Operação de anúncios programáticos de formatos diversos.",
  },
];

const dataInteligence: ArrayOfServiceItems = [
  {
    svg: "InteligenciaDados/DashBoard",
    color: "white",
    title: "DashBoard",
    description: "Para acompanhamento de métricas diárias, com filtros por canais, métricas e períodos",
  },
  {
    svg: "InteligenciaDados/lupa",
    color: "white",
    title: "Service 6",
    description: "Análise de websites em parâmetros de performance e tagueamento personalizado.",
  },
  {
    svg: "InteligenciaDados/DataAnalytics",
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
        iconImgSrc="planejamentoDigital/Icon.avif"
        backgroundMobile="planejamentoMidia"
        backgroundName="planejamentoMidia"
        title="Planejamento de Mídia Digital"
        arrayOfServiceItems={midiaDigitalPlanning}
        id="planejamentoDigital"
      />
      <ServiceArticle
        description="Ferramentas para análise de audiência, comportamento e consumo."
        backgroundMobile="inteligenciaDados"
        iconImgSrc="InteligenciaDados/Icon.avif"
        backgroundName="inteligenciaDados"
        title="Inteligência De Dados"
        arrayOfServiceItems={dataInteligence}
        id="inteligenciaDados"
      />
      <ServiceArticle
        description="Seja através de campanhas personalizadas, otimização de mídia paga ou iniciativas de marketing de conteúdo, estamos aqui para impulsionar o crescimento do seu negócio. Nosso foco é tornar seus objetivos digitais uma
        realidade palpável. Nosso time está pronto para atender seu projeto especial."
        backgroundMobile="projetoEspecial"
        iconImgSrc="ProjetoEspecial/Icon.avif"
        backgroundName="projetoEspecial"
        title="Projetos Especiais"
        id="projetosEspeciais"
      />
    </section>
  );
};

export default ServicesSection;
