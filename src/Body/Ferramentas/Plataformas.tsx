const Plataformas = () => {
  const imageNames = Array.from({ length: 19 }, (_, index) => index + 1);

  return (
    <>
      <div className="w-fit md:w-full px-10 py-6 md:p-10 lg:w-fit relative shadow-xl bg-white rounded-3xl br flex justify-center items-center flex-col">
        {/* <h4 className={`bg-mainOrange top-0 left-1/2 right-1/2 -translate-y-1/2 text-white rounded-3xl text-lg p-2`}>
          PROGRAMATICA SOCIAL
        </h4> */}
        <div className="grid grid-flow-row grid-cols-4 md:grid-rows-4 md:grid-flow-col md:w-full w-fit gap-x-8 gap-y-5 md:gap-x-28 md:gap-y-5 md:justify-center">
          {imageNames.map((number, index) => (
            <img
              key={index}
              src={`/assets/SocialMedias/${number}.avif`}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain lg:m-4"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Plataformas;
