import Link from 'next/link';

const sections = [
  { href: '/parties', label: 'parties' },
  { href: '/dialog', label: 'dialog' },
  { href: '/analysis', label: 'analysis' },
  { href: '/attachments', label: 'attachments' },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 pt-10">
      <div className="border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-between">
          <Link href="/" className="text-ink hover:text-accent transition-colors">
            robot food farm
          </Link>
          <nav aria-label="Sections" className="flex flex-wrap gap-x-5 gap-y-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="hover:text-ink transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </nav>
          <span>v0.1</span>
        </div>
        <p className="mt-4 text-[10.5px] tracking-[0.15em] normal-case text-muted/80">
          cultivating structured conversation. every page here has a machine view.
        </p>
      </div>
    </footer>
  );
}
