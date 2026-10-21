"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import useTypewriter from "@/hooks/useTypewriter";
import { PROFILE, SOCIALS } from "@/lib/constants";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
});

export default function Hero() {
  const role = useTypewriter(PROFILE.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 lg:text-left">
        <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {PROFILE.status}
        </motion.span>

        <motion.h1 {...fadeUp(1)} className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl dark:text-white">
          Hi, I&apos;m <span className="bg-gradient-to-r from-brand-500 to-amber-400 bg-clip-text text-transparent">{PROFILE.name}</span>
        </motion.h1>

        {/* aria-label gives screen readers the full phrase instead of letters */}
        <motion.p {...fadeUp(2)} aria-label={PROFILE.roles.join(", ")} className="mt-4 h-9 text-xl font-semibold text-slate-700 sm:text-2xl lg:text-3xl dark:text-slate-200">
          <span aria-hidden="true">{role}<span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand-500">&nbsp;</span></span>
        </motion.p>

        <motion.p {...fadeUp(3)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0">{PROFILE.intro}</motion.p>

        <motion.div {...fadeUp(4)} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a href="/cv.pdf" download className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-400 sm:w-auto">
            <FiDownload /> Download CV
          </a>
          <Link href="/#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto dark:border-white/15 dark:text-white dark:hover:bg-white/10">
            <FiMail /> Contact Me
          </Link>
        </motion.div>

        <motion.ul {...fadeUp(5)} className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-400">
                <Icon size={18} />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
