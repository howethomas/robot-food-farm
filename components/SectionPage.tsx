import Link from 'next/link';

type Props = {
  field: 'parties' | 'dialog' | 'analysis' | 'attachments';
  title: string;
  lede: string;
  children: React.ReactNode;
};

export default function SectionPage({ field, title, lede, children }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-6 flex items-center gap-3">
        <Link href="/" className="hover:text-ink transition-colors">
          robot food farm
        </Link>
        <span className="text-muted/60">/</span>
        <span>field · {field}</span>
      </div>

      <header className="mb-12">
        <h1 className="font-sans text-4xl md:text-5xl leading-[1.08] tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-5 font-sans text-lg leading-relaxed text-ink/85 max-w-prose">
          {lede}
        </p>
      </header>

      <hr className="rfc-rule" />

      {children}
    </main>
  );
}
