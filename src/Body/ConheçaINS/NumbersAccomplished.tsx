interface NumbersAccomplishedProps {
  number: number;
  abbreviation: string;
  description: string;
}

const NumbersAccomplished = ({ number, abbreviation, description }: NumbersAccomplishedProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-mainOrange text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black -mb-2">{number + abbreviation}</span>
      <span className="text-black font-semibold text-sm md:text-base xl:text-2xl ml-1">{description}</span>
    </div>
  );
};

export default NumbersAccomplished;
