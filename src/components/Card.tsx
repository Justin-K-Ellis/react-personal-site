import LinkStyling from "./LinkStyling";

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
    <div className="flex flex-col gap-1 p-1 bg-linear-to-bl from-orange-100 to-amber-200 border border-accent rounded shadow hover:shadow-xl">
      {/* <img src={imgSrc} alt={title} /> */}
      <h3 className="text-xl font-bold">{title}</h3>
      <p>Role: {role}</p>
      <p>{description}</p>
      <ul>
        Stack:{" "}
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <LinkStyling>
        <a href={deploymentLink}>Live Deployment</a>
      </LinkStyling>
      <LinkStyling>
        <a href={repoLink}>GitHub Repo</a>
      </LinkStyling>
    </div>
  );
}
