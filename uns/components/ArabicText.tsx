type ArabicTextProps = {
  text: string;
  className?: string;
};

export default function ArabicText({ text, className = "" }: ArabicTextProps) {
  return (
    <p
      dir="rtl"
      lang="ar"
      className={`text-right text-3xl leading-loose tracking-wide md:text-4xl ${className}`.trim()}
    >
      {text}
    </p>
  );
}
