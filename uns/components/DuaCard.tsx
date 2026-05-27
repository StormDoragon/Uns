import Link from "next/link";
import type { Dua } from "@/lib/duas";

type DuaCardProps = {
  dua: Dua;
};

export default function DuaCard({ dua }: DuaCardProps) {
  return (
    <Link
      href={`/duas/${dua.slug}`}
      className="group block rounded-2xl border border-stone-200 bg-white/60 p-7 shadow-sm transition-all hover:border-emerald-200 hover:bg-white hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-widest text-emerald-600">
          {dua.category}
        </p>
      </div>
      <h2 className="mt-3 font-serif text-xl leading-snug text-stone-800 group-hover:text-emerald-800 transition-colors">
        {dua.title}
      </h2>
      <p
        className="mt-4 text-2xl leading-relaxed text-stone-600"
        style={{ fontFamily: "var(--font-amiri), serif" }}
        dir="rtl"
      >
        {dua.arabic.split(" ").slice(0, 4).join(" ")}…
      </p>
      <p className="mt-4 text-sm leading-relaxed text-stone-500 line-clamp-2">
        {dua.translation}
      </p>
      <p className="mt-4 text-xs text-stone-400">{dua.sources[0]?.ref}</p>
    </Link>
  );
}
