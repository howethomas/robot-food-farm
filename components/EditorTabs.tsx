'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'robot-food-farm.vcon' },
  { href: '/parties', label: 'parties.vcon' },
  { href: '/dialog', label: 'dialog.vcon' },
  { href: '/analysis', label: 'analysis.vcon' },
  { href: '/attachments', label: 'attachments.vcon' },
];

export default function EditorTabs() {
  const pathname = usePathname();
  const norm = pathname.replace(/\/$/, '') || '/';

  return (
    <div className="editor-tabs" role="tablist">
      {tabs.map((t) => {
        const active = norm === t.href;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`editor-tab${active ? ' active' : ''}`}
            role="tab"
            aria-selected={active}
          >
            <span className="dot" aria-hidden="true" />
            <span>{t.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
