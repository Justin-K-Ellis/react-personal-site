import { Separator } from "@/components/ui/separator";

import text from "../assets/text.json";
import TechStackGallery from "./TechStackGallery";
import Title from "./Title";

const stack = text.techStack;

export default function TechStack() {
  return (
    <section id="tech-stack">
      <Title text="Tech Stack" />
      <h3>Languages</h3>
      <TechStackGallery tech={stack.languages} />
      <h3>Frontend</h3>
      <TechStackGallery tech={stack.frontend} />
      <h3>Backend</h3>
      <TechStackGallery tech={stack.backend} />
      <Separator className="my-4 md:my-8" />
    </section>
  );
}
