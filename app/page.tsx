const duas = [
  {
    title: 'Dua of Yunus (A.S)',
    arabic: 'لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    meaning: 'There is no deity except You. Glory be to You. Indeed, I was among the wrongdoers.',
  },
  {
    title: 'Hasbunallahu wa ni\'mal wakeel',
    arabic: 'حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيلُ',
    meaning: 'Allah is sufficient for us, and He is the best disposer of affairs.',
  },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: 12 }}>Uns</h1>

      <p style={{ color: '#b8b8b8', fontSize: '1.2rem', lineHeight: 1.8 }}>
        A sanctuary of authentic duas, narrated like lanterns carried through storms.
      </p>

      <div style={{ marginTop: 60, display: 'grid', gap: 24 }}>
        {duas.map((dua) => (
          <section
            key={dua.title}
            style={{
              border: '1px solid #222',
              borderRadius: 20,
              padding: 28,
              background: '#111',
            }}
          >
            <h2>{dua.title}</h2>
            <p style={{ fontSize: '1.8rem', direction: 'rtl' }}>{dua.arabic}</p>
            <p style={{ color: '#cfcfcf', lineHeight: 1.7 }}>{dua.meaning}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
