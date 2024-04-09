type AssociateProps = {
  img: string;
  associateName: string;
  position: string;
};

export const Associate = ({ img, associateName, position }: AssociateProps) => {
  return (
    <div className="flex w-fit">
      <div className="text-right mr-4 d mb-2 md:mb-4">
        <h4 className="text-mainOrange text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold ">{associateName}</h4>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-extralight">{position}</p>
      </div>
      <img
        src={img}
        alt="Associate Icon"
        className="mr-4 h-12 w-12"
      />
    </div>
  );
};
