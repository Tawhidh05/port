import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjects, getCategories } from "@/lib/data/projects";

export const metadata = { title: "Projects" };

// Dynamic SSR: renders on the server for each ?category= value.
export default async function ProjectsPage({ searchParams }) {
  const { category = "All" } = await searchParams;
  const [projects, categories] = await Promise.all([getProjects(category), getCategories()]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">Projects</h1>
      <p className="mt-2">Filter by category.</p>

      <nav aria-label="Project categories" className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Link
            key={c}
            href={c === "All" ? "/projects" : `/projects?category=${encodeURIComponent(c)}`}
            aria-current={c === category ? "true" : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              c === category
                ? "border-brand-500 bg-brand-500 text-slate-950"
                : "border-slate-200 hover:border-brand-500 dark:border-white/10"
            }`}
          >
            {c}
          </Link>
        ))}
      </nav>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={`${category}-${p.id}`} project={p} revealIndex={i} />)}
      </div>
      {!projects.length && <p className="mt-8">No projects in this category yet.</p>}
    </section>
  );
}
