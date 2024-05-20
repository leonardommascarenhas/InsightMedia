import ServiceItems from "./ServiceItems";

interface ServiceProps {
  iconImgSrc: string;
  description?: string;
  backgroundName: ServiceBackgrounds;
  backgroundMobile: ServiceBackgrounds;
  title: string;
  arrayOfServiceItems?: ArrayOfServiceItems;
  id?: string;
}

const ServiceArticle = ({
  iconImgSrc,
  description,
  backgroundName,
  backgroundMobile,
  title,
  arrayOfServiceItems,
  id,
}: ServiceProps) => {
  const backgrounds: Record<ServiceBackgrounds, string> = {
    planejamentoMidia: "bg-planejamentoMidia",
    inteligenciaDados: "bg-dataIntelligence",
    projetoEspecial: "bg-projetoEspecial",
  };
  const mobileBackgrounds: Record<ServiceBackgrounds, string> = {
    planejamentoMidia: "bg-planejamentoMidia",
    inteligenciaDados: "bg-dataIntelligenceMobile",
    projetoEspecial: "bg-projetoEspecialMobile",
  };
  const gridLayoutClass =
    arrayOfServiceItems && arrayOfServiceItems.length > 3
      ? "grid-cols-2 grid-rows-2"
      : "grid-areas-serviceSecondLayout [&>*:nth-child(3)]:grid-in-serviceItem3";

  return (
    <article
      id={id}
      className={`${mobileBackgrounds[backgroundMobile]} md:${backgrounds[backgroundName]} bg-cover bg-center  bg-opacity-20 p-6 flex flex-col md:flex-row items-center justify-center gap-6 text-white min-h-[480px]`}
    >
      <div>
        <h2 className="w-full md:w-5/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold flex items-center gap-4 lg:gap-6">
          <img
            src={`/assets/Serviços/${iconImgSrc}`}
            className="h-12 md:h-16"
          />
          {title}
        </h2>
        <p className="mt-4 md:mt-6 lg:mt-8">{description}</p>
      </div>
      <div className={`w-full grid ${gridLayoutClass} justify-center items-center gap-4`}>
        {arrayOfServiceItems &&
          arrayOfServiceItems.map((service, index: number) => (
            <ServiceItems
              key={index}
              {...service}
            />
          ))}
      </div>
    </article>
  );
};

export default ServiceArticle;
