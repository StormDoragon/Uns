import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { duas, getDuaBySlug, getDuasBySlugs, sourceLabel } from "@/lib/duas";
import SourceCard from "@/components/SourceCard";
import TextStatusNote from "@/components/TextStatusNote";

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

  const description = `${dua.translation} — ${dua.sources
    .map(sourceLabel)
    .join("; ")}`;

  return {
    // The root layout supplies the "| Uns" suffix via its title template.
    title: dua.title,
    description,
    openGraph: {
      title: dua.title,
      description,
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
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5f0] text-stone-800 dark:bg-[#0a0a0a] dark:text-stone-200">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5d9c0_0.8px,transparent_1px)] opacity-40 [background-size:40px_40px] dark:bg-[radial-gradient(#1f2421_0.8px,transparent_1px)]" />

      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md dark:border-stone-800 dark:bg-black/95">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link
            href="/duas"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all duas
          </Link>
        </div>
      </nav>

      <main className="relative mx-auto max-w-3xl px-6 pt-12 pb-24">
        <div className="mb-6 inline-block rounded-full bg-emerald-100 px-5 py-1.5 text-sm tracking-wider text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400">
          {dua.category}
        </div>

        <h1 className="mb-12 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {dua.title}
        </h1>

        {/* Arabic */}
        <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-14 text-center shadow-sm md:p-20 dark:border-stone-800 dark:bg-stone-900">
          <p
            className="font-amiri text-[2.4rem] leading-[1.8] tracking-[0.5px] text-emerald-800 md:text-[2.9rem] dark:text-emerald-100"
            dir="rtl"
            lang="ar"
          >
            {dua.arabic}
          </p>
        </div>

        <div className="mb-16">
          <TextStatusNote status={dua.textStatus} note={dua.textNote} />
        </div>

        {/* Transliteration + Translation */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white/70 p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-widest text-stone-500">
              Transliteration
            </p>
            <p className="text-lg italic leading-relaxed">
              {dua.transliteration}
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white/70 p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-widest text-stone-500">
              Translation
            </p>
            <p className="text-lg leading-relaxed">{dua.translation}</p>
          </div>
        </div>

        {/* Sources — placed before the narrative, so the evidence comes first. */}
        <section className="mb-20">
          <h2 className="mb-8 font-serif text-2xl">Sources &amp; authenticity</h2>
          <div className="space-y-4">
            {dua.sources.map((source) => (
              <SourceCard key={sourceLabel(source)} source={source} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 flex items-center gap-4 font-serif text-2xl">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700 to-transparent" />
            The moment behind this dua
          </h2>
          <div className="prose prose-stone max-w-none text-[1.08rem] leading-relaxed dark:prose-invert">
            <p>{dua.story}</p>
          </div>
        </section>

        <section className="mb-20 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-stone-50 p-12 md:p-16 dark:border-emerald-900 dark:from-emerald-950/30 dark:to-stone-900">
          <h2 className="mb-8 font-serif text-2xl">What this teaches the heart</h2>
          <p className="text-[1.08rem] italic leading-relaxed text-stone-700 dark:text-stone-300">
            {dua.reflection}
          </p>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 font-serif text-2xl">When &amp; how to recite</h2>
          <div className="prose prose-stone max-w-none text-[1.08rem] leading-relaxed dark:prose-invert">
            <p>{dua.recitationGuidance}</p>
          </div>
        </section>

        {relatedDuas.length > 0 && (
          <section>
            <h2 className="mb-8 font-serif text-2xl">Continue the path</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedDuas.map((related) => (
                <Link
                  key={related.slug}
                  href={`/duas/${related.slug}`}
                  className="group rounded-2xl border border-stone-200 bg-white/50 p-8 transition-all hover:-translate-y-0.5 hover:border-emerald-200 dark:border-stone-800 dark:bg-stone-900/50"
                >
                  <div className="mb-2 text-sm text-emerald-600 dark:text-emerald-400">
                    {related.category}
                  </div>
                  <div className="font-medium transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    {related.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-stone-200 py-16 text-center text-sm text-stone-500 dark:border-stone-800">
        May Allah accept your every call to Him.
      </footer>
    </div>
  );
}
