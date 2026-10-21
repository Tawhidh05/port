import Link from "next/link";
import { NAV_LINKS, PROFILE, SOCIALS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {NAV_LINKS.map((l) => <li key={l.id}><Link href={l.href} className="hover:text-brand-500">{l.label}</Link></li>)}
        </ul>
        <ul className="flex gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}><a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="hover:text-brand-500"><Icon /></a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
