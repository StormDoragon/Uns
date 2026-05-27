import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bookmark, Share2, Play } from "lucide-react";
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
    openGraph: {
      title: dua.title,
      description: dua.translation,
    },
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
    <div className="min-h-screen bg-[#f8f5f0] dark:bg-[#0a0a0a] text-stone-800 dark:text-stone-200 font-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-black/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/duas"
            className="flex items-center gap-2 text-sm hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Duas
          </Link>
          <div className="flex gap-4">
            <button
              aria-label="Bookmark"
              className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition"
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button
              aria-label="Share"
              className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Category */}
        <div className="inline-block px-5 py-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full text-sm tracking-wide mb-6">
          {dua.category}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif tracking-tighter leading-tight mb-12">
          {dua.title}
        </h1>

        {/* Arabic - Hero */}
        <div className="mb-16 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-12 md:p-20 text-center shadow-sm">
          <p
            className="text-[2.35rem] md:text-[2.85rem] leading-[1.8] text-emerald-800 dark:text-emerald-200 tracking-wide"
            style={{ fontFamily: "var(--font-amiri), serif" }}
            dir="rtl"
          >
            {dua.arabic}
          </p>
        </div>

        {/* Transliteration + Translation */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-9">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">
              Transliteration
            </p>
            <p className="italic text-[1.1rem] leading-relaxed">
              {dua.transliteration}
            </p>
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-9">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">
              Translation
            </p>
            <p className="text-[1.1rem] leading-relaxed">{dua.translation}</p>
          </div>
        </div>

        {/* Recitation Button */}
        <div className="flex justify-center mb-20">
          <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-5 rounded-2xl font-medium transition-all active:scale-[0.985]">
            <Play className="w-5 h-5" fill="white" />
            Listen to Beautiful Recitation
          </button>
        </div>

        {/* Story */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 flex items-center gap-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent" />
            The Moment Behind This Dua
          </h2>
          <div className="prose dark:prose-invert prose-stone max-w-none text-[1.08rem] leading-relaxed">
            <p>{dua.story}</p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-20 bg-gradient-to-br from-emerald-50 via-white to-stone-50 dark:from-emerald-950/40 dark:via-stone-900 dark:to-stone-900 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-12 md:p-16">
          <h2 className="font-serif text-2xl mb-8">
            What This Teaches the Heart
          </h2>
          <div className="prose dark:prose-invert italic text-[1.08rem] leading-relaxed">
            <p>{dua.reflection}</p>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8">Sources & Authenticity</h2>
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 flex gap-5">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600 flex-shrink-0" />
            <div>
              <div className="font-medium">{dua.source}</div>
              <div className="text-xs uppercase tracking-widest text-emerald-600 mt-3">
                {dua.authenticity}
              </div>
            </div>
          </div>
        </section>

        {/* Guidance */}
        <section className="mb-24">
          <h2 className="font-serif text-2xl mb-8">When & How to Recite</h2>
          <div className="prose dark:prose-invert text-[1.08rem] leading-relaxed">
            <p>{dua.recitationGuidance}</p>
          </div>
        </section>

        {/* Related */}
        {relatedDuas.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-8">Continue the Path</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDuas.map((related) => (
                <Link
                  key={related.slug}
                  href={`/duas/${related.slug}`}
                  className="group p-8 border border-stone-200 dark:border-stone-800 hover:border-emerald-200 rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  <div className="text-emerald-600 text-sm mb-2">
                    {related.category}
                  </div>
                  <div className="font-medium group-hover:text-emerald-700">
                    {related.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-12 text-sm text-stone-500 border-t border-stone-200 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  );
}
