/**
 * Dataset integrity check for lib/duas.ts, run before every build.
 *
 * The types in lib/duas.ts already make an unverified grading unrepresentable.
 * This script covers what types cannot: that citations are well-formed, that
 * cross-references resolve, and that no placeholder or "to-do" language has
 * been left in reader-facing prose.
 *
 * Run with: npm run check:duas
 */
import {
  duas,
  FEATURED_SLUGS,
  getDuaBySlug,
  sourceLabel,
  type Dua,
} from "../lib/duas.ts";

const problems: string[] = [];

function fail(where: string, message: string): void {
  problems.push(`${where}: ${message}`);
}

/**
 * Language that means "we have not actually checked this yet". Shipping any of
 * it on a page that claims to present authentic sources is the bug this whole
 * check exists to prevent.
 */
const PLACEHOLDER_PATTERNS: RegExp[] = [
  /needs?\s+verification/i,
  /\bverify\s+(?:the\s+)?(?:exact|full|specific)\b/i,
  /check\s+(?:the\s+)?(?:full\s+chain|specific\s+wording)/i,
  /\bunverified\b/i,
  /\bTODO\b/,
  /\bFIXME\b/,
  /\bTBD\b/i,
  /\blorem ipsum\b/i,
  /\bcoming soon\b/i,
  /\bplaceholder\b/i,
];

/** Arabic block, Arabic Supplement, Arabic Extended-A, and Arabic Presentation Forms. */
const ARABIC = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/;
/** Latin letters have no business inside the Arabic field. */
const LATIN = /[A-Za-z]/;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Every reader-facing string on a dua, for the placeholder sweep. */
function prose(dua: Dua): Array<[string, string]> {
  const entries: Array<[string, string]> = [
    ["title", dua.title],
    ["transliteration", dua.transliteration],
    ["translation", dua.translation],
    ["story", dua.story],
    ["reflection", dua.reflection],
    ["recitationGuidance", dua.recitationGuidance],
  ];
  if (dua.textNote) entries.push(["textNote", dua.textNote]);
  for (const source of dua.sources) {
    if (source.kind === "hadith") {
      entries.push(
        ["source.collection", source.collection],
        ["source.narrator", source.narrator],
        ["source.gradingAuthority", source.gradingAuthority],
      );
    } else {
      entries.push(["source.surahName", source.surahName]);
    }
  }
  return entries;
}

const seenSlugs = new Set<string>();

for (const dua of duas) {
  const where = dua.slug || "(dua with no slug)";

  // --- identity -----------------------------------------------------------
  if (!SLUG.test(dua.slug)) {
    fail(where, `slug is not lowercase-hyphenated: "${dua.slug}"`);
  }
  if (seenSlugs.has(dua.slug)) {
    fail(where, "duplicate slug");
  }
  seenSlugs.add(dua.slug);

  // --- text ---------------------------------------------------------------
  if (!ARABIC.test(dua.arabic)) {
    fail(where, "arabic contains no Arabic-script characters");
  }
  if (LATIN.test(dua.arabic)) {
    fail(where, "arabic contains Latin letters");
  }
  for (const [field, value] of prose(dua)) {
    if (!value.trim()) fail(where, `${field} is empty`);
    for (const pattern of PLACEHOLDER_PATTERNS) {
      if (pattern.test(value)) {
        fail(where, `${field} contains placeholder language (${pattern})`);
      }
    }
  }

  // A non-verbatim text must always explain itself to the reader.
  if (dua.textStatus !== "verbatim" && !dua.textNote?.trim()) {
    fail(where, `textStatus is "${dua.textStatus}" but textNote is missing`);
  }

  // --- sources ------------------------------------------------------------
  if (dua.sources.length === 0) {
    fail(where, "has no sources");
  }
  const seenSources = new Set<string>();
  for (const source of dua.sources) {
    const label = sourceLabel(source);
    if (seenSources.has(label)) fail(where, `duplicate source "${label}"`);
    seenSources.add(label);

    if (source.kind === "quran") {
      if (!Number.isInteger(source.surah) || source.surah < 1 || source.surah > 114) {
        fail(where, `surah out of range: ${source.surah}`);
      }
      if (!Number.isInteger(source.ayah) || source.ayah < 1) {
        fail(where, `ayah out of range: ${source.ayah}`);
      }
      if (!source.surahName.trim()) fail(where, "surahName is empty");
    } else {
      if (!/^\d+$/.test(source.reference)) {
        fail(where, `hadith reference is not a number: "${source.reference}"`);
      }
      const match = /^([a-z]+):(\d+)$/.exec(source.sunnahId);
      if (!match) {
        fail(where, `sunnahId is malformed: "${source.sunnahId}"`);
      } else if (match[2] !== source.reference) {
        fail(
          where,
          `sunnahId "${source.sunnahId}" disagrees with reference "${source.reference}"`,
        );
      }
    }
  }

  // --- cross-references ---------------------------------------------------
  for (const related of dua.relatedSlugs) {
    if (related === dua.slug) {
      fail(where, "relatedSlugs points at itself");
    } else if (!getDuaBySlug(related)) {
      fail(where, `relatedSlugs points at unknown slug "${related}"`);
    }
  }
}

for (const slug of FEATURED_SLUGS) {
  if (!getDuaBySlug(slug)) {
    fail("FEATURED_SLUGS", `points at unknown slug "${slug}"`);
  }
}

if (problems.length > 0) {
  console.error(`\n✗ Dua dataset check failed (${problems.length} problem(s)):\n`);
  for (const problem of problems) console.error(`  • ${problem}`);
  console.error("");
  process.exit(1);
}

const sourceCount = duas.reduce((total, dua) => total + dua.sources.length, 0);
console.log(
  `✓ Dua dataset check passed — ${duas.length} duas, ${sourceCount} sources, all verified.`,
);
