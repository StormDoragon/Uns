import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { allCategories, duas } from "@/lib/duas";
import DuaCard from "@/components/DuaCard";

export const metadata: Metadata = {
  title: "All duas",
  description:
    "Every dua on Uns, each with its Arabic, transliteration, translation, and a checkable Qur’anic or hadith source.",
};

export default function DuasPage() {
  const categories = allCategories();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5f0] text-stone-800 dark:bg-[#0a0a0a] dark:text-stone-200">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5d9c0_0.8px,transparent_1px)] opacity-40 [background-size:40px_40px] dark:bg-[radial-gradient(#1f2421_0.8px,transparent_1px)]" />

      <main className="relative mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-emerald-700 transition-colors hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Uns
        </Link>

        <h1 className="mt-8 font-serif text-5xl tracking-tight">Duas</h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400">
          {duas.length} supplications, each with its Arabic, transliteration and
          translation — and a named source you can check for yourself.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-stone-300 bg-white/70 px-4 py-1.5 text-sm text-stone-600 dark:border-stone-700 dark:bg-stone-900/70 dark:text-stone-400"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {duas.map((dua) => (
            <DuaCard key={dua.slug} dua={dua} />
          ))}
        </div>
      </main>

      <footer className="relative border-t border-stone-200 py-12 text-center text-sm text-stone-400 dark:border-stone-800 dark:text-stone-500">
        May Allah accept your every call to Him.
      </footer>
    </div>
  );
}
