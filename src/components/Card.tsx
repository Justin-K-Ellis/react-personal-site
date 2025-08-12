interface CardProps {
  title: string;
  role: string;
  imgSrc: string;
  description: string;
  repoLink: string;
  deploymentLink: string;
  stack: string[];
}

export default function Card({
  title,
  role,
  imgSrc,
  description,
  repoLink,
  deploymentLink,
  stack,
}: CardProps) {
  return (
    <div className="box card bg-primary">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>Role: {role}</p>
      <p>{description}</p>
      <ul>
        Stack:{" "}
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={deploymentLink}>Live Deployment</a>
      <a href={repoLink}>GitHub Repo</a>
    </div>
  );
}
