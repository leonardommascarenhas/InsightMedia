type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-center my-8  md:my-12 text-mainOrange font-extrabold text-5xl md:text-6xl tracking-tight leading-10 ">
      {title}
    </h1>
  );
};

export default Title;
