import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Share2, Bookmark, Play } from "lucide-react";
import Link from "next/link";
import { duas, getDuaBySlug, getDuasBySlugs } from "@/lib/duas";

export function generateStaticParams() {
  return duas.map((dua) => ({ slug: dua.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dua = getDuaBySlug(slug);
  if (!dua) return {};
  return {
    title: `${dua.title} | Uns`,
    description: dua.translation,
  };
}

export default async function DuaPage({ params }: Props) {
  const { slug } = await params;
  const dua = getDuaBySlug(slug);

  if (!dua) {
    notFound();
  }

  const relatedDuas = getDuasBySlugs(dua.relatedSlugs);

  return (
    <div className="min-h-screen bg-[#f8f5f0] dark:bg-[#0a0a0a] text-stone-800 dark:text-stone-200">
      {/* Top Navigation */}
      <nav className="border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/duas"
            className="flex items-center gap-2 text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Duas
          </Link>
          <div className="flex items-center gap-4">
            <button
              aria-label="Bookmark"
              className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors"
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button
              aria-label="Share"
              className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium mb-6">
            {dua.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-2 tracking-tight">
            {dua.title}
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-sm mb-10">
            {dua.theme}
          </p>

          {/* Arabic Text */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-10 md:p-16 text-center mb-10 shadow-sm">
            <p
              className="text-4xl md:text-5xl leading-relaxed text-emerald-800 dark:text-emerald-300"
              style={{ fontFamily: "var(--font-amiri), serif" }}
              dir="rtl"
            >
              {dua.arabic}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                Transliteration
              </p>
              <p className="italic text-lg leading-relaxed">
                {dua.transliteration}
              </p>
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                English Translation
              </p>
              <p className="leading-relaxed text-lg">{dua.translation}</p>
            </div>
          </div>
        </div>

        {/* Recitation Button */}
        <div className="flex justify-center mb-16">
          <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-medium transition-all active:scale-95">
            <Play className="w-5 h-5" />
            Listen to Recitation
          </button>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-emerald-600 inline-block" />
            The Moment Behind This Dua
          </h2>
          <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            {dua.story}
          </p>
        </section>

        {/* Reflection Section */}
        <section className="mb-20 bg-gradient-to-br from-emerald-50 to-stone-50 dark:from-emerald-950/50 dark:to-stone-900 border border-emerald-100 dark:border-emerald-900 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl font-serif mb-8">
            What This Teaches the Heart
          </h2>
          <p className="text-lg leading-relaxed italic text-stone-700 dark:text-stone-300">
            {dua.reflection}
          </p>
        </section>

        {/* Sources */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif mb-8">Sources & Authenticity</h2>
          <div className="flex gap-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
            <div className="w-2 h-2 mt-2.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <div className="font-medium">{dua.source}</div>
              <div className="text-xs uppercase tracking-widest text-emerald-600 mt-2">
                {dua.authenticity}
              </div>
            </div>
          </div>
        </section>

        {/* Recitation Guidance */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif mb-8">When & How to Recite</h2>
          <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            {dua.recitationGuidance}
          </p>
        </section>

        {/* Related Duas */}
        {relatedDuas.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif mb-8">Continue Your Journey</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDuas.map((related) => (
                <Link
                  key={related.slug}
                  href={`/duas/${related.slug}`}
                  className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-300 rounded-2xl p-8 transition-all hover:-translate-y-1"
                >
                  <div className="text-emerald-600 text-sm mb-3">
                    {related.category}
                  </div>
                  <div className="font-medium group-hover:text-emerald-700 transition-colors">
                    {related.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 py-12 text-center text-sm text-stone-500">
        May Allah accept your dua and grant you peace of heart.
      </footer>
    </div>
  );
}
