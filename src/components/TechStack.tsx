import { Separator } from "@/components/ui/separator";

import TechStackGallery from "./TechStackGallery";
import Title from "./Title";
import SubTitle from "./SubTitle";
import { languages, frontend, backend } from "../assets/techStackData";

export default function TechStack() {
  return (
    <section id="tech-stack">
      <Title text="Tech Stack" />
      <p className="text-center mb-2 md:mb-4 md:text-xl">
        I'm capable in these languages and technologies:
      </p>
      <SubTitle text="Languages" />
      <TechStackGallery tech={languages} />
      <SubTitle text="Frontend Technologies" />
      <TechStackGallery tech={frontend} />
      <SubTitle text="Backend Technologies" />
      <TechStackGallery tech={backend} />
      <Separator className="my-4 md:my-8" />
      <svg></svg>
    </section>
  );
}
