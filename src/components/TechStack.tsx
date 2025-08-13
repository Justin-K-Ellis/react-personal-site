import { Separator } from "@/components/ui/separator";

import text from "../assets/text.json";
import TechStackGallery from "./TechStackGallery";
import Title from "./Title";
import SubTitle from "./SubTitle";

import { languages } from "../assets/techStackData";
console.log(languages);

const stack = text.techStack;

export default function TechStack() {
  return (
    <section id="tech-stack">
      <Title text="Tech Stack" />
      <SubTitle text="Languages" />
      <TechStackGallery tech={stack.languages} />
      <SubTitle text="Frontend Technologies" />
      <TechStackGallery tech={stack.frontend} />
      <SubTitle text="Backend Technologies" />
      <TechStackGallery tech={stack.backend} />
      <Separator className="my-4 md:my-8" />
      <svg></svg>
    </section>
  );
}
