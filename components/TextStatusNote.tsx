import type { TextStatus } from "@/lib/duas";

const LABEL: Record<TextStatus, string> = {
  verbatim: "Verbatim text",
  excerpt: "Excerpt",
  "recitation-form": "Recitation form",
};

const SUMMARY: Record<TextStatus, string> = {
  verbatim: "This is exactly the wording of the source cited below.",
  excerpt:
    "This is an unaltered portion of a longer passage in the source cited below.",
  "recitation-form":
    "The narrated wording has been recast into the first person for the supplicant to say.",
};

/**
 * States up front how the Arabic above relates to its source, so an excerpted
 * or adapted text is never mistaken for a full, verbatim quotation.
 */
export default function TextStatusNote({
  status,
  note,
}: {
  status: TextStatus;
  note?: string;
}) {
  return (
    <aside className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-500">
        {LABEL[status]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
        {SUMMARY[status]}
      </p>
      {note && (
        <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {note}
        </p>
      )}
    </aside>
  );
}
