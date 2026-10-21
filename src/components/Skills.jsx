import Section from "./Section";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="What I work with day to day.">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-600 dark:text-brand-400">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
