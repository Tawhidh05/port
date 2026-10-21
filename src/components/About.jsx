import Section from "./Section";
import { PROFILE } from "@/lib/constants";

export default function About() {
  const initials = PROFILE.name.split(" ").map((w) => w[0]).join("");
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        {PROFILE.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} loading="lazy" className="mx-auto h-56 w-56 rounded-3xl object-cover shadow-xl" />
        ) : (
          <div aria-hidden="true" className="mx-auto grid h-56 w-56 place-items-center rounded-3xl bg-gradient-to-br from-brand-500 to-amber-400 text-6xl font-extrabold text-white shadow-xl">{initials}</div>
        )}
        <div>
          <p className="max-w-2xl text-lg leading-relaxed">{PROFILE.bio}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {PROFILE.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 p-4 text-center dark:border-white/10">
                <dd className="text-2xl font-extrabold text-brand-600 sm:text-3xl dark:text-brand-400">{s.value}</dd>
                <dt className="text-xs sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
