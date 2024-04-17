import NumbersAccomplished from "./NumbersAccomplished";

const NumbersAccomplishedList = () => {
  const NumbersList = [
    { number: 3, abbreviation: "bi", description: "de impressões" },
    { number: 10, abbreviation: "mi", description: "de cliques" },
    { number: 69, abbreviation: "mi", description: "de interações" },
    { number: 111, abbreviation: "mi", description: "de visualizações" },
  ];
  return (
    <div className="relative rounded-lg py-8 px-4 border border-black md:pr-20 lg:pr-24 xl:pr-28">
      <h3 className="mb-4 text-xl lg:text-3xl xl:text-5xl -tracking-widest">NÚMEROS REALIZADOS</h3>
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
        className="hidden md:block absolute -top-14 -right-20 h-full z-20"
        style={{ maxHeight: "calc(100% + 75px)", height: "auto", width: "auto" }}
      />
    </div>
  );
};

export default NumbersAccomplishedList;
