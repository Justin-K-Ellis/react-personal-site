interface CardProps {
  title: string;
  imgSrc: string;
  description: string;
  repoLink: string;
  deploymentLink: string;
}

export default function Card({
  title,
  imgSrc,
  description,
  repoLink,
  deploymentLink,
}: CardProps) {
  return (
    <div className="box card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deploymentLink}>Live Deployment</a>
      <a href={repoLink}>GitHub Repo</a>
    </div>
  );
}
