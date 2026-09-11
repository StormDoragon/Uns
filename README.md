# Uns

A quiet library of authentic duas and dhikr — Arabic, transliteration,
translation, the story behind each supplication, and a source the reader can
check for themselves.

## Authenticity model

Everything the site publishes lives in [`lib/duas.ts`](lib/duas.ts). Because
the whole premise of Uns is that its content is trustworthy, the data model is
built so that unverified content cannot ship:

- **`sources` is a non-empty tuple.** A dua without a citation will not compile.
- **`grading` is a closed union** (`"Sahih" | "Hasan"`). There is no way to
  write "needs verification" into the grading field. An entry whose grading is
  not established does not go in the dataset.
- **`textStatus` states how the Arabic relates to its source** — `verbatim`,
  `excerpt`, or `recitation-form` — and any value other than `verbatim`
  requires a `textNote` explaining the difference. This is surfaced to the
  reader above the translation, so a popular recitation form is never presented
  as if it were the exact revealed or narrated wording.
- **Every source links out** to quran.com or sunnah.com, so a reader can verify
  the citation rather than take the site's word for it.

`npm run check:duas` enforces what the type system cannot: well-formed
citations (a hadith's `sunnahId` must agree with its `reference`), resolvable
`relatedSlugs`, unique slugs, Arabic-only Arabic, and the absence of
placeholder language such as "TODO" or "needs verification" anywhere in
reader-facing prose. It runs automatically before every build.

## Adding a dua

1. Add an entry to `duas` in `lib/duas.ts`.
2. Cite the surah and ayah, or the collection, hadith number, narrator and
   grading — with the scholar or collection the grading comes from.
3. Set `textStatus`, and write a `textNote` if the text is not verbatim.
4. Run `npm run check:duas`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # runs check:duas, then next build
npm run lint
```

Built with Next.js (App Router) and Tailwind CSS. Arabic is set in Amiri.
