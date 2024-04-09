type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="my-4 sm:my-8 md:my-16   text-mainOrange font-extrabold text-6xl tracking-tight leading-10 font-sora">
      {title}
    </h1>
  );
};

export default Title;
