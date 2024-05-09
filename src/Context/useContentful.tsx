import React, { createContext, useContext, useState, useEffect } from "react";

import { createClient } from "contentful";
type Fotos = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
};
export type Noticia = {
  title: string;
  texto: string;
  fotoMobile: Fotos;
  fotoDesktop: Fotos;
  subtitulo: string;
  date: string;
  urlEncoded: string;
};

const ContentfulContext = createContext<{
  noticias: Noticia[] | undefined;
}>({
  noticias: undefined,
});

const ContentfulProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const client = createClient({
      space: "le4t4crowb6p",
      accessToken: "ta2kAmdTaRjn-aGBhCS3bM-7Jhlpw1HCk__wHoWy96I",
      host: "preview.contentful.com",
    });

    const fetchNoticias = async () => {
      try {
        const entries: any = await client.getEntries({
          content_type: "noticia",
          select: ["fields"],
        });
        console.log(entries)
        const sanitizedEntries = entries.items.map((item: any) => {
          const urlEncoded = encodeURIComponent(item.fields.title);
          return {
            ...item.fields,
            urlEncoded,
          };
        });

        setNoticias(sanitizedEntries);
      } catch (error) {
        console.log(`Error fetching noticias: ${error}`);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <ContentfulContext.Provider
      value={{
        noticias,
      }}
    >
      {children}
    </ContentfulContext.Provider>
  );
};

const useContentfulContext = () => {
  return useContext(ContentfulContext);
};

export { ContentfulProvider, useContentfulContext };
