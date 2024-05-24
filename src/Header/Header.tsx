// Header.jsx
import HamburguerMenu from "./HamburguerMenu";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import backgroundAnimation from "../assets/animations/background_insight.json";
import logoAnimation from "../assets/animations/logo_anim.json";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerBackgroundRef = useRef<LottieRefCurrentProps>(null);
  const logoAnimationRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="fixed w-full top-0 left-0 z-40">
      <header className="relative overflow-hidden flex justify-center items-center p-4 pb-[1.1rem] min-h-20 h-[12vh] w-full bg-white shadow-xl border-b-4 border-solid border-mainOrange">
        <Link to={'/'} className="h-full w-full relative flex justify-center items-center">
          <Lottie
            lottieRef={logoAnimationRef}
            className="h-[400%] w-auto absolute -top-[150%]"
            animationData={logoAnimation}
            onMouseEnter={() => logoAnimationRef.current?.goToAndPlay(0)}
            autoplay={true}
            loop={false}
          ></Lottie>
        </Link>
        <Lottie
          lottieRef={headerBackgroundRef}
          className="hidden md:block absolute -top-10 pointer-events-none"
          autoplay
          loop
          animationData={backgroundAnimation}
        ></Lottie>
      </header>
      <div className="absolute top-5 right-5 z-40 md:top-6">
        <HamburguerMenu />
      </div>
    </div>
  );
};

export default Header;
