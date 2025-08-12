import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Portfolio />
      <TechStack />
      <Contact />
    </div>
  );
}
