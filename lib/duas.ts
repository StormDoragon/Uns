/**
 * The dua dataset — the single source of truth for everything Uns publishes.
 *
 * Authenticity rules enforced by the types below:
 *
 *  1. Every dua carries at least one source (`sources` is a non-empty tuple).
 *  2. `grading` is a closed union of recognised isnad gradings. There is no
 *     way to express "unverified" — an entry whose grading is not known does
 *     not ship. (This file previously carried strings such as
 *     "Needs verification — check full chain" in production.)
 *  3. `textStatus` states how the Arabic on the page relates to the wording
 *     in the cited source, so an adapted or excerpted text is never presented
 *     as if it were the full quoted original.
 *
 * Every reference below was checked against the collection it names.
 */

/** How the Arabic shown on the page relates to the wording of the cited source. */
export type TextStatus =
  /** Exactly the wording of the cited source. */
  | "verbatim"
  /** A contiguous, unaltered portion of a longer passage. */
  | "excerpt"
  /** Narrated wording recast into the first person for the supplicant to say. */
  | "recitation-form";

export type QuranSource = {
  kind: "quran";
  surah: number;
  surahName: string;
  ayah: number;
};

/**
 * Recognised isnad gradings. Deliberately closed — see rule 2 above.
 */
export type HadithGrading = "Sahih" | "Hasan";

export type HadithSource = {
  kind: "hadith";
  /** Display name of the collection, e.g. "Sahih al-Bukhari". */
  collection: string;
  /** Hadith number within that collection. */
  reference: string;
  /** sunnah.com identifier used to build a verification link, e.g. "bukhari:6409". */
  sunnahId: string;
  /** The companion the report is narrated from. */
  narrator: string;
  grading: HadithGrading;
  /** Who assigned the grading, so the reader can weigh it. */
  gradingAuthority: string;
};

export type Source = QuranSource | HadithSource;

export type Category =
  | "Distress & Repentance"
  | "Illness & Hardship"
  | "Tawakkul & Trust"
  | "Provision"
  | "Protection"
  | "Forgiveness"
  | "Remembrance"
  | "Comprehensive";

export type Dua = {
  slug: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  category: Category;
  textStatus: TextStatus;
  /** Required whenever the text is not verbatim, so the caveat always reaches the reader. */
  textNote?: string;
  /** At least one source — enforced by the tuple type. */
  sources: [Source, ...Source[]];
  story: string;
  reflection: string;
  recitationGuidance: string;
  relatedSlugs: string[];
};

