import ProjectCard from "./ProjectCard";
import Title from "./Title";
import cardData from "../assets/cardData";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Title text="Projects" />
      <div className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-2">
        {cardData.map((card) => (
          <ProjectCard
            key={card.title}
            title={card.title}
            role={card.role}
            imgSrc={card.imgSrc}
            description={card.description}
            stack={card.stack}
            repoLink={card.repoLink}
            deploymentLink={card.deploymentLink}
          />
        ))}
      </div>
    </section>
  );
}
