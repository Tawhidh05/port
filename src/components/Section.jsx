import Reveal from "./Reveal";

// Shared section wrapper: consistent spacing, heading and anchor id.
// The heading and the content each reveal on scroll (content slightly later).
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
        {subtitle && <p className="mt-2 max-w-xl">{subtitle}</p>}
      </Reveal>
      <Reveal delay={0.1} className="mt-8">{children}</Reveal>
    </section>
  );
}
