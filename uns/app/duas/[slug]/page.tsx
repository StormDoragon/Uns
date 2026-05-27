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
    <div className="min-h-screen bg-[#f8f5f0] dark:bg-[#0a0a0a] text-stone-800 dark:text-stone-200 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5d9c0_0.8px,transparent_1px)] dark:bg-[radial-gradient(#1f2421_0.8px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/duas"
            className="flex items-center gap-2 text-sm font-medium hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Duas
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

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 relative">
        {/* Category */}
        <div className="inline-block px-5 py-1.5 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 rounded-full text-sm tracking-wider mb-6">
          {dua.category}
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tighter mb-12">
          {dua.title}
        </h1>

        {/* Arabic Hero */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-14 md:p-20 text-center mb-10 shadow-sm">
          <p
            className="text-[2.4rem] md:text-[2.9rem] leading-[1.8] text-emerald-800 dark:text-emerald-100 tracking-[0.5px]"
            style={{ fontFamily: "var(--font-amiri), serif" }}
            dir="rtl"
          >
            {dua.arabic}
          </p>
        </div>

        {/* Audio Player */}
        <div className="mb-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <button
              aria-label="Play recitation"
              className="w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl flex items-center justify-center transition-all active:scale-95 flex-shrink-0"
            >
              <Play className="w-6 h-6 ml-0.5" fill="white" />
            </button>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">Beautiful Recitation</div>
              <div className="text-xs text-stone-500 mt-0.5">
                Coming soon
              </div>
              <div className="mt-3 h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-emerald-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Transliteration + Translation */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white/70 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
            <p className="uppercase text-xs tracking-widest text-stone-500 mb-3">
              Transliteration
            </p>
            <p className="italic text-lg leading-relaxed">{dua.transliteration}</p>
          </div>
          <div className="bg-white/70 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8">
            <p className="uppercase text-xs tracking-widest text-stone-500 mb-3">
              Translation
            </p>
            <p className="text-lg leading-relaxed">{dua.translation}</p>
          </div>
        </div>

        {/* Story */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700 to-transparent" />
            The Moment Behind This Dua
          </h2>
          <div className="prose dark:prose-invert prose-stone max-w-none text-[1.08rem] leading-relaxed">
            <p>{dua.story}</p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-20 p-12 md:p-16 bg-gradient-to-br from-emerald-50 to-stone-50 dark:from-emerald-950/30 dark:to-stone-900 border border-emerald-100 dark:border-emerald-900 rounded-3xl">
          <h2 className="font-serif text-2xl mb-8">
            What This Teaches the Heart
          </h2>
          <p className="italic text-[1.08rem] leading-relaxed text-stone-700 dark:text-stone-300">
            {dua.reflection}
          </p>
        </section>

        {/* Sources */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8">Sources & Authenticity</h2>
          <div className="space-y-4">
            {dua.sources.map((source, i) => (
              <div
                key={i}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 flex gap-5"
              >
                <div className="w-2 h-2 mt-2.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <div>
                  <div className="font-medium">{source.type}</div>
                  <div className="text-stone-600 dark:text-stone-400 mt-1">
                    {source.ref}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-emerald-600 mt-3">
                    {source.authenticity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guidance */}
        <section className="mb-20">
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
                  className="group p-8 border border-stone-200 dark:border-stone-800 hover:border-emerald-200 rounded-2xl transition-all hover:-translate-y-0.5 bg-white/50 dark:bg-stone-900/50"
                >
                  <div className="text-emerald-600 text-sm mb-2">
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

      <footer className="text-center py-16 text-sm text-stone-500 border-t border-stone-200 dark:border-stone-800">
        May Allah accept your every call to Him.
      </footer>
    </div>
  );
}
