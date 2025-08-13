import TechCard from "./TechCard";

export default function TechStackGallery({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mt-4 mb-8">
      {tech.map((t) => (
        <TechCard key={t} text={t} />
      ))}
    </div>
  );
}
