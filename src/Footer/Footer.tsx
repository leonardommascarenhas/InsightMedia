import ContactForm from "./FooterForm";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-slate-900 lg:px-12 xl:px-24 2xl:px-48 font-sora relative min-h-[500px]">
      <div className="px-4 lg:w-[480px] xl:w-[690px]">
        <h2 className="absolute bottom-full text-4xl md:text-6xl py-4">Fale Conosco</h2>
        <p className="text-2xl lg:text-5xl text-white font-semibold pt-12">
          Entre em contato com nosso time de especialistas e deixe que a
          <img
            src="/assets/LOGO_TOPO.png"
            className="inline mx-3 md:mx-4"
          />
          cuide da sua campanha.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Footer;
