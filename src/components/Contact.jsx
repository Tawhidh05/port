"use client";

import { useActionState } from "react";
import Section from "./Section";
import { sendMessage } from "@/app/actions";
import { PROFILE, SOCIALS } from "@/lib/constants";

const field = "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white";

export default function Contact() {
  const [state, action, pending] = useActionState(sendMessage, null);
  const e = state?.errors ?? {};

  return (
    <Section id="contact" title="Get in touch" subtitle="Send a message and I'll reply within two days.">
      <div className="grid gap-10 md:grid-cols-2">
        <form action={action} noValidate className="grid gap-4">
          {[["name", "Name", "text"], ["email", "Email", "email"]].map(([n, label, type]) => (
            <div key={n}>
              <label htmlFor={n} className="text-sm font-semibold text-slate-900 dark:text-white">{label}</label>
              <input id={n} name={n} type={type} className={field} aria-invalid={!!e[n]} />
              <p className="min-h-5 text-sm text-red-500">{e[n]}</p>
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-slate-900 dark:text-white">Message</label>
            <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!e.message} />
            <p className="min-h-5 text-sm text-red-500">{e.message}</p>
          </div>
          <button disabled={pending} className="w-fit rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400 disabled:opacity-60">
            {pending ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={state?.ok ? "text-emerald-500" : "text-red-500"}>
            {state?.ok ? "Message sent. Thank you!" : e.form}
          </p>
        </form>

        <div>
          <p>Prefer email?</p>
          <a href={`mailto:${PROFILE.email}`} className="text-xl font-bold text-brand-600 dark:text-brand-400">{PROFILE.email}</a>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500 dark:border-white/10">
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
