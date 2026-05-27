'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function pageMeta(pathname: string) {
  const norm = pathname.replace(/\/$/, '') || '/';
  switch (norm) {
    case '/':
      return { file: 'robot-food-farm.vcon', lang: 'JSON' };
    case '/parties':
      return { file: 'parties.vcon', lang: 'JSON' };
    case '/dialog':
      return { file: 'dialog.vcon', lang: 'JSON' };
    case '/analysis':
      return { file: 'analysis.vcon', lang: 'JSON' };
    case '/attachments':
      return { file: 'attachments.vcon', lang: 'JSON' };
    default:
      return { file: norm, lang: 'JSON' };
  }
}

const sections = [
  { href: '/parties', label: 'parties' },
  { href: '/dialog', label: 'dialog' },
  { href: '/analysis', label: 'analysis' },
  { href: '/attachments', label: 'attachments' },
];

export default function StatusBar() {
  const pathname = usePathname();
  const { file, lang } = pageMeta(pathname);

  return (
    <footer className="status-bar mt-12">
      <div className="flex items-stretch min-h-[26px] px-3 gap-x-4 overflow-x-auto whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <span aria-hidden>⎇</span>
          <span>main</span>
        </span>
        <span className="flex items-center">{file}</span>
        <nav aria-label="Sections" className="flex items-stretch">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center px-2"
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <span className="flex-1" />
        <span className="flex items-center">Ln 1, Col 1</span>
        <span className="flex items-center">UTF-8</span>
        <span className="flex items-center">LF</span>
        <span className="flex items-center">{lang}</span>
        <span className="flex items-center">v0.1</span>
      </div>
    </footer>
  );
}
