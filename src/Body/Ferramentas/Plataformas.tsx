const Plataformas = () => {
  const imageNames = Array.from({ length: 19 }, (_, index) => index + 1);

  return (
    <>
      <div className="w-full lg:w-3/4 relative shadow-xl bg-white rounded-3xl br flex justify-center items-center flex-col mt-4 lg:mt-8">
        {/* <h4 className={`bg-mainOrange top-0 left-1/2 right-1/2 -translate-y-1/2 text-white rounded-3xl text-lg p-2`}>
          PROGRAMATICA SOCIAL
        </h4> */}
        <div className="grid grid-rows-4 grid-flow-col w-full justify-evenly">
          {imageNames.map((number, index) => (
            <img
              key={index}
              src={`/assets/SocialMedias/${number}.png`}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain lg:m-4"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Plataformas;
