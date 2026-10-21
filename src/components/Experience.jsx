import Section from "./Section";
import { TIMELINE } from "@/lib/constants";

// Vertical timeline for experience and education.
export default function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="relative ml-3 border-l border-slate-200 dark:border-white/10">
        {TIMELINE.map((t) => (
          <li key={t.title} className="mb-10 ml-6">
            <span aria-hidden="true" className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-slate-50 dark:ring-slate-950" />
            <time className="text-sm font-semibold text-brand-600 dark:text-brand-400">{t.year}</time>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.title}</h3>
            <p className="text-sm font-medium">{t.place}</p>
            <p className="mt-1 max-w-xl">{t.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
