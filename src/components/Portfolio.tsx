import Card from "./Card";
import cardData from "../assets/cardData";

export default function Portfolio() {
  return (
    <section id="protfolio">
      <div className="project-gallery">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            imgSrc={card.imgSrc}
            description={card.description}
            repoLink={card.repoLink}
            deploymentLink={card.deploymentLink}
          />
        ))}
      </div>
    </section>
  );
}
