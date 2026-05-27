import Link from "next/link";
import { duas } from "@/lib/duas";
import DuaCard from "@/components/DuaCard";

export default function DuasPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-16 text-[#1f2a24]">
      <section className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-[#9a7b45]">
          ← Back to Uns
        </Link>

        <h1 className="mt-8 text-5xl font-semibold">Duas</h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b5a50]">
          A growing library of authentic duas, remembrance, and reflections for
          hearts seeking closeness to Allah.
        </p>

        <p className="mt-4 text-sm text-[#6b786e]">
          Explore by category and emotional theme. Each entry includes context,
          reflection, and recitation guidance.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {duas.map((dua) => (
            <DuaCard key={dua.slug} dua={dua} />
          ))}
        </div>
      </section>
    </main>
  );
}
