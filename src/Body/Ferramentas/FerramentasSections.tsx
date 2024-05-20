import Title from "../../components/Title";
import Plataformas from "./Plataformas";

const FerramentasSections = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-12 lg:py-24 mb-12 lg:mb-16">
      <Title title="Ferramentas" />
      <Plataformas />
    </section>
  );
};

export default FerramentasSections;
