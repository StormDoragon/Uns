import Link from "next/link";
import { getDuasBySlugs } from "@/lib/duas";
import DuaCard from "@/components/DuaCard";

const FEATURED_SLUGS = [
  "dua-of-yunus",
  "hasbunallahu-wa-nimal-wakeel",
  "rabbana-atina-fid-dunya-hasanah",
];

export default function Home() {
  const featuredDuas = getDuasBySlugs(FEATURED_SLUGS);

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#1f2a24]">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7b45]">أُنس</p>

        <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">Uns</h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4b5a50]">
          A quiet return to Allah through authentic duas, remembrance,
          reflection, and the stories that soften the heart.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Hardship", "Forgiveness", "Protection"].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-[#d9c7a3] bg-[#fffaf1] px-4 py-2 text-sm tracking-wide text-[#6d5833]"
            >
              {topic}
            </span>
          ))}
        </div>

        <Link
          href="/duas"
          className="mt-12 inline-block rounded-full bg-[#2c4a36] px-8 py-3 text-sm tracking-wide text-[#f7f1e8] transition hover:bg-[#1f3628]"
        >
          Browse the Dua Library
        </Link>
      </section>

      {/* Featured duas */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-center text-2xl font-semibold text-[#1f2a24]">
          Begin with these duas
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredDuas.map((dua) => (
            <DuaCard key={dua.slug} dua={dua} />
          ))}
        </div>
      </section>
    </main>
  );
}