export const duas: Dua[] = [
  {
    slug: "dua-of-yunus",
    title: "Dua of Yunus — The Light in the Depths",
    arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta, subhanaka inni kuntu minaz-zalimin.",
    translation:
      "There is no deity except You; exalted are You. Indeed, I have been among the wrongdoers.",
    category: "Distress & Repentance",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Al-Anbiya 21:87. The full ayah frames these words as the call Yunus made from inside the darkness — “fa-nada fiz-zulumati an la ilaha illa anta…” — so what is shown here is the supplication itself, not the whole verse.",
    sources: [
      {
        kind: "quran",
        surah: 21,
        surahName: "Al-Anbiya",
        ayah: 87,
      },
      {
        kind: "hadith",
        collection: "Jami‘ at-Tirmidhi",
        reference: "3505",
        sunnahId: "tirmidhi:3505",
        narrator: "Sa‘d ibn Abi Waqqas",
        grading: "Sahih",
        gradingAuthority:
          "Graded sahih by al-Albani; at-Tirmidhi himself recorded it as gharib",
      },
    ],
    story:
      "In the crushing darkness of the whale’s belly, surrounded by darkness upon darkness, Prophet Yunus (عليه السلام) realized the weight of his mistake. He had left his people in frustration, yet in that most hopeless place, he turned to Allah with pure repentance. No long complaints. No excuses. Only recognition of Allah’s oneness and his own fault. In that instant, the supplication pierced through the ocean, and Allah commanded the whale to release him onto the shore. A single heartfelt dua rescued him from the abyss.",
    reflection:
      "This dua teaches us that no darkness is too deep for Allah’s mercy. Even when we have wronged ourselves, even when we feel trapped by our own choices, the path back is always open. It is the dua of tawbah in its purest form: affirming Allah’s perfection while humbly admitting our imperfection. The heart that says this with sincerity finds its own whale open and light breaking through.",
    recitationGuidance:
      "Recite with full presence during moments of overwhelming distress, anxiety, or when you feel you have let yourself and Allah down. Especially powerful in the last third of the night or when alone. Say it slowly, feeling every word. Of this supplication the Prophet ﷺ said: “No Muslim ever supplicates with it for anything except that Allah answers him” (Jami‘ at-Tirmidhi 3505).",
    relatedSlugs: ["dua-of-ayyub", "astaghfirullah"],
  },
  {
    slug: "dua-of-ayyub",
    title: "Dua of Ayyub — Patience in Suffering",
    arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration: "Anni massaniyad-durru wa anta arhamur-rahimin.",
    translation:
      "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
    category: "Illness & Hardship",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Al-Anbiya 21:83, which reads “wa Ayyuba idh nada rabbahu anni massaniyad-durru wa anta arhamur-rahimin” — the call is reported with “anni”. The widely circulated wording “Rabbi inni massaniyad-durr” adds a vocative that is not in the ayah. It is a valid way to supplicate, but it is not the Qur’anic text and is not quoted as such here.",
    sources: [
      {
        kind: "quran",
        surah: 21,
        surahName: "Al-Anbiya",
        ayah: 83,
      },
    ],
    story:
      "Prophet Ayyub (عليه السلام) was tested with the loss of wealth, children, and health. His body was afflicted with severe illness for years. Friends and family turned away. Yet through it all, he remained patient and grateful. In his deepest pain, he called upon his Lord with these words — not with despair, but with beautiful adab. He did not demand relief. He simply named his pain and reminded himself of who Allah is: the Most Merciful of the merciful. And Allah answered, restoring him and increasing him in every way.",
    reflection:
      "This dua teaches the deepest form of sabr: turning to Allah in raw vulnerability while still acknowledging His mercy. It models a heart that does not become bitter in hardship, but remains anchored in the certainty that Allah’s mercy is greater than any affliction. When illness or grief strips everything away, this is what the servant says — not a complaint, but a confession of need wrapped in trust.",
    recitationGuidance:
      "Recite during prolonged illness, grief, exhaustion, or when you feel abandoned by the world. Let your voice carry the weight of honesty before Allah. Do not rush it. The adab of Ayyub was not resignation — it was dignified, trusting surrender. Return to it as often as your heart needs.",
    relatedSlugs: ["dua-of-yunus", "hasbunallahu-wa-nimal-wakeel"],
  },
  {
    slug: "hasbunallahu-wa-nimal-wakeel",
    title: "Hasbunallahu wa Ni‘mal Wakeel — The Ultimate Reliance",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni‘mal-wakeel.",
    translation:
      "Allah is sufficient for us, and He is the best Disposer of affairs.",
    category: "Tawakkul & Trust",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Aal ‘Imran 3:173, which reports these words as the believers’ answer when they were warned that an army had gathered against them.",
    sources: [
      {
        kind: "quran",
        surah: 3,
        surahName: "Aal ‘Imran",
        ayah: 173,
      },
      {
        kind: "hadith",
        collection: "Sahih al-Bukhari",
        reference: "4563",
        sunnahId: "bukhari:4563",
        narrator: "Ibn ‘Abbas",
        grading: "Sahih",
        gradingAuthority: "Recorded by al-Bukhari in his Sahih",
      },
    ],
    story:
      "These words were spoken in one of the most frightening moments recorded in the Prophet’s life. After the Battle of Uhud, the believers were battered and bleeding. People came warning them: a massive army has gathered against you, so fear them. Rather than retreat or despair, they replied with these words and moved forward trusting Allah alone. Ibn ‘Abbas reports that this was also the word of Ibrahim (عليه السلام) when he was thrown into the fire — and from that fire, Allah made coolness and safety.",
    reflection:
      "Hasbunallah is not passivity. It is the most active statement a believer can make: I have done what I can, and now I place the outcome entirely in the hands of the One who controls all outcomes. It dissolves the tyranny of fear. When you feel overwhelmed by people, circumstances, or the unknown — this phrase restores the heart to its rightful orientation. Allah is not just ‘enough’ in a minimal sense. He is fully, completely, abundantly sufficient.",
    recitationGuidance:
      "Repeat in moments of fear, when facing powerful people or impossible situations, before major decisions, and whenever anxiety tightens the chest. Say it with conviction, not just words. Let it shift your inner state from worry to tawkil — entrusting the matter fully to Allah.",
    relatedSlugs: [
      "wa-ufawwidu-amri-ilallah",
      "la-hawla-wa-la-quwwata-illa-billah",
    ],
  },
  {
    slug: "wa-ufawwidu-amri-ilallah",
    title: "Wa Ufawwidu Amri Ilallah",
    arabic: "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ",
    transliteration: "Wa ufawwidu amri ilallah.",
    translation: "And I entrust my affair to Allah.",
    category: "Tawakkul & Trust",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Ghafir 40:44. The full ayah reads “…and I entrust my affair to Allah. Indeed, Allah is Seeing of His servants.”",
    sources: [
      {
        kind: "quran",
        surah: 40,
        surahName: "Ghafir",
        ayah: 44,
      },
    ],
    story:
      "These words are spoken by a believing man in the court of Pharaoh who concealed his faith and stood to defend Musa (عليه السلام). Knowing the danger around him, he entrusted himself entirely to Allah. The surah goes on to say that Allah protected him from the evil they plotted.",
    reflection:
      "Entrusting your affair to Allah means releasing obsession over outcomes while staying sincere in effort. It is the peace of knowing the result is in better hands than yours.",
    recitationGuidance:
      "Use after making sincere effort and prayer, especially before difficult conversations or uncertain outcomes. Say it and then genuinely let go.",
    relatedSlugs: ["hasbunallahu-wa-nimal-wakeel", "dua-of-yunus"],
  },
  {
    slug: "rabbi-inni-lima-anzalta",
    title: "Rabbi Inni Lima Anzalta",
    arabic: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir.",
    translation:
      "My Lord, indeed I am, for whatever good You would send down to me, in need.",
    category: "Provision",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Al-Qasas 28:24 — the words Musa said after watering the flocks and withdrawing to the shade.",
    sources: [
      {
        kind: "quran",
        surah: 28,
        surahName: "Al-Qasas",
        ayah: 24,
      },
    ],
    story:
      "Prophet Musa (عليه السلام) made this dua while sitting alone in the shade, exhausted and in need, having just fled Egypt. He was a fugitive with nothing. In that complete vulnerability he turned to Allah — and the answer arrived in ways he could not have imagined: shelter, work, and a family.",
    reflection:
      "Admitting need before Allah is not weakness — it is the highest form of worship. This dua strips away all pretense and places the servant in the most honest position before their Lord.",
    recitationGuidance:
      "Recite when seeking lawful provision, work, marriage, or guidance in life transitions. Say it when you feel empty-handed and let that emptiness be your sincerity.",
    relatedSlugs: [
      "rabbana-atina-fid-dunya-hasanah",
      "wa-ufawwidu-amri-ilallah",
    ],
  },
  {
    slug: "rabbana-atina-fid-dunya-hasanah",
    title: "Rabbana Atina Fid-Dunya Hasanah",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanah, wa fil-akhirati hasanah, wa qina ‘adhaban-nar.",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    category: "Comprehensive",
    textStatus: "excerpt",
    textNote:
      "An unaltered excerpt of Surah Al-Baqarah 2:201. The ayah introduces it with “and among them is he who says…”, contrasting it with those who ask only for this world.",
    sources: [
      {
        kind: "quran",
        surah: 2,
        surahName: "Al-Baqarah",
        ayah: 201,
      },
      {
        kind: "hadith",
        collection: "Sahih al-Bukhari",
        reference: "6389",
        sunnahId: "bukhari:6389",
        narrator: "Anas ibn Malik",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6389 and Muslim 2690",
      },
      {
        kind: "hadith",
        collection: "Sahih Muslim",
        reference: "2690",
        sunnahId: "muslim:2690",
        narrator: "Anas ibn Malik",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6389 and Muslim 2690",
      },
    ],
    story:
      "The Qur’an presents this as the supplication of those who seek both worlds, set against those who ask for this life alone. Anas ibn Malik — who served the Prophet ﷺ for ten years — reported that this was the supplication the Prophet ﷺ made most often of all.",
    reflection:
      "Islam teaches balance: ask for goodness in life without losing sight of the Hereafter. This single dua contains an entire worldview — present and eternal, grateful and hopeful.",
    recitationGuidance:
      "Recite daily after salah and in personal dua, especially when making broad life requests. Let it remind you that your dua can hold both the immediate and the eternal.",
    relatedSlugs: [
      "rabbi-inni-lima-anzalta",
      "allahumma-inni-asaluka-al-afwa-wal-afiyah",
    ],
  },
  {
    slug: "allahumma-inni-asaluka-al-afwa-wal-afiyah",
    title: "Asking for Pardon and Wellbeing",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    transliteration:
      "Allahumma inni as’alukal-‘afwa wal-‘afiyata fid-dunya wal-akhirah.",
    translation:
      "O Allah, I ask You for pardon and wellbeing in this world and in the Hereafter.",
    category: "Protection",
    textStatus: "excerpt",
    textNote:
      "The opening portion of a longer supplication. The narration continues: “…O Allah, I ask You for pardon and wellbeing in my religion, my worldly life, my family and my wealth. O Allah, conceal my faults and calm my fears. O Allah, guard me from before me and behind me, from my right and my left and from above me, and I seek refuge in Your greatness from being taken unaware from beneath me.”",
    sources: [
      {
        kind: "hadith",
        collection: "Sunan Ibn Majah",
        reference: "3871",
        sunnahId: "ibnmajah:3871",
        narrator: "‘Abdullah ibn ‘Umar",
        grading: "Sahih",
        gradingAuthority: "Graded sahih by al-Albani",
      },
      {
        kind: "hadith",
        collection: "Sunan Abi Dawud",
        reference: "5074",
        sunnahId: "abudawud:5074",
        narrator: "‘Abdullah ibn ‘Umar",
        grading: "Sahih",
        gradingAuthority: "Isnad graded sahih by Shu‘ayb al-Arna’ut",
      },
    ],
    story:
      "Ibn ‘Umar reported that the Messenger of Allah ﷺ never abandoned these words, morning and evening. It is a supplication for the whole of a life: pardon for what is past, and ‘afiyah — soundness and safety — for what is still to come.",
    reflection:
      "A short dua can hold a complete life vision: forgiveness, health, safety, and inner peace. Allah’s ‘afiyah is all-encompassing — protection in religion, body, family, and wealth.",
    recitationGuidance:
      "Recite in the morning and evening adhkar routine. It is among the most comprehensive short supplications a believer can make daily.",
    relatedSlugs: [
      "allahumma-inni-audhu-bika-min-jahdil-bala",
      "rabbana-atina-fid-dunya-hasanah",
    ],
  },
  {
    slug: "la-hawla-wa-la-quwwata-illa-billah",
    title: "La Hawla wa La Quwwata illa Billah",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "La hawla wa la quwwata illa billah.",
    translation: "There is no power and no might except through Allah.",
    category: "Remembrance",
    textStatus: "verbatim",
    sources: [
      {
        kind: "hadith",
        collection: "Sahih al-Bukhari",
        reference: "6409",
        sunnahId: "bukhari:6409",
        narrator: "Abu Musa al-Ash‘ari",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6409 and Muslim 2704",
      },
      {
        kind: "hadith",
        collection: "Sahih Muslim",
        reference: "2704",
        sunnahId: "muslim:2704",
        narrator: "Abu Musa al-Ash‘ari",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6409 and Muslim 2704",
      },
    ],
    story:
      "On a journey, Abu Musa al-Ash‘ari was raising his voice in takbir when the Prophet ﷺ told the companions, “You are not calling upon one who is deaf or absent.” Then he turned to Abu Musa and said, “Shall I not guide you to a treasure from the treasures of Paradise?” — and taught him these words.",
    reflection:
      "It softens the ego by reminding us that ability itself is a gift from Allah. When we feel strong, it grounds us. When we feel weak, it lifts us.",
    recitationGuidance:
      "Use frequently throughout the day, especially when feeling overwhelmed, anxious, or powerless. It transforms helplessness into humility before Allah.",
    relatedSlugs: [
      "hasbunallahu-wa-nimal-wakeel",
      "wa-ufawwidu-amri-ilallah",
    ],
  },
  {
    slug: "astaghfirullah",
    title: "Astaghfirullaha wa Atubu Ilayh",
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullaha wa atubu ilayh.",
    translation:
      "I seek the forgiveness of Allah, and I turn to Him in repentance.",
    category: "Forgiveness",
    textStatus: "excerpt",
    textNote:
      "The formula as it is recited. Al-Bukhari 6307 reports it inside the Prophet’s own statement — “By Allah, I do seek Allah’s forgiveness and turn to Him in repentance more than seventy times a day” — so the words here are his, lifted out of the sentence that reports them.",
    sources: [
      {
        kind: "hadith",
        collection: "Sahih al-Bukhari",
        reference: "6307",
        sunnahId: "bukhari:6307",
        narrator: "Abu Hurayrah",
        grading: "Sahih",
        gradingAuthority: "Recorded by al-Bukhari in his Sahih",
      },
      {
        kind: "hadith",
        collection: "Sahih Muslim",
        reference: "2702",
        sunnahId: "muslim:2702",
        narrator: "Al-Agharr al-Muzani",
        grading: "Sahih",
        gradingAuthority: "Recorded by Muslim in his Sahih",
      },
    ],
    story:
      "Abu Hurayrah heard the Prophet ﷺ say that he sought Allah’s forgiveness and turned to Him in repentance more than seventy times a day. Muslim records him telling the people, “O people, repent to Allah, for I repent to Him a hundred times a day.” This was not because of great sin, but a constant returning of the heart to Allah. Istighfar is not only for guilt; it is a form of remembrance, a breath for the soul.",
    reflection:
      "Istighfar cleans the heart and reorients the soul. It is the rain that washes the dust of heedlessness from the spiritual heart, restoring clarity, gratitude, and closeness to Allah.",
    recitationGuidance:
      "Recite abundantly after mistakes, after salah, in the morning, and throughout the day. Do not make it mechanical — let at least some repetitions carry the full weight of your intention.",
    relatedSlugs: [
      "dua-of-yunus",
      "allahumma-inni-asaluka-al-afwa-wal-afiyah",
    ],
  },
  {
    slug: "allahumma-inni-audhu-bika-min-jahdil-bala",
    title: "Seeking Refuge from Severe Trials",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ",
    transliteration:
      "Allahumma inni a‘udhu bika min jahdil-bala’, wa darakish-shaqa’, wa su’il-qada’, wa shamatatil-a‘da’.",
    translation:
      "O Allah, I seek refuge in You from the severity of affliction, from being overtaken by wretchedness, from an evil outcome decreed, and from the gloating of enemies.",
    category: "Protection",
    textStatus: "recitation-form",
    textNote:
      "The four things sought refuge from are verbatim, but the first-person opening is not. The narrations give it as a command — “Ta‘awwadhu billahi min jahdil-bala’…” (al-Bukhari 6616) — and as a description of the Prophet’s practice — “kana yata‘awwadhu min…” (al-Bukhari 6347, Muslim 2707). “Allahumma inni a‘udhu bika” is the standard way the worshipper voices that command, not a narrated wording.",
    sources: [
      {
        kind: "hadith",
        collection: "Sahih al-Bukhari",
        reference: "6616",
        sunnahId: "bukhari:6616",
        narrator: "Abu Hurayrah",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6616 and Muslim 2707",
      },
      {
        kind: "hadith",
        collection: "Sahih Muslim",
        reference: "2707",
        sunnahId: "muslim:2707",
        narrator: "Abu Hurayrah",
        grading: "Sahih",
        gradingAuthority: "Agreed upon — al-Bukhari 6616 and Muslim 2707",
      },
    ],
    story:
      "This dua asks Allah for protection from the most overwhelming forms of hardship — not just difficulty, but the kind that tests faith itself. The companions understood that some trials, if not for Allah’s protection, could shake even firm hearts.",
    reflection:
      "Seeking refuge is itself strength: it aligns fear with faith rather than despair. The believer who makes this dua regularly is not afraid of hardship — they are simply wise enough to ask Allah not to be tested beyond their capacity.",
    recitationGuidance:
      "Recite in morning and evening adhkar, and in times of public or personal instability. It is a shield dua — say it before hardship reaches you, not only within it.",
    relatedSlugs: [
      "allahumma-inni-asaluka-al-afwa-wal-afiyah",
      "hasbunallahu-wa-nimal-wakeel",
    ],
  },
];

export function getDuaBySlug(slug: string): Dua | undefined {
  return duas.find((dua) => dua.slug === slug);
}

export function getDuasBySlugs(slugs: string[]): Dua[] {
  return slugs
    .map((slug) => getDuaBySlug(slug))
    .filter((dua): dua is Dua => Boolean(dua));
}

/** Human-readable label for a source, e.g. "Surah Al-Anbiya 21:87". */
export function sourceLabel(source: Source): string {
  return source.kind === "quran"
    ? `Surah ${source.surahName} ${source.surah}:${source.ayah}`
    : `${source.collection} ${source.reference}`;
}

/** A link the reader can follow to check the citation themselves. */
export function sourceUrl(source: Source): string {
  return source.kind === "quran"
    ? `https://quran.com/${source.surah}:${source.ayah}`
    : `https://sunnah.com/${source.sunnahId}`;
}

/** Categories actually present in the dataset, in dataset order. */
export function allCategories(): Category[] {
  return [...new Set(duas.map((dua) => dua.category))];
}

/** Slugs featured on the home page. Exported so the dataset check can validate them. */
export const FEATURED_SLUGS = [
  "dua-of-yunus",
  "dua-of-ayyub",
  "hasbunallahu-wa-nimal-wakeel",
];
