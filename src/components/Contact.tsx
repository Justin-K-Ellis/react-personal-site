import text from "../assets/text.json";
import Title from "./Title";

export default function Contact() {
  return (
    <section id="contact">
      <Title text="Contact Me" />
      <p>
        <a href={text.contact.github}>GitHub</a>
      </p>
      <p>
        <a href={text.contact.linkedin}>LinkedIn</a>
      </p>
    </section>
  );
}
