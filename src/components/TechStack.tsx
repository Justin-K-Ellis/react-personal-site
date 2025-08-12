import text from "../assets/text.json";
import TechStackGallery from "./TechStackGallery";

const stack = text.techStack;

export default function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech Stack</h2>
      <h3>Languages</h3>
      <TechStackGallery tech={stack.languages} />
      <h3>Frontend</h3>
      <TechStackGallery tech={stack.frontend} />
      <h3>Backend</h3>
      <TechStackGallery tech={stack.backend} />
    </section>
  );
}
