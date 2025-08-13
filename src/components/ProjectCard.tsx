import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight, FolderGit } from "lucide-react";

import LinkStyling from "./LinkStyling";
import StackAccordion from "./StackAccordion";

interface ProjectCardProps {
  title: string;
  role: string;
  imgSrc: string;
  description: string;
  repoLink: string;
  deploymentLink: string;
  stack: string[];
}

export default function ProjectCard({
  title,
  role,
  imgSrc,
  description,
  repoLink,
  deploymentLink,
  stack,
}: ProjectCardProps) {
  return (
    <Card className="hover:shadow-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-justify">{description}</p>
        <div>
          <LinkStyling>
            <a href={deploymentLink} className="flex gap-1 items-center">
              Live Deployment
              <SquareArrowOutUpRight />
            </a>
          </LinkStyling>
          <LinkStyling>
            <a href={repoLink} className="flex gap-1 items-center">
              GitHub Repo
              <FolderGit />
            </a>
          </LinkStyling>
        </div>
      </CardContent>

      <CardFooter>
        <StackAccordion stack={stack} />
      </CardFooter>
    </Card>

    // <div className="flex flex-col gap-1 p-1 bg-white border-accent rounded shadow hover:shadow-xl">
    //   {/* <img src={imgSrc} alt={title} /> */}
    //   <h3 className="text-xl font-bold">{title}</h3>
    //   <p>Role: {role}</p>
    //   <p>{description}</p>
    //   <ul>
    //     Stack:{" "}
    //     {stack.map((tech) => (
    //       <li key={tech}>{tech}</li>
    //     ))}
    //   </ul>
    //   <LinkStyling>
    //     <a href={deploymentLink} className="flex gap-1 items-center">
    //       Live Deployment
    //       <SquareArrowOutUpRight />
    //     </a>
    //   </LinkStyling>
    //   <LinkStyling>
    //     <a href={repoLink} className="flex gap-1 items-center">
    //       GitHub Repo
    //       <FolderGit />
    //     </a>
    //   </LinkStyling>
    // </div>
  );
}
