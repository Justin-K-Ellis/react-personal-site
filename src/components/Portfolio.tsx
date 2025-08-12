import Card from "./Card";
import cardData from "../assets/cardData";

export default function Portfolio() {
  return (
    <section id="protfolio">
      <h2>Projects</h2>
      <div className="project-gallery">
        {cardData.map((card) => (
          <Card
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
