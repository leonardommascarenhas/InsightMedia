const SejaQuemSection = () => {
  return (
    <section
      id="sejaquem"
      className="h-[320px] md:h-[90vh] mt-20 md:mt-[10vh] relative"
    >
      <h1 className="absolute top-1/4 left-[5%] text-white text-xl md:text-4xl xl:text-5xl font-black uppercase">
        Seja quem, quando,<br></br> como ou onde for, com<br></br> a IN*S sua campanha vai.
      </h1>
      <img
        src="/assets/SejaQuem.png"
        className="w-full h-full object-cover object-left"
      />
    </section>
  );
};

export default SejaQuemSection;
