declare global {
  type ColorKey = "mainYellow" | "white";
  type ArrayOfServiceItems = {
    imgSrc: string;
    color: ColorKey;
    title: string;
    description: string;
  }[];
  type ServiceBackgrounds = "planejamentoMidia" | "inteligenciaDados" | "projetoEspecial";
}

export {};
