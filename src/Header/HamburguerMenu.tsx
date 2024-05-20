import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animations/hamburguer_menu.json";
import { useEffect, useRef, useState } from "react";

const HamburguerMenu = () => {
  const menuItems = [
    { title: "CONHEÇA A INS", link: "conhecaINS" },
    { title: "TRADING", link: "planejamentoDigital" },
    { title: "INTELIGÊNCIA DE DADOS", link: "inteligenciaDados" },
    { title: "PROJETOS ESPECIAIS", link: "projetosEspeciais" },
    { title: "FALE CONOSCO", link: "faleConosco" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.setSpeed(3);
      menuRef.current?.setDirection(1);
      menuRef.current?.play();
    } else {
      menuRef.current?.setSpeed(3);
      menuRef.current?.setDirection(-1);
      menuRef.current?.play();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative">
      <Lottie
        autoplay={false}
        loop={false}
        className="cursor-pointer w-10"
        onClick={toggleMenu}
        onMouseEnter={handleMouseEnter}
        lottieRef={menuRef}
        animationData={animationData}
      />
      <ul
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none invisible"
        } transition-all duration-500 top-[8vh] right-0 z-10 bg-mainOrange bg-opacity-70 py-8 px-10 w-fit`}
      >
        {menuItems.map(({ title, link }) => (
          <li
            key={link}
            className="transition-all duration-200 text-white hover:text-orange-600 font-black whitespace-nowrap py-1 text-xl"
          >
            <a
              href={`#${link}`}
              onClick={toggleMenu}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburguerMenu;
