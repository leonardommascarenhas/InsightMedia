import { Link } from "react-router-dom";
import React from "react";
import { useContentfulContext } from "../../Context/useContentful";

export const Noticias = () => {
  const { noticias } = useContentfulContext();

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div
      className="px-4 lg:px-0 h-screen flex flex-col justify-center lg:flex-row pb-8 overflow-x-hidden"
      id="inicio"
    >
      <div className="flex flex-col mt-6 lg:pt-24 lg:w-1/2 gap-4 overflow-y-auto overflow-x-hidden ">
        {noticias?.map(({ title, texto, fotoMobile, subtitulo, date, urlEncoded }, index: number) => (
          <div
            key={index}
            className="bg-white p-6 lg:p-8 shadow-xl rounded-md flex flex-col items-center justify-center md:flex-row gap-3 lg:h-[360px]"
          >
            {fotoMobile && fotoMobile.fields && (
              <img
                src={`https:${fotoMobile.fields.file.url}`}
                alt={fotoMobile.fields.title}
                className="max-h-[270px] inline object-cover mb-4 lg:mb-0 lg:mr-4 rounded-md"
              />
            )}
            <div className="flex flex-col">
              <h2 className="text-lg lg:text-xl xl:3xl font-bold mb-1">{title}</h2>
              <h3 className="text-base lg:text-base font-medium text-gray-600 mb-2">{subtitulo}</h3>
              <p className="text-gray-700 text-xs lg:text-sm">{new Date(date).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-2 text-xs lg:text-sm">{formatTime(date)}</p>
              <p className="text-gray-800 text-sm lg:text-base overflow-ellipsis overflow-hidden h-[120px]">
                {texto.split("\\n").map((line, lineIndex, array) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <Link to={`/noticias/${urlEncoded}`}>
                <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-full px-6 py-3  text-white">
                  Ler Mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
