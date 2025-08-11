import text from "../assets/text.json";

export default function Hero() {
  return (
    <section id="hero" className="box">
      <h2>{text.hero.title}</h2>
      <p>{text.hero.content}</p>
    </section>
  );
}
