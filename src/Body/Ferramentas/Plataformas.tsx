import { useEffect, useState } from "react";

const Plataformas = () => {
  const [imageNames, setImageNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageNames = async () => {
      const imageKeys = Object.keys(import.meta.glob("/assets/SocialMedias/*", { eager: true, as: "raw" }));

      setImageNames(imageKeys);
    };

    fetchImageNames();
  }, []);

  return (
    <>
      <div className="w-full lg:w-3/4 relative shadow-xl bg-white rounded-3xl br flex justify-center items-center flex-col">
        <h4 className={`bg-mainOrange top-0 left-1/2 right-1/2 -translate-y-1/2 text-white rounded-3xl text-lg p-2`}>
          PROGRAMATICA SOCIAL
        </h4>
        <div className="grid grid-rows-4 grid-flow-col w-full justify-evenly">
          {imageNames.map((name, index) => (
            <img
              key={index}
              src={name}
              className="w-12 h-12 lg:w-24 lg:h-12 object-contain lg:m-6"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Plataformas;
