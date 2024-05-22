import ContactForm from "./FooterForm";
import LogoTopoWhite from '../assets/svgs/logo_topo_white.svg?react';
import EFCLogo from '../assets/svgs/efc_logo.svg?react';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row lg:px-12 xl:px-24 2xl:px-48 font-sora relative min-h-[500px]">
        <div className="px-4 lg:w-[480px] xl:w-[690px]">
          <h2 className="text-mainOrange font-black absolute bottom-full text-4xl md:text-6xl py-4" id="faleConosco">Fale Conosco</h2>
          <p className="text-2xl lg:text-5xl text-white font-semibold pt-12 tracking-tighter lg:leading-[56px]">
            Entre em contato com nosso time de especialistas e <br></br>deixe que a
            <LogoTopoWhite className="inline mx-3 md:mx-4 md:h-12 h-6 w-fit lg:-translate-y-2 -translate-y-1" />
            cuide da sua campanha.
          </p>
        </div>
        <ContactForm />
      </div>
      <footer className="pt-8 pb-4 text-white flex justify-center items-center flex-col text-xs bg-zinc-900">
        Imaginado por:
        <a className="flex justify-center items-center" href="https://wa.me/5571997404701?text=Ol%C3%A1%21%20Gostaria%20de%20tornar%20minha%20ideia%20de%20site%2Faplicativo%20em%20realidade%21">
          <EFCLogo className="w-full h-8 m-4" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
