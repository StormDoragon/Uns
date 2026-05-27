import Link from "next/link";
import { getDuasBySlugs } from "@/lib/duas";
import DuaCard from "@/components/DuaCard";

const FEATURED_SLUGS = [
  "dua-of-yunus",
  "dua-of-ayyub",
  "hasbunallahu-wa-nimal-wakeel",
];

const PILLARS = [
  {
    label: "Arabic & Transliteration",
    description: "Every dua presented in full Arabic with careful transliteration for any reader.",
  },
  {
    label: "Story & Context",
    description: "The moment behind each dua — who said it, when, and what was at stake.",
  },
  {
    label: "Reflection",
    description: "What each supplication teaches the heart, written with depth and sincerity.",
  },
  {
    label: "Sources",
    description: "Qur'anic references and hadith grading presented honestly and clearly.",
  },
];

export default function Home() {
  const featuredDuas = getDuasBySlugs(FEATURED_SLUGS);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-800 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5d9c0_0.8px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Arabic wordmark */}
        <p
          className="mb-6 text-5xl text-emerald-700"
          style={{ fontFamily: "var(--font-amiri), serif" }}
        >
          أُنس
        </p>

        <h1 className="font-serif text-7xl tracking-tight md:text-9xl text-stone-900">
          Uns
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-9 text-stone-600">
          A quiet place to return to Allah — through authentic duas,
          their stories, and the reflections that soften the heart.
        </p>

        {/* Category pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {["Distress", "Repentance", "Tawakkul", "Illness", "Provision", "Protection"].map(
            (topic) => (
              <span
                key={topic}
                className="rounded-full border border-stone-300 bg-white/70 px-4 py-1.5 text-sm text-stone-600"
              >
                {topic}
              </span>
            )
          )}
        </div>

        <Link
          href="/duas"
          className="mt-12 inline-block rounded-2xl bg-emerald-700 px-10 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-emerald-800 active:scale-95"
        >
          Enter the Dua Library
        </Link>

        {/* Scroll hint */}
        <p className="absolute bottom-10 text-xs tracking-widest text-stone-400 uppercase">
          scroll
        </p>
      </section>

      {/* Featured duas */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 flex items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
          <h2 className="font-serif text-2xl text-stone-700">Begin with these duas</h2>
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
            className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            View all duas →
          </Link>
        </div>
      </section>

      {/* What Uns offers */}
      <section className="relative mx-auto max-w-5xl px-6 pb-32">
        <div className="mb-12 flex items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
          <h2 className="font-serif text-2xl text-stone-700">What you will find here</h2>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl border border-stone-200 bg-white/60 p-7"
            >
              <div className="mb-3 h-1.5 w-8 rounded-full bg-emerald-600" />
              <h3 className="font-medium text-stone-800">{pillar.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-stone-200 py-12 text-center">
        <p
          className="text-3xl text-emerald-700 mb-3"
          style={{ fontFamily: "var(--font-amiri), serif" }}
        >
          أُنس
        </p>
        <p className="text-sm text-stone-400">
          May Allah accept your every call to Him.
        </p>
      </footer>
    </div>
  );
}
