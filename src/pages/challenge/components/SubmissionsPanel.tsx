import { useState } from 'react';
import { LANGUAGE_SHORT } from '../../../lib/types';
import type { SubmissionRecord } from '../../../lib/types';

export type { SubmissionRecord };

interface SubmissionsPanelProps {
  submissions: readonly SubmissionRecord[];
  /** Called when the user clicks "restore" on a submission row. */
  onRestore?: (code: string) => void;
}

const OUTCOME_LABEL: Readonly<Record<SubmissionRecord['outcome'], string>> = {
  accepted: 'Accepted',
  'wrong-answer': 'Wrong Answer',
  'runtime-error': 'Runtime Error',
  timeout: 'Time Limit Exceeded',
};

const OUTCOME_CLASS: Readonly<Record<SubmissionRecord['outcome'], string>> = {
  accepted: 'text-accent font-semibold',
  'wrong-answer': 'text-muted',
  'runtime-error': 'text-muted',
  timeout: 'text-muted',
};

function formatTime(ms: number): string {
  const d = new Date(ms);
  const now = new Date();
  const isToday =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday =
    d.getFullYear() === yesterday.getFullYear() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getDate() === yesterday.getDate();
  const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (isToday) return time;
  if (isYesterday) return `yesterday ${time}`;
  return `${d.toLocaleDateString([], { month: 'short', day: 'numeric' })} ${time}`;
}

export function SubmissionsPanel({ submissions, onRestore }: SubmissionsPanelProps) {
  const [open, setOpen] = useState(false);

  if (submissions.length === 0) return null;

  return (
    <div className="shrink-0 border-t border-border">
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="submissions-panel-body"
        aria-label={open ? 'Collapse submissions panel' : 'Expand submissions panel'}
        className="flex w-full items-center justify-between px-4 py-2 text-left transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
            Submissions
          </span>
          <span className="rounded-sm bg-surface-2 px-1.5 py-px font-mono text-[10px] text-faint">
            {submissions.length}
          </span>
        </div>
        <svg
          className={`h-3 w-3 flex-shrink-0 text-faint transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div id="submissions-panel-body" className="overflow-x-auto px-4 pb-3" role="region" aria-label="Submission history">
          <table
            className="w-full min-w-[360px] font-mono text-xs"
            aria-label="Submission history table"
          >
            <thead>
              <tr className="border-b border-border text-left text-[10px] uppercase tracking-widest text-faint">
                <th scope="col" className="pb-1.5 pr-3 font-normal">
                  #
                </th>
                <th scope="col" className="pb-1.5 pr-3 font-normal">
                  Result
                </th>
                <th scope="col" className="pb-1.5 pr-3 font-normal">
                  Lang
                </th>
                <th scope="col" className="pb-1.5 pr-3 font-normal">
                  Tests
                </th>
                <th scope="col" className="pb-1.5 pr-3 font-normal">
                  Time
                </th>
                <th scope="col" className="pb-1.5 pr-3 font-normal text-right">
                  At
                </th>
                {onRestore && <th scope="col" className="pb-1.5 font-normal" />}
              </tr>
            </thead>
            <tbody>
              {[...submissions].reverse().map((s) => (
                <tr
                  key={s.attempt}
                  className="border-b border-border/50 last:border-0 hover:bg-surface-2/50 transition-colors"
                >
                  <td className="py-1.5 pr-3 text-faint tabular-nums">{s.attempt}</td>
                  <td className={`py-1.5 pr-3 ${OUTCOME_CLASS[s.outcome]}`}>
                    {OUTCOME_LABEL[s.outcome]}
                  </td>
                  <td className="py-1.5 pr-3 text-faint">
                    {s.language ? LANGUAGE_SHORT[s.language] : '—'}
                  </td>
                  <td className="py-1.5 pr-3 text-faint tabular-nums">
                    {s.passCount}/{s.totalTests}
                  </td>
                  <td className="py-1.5 pr-3 text-faint tabular-nums">
                    {s.durationMs !== undefined ? `${s.durationMs} ms` : '—'}
                  </td>
                  <td className="py-1.5 pr-3 text-right text-faint tabular-nums">
                    {formatTime(s.timestamp)}
                  </td>
                  {onRestore && (
                    <td className="py-1.5">
                      {s.code && (
                        <button
                          type="button"
                          onClick={() => onRestore(s.code!)}
                          aria-label={`Restore code from attempt ${s.attempt}`}
                          className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-text hover:border-border-strong focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent"
                        >
                          restore
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
