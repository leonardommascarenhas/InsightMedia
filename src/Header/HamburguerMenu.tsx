import { IoIosMenu } from "react-icons/io";

const HamburguerMenu = () => {
  return (
    <div className="group flex flex-col relative">
      <IoIosMenu size={30} />
      <ul className="absolute hidden group-hover:block top-full right-20 mt-2 z-10">
        <li>CONHEÇA A INS</li>
        <li>TRADING</li>
        <li>INTELIGÊNCIA DE DADOS</li>
        <li>PROJETO ESPECIAIS</li>
        <li>FALE CONOSCO</li>
      </ul>
    </div>
  );
};

export default HamburguerMenu;
