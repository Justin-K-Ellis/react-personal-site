import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaGithub, FaLink } from "react-icons/fa";

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
  console.info(imgSrc);

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
              <FaLink />
            </a>
          </LinkStyling>
          <LinkStyling>
            <a href={repoLink} className="flex gap-1 items-center">
              GitHub Repo
              <FaGithub />
            </a>
          </LinkStyling>
        </div>
      </CardContent>

      <CardFooter>
        <StackAccordion stack={stack} />
      </CardFooter>
    </Card>
  );
}
