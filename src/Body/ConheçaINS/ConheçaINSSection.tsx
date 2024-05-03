import NumbersAccomplishedList from "./NumbersAccomplishedList";
import LogoTopoBlack from '../../assets/svgs/logo_topo_black.svg?react';

const ConheçaINS = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-40">
      <h2 className="flex items-end gap-3 font-extrabold text-4xl xl:text-5xl 2xl:text-7xl -tracking-widest lg:-tracking-wide text-mainOrange">
        CONHEÇA A <LogoTopoBlack />
      </h2>
      <ul className="text-center text-xl lg:text-3xl 2xl:text-4xl my-8 font-medium">
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
