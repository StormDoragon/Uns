export type Dua = {
  slug: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  theme: string;
  category: string;
  source: string;
  authenticity: string;
  story: string;
  reflection: string;
  recitationGuidance: string;
  relatedSlugs: string[];
};

export const duas: Dua[] = [
  {
    slug: "dua-of-yunus",
    title: "The Dua of Yunus",
    arabic:
      "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "La ilaha illa anta, subhanaka, inni kuntu minaz-zalimin.",
    translation:
      "There is no deity except You. Glory be to You. Indeed, I was among the wrongdoers.",
    theme: "Hardship & Repentance",
    category: "Hardship",
    source: "Qur'an 21:87",
    authenticity: "Qur'anic",
    story:
      "Prophet Yunus (peace be upon him) made this supplication in deep distress, turning fully to Allah with humility and confession.",
    reflection:
      "Relief often begins with honesty before Allah: recognizing His perfection and our own need for mercy.",
    recitationGuidance:
      "Recite slowly in moments of anxiety, especially when you feel trapped by circumstances. Repeat with presence and repentance.",
    relatedSlugs: ["dua-of-ayyub", "astaghfirullah"],
  },
  {
    slug: "dua-of-ayyub",
    title: "The Dua of Ayyub",
    arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration: "Anni massaniya ad-durru wa anta arhamur-rahimin.",
    translation:
      "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.",
    theme: "Patience in Illness",
    category: "Hardship",
    source: "Qur'an 21:83",
    authenticity: "Qur'anic",
    story:
      "Prophet Ayyub (peace be upon him) endured prolonged trial with patience, calling only upon Allah's mercy.",
    reflection:
      "This dua teaches dignified vulnerability: naming pain while trusting divine mercy.",
    recitationGuidance:
      "Recite in times of sickness, grief, or exhaustion. Keep your heart focused on mercy, not only the difficulty.",
    relatedSlugs: ["dua-of-yunus", "hasbunallahu-wa-nimal-wakeel"],
  },
  {
    slug: "hasbunallahu-wa-nimal-wakeel",
    title: "Hasbunallahu wa Ni'mal Wakeel",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni'mal wakeel.",
    translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
    theme: "Trust Under Pressure",
    category: "Protection",
    source: "Qur'an 3:173",
    authenticity: "Qur'anic",
    story:
      "Believers said these words when threatened, placing their affairs in Allah's care instead of fear.",
    reflection:
      "Tawakkul is not passivity; it is confident reliance while doing what is right.",
    recitationGuidance:
      "Repeat when facing uncertainty, decisions, or fear of people. Recite with deliberate trust.",
    relatedSlugs: ["wa-ufawwidu-amri-ilallah", "la-hawla-wa-la-quwwata-illa-billah"],
  },
  {
    slug: "wa-ufawwidu-amri-ilallah",
    title: "Wa Ufawwidu Amri Ilallah",
    arabic: "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ",
    transliteration: "Wa ufawwidu amri ilallah.",
    translation: "And I entrust my affair to Allah.",
    theme: "Surrender and Reliance",
    category: "Trust",
    source: "Qur'an 40:44",
    authenticity: "Qur'anic",
    story:
      "These words are linked to a believer in the court of Pharaoh who entrusted himself to Allah amidst danger.",
    reflection:
      "Entrusting your affair to Allah means releasing obsession over outcomes while staying sincere in effort.",
    recitationGuidance:
      "Use after making sincere effort and prayer, especially before difficult conversations or uncertain outcomes.",
    relatedSlugs: ["hasbunallahu-wa-nimal-wakeel", "dua-of-yunus"],
  },
  {
    slug: "rabbi-inni-lima-anzalta",
    title: "Rabbi Inni Lima Anzalta",
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir.",
    translation:
      "My Lord, truly I am in need of whatever good You send down to me.",
    theme: "Need and Provision",
    category: "Provision",
    source: "Qur'an 28:24",
    authenticity: "Qur'anic",
    story:
      "Prophet Musa (peace be upon him) made this dua while alone and in need, and Allah opened doors of relief.",
    reflection:
      "Admitting need before Allah is a form of worship and a doorway to barakah.",
    recitationGuidance:
      "Recite when seeking lawful provision, work, marriage, or guidance in life transitions.",
    relatedSlugs: ["rabbana-atina-fid-dunya-hasanah", "wa-ufawwidu-amri-ilallah"],
  },
  {
    slug: "rabbana-atina-fid-dunya-hasanah",
    title: "Rabbana Atina Fid-Dunya Hasanah",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adhaban-nar.",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    theme: "Balanced Wellbeing",
    category: "Comprehensive",
    source: "Qur'an 2:201",
    authenticity: "Qur'anic",
    story:
      "This comprehensive supplication appears in the Qur'an as a model dua covering both worldly and eternal wellbeing.",
    reflection:
      "Islam teaches balance: ask for goodness in life without losing sight of the Hereafter.",
    recitationGuidance:
      "Recite daily after salah and in personal dua, especially when making broad life requests.",
    relatedSlugs: ["rabbi-inni-lima-anzalta", "allahumma-inni-asaluka-al-afwa-wal-afiyah"],
  },
  {
    slug: "allahumma-inni-asaluka-al-afwa-wal-afiyah",
    title: "Asking for Pardon and Wellbeing",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
    transliteration: "Allahumma inni asalukal-'afwa wal-'afiyah.",
    translation: "O Allah, I ask You for pardon and wellbeing.",
    theme: "Wellbeing and Safety",
    category: "Protection",
    source: "Hadith source needs verification",
    authenticity: "Needs verification",
    story:
      "This supplication is widely taught for daily protection and holistic wellbeing.",
    reflection:
      "A short dua can hold a complete life vision: forgiveness, health, safety, and inner peace.",
    recitationGuidance:
      "Recite in the morning and evening adhkar routine.",
    relatedSlugs: ["allahumma-inni-audhu-bika-min-jahdil-bala", "rabbana-atina-fid-dunya-hasanah"],
  },
  {
    slug: "la-hawla-wa-la-quwwata-illa-billah",
    title: "La Hawla wa La Quwwata illa Billah",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "La hawla wa la quwwata illa billah.",
    translation: "There is no power and no might except through Allah.",
    theme: "Strength Through Allah",
    category: "Dhikr",
    source: "Hadith source needs verification",
    authenticity: "Needs verification",
    story:
      "This phrase is from the treasures of Paradise and is recited to renew reliance on Allah.",
    reflection:
      "It softens the ego by reminding us that ability itself is a gift from Allah.",
    recitationGuidance:
      "Use frequently during the day, especially when feeling overwhelmed or unable.",
    relatedSlugs: ["hasbunallahu-wa-nimal-wakeel", "wa-ufawwidu-amri-ilallah"],
  },
  {
    slug: "astaghfirullah",
    title: "Astaghfirullah",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah.",
    translation: "I seek forgiveness from Allah.",
    theme: "Repentance and Renewal",
    category: "Forgiveness",
    source: "Hadith source needs verification",
    authenticity: "Needs verification",
    story:
      "The Prophet (peace and blessings be upon him) frequently sought forgiveness, teaching constancy in tawbah.",
    reflection:
      "Istighfar cleans the heart and reorients the soul toward sincerity and gratitude.",
    recitationGuidance:
      "Recite abundantly after mistakes, after salah, and throughout the day.",
    relatedSlugs: ["dua-of-yunus", "allahumma-inni-asaluka-al-afwa-wal-afiyah"],
  },
  {
    slug: "allahumma-inni-audhu-bika-min-jahdil-bala",
    title: "Seeking Refuge from Severe Trials",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ",
    transliteration:
      "Allahumma inni a'udhu bika min jahdil-bala, wa darkish-shaqa, wa su'il-qada, wa shamatatil-a'da.",
    translation:
      "O Allah, I seek refuge in You from severe trials, misery, evil decree, and the gloating of enemies.",
    theme: "Protection from Trials",
    category: "Protection",
    source: "Hadith source needs verification",
    authenticity: "Needs verification",
    story:
      "This dua asks Allah for protection from overwhelming forms of hardship that test faith and resilience.",
    reflection:
      "Seeking refuge is itself strength: it aligns fear with faith rather than despair.",
    recitationGuidance:
      "Recite in morning and evening remembrance, and in times of public or personal instability.",
    relatedSlugs: ["allahumma-inni-asaluka-al-afwa-wal-afiyah", "hasbunallahu-wa-nimal-wakeel"],
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
