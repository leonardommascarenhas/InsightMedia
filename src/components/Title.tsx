type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <h1 className=" text-mainOrange font-extrabold text-6xl tracking-tight leading-10 font-sora">{title}</h1>;
};

export default Title;
