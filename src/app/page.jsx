import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";

// Server Component: data is fetched on the server for every request.
export default async function Home() {
  const featured = await getFeaturedProjects();
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Section id="featured" title="Featured projects" subtitle="A few things I've built recently.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
        <Link href="/projects" className="mt-8 inline-block rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10">
          View all projects
        </Link>
      </Section>
      <Experience />
      <Contact />
    </>
  );
}
