import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Blurb from "@/components/Blurb";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Blurb />
      <Portfolio />
      <TechStack />
      <Contact />
    </div>
  );
}
