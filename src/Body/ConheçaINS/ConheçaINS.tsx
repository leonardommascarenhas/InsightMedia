import NumbersAccomplishedList from "./NumbersAccomplishedList";

const ConheçaINS = () => {
  return (
    <section className="flex flex-col items-center justify-center font-sora">
      <h2 className="flex items-end gap-3 font-extrabold text-4xl xl:text-5xl 2xl:text-8xl -tracking-widest lg:-tracking-wide text-mainOrange">
        CONHEÇA A <img src="/assets/LOGO_TOPO.png" />
      </h2>
      <ul className="text-center text-xl lg:text-3xl 2xl:text-5xl mt-8 font-medium">
        <li className=" mb-3">
          <span className="bullet">•</span> Publicidade e Tecnologia aliados à performance.
        </li>
        <li className=" mb-3">
          <span className="bullet">•</span> Gestão de Tráfego
        </li>
        <li className=" mb-3">
          <span className="bullet">•</span> Gestão de Dados e Inteligência
        </li>
        <li className=" mb-3">
          <span className="bullet">•</span> Projetos Especiais
        </li>
      </ul>
      <NumbersAccomplishedList />
    </section>
  );
};

export default ConheçaINS;
