declare global {
  type ColorKey = "mainYellow" | "white";
  type ArrayOfServiceItems = {
    imgSrc: string;
    color: ColorKey;
    title: string;
    description: string;
  }[];
}

export {};
