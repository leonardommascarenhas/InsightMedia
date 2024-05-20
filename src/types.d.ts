import React from "react";

declare global {
  type ColorKey = "mainYellow" | "white";
  type ArrayOfServiceItems = {
    svg: React.ReactNode;
    color: ColorKey;
    title: string;
    description: string;
  }[];
  type ServiceBackgrounds = "planejamentoMidia" | "inteligenciaDados" | "projetoEspecial";
}

export {};
