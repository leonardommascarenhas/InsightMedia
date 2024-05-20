import { Associate } from "./Associate";

const Modal = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl pt-6 pb-14 px-4 md:pt-8 lg:pt-12 lg:pb-20 lg:px-12 w-11/12 sm:w-5/6 xl:w-2/3 2xl:w-1/2 text-justify ">
      <blockquote className="flex md:text-2xl lg:text-2xl text-gray-800">
        <img
          src="/assets/test.avif"
          className="h-3 lg:h-16 lg:w-1/5 lg:mr-6"
        />
        <p>
          A experiência com a agência digital foi excepcional! O atendimento personalizado e a abordagem centrada nas
          necessidades do cliente destacam-se positivamente. A equipe demonstrou expertise em entender nossos objetivos,
          entregando soluções inovadoras de forma eficiente. Altamente recomendado!
        </p>
      </blockquote>
      <Associate
        img="/assets/LOGO_TOPO.avif"
        associateName="Kevin Souza"
        position="Cliente"
      />
    </div>
  );
};

export default Modal;
