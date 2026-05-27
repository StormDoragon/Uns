export const metadata = {
  title: 'Uns',
  description: 'Authentic duas with stories, reflections, and emotional narration.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#0a0a0a',
          color: '#f5f5f5',
          fontFamily: 'serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
