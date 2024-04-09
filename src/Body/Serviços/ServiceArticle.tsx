import ServiceItems from "./ServiceItems";

interface ServiceProps {
  iconImgSrc: string;
  description?: string;
  backgroundName: ServiceBackgrounds;
  title: string;
  arrayOfServiceItems?: ArrayOfServiceItems;
}

const ServiceArticle = ({ iconImgSrc, description, backgroundName, title, arrayOfServiceItems }: ServiceProps) => {
  const backgrounds: Record<ServiceBackgrounds, string> = {
    planejamentoMidia: "bg-planejamentoMidia",
    inteligenciaDados: "bg-dataIntelligence",
  };
  const gridLayoutClass =
    arrayOfServiceItems && arrayOfServiceItems.length > 3
      ? "grid-cols-2 grid-rows-2"
      : "grid-areas-serviceSecondLayout [&>*:nth-child(3)]:grid-in-serviceItem3";

  return (
    <article
      className={`${backgrounds[backgroundName]} bg-cover bg-center bg-opacity-20 p-6 flex flex-col md:flex-row items-center justify-center gap-6`}
    >
      <div>
        <h2 className="w-full md:w-5/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">
          <img src={`/assets/Serviços/${iconImgSrc}`} />
          {title}
        </h2>
        <p>{description}</p>
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
