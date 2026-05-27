'use client';

import { useState } from 'react';
import { homepageVcon } from '@/lib/homepageVcon';

export default function ViewAsVcon({ children }: { children: React.ReactNode }) {
  const [machine, setMachine] = useState(false);

  const json = JSON.stringify(homepageVcon, null, 2);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
    } catch {
      /* no-op */
    }
  };

  const download = () => {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robot-food-farm.vcon.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <div>
          <span className="text-ink">robot-food-farm</span>
          <span className="mx-2 text-muted">/</span>
          <span>{machine ? 'machine view' : 'human view'}</span>
        </div>
        <div className="flex items-center gap-4">
          {machine && (
            <>
              <button
                onClick={copy}
                className="hover:text-ink transition-colors"
                aria-label="Copy vCon JSON"
              >
                copy
              </button>
              <button
                onClick={download}
                className="hover:text-ink transition-colors"
                aria-label="Download vCon JSON"
              >
                download
              </button>
            </>
          )}
          <button
            onClick={() => setMachine((m) => !m)}
            className="border border-rule px-3 py-1 hover:bg-ink hover:text-editor transition-colors"
            aria-pressed={machine}
          >
            {machine ? 'view as human' : 'view as vCon'}
          </button>
        </div>
      </div>

      {machine ? (
        <section aria-label="Machine representation">
          <p className="text-sm text-muted mb-4 italic">
            The page you were just reading, expressed as a structured object. Portable,
            inspectable, signable. The human view and this view describe the same thing.
          </p>
          <pre className="machine">{json}</pre>
        </section>
      ) : (
        <section aria-label="Human view">{children}</section>
      )}
    </div>
  );
}
