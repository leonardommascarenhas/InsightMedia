type AssociateProps = {
  img: string;
  associateName: string;
  position: string;
};

export const Associate = ({ img, associateName, position }: AssociateProps) => {
  return (
    <div className="absolute md:bottom-0 right-2 flex justify-end">
      <div className="text-right mr-4 d mb-2 md:mb-4">
        <h4 className="text-mainOrange text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl font-semibold ">{associateName}</h4>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-thin">{position}</p>
      </div>
      <img
        src={img}
        alt="Associate Icon"
        className="mr-4 h-12 w-12"
      />
    </div>
  );
};
