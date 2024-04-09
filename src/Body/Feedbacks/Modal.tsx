import { Associate } from "./Associate";

const Modal = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-11/12 sm:w-5/6 md:w-2/3  xl:w-2/3 2xl:w-1/2 text-justify">
      <blockquote className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-800">
        <p>
          A experiência com a agência digital foi excepcional! O atendimento personalizado e a abordagem centrada nas
          necessidades do cliente destacam-se positivamente. A equipe demonstrou expertise em entender nossos objetivos,
          entregando soluções inovadoras de forma eficiente. Altamente recomendado!
        </p>
      </blockquote>
      <Associate
        img="/assets/LOGO_TOPO.png"
        associateName="Kevin Souza"
        position="Cliente"
      />
    </div>
  );
};

export default Modal;
