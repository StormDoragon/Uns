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
    title: "Dua of Yunus – The Light in the Depths",
    arabic:
      "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration:
      "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation:
      "There is no deity except You. Exalted are You. Indeed, I have been of the wrongdoers.",
    theme: "Distress & Repentance",
    category: "Distress & Repentance",
    source: "Qur'an 21:87 · Tirmidhi (Hasan)",
    authenticity: "Qur'anic — confirmed in Hadith (Tirmidhi, classed Hasan)",
    story:
      "In the crushing darkness of the whale's belly, surrounded by darkness upon darkness, Prophet Yunus (عليه السلام) realized the weight of his mistake. He had left his people in frustration, yet in that most hopeless place, he turned to Allah with pure repentance. No long complaints. No excuses. Only recognition of Allah's oneness and his own fault. In that instant, the supplication pierced through the ocean, and Allah commanded the whale to release him onto the shore. A single heartfelt dua rescued him from the abyss.",
    reflection:
      "This dua teaches us that no darkness is too deep for Allah's mercy. Even when we have wronged ourselves, even when we feel trapped by our own choices, the path back is always open. It is the dua of tawbah in its purest form: affirming Allah's perfection while humbly admitting our imperfection. The heart that says this with sincerity finds its own whale open and light breaking through.",
    recitationGuidance:
      "Recite with full presence during moments of overwhelming distress, anxiety, or when you feel you have let yourself and Allah down. Especially powerful in the last third of the night or when alone. Say it slowly, feeling every word. The Prophet ﷺ said: \"No Muslim invokes it for anything except that Allah will answer him.\" Allah responds to the call of the distressed.",
    relatedSlugs: ["dua-of-ayyub", "astaghfirullah"],
  },
  {
    slug: "dua-of-ayyub",
    title: "Dua of Ayyub – Patience in Suffering",
    arabic:
      "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
    transliteration:
      "Rabbi inni massaniyad-durru wa anta arhamur-rahimin",
    translation:
      "My Lord, indeed adversity has touched me, and You are the Most Merciful of the merciful.",
    theme: "Illness & Prolonged Hardship",
    category: "Illness & Prolonged Hardship",
    source: "Qur'an 21:83",
    authenticity: "Qur'anic",
    story:
      "Prophet Ayyub (عليه السلام) was tested with the loss of wealth, children, and health. His body was afflicted with severe illness for years. Friends and family turned away. Yet through it all, he remained patient and grateful. In his deepest pain, he raised his hands and spoke these words — not with despair, but with beautiful adab toward his Lord. He did not demand relief. He simply named his pain and reminded himself of who Allah is: the Most Merciful of the merciful. And Allah answered, restoring him and increasing him in every way.",
    reflection:
      "This dua teaches the deepest form of sabr: turning to Allah in raw vulnerability while still acknowledging His mercy. It models a heart that does not become bitter in hardship, but remains anchored in the certainty that Allah's mercy is greater than any affliction. When illness or grief strips everything away, this is what the servant says — not a complaint, but a confession of need wrapped in trust.",
    recitationGuidance:
      "Recite during prolonged illness, grief, exhaustion, or when you feel abandoned by the world. Let your voice carry the weight of honesty before Allah. Do not rush it. The adab of Ayyub was not resignation — it was dignified, trusting surrender. Return to it as often as your heart needs.",
    relatedSlugs: ["dua-of-yunus", "hasbunallahu-wa-nimal-wakeel"],
  },
  {
    slug: "hasbunallahu-wa-nimal-wakeel",
    title: "Hasbunallahu wa Ni\u2019mal Wakeel – The Ultimate Reliance",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni'mal wakeel",
    translation:
      "Allah is sufficient for us, and He is the best Disposer of affairs.",
    theme: "Tawakkul & Protection",
    category: "Tawakkul & Protection",
    source: "Qur'an 3:173 · Sahih al-Bukhari",
    authenticity: "Qur'anic — confirmed in Sahih al-Bukhari",
    story:
      "These words were spoken in one of the most terrifying moments recorded in Islamic history. After the Battle of Uhud, the believers were battered and bleeding. People came to them warning: a massive army has gathered against you, fear them. Rather than retreat or despair, the companions replied with these words and moved forward with trust in Allah alone. Their faith turned what should have been their destruction into a statement of divine reliance that echoes through every generation. It is also the dua of Ibrahim (عليه السلام) as he was thrown into Nimrod's fire — and from that fire, Allah made coolness and safety.",
    reflection:
      "Hasbunallah is not passivity. It is the most active statement a believer can make: I have done what I can, and now I place the outcome entirely in the hands of the One who controls all outcomes. It dissolves the tyranny of fear. When you feel overwhelmed by people, circumstances, or the unknown — this phrase restores the heart to its rightful orientation. Allah is not just \u2018enough\u2019 in a minimal sense. He is fully, completely, abundantly sufficient.",
    recitationGuidance:
      "Repeat in moments of fear, when facing powerful people or impossible situations, before major decisions, and whenever anxiety tightens the chest. The Prophet ﷺ recited it in moments of great difficulty. Say it with conviction, not just words. Let it shift your inner state from worry to wukūl — full delegation to Allah.",
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
