type Row = {
  date: string;
  kind: string;
  title: string;
  href?: string;
};

type Props = {
  num: string;
  span: string;
  title: string;
  blurb: React.ReactNode;
  items: Row[];
  note?: React.ReactNode;
};

export default function ThemeArc({ num, span, title, blurb, items, note }: Props) {
  return (
    <article className="vcon-field">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div className="vcon-meta flex items-center gap-3">
          <span>arc · {num}</span>
          <span className="text-muted/60">/</span>
          <span>{span}</span>
        </div>
      </div>
      <h2 className="font-sans text-2xl text-ink leading-snug">{title}</h2>
      <div className="text-[16.5px] leading-[1.7] text-ink/90 max-w-prose">
        {blurb}
      </div>

      <ul className="mt-2 space-y-2">
        {items.map((row, i) => (
          <li
            key={i}
            className="grid grid-cols-[7.5rem_1fr] gap-x-4 items-baseline"
          >
            <div className="vcon-meta whitespace-nowrap">
              <div>{row.date}</div>
              <div className="text-muted/80 normal-case tracking-[0.04em] font-mono text-[10.5px] mt-0.5">
                {row.kind}
              </div>
            </div>
            <div className="text-[15.5px] leading-[1.55] text-ink/90">
              {row.href ? (
                <a
                  href={row.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-rule hover:text-accent hover:border-accent transition-colors"
                >
                  {row.title}
                </a>
              ) : (
                <span>{row.title}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-3 text-[14.5px] italic text-muted leading-[1.7] max-w-prose">
          {note}
        </p>
      )}
    </article>
  );
}
