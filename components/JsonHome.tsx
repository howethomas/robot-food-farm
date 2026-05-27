import Link from 'next/link';

type Entry = {
  date: string;
  kind: string;
  title: string;
  href: string;
};

const parties = [
  { name: 'Thomas McCarthy-Howe', role: 'author' },
];

const dialog: Entry[] = [
  {
    date: '2021-12-08',
    kind: 'keynote',
    title: 'TADSummit 2021 — the vCon proposal',
    href: '/dialog',
  },
  {
    date: '2023-10',
    kind: 'keynote',
    title: 'TAD Summit Paris — vCon keynote',
    href: '/dialog',
  },
  {
    date: '2024-10',
    kind: 'keynote',
    title: 'The rise and rise of vCon',
    href: '/dialog',
  },
];

const analysis: Entry[] = [
  {
    date: '2015-05-11',
    kind: 'essay',
    title: 'The laws of communications mashups',
    href: '/analysis',
  },
  {
    date: '2017-06-06',
    kind: 'essay',
    title: 'The automation age of business communications',
    href: '/analysis',
  },
  {
    date: '2018-05-02',
    kind: 'essay',
    title: 'The most important business communications problem and why',
    href: '/analysis',
  },
];

const attachments: Entry[] = [
  {
    date: '2025',
    kind: 'ietf-draft',
    title: 'draft-ietf-vcon-vcon-container',
    href: '/attachments',
  },
  {
    date: '2023-05-30',
    kind: 'patent',
    title: 'US 11,665,282 — secure transitory data storage',
    href: '/attachments',
  },
  {
    date: '2026',
    kind: 'code',
    title: 'github.com/howethomas/howe-corpus',
    href: '/attachments',
  },
];

const P = ({ children }: { children: React.ReactNode }) => (
  <span className="j-punc">{children}</span>
);
const K = ({ children }: { children: React.ReactNode }) => (
  <span className="j-key">&quot;{children}&quot;</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="j-str">&quot;{children}&quot;</span>
);
const B = ({ children }: { children: React.ReactNode }) => (
  <span className="j-bool">{children}</span>
);
const SK = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="j-link">
    <span className="j-section-key">&quot;{children}&quot;</span>
  </Link>
);
const SL = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="j-link">
    &quot;{children}&quot;
  </Link>
);

const indent = (depth: number) => ({ paddingLeft: `${depth * 1.5}rem` });

function EntryLine({
  entry,
  last,
}: {
  entry: Entry;
  last: boolean;
}) {
  return (
    <>
      <span className="j-line" style={indent(2)}>
        <P>{'{ '}</P>
        <K>date</K>
        <P>: </P>
        <S>{entry.date}</S>
        <P>, </P>
        <K>kind</K>
        <P>: </P>
        <S>{entry.kind}</S>
        <P>,</P>
      </span>
      <span className="j-line" style={indent(3)}>
        <K>title</K>
        <P>: </P>
        <SL href={entry.href}>{entry.title}</SL>
        <P> {'}'}</P>
        {!last && <P>,</P>}
      </span>
    </>
  );
}

export default function JsonHome() {
  return (
    <div className="vcon-doc">
      <span className="j-line"><P>{'{'}</P></span>

      <span className="j-line" style={indent(1)}>
        <K>vcon</K><P>: </P><S>0.0.2</S><P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>subject</K><P>: </P><S>Thomas McCarthy-Howe</S><P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>also_known_as</K><P>: [</P>
        <S>Thomas Spencer McCarthy-Howe</S><P>, </P>
        <S>Thomas Howe</S><P>, </P>
        <S>Mr. Mashup</S>
        <P>],</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>affiliation</K><P>: </P><S>VCONIC Inc. · co-founder and CTO</S><P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>career_span</K><P>: </P><S>1984 — present</S><P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>documentation_home</K><P>: </P>
        <a
          href="https://www.conserver.io"
          target="_blank"
          rel="noreferrer"
          className="j-link"
        >
          &quot;https://www.conserver.io&quot;
        </a>
        <P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>lineage</K><P>: [</P>
        <S>Bussgang</S><P>, </P>
        <S>Bernstein</S><P>, </P>
        <S>Resnikoff</S><P>, </P>
        <S>Schulzrinne</S>
        <P>],</P>
      </span>

      <span className="j-line">&nbsp;</span>

      {/* parties */}
      <span className="j-line" style={indent(1)}>
        <SK href="/parties">parties</SK><P>: [</P>
      </span>
      {parties.map((p, i) => (
        <span key={i} className="j-line" style={indent(2)}>
          <P>{'{ '}</P>
          <K>name</K><P>: </P><S>{p.name}</S><P>, </P>
          <K>role</K><P>: </P><S>{p.role}</S>
          <P>{' }'}</P>
          {i < parties.length - 1 && <P>,</P>}
        </span>
      ))}
      <span className="j-line" style={indent(1)}><P>],</P></span>

      <span className="j-line">&nbsp;</span>

      {/* dialog */}
      <span className="j-line" style={indent(1)}>
        <SK href="/dialog">dialog</SK><P>: [</P>
      </span>
      {dialog.map((e, i) => (
        <EntryLine key={i} entry={e} last={i === dialog.length - 1} />
      ))}
      <span className="j-line" style={indent(1)}><P>],</P></span>

      <span className="j-line">&nbsp;</span>

      {/* analysis */}
      <span className="j-line" style={indent(1)}>
        <SK href="/analysis">analysis</SK><P>: [</P>
      </span>
      {analysis.map((e, i) => (
        <EntryLine key={i} entry={e} last={i === analysis.length - 1} />
      ))}
      <span className="j-line" style={indent(1)}><P>],</P></span>

      <span className="j-line">&nbsp;</span>

      {/* attachments */}
      <span className="j-line" style={indent(1)}>
        <SK href="/attachments">attachments</SK><P>: [</P>
      </span>
      {attachments.map((e, i) => (
        <EntryLine key={i} entry={e} last={i === attachments.length - 1} />
      ))}
      <span className="j-line" style={indent(1)}><P>],</P></span>

      <span className="j-line">&nbsp;</span>

      <span className="j-line" style={indent(1)}>
        <K>corpus_size</K><P>: </P><span className="j-num">392</span><P>,</P>
      </span>
      <span className="j-line" style={indent(1)}>
        <K>robot_food</K><P>: </P><B>true</B>
      </span>

      <span className="j-line"><P>{'}'}</P></span>
    </div>
  );
}
