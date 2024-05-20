// Header.jsx
import HamburguerMenu from "./HamburguerMenu";
import LogoTopoBlack from "../assets/svgs/logo_topo_black.svg?react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animations/background_insight.json";
import { useRef } from "react";

const Header = () => {
  const headerBackground = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="fixed w-full top-0 left-0 z-40">
      <header className="relative overflow-hidden flex justify-center items-center p-4 pb-[1.1rem] min-h-20 h-[12vh] w-full bg-white shadow-xl border-b-4 border-solid border-mainOrange">
        <LogoTopoBlack className="h-full" />
        <Lottie
          lottieRef={headerBackground}
          className="hidden md:block absolute -top-10"
          autoplay
          loop
          animationData={animationData}
        ></Lottie>
      </header>
      <div className="absolute bottom-9 right-6 z-40">
        <HamburguerMenu />
      </div>
    </div>
  );
};

export default Header;
