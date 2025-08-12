import text from "../assets/text.json";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        <a href={text.contact.github}>GitHub</a>
      </p>
      <p>
        <a href={text.contact.linkedin}>LinkedIn</a>
      </p>
    </section>
  );
}
