import type { ICard } from "../types";
import text from "../assets/text.json";

const cardData: ICard[] = [
  {
    title: text.portfolio.japanEvents.title,
    role: text.portfolio.japanEvents.role,
    imgSrc: text.portfolio.japanEvents.imgSrc,
    description: text.portfolio.japanEvents.description,
    repoLink: text.portfolio.japanEvents.repoLink,
    deploymentLink: text.portfolio.japanEvents.deploymentLink,
    stack: text.portfolio.japanEvents.stack,
  },
  {
    title: text.portfolio.recipeWrangler.title,
    role: text.portfolio.recipeWrangler.role,
    imgSrc: text.portfolio.recipeWrangler.imgSrc,
    description: text.portfolio.recipeWrangler.description,
    repoLink: text.portfolio.recipeWrangler.repoLink,
    deploymentLink: text.portfolio.recipeWrangler.deploymentLink,
    stack: text.portfolio.recipeWrangler.stack,
  },
  {
    title: text.portfolio.washokuWalker.title,
    role: text.portfolio.washokuWalker.role,
    imgSrc: text.portfolio.washokuWalker.imgSrc,
    description: text.portfolio.washokuWalker.description,
    repoLink: text.portfolio.washokuWalker.repoLink,
    deploymentLink: text.portfolio.washokuWalker.deploymentLink,
    stack: text.portfolio.washokuWalker.stack,
  },
  {
    title: text.portfolio.personalSite.title,
    role: text.portfolio.personalSite.role,
    imgSrc: text.portfolio.personalSite.imgSrc,
    description: text.portfolio.personalSite.description,
    repoLink: text.portfolio.personalSite.repoLink,
    deploymentLink: text.portfolio.personalSite.deploymentLink,
    stack: text.portfolio.personalSite.stack,
  },
  {
    title: text.portfolio.courseManagment.title,
    role: text.portfolio.courseManagment.role,
    imgSrc: text.portfolio.courseManagment.imgSrc,
    description: text.portfolio.courseManagment.description,
    repoLink: text.portfolio.courseManagment.repoLink,
    deploymentLink: text.portfolio.courseManagment.deploymentLink,
    stack: text.portfolio.courseManagment.stack,
  },
  {
    title: text.portfolio.pokemonMemory.title,
    role: text.portfolio.pokemonMemory.role,
    imgSrc: text.portfolio.pokemonMemory.imgSrc,
    description: text.portfolio.pokemonMemory.description,
    repoLink: text.portfolio.pokemonMemory.repoLink,
    deploymentLink: text.portfolio.pokemonMemory.deploymentLink,
    stack: text.portfolio.pokemonMemory.stack,
  },
];

export default cardData;
