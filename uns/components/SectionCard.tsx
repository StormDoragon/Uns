import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-[#ddccab] bg-white/70 p-6">
      <h2 className="text-lg font-semibold text-[#1f2a24]">{title}</h2>
      <div className="mt-3 text-base leading-8 text-[#425249]">{children}</div>
    </section>
  );
}
