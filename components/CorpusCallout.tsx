type Props = {
  count: string;
  blurb: string;
  href: string;
  label: string;
};

export default function CorpusCallout({ count, blurb, href, label }: Props) {
  return (
    <aside className="mt-12 border-t border-rule pt-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">
        complete record
      </div>
      <p className="font-sans text-[16.5px] leading-[1.7] text-ink/85 max-w-prose">
        <span className="font-mono text-[14px] text-accent">{count}</span>{' '}
        {blurb} The entries above are a reading path. The full set lives in the
        corpus repo, where every item is itself a vCon.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink border-b border-rule hover:text-accent hover:border-accent transition-colors"
      >
        {label}
      </a>
    </aside>
  );
}
