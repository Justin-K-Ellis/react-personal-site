import type { IconType } from "react-icons/lib";

interface ICard {
  title: string;
  role: string;
  imgSrc: string;
  description: string;
  repoLink: string;
  deploymentLink: string;
  stack: string[];
}

interface ITech {
  name: string;
  logo: IconType;
}

export type { ICard, ITech };
