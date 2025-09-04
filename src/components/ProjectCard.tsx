import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaGithub, FaLink } from "react-icons/fa";

import StackAccordion from "./StackAccordion";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  repoLink: string;
  deploymentLink: string;
  stack: string[];
}

export default function ProjectCard({
  title,
  role,
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
        <div id="links" className="flex gap-1 mt-2">
          {deploymentLink.length > 0 && (
            <Button className="p-2 shadow-lg rounded">
              <a href={deploymentLink} className="flex gap-1 items-center">
                Live Deployment
                <FaLink />
              </a>
            </Button>
          )}
          <Button className="p-2 shadow-lg rounded">
            <a href={repoLink} className="flex gap-1 items-center">
              GitHub Repo
              <FaGithub />
            </a>
          </Button>
        </div>
      </CardContent>

      <CardFooter>
        <StackAccordion stack={stack} />
      </CardFooter>
    </Card>
  );
}
