import ContactForm from "./FooterForm";
import LogoTopoWhite from '../assets/svgs/logo_topo_white.svg?react';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black lg:px-12 xl:px-24 2xl:px-48 font-sora relative min-h-[500px]">
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
  );
};

export default Footer;
