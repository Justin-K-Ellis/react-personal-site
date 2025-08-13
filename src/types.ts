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
  logo?: SVGElement | string;
}

export type { ICard, ITech };
