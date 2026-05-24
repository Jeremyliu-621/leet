import { useState } from 'react';
import type { SubmissionRecord } from '../../../lib/types';

export type { SubmissionRecord };

interface SubmissionsPanelProps {
  submissions: readonly SubmissionRecord[];
}

const OUTCOME_LABEL: Readonly<Record<SubmissionRecord['outcome'], string>> = {
  accepted: 'Accepted',
  'wrong-answer': 'Wrong Answer',
  'runtime-error': 'Runtime Error',
  timeout: 'Time Limit',
};

const OUTCOME_CLASS: Readonly<Record<SubmissionRecord['outcome'], string>> = {
  accepted: 'text-text',
  'wrong-answer': 'text-muted',
  'runtime-error': 'text-muted',
  timeout: 'text-muted',
};

function formatTime(ms: number): string {
  const d = new Date(ms);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function SubmissionsPanel({ submissions }: SubmissionsPanelProps) {
  const [open, setOpen] = useState(false);

  if (submissions.length === 0) return null;

  return (
    <div className="shrink-0 border-t border-border">
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-2 text-left font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        <span>Submissions ({submissions.length})</span>
        <span aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="overflow-x-auto px-4 pb-3" role="region" aria-label="Submission history">
          <table className="w-full min-w-[360px] font-mono text-xs" aria-label="Submission history table">
            <thead>
              <tr className="border-b border-border text-left text-[10px] uppercase tracking-widest text-faint">
                <th scope="col" className="pb-1 pr-3 font-normal">#</th>
                <th scope="col" className="pb-1 pr-3 font-normal">Result</th>
                <th scope="col" className="pb-1 pr-3 font-normal">Tests</th>
                <th scope="col" className="pb-1 pr-3 font-normal">Time</th>
                <th scope="col" className="pb-1 font-normal text-right">At</th>
              </tr>
            </thead>
            <tbody>
              {[...submissions].reverse().map((s) => (
                <tr key={s.attempt} className="border-b border-border last:border-0">
                  <td className="py-1 pr-3 text-faint">{s.attempt}</td>
                  <td className={`py-1 pr-3 ${OUTCOME_CLASS[s.outcome]}`}>
                    {OUTCOME_LABEL[s.outcome]}
                  </td>
                  <td className="py-1 pr-3 text-faint">
                    {s.passCount}/{s.totalTests}
                  </td>
                  <td className="py-1 pr-3 text-faint">
                    {s.durationMs !== undefined ? `${s.durationMs} ms` : '—'}
                  </td>
                  <td className="py-1 text-right text-faint">{formatTime(s.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
