// Header.jsx
import HamburguerMenu from "./HamburguerMenu";

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 min-h-20 h-[10vh] fixed w-full top-0 left-0 z-10 bg-white">
      <img src="/assets/LOGO_TOPO.png" alt="" />
      <div className="absolute right-4">
        <HamburguerMenu />
      </div>
    </header>
  );
};

export default Header;
