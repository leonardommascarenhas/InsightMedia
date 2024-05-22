type ServiceItemsProps = {
  svg: React.ReactNode;
  color: ColorKey;
  title: string;
  description: string;
};

const ServiceItems = ({ svg, color, title, description }: ServiceItemsProps) => {
  const colorClass: Record<ColorKey, string> = {
    mainYellow: "text-mainYellow",
    white: "text-white",
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 md:p-6 lg:p-8">
      <img
        src={`/assets/Serviços/${svg}.svg`}
        className="w-16 h-16 mb-4"
        alt={title}
      />
      <h3 className={`${colorClass[color]} text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-2`}>
        {title}
      </h3>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl px-2">{description}</p>
    </div>
  );
};

export default ServiceItems;
