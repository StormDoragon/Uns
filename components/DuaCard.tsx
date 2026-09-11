import Link from "next/link";
import type { Dua } from "@/lib/duas";
import { sourceLabel } from "@/lib/duas";

export default function DuaCard({ dua }: { dua: Dua }) {
  return (
    <Link
      href={`/duas/${dua.slug}`}
      className="group flex flex-col rounded-2xl border border-stone-200 bg-white/60 p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-emerald-900 dark:hover:bg-stone-900"
    >
      <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {dua.category}
      </p>

      <h2 className="mt-3 font-serif text-xl leading-snug text-stone-800 transition-colors group-hover:text-emerald-800 dark:text-stone-100 dark:group-hover:text-emerald-300">
        {dua.title}
      </h2>

      <p
        className="mt-4 font-amiri text-2xl leading-relaxed text-stone-600 dark:text-stone-300"
        dir="rtl"
        lang="ar"
      >
        {dua.arabic}
      </p>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
        {dua.translation}
      </p>

      {/* sources is a non-empty tuple, so [0] always exists. */}
      <p className="mt-4 pt-4 text-xs text-stone-400 dark:text-stone-500">
        {sourceLabel(dua.sources[0])}
      </p>
    </Link>
  );
}
