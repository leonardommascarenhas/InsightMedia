import NumbersAccomplished from "./NumbersAccomplished";

const NumbersAccomplishedList = () => {
  const NumbersList = [
    { number: 3, abbreviation: "bi", description: "de impressões" },
    { number: 10, abbreviation: "mi", description: "de cliques" },
    { number: 69, abbreviation: "mi", description: "de interações" },
    { number: 111, abbreviation: "mi", description: "de visualizações" },
  ];
  return (
    <div className="rounded-lg p-4 border border-black">
      <h3 className="mb-4 lg:text-5xl xl:text-6xl -tracking-widest">NÚMEROS REALIZADOS</h3>
      <div className="grid grid-cols-2 gap-3 md:flex">
        {NumbersList.map(({ number, abbreviation, description }) => (
          <NumbersAccomplished
            key={number}
            number={number}
            abbreviation={abbreviation}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default NumbersAccomplishedList;
