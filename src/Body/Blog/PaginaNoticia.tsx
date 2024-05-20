import React from "react";

import { useContentfulContext } from "../../Context/useContentful";
import { useParams, useNavigate } from "react-router-dom";

export const PaginaDaNoticia: React.FC = () => {
  const { noticias } = useContentfulContext();
  const navigate = useNavigate();

  const { urlEncoded } = useParams<{ urlEncoded: string }>();

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const selectedNoticia = noticias?.filter((noticia) => noticia.title === urlEncoded);

  const handleClick = () => {
    navigate(-1);
  };

  const createMarkup = (text: string) => {
    const escapedText = text.replace(/\\n/g, "<br />");
    return { __html: escapedText };
  };

  return (
    <div
      className="h-screen flex flex-col justify-center lg:flex-row pb-4 font-Montserrat"
      id="inicio"
    >
      <div className="flex flex-col lg:px-0 lg:pt-24 lg:w-1/2 gap-4 overflow-y-scroll">
        {selectedNoticia?.map(({ title, texto, fotoDesktop, subtitulo, date }, index) => (
          <div
            key={index}
            className="bg-white p-6 lg:p-8 shadow-lg rounded-md"
          >
            <button
              onClick={handleClick}
              className="text-blue-500 underline mb-4"
            >
              {"<"} Voltar
            </button>
            {fotoDesktop && fotoDesktop.fields && (
              <img
                src={`https:${fotoDesktop.fields.file.url}`}
                alt={fotoDesktop.fields.title}
                className="max-h-[270px] w-full object-cover mb-4 rounded-md"
              />
            )}
            <h2 className="text-3xl font-bold mb-1">{title}</h2>
            <h3 className="text-lg font-medium text-gray-600 mb-2">{subtitulo}</h3>
            <p className="text-gray-700 text-xs">{new Date(date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4 text-xs">{formatTime(date)}</p>
            <div className="text-gray-800">
              <div
                className="text-gray-800"
                dangerouslySetInnerHTML={createMarkup(texto)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
