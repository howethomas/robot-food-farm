import ViewAsVcon from '@/components/ViewAsVcon';
import JsonHome from '@/components/JsonHome';

const links = [
  { label: 'github · howethomas', href: 'https://github.com/howethomas' },
  { label: 'github · vcon-dev', href: 'https://github.com/vcon-dev' },
  { label: 'linkedin · howethomas', href: 'https://www.linkedin.com/in/howethomas' },
  { label: 'conserver.io', href: 'https://www.conserver.io' },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <ViewAsVcon>
        <header className="mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-5 flex items-center gap-3">
            <span>document</span>
            <span className="text-muted/60">/</span>
            <span>vcon · 0.0.2</span>
            <span className="text-muted/60">/</span>
            <span>subject · robot food farm</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-7">
            <img
              src="/thomas.jpg"
              alt="Portrait of Thomas McCarthy-Howe"
              className="w-32 h-32 sm:w-36 sm:h-36 object-cover border border-rule shrink-0 mb-5 sm:mb-0"
            />
            <div className="min-w-0">
              <h1 className="font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                Thomas McCarthy-Howe.
              </h1>
              <p className="mt-4 font-sans text-lg leading-relaxed text-ink/85 max-w-prose">
                Forty years of real-time communications engineering, from
                troposcatter modems at Signatron to the IETF vCon standard,
                now a working group and standards-track document. The site
                renders the career as the thing it is about: a vCon, with
                parties, dialog, analysis, and attachments. The keys are
                navigable. The button above shows the same document in its
                canonical form, signatures and all.
              </p>
              <nav
                aria-label="External profiles"
                className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11.5px] uppercase tracking-[0.16em]"
              >
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink border-b border-rule hover:text-accent hover:border-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <JsonHome />

        <hr className="rfc-rule" />

        <p className="font-sans italic text-muted max-w-prose">
          Two readers. One document. The values you can click open the deeper
          records. The values you cannot click are the ones that belong to a program.
        </p>
      </ViewAsVcon>
    </main>
  );
}
