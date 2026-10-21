import Image from "next/image";

// Gradient + emoji thumbnail. If a project has `image`, a lazy-loaded screenshot is used instead.
export default function Thumb({ project, className = "" }) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={`${project.title} preview`} className={`grid place-items-center ${className}`} style={{ background: `linear-gradient(135deg, ${project.grad})` }}>
      <span aria-hidden="true">{project.emoji}</span>
    </div>
  );
}
