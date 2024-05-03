import NumbersAccomplished from "./NumbersAccomplished";

const NumbersAccomplishedList = () => {
  const NumbersList = [
    { number: 3, abbreviation: "bi", description: "de impressões" },
    { number: 10, abbreviation: "mi", description: "de cliques" },
    { number: 69, abbreviation: "mi", description: "de interações" },
    { number: 111, abbreviation: "mi", description: "de visualizações" },
  ];
  return (
    <div className="relative py-8 border border-black md:pr-20 lg:pr-24 xl:pr-28 h-[300px] flex flex-col justify-center items-start px-12 rounded-[70px]">
      <h3 className="mb-8 text-xl lg:text-2xl xl:text-4xl -tracking-widest font-black">NÚMEROS REALIZADOS</h3>
      <div className="grid grid-cols-2 gap-3 md:flex ">
        {NumbersList.map(({ number, abbreviation, description }) => (
          <NumbersAccomplished
            key={number}
            number={number}
            abbreviation={abbreviation}
            description={description}
          />
        ))}
      </div>
      <img
        src="/assets/Brasil.png"
        alt=""
        className="hidden md:block absolute -top-14 -right-32 h-full z-20"
        style={{ maxHeight: "calc(100% + 75px)", height: "auto", width: "auto" }}
      />
    </div>
  );
};

export default NumbersAccomplishedList;
