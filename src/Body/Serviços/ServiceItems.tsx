type ServiceItemsProps = {
  imgSrc: string;
  color: string;
  title: string;
  description: string;
};

const ServiceItems = ({ imgSrc, color, title, description }: ServiceItemsProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={`assets/${imgSrc}`}
        className=""
      />
      <h3 className={`text-${color}`}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItems;
