export type Source = {
  type: string;
  ref: string;
  authenticity: string;
};

export type Dua = {
  slug: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  theme: string;
  category: string;
  sources: Source[];
  story: string;
  reflection: string;
  recitationGuidance: string;
  relatedSlugs: string[];
};

export const duas: Dua[] = [
  {
    slug: "dua-of-yunus",
    title: "Dua of Yunus \u2013 The Light in the Depths",
    arabic:
      "\u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0670\u0647\u064e \u0625\u0650\u0644\u064e\u0651\u0627 \u0623\u064e\u0646\u0652\u062a\u064e \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e\u0643\u064e \u0625\u0650\u0646\u0650\u0651\u064a \u0643\u064f\u0646\u0652\u062a\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0638\u064e\u0651\u0627\u0644\u0650\u0645\u0650\u064a\u0646\u064e",
    transliteration:
      "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation:
      "There is no deity except You. Exalted are You. Indeed, I have been of the wrongdoers.",
    theme: "Distress & Repentance",
    category: "Distress & Repentance",
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Al-Anbiya 21:87",
        authenticity: "Direct Revelation",
      },
      {
        type: "Hadith",
        ref: "Sunan at-Tirmidhi",
        authenticity: "Authentic (Hasan)",
      },
    ],
    story:
      "In the crushing darkness of the whale\u2019s belly, surrounded by darkness upon darkness, Prophet Yunus (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645) realized the weight of his mistake. He had left his people in frustration, yet in that most hopeless place, he turned to Allah with pure repentance. No long complaints. No excuses. Only recognition of Allah\u2019s oneness and his own fault. In that instant, the supplication pierced through the ocean, and Allah commanded the whale to release him onto the shore. A single heartfelt dua rescued him from the abyss.",
    reflection:
      "This dua teaches us that no darkness is too deep for Allah\u2019s mercy. Even when we have wronged ourselves, even when we feel trapped by our own choices, the path back is always open. It is the dua of tawbah in its purest form: affirming Allah\u2019s perfection while humbly admitting our imperfection. The heart that says this with sincerity finds its own whale open and light breaking through.",
    recitationGuidance:
      "Recite with full presence during moments of overwhelming distress, anxiety, or when you feel you have let yourself and Allah down. Especially powerful in the last third of the night or when alone. Say it slowly, feeling every word. The Prophet \ufdfa said: \u201cNo Muslim invokes it for anything except that Allah will answer him.\u201d Allah responds to the call of the distressed.",
    relatedSlugs: ["dua-of-ayyub", "astaghfirullah"],
  },
  {
    slug: "dua-of-ayyub",
    title: "Dua of Ayyub \u2013 Patience in Suffering",
    arabic:
      "\u0631\u064e\u0628\u0650\u0651 \u0625\u0650\u0646\u0650\u0651\u064a \u0645\u064e\u0633\u064e\u0651\u0646\u0650\u064a\u064e \u0627\u0644\u0636\u064f\u0651\u0631\u064f\u0651 \u0648\u064e\u0623\u064e\u0646\u0652\u062a\u064e \u0623\u064e\u0631\u0652\u062d\u064e\u0645\u064f \u0627\u0644\u0631\u064e\u0651\u0627\u062d\u0650\u0645\u0650\u064a\u0646\u064e",
    transliteration:
      "Rabbi inni massaniyad-durru wa anta arhamur-rahimin",
    translation:
      "My Lord, indeed adversity has touched me, and You are the Most Merciful of the merciful.",
    theme: "Illness & Prolonged Hardship",
    category: "Illness & Prolonged Hardship",
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Al-Anbiya 21:83",
        authenticity: "Direct Revelation",
      },
    ],
    story:
      "Prophet Ayyub (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645) was tested with the loss of wealth, children, and health. His body was afflicted with severe illness for years. Friends and family turned away. Yet through it all, he remained patient and grateful. In his deepest pain, he raised his hands and spoke these words \u2014 not with despair, but with beautiful adab toward his Lord. He did not demand relief. He simply named his pain and reminded himself of who Allah is: the Most Merciful of the merciful. And Allah answered, restoring him and increasing him in every way.",
    reflection:
      "This dua teaches the deepest form of sabr: turning to Allah in raw vulnerability while still acknowledging His mercy. It models a heart that does not become bitter in hardship, but remains anchored in the certainty that Allah\u2019s mercy is greater than any affliction. When illness or grief strips everything away, this is what the servant says \u2014 not a complaint, but a confession of need wrapped in trust.",
    recitationGuidance:
      "Recite during prolonged illness, grief, exhaustion, or when you feel abandoned by the world. Let your voice carry the weight of honesty before Allah. Do not rush it. The adab of Ayyub was not resignation \u2014 it was dignified, trusting surrender. Return to it as often as your heart needs.",
    relatedSlugs: ["dua-of-yunus", "hasbunallahu-wa-nimal-wakeel"],
  },
  {
    slug: "hasbunallahu-wa-nimal-wakeel",
    title: "Hasbunallahu wa Ni\u2019mal Wakeel \u2013 The Ultimate Reliance",
    arabic: "\u062d\u064e\u0633\u0652\u0628\u064f\u0646\u064e\u0627 \u0627\u0644\u0644\u064e\u0651\u0647\u064f \u0648\u064e\u0646\u0650\u0639\u0652\u0645\u064e \u0627\u0644\u0652\u0648\u064e\u0643\u0650\u064a\u0644\u064f",
    transliteration: "Hasbunallahu wa ni\u2019mal wakeel",
    translation:
      "Allah is sufficient for us, and He is the best Disposer of affairs.",
    theme: "Tawakkul & Protection",
    category: "Tawakkul & Protection",
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Aal Imran 3:173",
        authenticity: "Direct Revelation",
      },
      {
        type: "Hadith",
        ref: "Sahih al-Bukhari",
        authenticity: "Sahih",
      },
    ],
    story:
      "These words were spoken in one of the most terrifying moments recorded in Islamic history. After the Battle of Uhud, the believers were battered and bleeding. People came to them warning: a massive army has gathered against you, fear them. Rather than retreat or despair, the companions replied with these words and moved forward with trust in Allah alone. Their faith turned what should have been their destruction into a statement of divine reliance that echoes through every generation. It is also the dua of Ibrahim (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645) as he was thrown into Nimrod\u2019s fire \u2014 and from that fire, Allah made coolness and safety.",
    reflection:
      "Hasbunallah is not passivity. It is the most active statement a believer can make: I have done what I can, and now I place the outcome entirely in the hands of the One who controls all outcomes. It dissolves the tyranny of fear. When you feel overwhelmed by people, circumstances, or the unknown \u2014 this phrase restores the heart to its rightful orientation. Allah is not just \u2018enough\u2019 in a minimal sense. He is fully, completely, abundantly sufficient.",
    recitationGuidance:
      "Repeat in moments of fear, when facing powerful people or impossible situations, before major decisions, and whenever anxiety tightens the chest. Say it with conviction, not just words. Let it shift your inner state from worry to wuk\u016bl \u2014 full delegation to Allah.",
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
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Ghafir 40:44",
        authenticity: "Direct Revelation",
      },
    ],
    story:
      "These words are spoken by a believing man in the court of Pharaoh who concealed his faith and stood to defend Musa (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645). Knowing the danger around him, he entrusted himself entirely to Allah. And Allah protected him.",
    reflection:
      "Entrusting your affair to Allah means releasing obsession over outcomes while staying sincere in effort. It is the peace of knowing the result is in better hands than yours.",
    recitationGuidance:
      "Use after making sincere effort and prayer, especially before difficult conversations or uncertain outcomes. Say it and then genuinely let go.",
    relatedSlugs: ["hasbunallahu-wa-nimal-wakeel", "dua-of-yunus"],
  },
  {
    slug: "rabbi-inni-lima-anzalta",
    title: "Rabbi Inni Lima Anzalta",
    arabic:
      "\u0631\u064e\u0628\u0650\u0651 \u0625\u0650\u0646\u0650\u0651\u064a \u0644\u0650\u0645\u064e\u0627 \u0623\u064e\u0646\u0632\u064e\u0644\u0652\u062a\u064e \u0625\u0650\u0644\u064e\u064a\u064e\u0651 \u0645\u0650\u0646\u0652 \u062e\u064e\u064a\u0652\u0631\u064d \u0641\u064e\u0642\u0650\u064a\u0631\u064c",
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir.",
    translation:
      "My Lord, truly I am in need of whatever good You send down to me.",
    theme: "Need and Provision",
    category: "Provision",
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Al-Qasas 28:24",
        authenticity: "Direct Revelation",
      },
    ],
    story:
      "Prophet Musa (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645) made this dua while sitting alone, exhausted and in need, having just fled Egypt. He was a fugitive with nothing. In that complete vulnerability, he turned to Allah \u2014 and within moments, help arrived in ways he could not have imagined.",
    reflection:
      "Admitting need before Allah is not weakness \u2014 it is the highest form of worship. This dua strips away all pretense and places the servant in the most honest position before their Lord.",
    recitationGuidance:
      "Recite when seeking lawful provision, work, marriage, or guidance in life transitions. Say it when you feel empty-handed and let that emptiness be your sincerity.",
    relatedSlugs: ["rabbana-atina-fid-dunya-hasanah", "wa-ufawwidu-amri-ilallah"],
  },
  {
    slug: "rabbana-atina-fid-dunya-hasanah",
    title: "Rabbana Atina Fid-Dunya Hasanah",
    arabic:
      "\u0631\u064e\u0628\u064e\u0651\u0646\u064e\u0627 \u0622\u062a\u0650\u0646\u064e\u0627 \u0641\u0650\u064a \u0627\u0644\u062f\u064f\u0651\u0646\u0652\u064a\u064e\u0627 \u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b \u0648\u064e\u0641\u0650\u064a \u0627\u0644\u0652\u0622\u062e\u0650\u0631\u064e\u0629\u0650 \u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b \u0648\u064e\u0642\u0650\u0646\u064e\u0627 \u0639\u064e\u0630\u064e\u0627\u0628\u064e \u0627\u0644\u0646\u064e\u0651\u0627\u0631\u0650",
    transliteration:
      "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adhaban-nar.",
    translation:
      "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    theme: "Balanced Wellbeing",
    category: "Comprehensive",
    sources: [
      {
        type: "Qur\u2019an",
        ref: "Surah Al-Baqarah 2:201",
        authenticity: "Direct Revelation",
      },
    ],
    story:
      "This comprehensive supplication appears in the Qur\u2019an as a model dua, contrasted with those who only ask for worldly gain. It represents the balanced vision of the believer who seeks excellence in both worlds.",
    reflection:
      "Islam teaches balance: ask for goodness in life without losing sight of the Hereafter. This single dua contains an entire worldview \u2014 present and eternal, grateful and hopeful.",
    recitationGuidance:
      "Recite daily after salah and in personal dua, especially when making broad life requests. Let it remind you that your du\u2019a can hold both the immediate and the eternal.",
    relatedSlugs: ["rabbi-inni-lima-anzalta", "allahumma-inni-asaluka-al-afwa-wal-afiyah"],
  },
  {
    slug: "allahumma-inni-asaluka-al-afwa-wal-afiyah",
    title: "Asking for Pardon and Wellbeing",
    arabic: "\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0625\u0650\u0646\u0650\u0651\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0627\u0644\u0652\u0639\u064e\u0641\u0652\u0648\u064e \u0648\u064e\u0627\u0644\u0652\u0639\u064e\u0627\u0641\u0650\u064a\u064e\u0629\u064e",
    transliteration: "Allahumma inni as\u2019alukal-\u2018afwa wal-\u2018afiyah.",
    translation: "O Allah, I ask You for pardon and wellbeing.",
    theme: "Wellbeing and Safety",
    category: "Protection",
    sources: [
      {
        type: "Hadith",
        ref: "Sunan Ibn Majah and others",
        authenticity: "Needs verification \u2014 check full chain",
      },
    ],
    story:
      "This supplication is widely taught across generations for daily protection and holistic wellbeing, combining spiritual forgiveness with physical and worldly safety.",
    reflection:
      "A short dua can hold a complete life vision: forgiveness, health, safety, and inner peace. Allah\u2019s \u2018afiyah is all-encompassing \u2014 protection in religion, body, family, and wealth.",
    recitationGuidance:
      "Recite in the morning and evening adhkar routine. It is among the most comprehensive short supplications a believer can make daily.",
    relatedSlugs: ["allahumma-inni-audhu-bika-min-jahdil-bala", "rabbana-atina-fid-dunya-hasanah"],
  },
  {
    slug: "la-hawla-wa-la-quwwata-illa-billah",
    title: "La Hawla wa La Quwwata illa Billah",
    arabic: "\u0644\u064e\u0627 \u062d\u064e\u0648\u0652\u0644\u064e \u0648\u064e\u0644\u064e\u0627 \u0642\u064f\u0648\u064e\u0651\u0629\u064e \u0625\u0650\u0644\u064e\u0651\u0627 \u0628\u0650\u0627\u0644\u0644\u064e\u0651\u0647\u0650",
    transliteration: "La hawla wa la quwwata illa billah.",
    translation: "There is no power and no might except through Allah.",
    theme: "Strength Through Allah",
    category: "Dhikr",
    sources: [
      {
        type: "Hadith",
        ref: "Sahih al-Bukhari and Sahih Muslim",
        authenticity: "Sahih \u2014 verify exact reference",
      },
    ],
    story:
      "The Prophet \ufdfa described this phrase as a treasure from the treasures of Paradise. It is the believer\u2019s acknowledgment that every faculty, every capability, and every movement is only possible through Allah\u2019s permission and power.",
    reflection:
      "It softens the ego by reminding us that ability itself is a gift from Allah. When we feel strong, it grounds us. When we feel weak, it lifts us.",
    recitationGuidance:
      "Use frequently throughout the day, especially when feeling overwhelmed, anxious, or powerless. It transforms helplessness into humility before Allah.",
    relatedSlugs: ["hasbunallahu-wa-nimal-wakeel", "wa-ufawwidu-amri-ilallah"],
  },
  {
    slug: "astaghfirullah",
    title: "Astaghfirullah",
    arabic: "\u0623\u064e\u0633\u0652\u062a\u064e\u063a\u0652\u0641\u0650\u0631\u064f \u0627\u0644\u0644\u064e\u0651\u0647\u064e",
    transliteration: "Astaghfirullah.",
    translation: "I seek forgiveness from Allah.",
    theme: "Repentance and Renewal",
    category: "Forgiveness",
    sources: [
      {
        type: "Hadith",
        ref: "Sahih al-Bukhari and others",
        authenticity: "Needs verification \u2014 check specific wording",
      },
    ],
    story:
      "The Prophet \ufdfa would seek forgiveness more than seventy times a day \u2014 not because of great sin, but as a constant returning of the heart to Allah. Istighfar is not only for guilt; it is a form of remembrance, a breath for the soul.",
    reflection:
      "Istighfar cleans the heart and reorients the soul. It is the rain that washes the dust of heedlessness from the spiritual heart, restoring clarity, gratitude, and closeness to Allah.",
    recitationGuidance:
      "Recite abundantly after mistakes, after salah, in the morning, and throughout the day. Do not make it mechanical \u2014 let at least some repetitions carry the full weight of your intention.",
    relatedSlugs: ["dua-of-yunus", "allahumma-inni-asaluka-al-afwa-wal-afiyah"],
  },
  {
    slug: "allahumma-inni-audhu-bika-min-jahdil-bala",
    title: "Seeking Refuge from Severe Trials",
    arabic:
      "\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0625\u0650\u0646\u0650\u0651\u064a \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0643\u064e \u0645\u0650\u0646\u0652 \u062c\u064e\u0647\u0652\u062f\u0650 \u0627\u0644\u0652\u0628\u064e\u0644\u064e\u0627\u0621\u0650 \u0648\u064e\u062f\u064e\u0631\u064e\u0643\u0650 \u0627\u0644\u0634\u064e\u0651\u0642\u064e\u0627\u0621\u0650 \u0648\u064e\u0633\u064f\u0648\u0621\u0650 \u0627\u0644\u0652\u0642\u064e\u0636\u064e\u0627\u0621\u0650 \u0648\u064e\u0634\u064e\u0645\u064e\u0627\u062a\u064e\u0629\u0650 \u0627\u0644\u0652\u0623\u064e\u0639\u0652\u062f\u064e\u0627\u0621\u0650",
    transliteration:
      "Allahumma inni a'udhu bika min jahdil-bala, wa darkish-shaqa, wa su'il-qada, wa shamatatil-a'da.",
    translation:
      "O Allah, I seek refuge in You from severe trials, misery, evil decree, and the gloating of enemies.",
    theme: "Protection from Trials",
    category: "Protection",
    sources: [
      {
        type: "Hadith",
        ref: "Sahih al-Bukhari 6616",
        authenticity: "Needs verification \u2014 verify exact reference",
      },
    ],
    story:
      "This dua asks Allah for protection from the most overwhelming forms of hardship \u2014 not just difficulty, but the kind that tests faith itself. The companions understood that some trials, if not for Allah\u2019s protection, could shake even firm hearts.",
    reflection:
      "Seeking refuge is itself strength: it aligns fear with faith rather than despair. The believer who makes this dua regularly is not afraid of hardship \u2014 they are simply wise enough to ask Allah not to be tested beyond their capacity.",
    recitationGuidance:
      "Recite in morning and evening adhkar, and in times of public or personal instability. It is a shield dua \u2014 say it before hardship reaches you, not only within it.",
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
