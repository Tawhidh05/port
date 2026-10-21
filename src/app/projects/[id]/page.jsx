import Link from "next/link";
import { notFound } from "next/navigation";
import Thumb from "@/components/Thumb";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import { getProject } from "@/lib/data/projects";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = await getProject(id);
  return p ? { title: p.title, description: p.desc } : { title: "Not found" };
}

// Dynamic SSR: one server-rendered page per project id. Unknown ids show the 404 page.
export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const p = await getProject(id);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6">
      <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-brand-600 dark:text-brand-400">
        <FiArrowLeft /> Back to projects
      </Link>
      <Thumb project={p} className="mt-6 aspect-[21/9] rounded-2xl text-6xl" />
      <h1 className="mt-8 text-3xl font-extrabold text-slate-900 sm:text-5xl dark:text-white">{p.title}</h1>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <li key={t} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">{t}</li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">{p.long}</p>
      {p.features?.length > 0 && (
        <>
          <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Key features</h2>
          <ul className="mt-3 grid max-w-2xl gap-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                {f}
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={p.live} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 hover:bg-brand-400">
          <FiExternalLink /> Live demo
        </a>
        <a href={p.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10">
          <FiGithub /> GitHub
        </a>
      </div>
    </article>
  );
}
