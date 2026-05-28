/**
 * AboutSection — a small reassurance card at the bottom of Options.
 *
 * Two purposes:
 *   1. Document what the extension actually does on disk (Python is bundled,
 *      no network calls), for security-minded users who are reasonably
 *      sceptical of any extension that ships a WebAssembly interpreter.
 *   2. Surface the rough Pyodide first-boot cost so a slow-feeling Python
 *      run can be self-diagnosed without the user having to dig through
 *      DevTools — populated by the ring buffer in
 *      `src/lib/runner/init-stats.ts` after the first Python run.
 */

import { useEffect, useState } from 'react';
import { SectionCard } from './SectionCard';
import { readInitStats, type InitStats } from '../../../lib/runner/init-stats';
import { getAllProblems } from '../../../lib/problems';
import { PROBLEM_TAGS } from '../../../lib/types';

const BANK_SIZE = getAllProblems().length;
const TAG_COUNT = PROBLEM_TAGS.length;

export function AboutSection() {
  const [stats, setStats] = useState<InitStats | null>(null);

  useEffect(() => {
    let mounted = true;
    void readInitStats().then((value) => {
      if (mounted) setStats(value);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SectionCard
      label="About this extension"
      description="What this extension runs locally, and what it does not."
      id="section-about"
    >
      <div className="space-y-3 text-xs leading-relaxed text-muted">
        <p>
          LeetLock is a Chrome Manifest V3 extension with{' '}
          <span className="font-semibold text-text">{BANK_SIZE} original problems</span>{' '}
          covering {TAG_COUNT} topic categories.{' '}
          <span className="font-semibold text-text">JavaScript, TypeScript, and Python</span>{' '}
          are all supported. Every problem and every piece of code you write runs
          entirely on this device — there is no server, no LeetLock account, and
          no telemetry.
        </p>
        <p>
          <span className="font-semibold text-text">TypeScript support</span> strips
          type annotations via <span className="font-mono">sucrase</span> before
          passing your code to the JavaScript runner — no compilation server,
          no network request. The JS starter code is valid TypeScript, so you can
          add types freely.
        </p>
        <p>
          <span className="font-semibold text-text">Python support</span> is
          provided by <span className="font-mono">pyodide-core 0.29.4</span>
          {' '}— CPython compiled to WebAssembly. The interpreter and its
          standard library are <span className="font-semibold text-text">
            bundled inside this extension's installed files
          </span>
          ; no network request is made when you select Python or click Run.
          You can verify this in Chrome's DevTools Network tab.
        </p>
        <p>
          Code you submit runs inside a sandboxed extension page (Chrome's{' '}
          <span className="font-mono">sandbox.pages</span>) which has{' '}
          <span className="font-semibold text-text">no access</span> to{' '}
          <span className="font-mono">chrome.*</span> APIs, your other tabs,
          or your browsing history. Each run executes in a fresh Web Worker
          with a hard wall-clock timeout.
        </p>
        {stats && stats.firstBootMs !== null && (
          <p className="font-mono text-[11px] text-faint">
            Python first-boot on this device: {stats.firstBootMs} ms
            {stats.runs > 0 && ` · ${stats.runs} Python run${stats.runs === 1 ? '' : 's'}`}
          </p>
        )}
      </div>
    </SectionCard>
  );
}
