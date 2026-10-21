import Link from "next/link";
import Thumb from "./Thumb";
import Reveal from "./Reveal";

export default function ProjectCard({ project: p, revealIndex }) {
  const card = (
    <Link
      href={`/projects/${p.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
    >
      <Thumb project={p} className="aspect-video text-5xl transition group-hover:scale-[1.02]" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
        <p className="flex-1 text-sm">{p.desc}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
  // Stagger by column position so each row cascades left to right
  return revealIndex === undefined ? card : <Reveal delay={(revealIndex % 3) * 0.1}>{card}</Reveal>;
}
