import Link from "next/link";
import type { Dua } from "@/lib/duas";
import ArabicText from "@/components/ArabicText";

type DuaCardProps = {
  dua: Dua;
};

export default function DuaCard({ dua }: DuaCardProps) {
  return (
    <Link
      href={`/duas/${dua.slug}`}
      className="block rounded-3xl border border-[#dfcfad] bg-white/60 p-6 shadow-sm transition hover:bg-white"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[#9a7b45]">{dua.category}</p>
        <p className="text-xs text-[#6a776f]">{dua.theme}</p>
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-[#1f2a24]">{dua.title}</h2>
      <ArabicText text={dua.arabic} className="mt-4 text-3xl" />
      <p className="mt-4 text-sm text-[#5f6b62]">{dua.source}</p>
    </Link>
  );
}
