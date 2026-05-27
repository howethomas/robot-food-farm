type Props = {
  date?: string;
  kind?: string;
  title: string;
  body: React.ReactNode;
  meta?: string;
  action?: { label: string; href: string };
};

export default function Entry({ date, kind, title, body, meta, action }: Props) {
  return (
    <article className="vcon-field">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div className="vcon-meta flex items-center gap-3">
          {date && <span>{date}</span>}
          {date && kind && <span className="text-muted/60">/</span>}
          {kind && <span>{kind}</span>}
        </div>
        {meta && <span className="vcon-meta">{meta}</span>}
      </div>
      <h2 className="font-sans text-2xl text-ink leading-snug">{title}</h2>
      <div className="text-[16.5px] leading-[1.7] text-ink/90">{body}</div>
      {action && (
        <a href={action.href} className="vcon-open">
          → {action.label}
        </a>
      )}
    </article>
  );
}
