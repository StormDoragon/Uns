import { ExternalLink } from "lucide-react";
import type { Source } from "@/lib/duas";
import { sourceLabel, sourceUrl } from "@/lib/duas";

/**
 * One cited source, with a link the reader can follow to check it themselves.
 */
export default function SourceCard({ source }: { source: Source }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium tracking-wide text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
          {source.kind === "quran" ? "Qur’an" : "Hadith"}
        </span>
        {source.kind === "hadith" && (
          <span className="rounded-full border border-emerald-600/40 px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 dark:text-emerald-400">
            {source.grading}
          </span>
        )}
      </div>

      <p className="mt-4 text-lg font-medium">{sourceLabel(source)}</p>

      {source.kind === "hadith" ? (
        <dl className="mt-3 space-y-1 text-sm text-stone-600 dark:text-stone-400">
          <div className="flex gap-2">
            <dt className="shrink-0">Narrated by</dt>
            <dd className="font-medium text-stone-700 dark:text-stone-300">
              {source.narrator}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0">Grading</dt>
            <dd>{source.gradingAuthority}</dd>
          </div>
        </dl>
      ) : (
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
          The words of Allah. Chain-of-narration grading applies to hadith, not
          to the Qur’an.
        </p>
      )}

      <a
        href={sourceUrl(source)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm text-emerald-700 transition-colors hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300"
      >
        Check this reference
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
