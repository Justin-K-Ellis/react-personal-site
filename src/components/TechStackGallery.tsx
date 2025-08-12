export default function TechStackGallery({ tech }: { tech: string[] }) {
  return (
    <div className="tech-stack-gallery box">
      {tech.map((t) => (
        <div key={t} className="box">
          {t}
        </div>
      ))}
    </div>
  );
}
