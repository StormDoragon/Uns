import { notFound } from "next/navigation";
import Link from "next/link";
import { duas, getDuaBySlug, getDuasBySlugs } from "@/lib/duas";
import ArabicText from "@/components/ArabicText";
import SourceBadge from "@/components/SourceBadge";
import SectionCard from "@/components/SectionCard";
import DuaCard from "@/components/DuaCard";

export function generateStaticParams() {
  return duas.map((dua) => ({ slug: dua.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DuaPage({ params }: Props) {
  const { slug } = await params;
  const dua = getDuaBySlug(slug);

  if (!dua) {
    notFound();
  }

  const relatedDuas = getDuasBySlugs(dua.relatedSlugs);

  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-16 text-[#1f2a24]">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link href="/duas" className="text-sm text-[#9a7b45]">
          ← Back to Duas
        </Link>

        {/* Category badge */}
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#9a7b45]">
          {dua.category}
        </p>

        {/* Title */}
        <h1 className="mt-2 text-4xl font-semibold leading-snug md:text-5xl">
          {dua.title}
        </h1>

        <p className="mt-2 text-sm text-[#6a776f]">{dua.theme}</p>

        {/* Arabic */}
        <div className="mt-10 rounded-3xl border border-[#dfcfad] bg-white/60 p-8">
          <ArabicText
            text={dua.arabic}
            className="text-4xl leading-[2.2] md:text-5xl"
          />
        </div>

        {/* Transliteration */}
        <p className="mt-6 text-center text-base italic text-[#5f6b62]">
          {dua.transliteration}
        </p>

        {/* Translation */}
        <p className="mt-4 text-center text-lg font-medium leading-8 text-[#1f2a24]">
          {dua.translation}
        </p>

        {/* Source & Authenticity */}
        <div className="mt-10">
          <SourceBadge source={dua.source} authenticity={dua.authenticity} />
        </div>

        {/* Story */}
        <div className="mt-6">
          <SectionCard title="Story & Context">
            {dua.story}
          </SectionCard>
        </div>

        {/* Reflection */}
        <div className="mt-6">
          <SectionCard title="Reflection">
            {dua.reflection}
          </SectionCard>
        </div>

        {/* Recitation Guidance */}
        <div className="mt-6">
          <SectionCard title="Recitation Guidance">
            {dua.recitationGuidance}
          </SectionCard>
        </div>

        {/* Related Duas */}
        {relatedDuas.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-[#1f2a24]">Related Duas</h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {relatedDuas.map((related) => (
                <DuaCard key={related.slug} dua={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
