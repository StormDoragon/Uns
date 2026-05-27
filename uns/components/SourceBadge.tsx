type SourceBadgeProps = {
  source: string;
  authenticity: string;
};

export default function SourceBadge({ source, authenticity }: SourceBadgeProps) {
  return (
    <section className="rounded-2xl border border-[#dccaa6] bg-[#fff8ec] p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6a38]">
        Source
      </h3>
      <p className="mt-2 text-base text-[#24342c]">{source}</p>
      <p className="mt-2 text-sm text-[#5c6a60]">Authenticity: {authenticity}</p>
    </section>
  );
}
