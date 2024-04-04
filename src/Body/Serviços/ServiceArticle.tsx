import ServiceItems from "./ServiceItems";

interface ServiceProps {
  backgroundName: string;
  title: string;
  arrayOfServiceItems: {
    imgSrc: string;
    color: string;
    title: string;
    description: string;
  }[];
}

const ServiceArticle = ({ backgroundName, title, arrayOfServiceItems }: ServiceProps) => {
  const gridLayoutClass =
    arrayOfServiceItems.length > 3
      ? "grid-cols-2 grid-rows-2"
      : "grid-areas-serviceSecondLayout [&>*:nth-child(3)]:grid-in-serviceItem3";

  return (
    <article className={`bg-${backgroundName} flex items-center`}>
      <h2>{title}</h2>
      <div className={`grid ${gridLayoutClass} justify-center`}>
        {arrayOfServiceItems.map((service, index: number) => (
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
