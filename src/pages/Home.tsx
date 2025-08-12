import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Portfolio />
      <TechStack />
    </div>
  );
}
