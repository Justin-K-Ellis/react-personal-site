import TechCard from "./TechCard";
import type { ITech } from "@/types";

export default function TechStackGallery({ tech }: { tech: ITech[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mt-4 mb-8">
      {tech.map((t) => (
        <TechCard key={t.name} name={t.name} Logo={t.logo} />
      ))}
    </div>
  );
}
