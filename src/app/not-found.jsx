import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-7xl font-extrabold text-brand-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-2">The page you are looking for doesn&apos;t exist or was moved.</p>
        <Link href="/" className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-slate-950 hover:bg-brand-400">Back home</Link>
      </div>
    </section>
  );
}
