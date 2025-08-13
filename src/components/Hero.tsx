import text from "../assets/text.json";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-between gap-4 md:justify-around items-center p-6 md:p-30 bg-linear-to-bl from-amber-200 to-yellow-100 w-9/10 md:w-7/10 shadow mx-auto"
    >
      <h2 className="text-3xl md:text-6xl font-bold">{text.hero.title}</h2>
      <p className=" md:text-3xl">{text.hero.content}</p>
    </section>
  );
}
