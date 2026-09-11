import Link from "next/link";
import { allCategories, FEATURED_SLUGS, getDuasBySlugs } from "@/lib/duas";
import DuaCard from "@/components/DuaCard";


const PILLARS = [
  {
    label: "Arabic & transliteration",
    description:
      "Every dua in full Arabic, with a transliteration you can actually read aloud.",
  },
  {
    label: "Story & context",
    description:
      "The moment behind each dua — who said it, when, and what was at stake.",
  },
  {
    label: "Reflection",
    description:
      "What each supplication teaches the heart, written with depth and sincerity.",
  },
  {
    label: "Checkable sources",
    description:
      "Every entry names its surah or hadith number, narrator and grading, and links out so you can verify it yourself.",
  },
];

export default function Home() {
  const featuredDuas = getDuasBySlugs(FEATURED_SLUGS);
  const categories = allCategories();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5f0] text-stone-800 dark:bg-[#0a0a0a] dark:text-stone-200">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5d9c0_0.8px,transparent_1px)] opacity-40 [background-size:40px_40px] dark:bg-[radial-gradient(#1f2421_0.8px,transparent_1px)]" />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 font-amiri text-5xl text-emerald-700 dark:text-emerald-400" lang="ar">
          أُنس
        </p>

        <h1 className="font-serif text-7xl tracking-tight text-stone-900 md:text-9xl dark:text-stone-100">
          Uns
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-9 text-stone-600 dark:text-stone-400">
          A quiet place to return to Allah — through authentic duas, their
          stories, and the reflections that soften the heart.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-stone-300 bg-white/70 px-4 py-1.5 text-sm text-stone-600 dark:border-stone-700 dark:bg-stone-900/70 dark:text-stone-400"
            >
              {category}
            </span>
          ))}
        </div>

        <Link
          href="/duas"
          className="mt-12 inline-block rounded-2xl bg-emerald-700 px-10 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-emerald-800 active:scale-95"
        >
          Enter the dua library
        </Link>
      </section>

      {/* Featured duas */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 flex items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
          <h2 className="font-serif text-2xl text-stone-700 dark:text-stone-300">
            Begin with these duas
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredDuas.map((dua) => (
            <DuaCard key={dua.slug} dua={dua} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/duas"
            className="text-sm text-emerald-700 transition-colors hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            View all duas →
          </Link>
        </div>
      </section>

      {/* What Uns offers */}
      <section className="relative mx-auto max-w-5xl px-6 pb-32">
        <div className="mb-12 flex items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
          <h2 className="font-serif text-2xl text-stone-700 dark:text-stone-300">
            What you will find here
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl border border-stone-200 bg-white/60 p-7 dark:border-stone-800 dark:bg-stone-900/60"
            >
              <div className="mb-3 h-1.5 w-8 rounded-full bg-emerald-600" />
              <h3 className="font-medium text-stone-800 dark:text-stone-200">
                {pillar.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative border-t border-stone-200 py-12 text-center dark:border-stone-800">
        <p className="mb-3 font-amiri text-3xl text-emerald-700 dark:text-emerald-400" lang="ar">
          أُنس
        </p>
        <p className="text-sm text-stone-400 dark:text-stone-500">
          May Allah accept your every call to Him.
        </p>
      </footer>
    </div>
  );
}
