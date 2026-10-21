"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import useTheme from "@/hooks/useTheme";
import useScrollSpy from "@/hooks/useScrollSpy";
import { NAV_LINKS, PROFILE } from "@/lib/constants";

const SECTION_IDS = ["home", "about", "skills", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const activeId = useScrollSpy(SECTION_IDS, pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (l) => (l.id === "projects" ? pathname.startsWith("/projects") : pathname === "/" && activeId === l.id);
  const linkClass = (a) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      a ? "text-brand-600 dark:text-brand-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    }`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl transition-shadow dark:border-white/10 dark:bg-slate-950/60 ${scrolled ? "shadow-lg shadow-black/5" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          {PROFILE.name.split(" ")[0]}<span className="text-brand-500">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <Link href={l.href} className={linkClass(isActive(l))} aria-current={isActive(l) ? "page" : undefined}>
                {l.label}
                {isActive(l) && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden dark:border-white/10 dark:text-slate-200">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-200/60 px-4 pb-4 pt-2 md:hidden dark:border-white/10">
            {NAV_LINKS.map((l) => (
              <li key={l.id}><Link href={l.href} onClick={() => setOpen(false)} className={`block ${linkClass(isActive(l))} py-3 text-base`}>{l.label}</Link></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
