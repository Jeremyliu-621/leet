/**
 * FailureSection — failureAction segmented control + redirectUrl text field.
 */

import { useId } from 'react';
import type { FailureAction, UserPreferences } from '../../../lib/types';
import { validateRedirectUrl } from '../options-helpers';
import { SectionCard } from './SectionCard';

interface FailureSectionProps {
  prefs: UserPreferences;
  onChange: (patch: Partial<UserPreferences>) => void;
}

const FAILURE_OPTIONS: { value: FailureAction; label: string; description: string }[] = [
  {
    value: 'close',
    label: 'Close tab',
    description: 'The tab is closed when a challenge is failed or abandoned.',
  },
  {
    value: 'redirect',
    label: 'Redirect',
    description: 'Redirect the tab to a specific URL instead of closing it.',
  },
];

export function FailureSection({ prefs, onChange }: FailureSectionProps) {
  const uid = useId();
  const redirectId = `${uid}-redirect`;
  const redirectError = prefs.failureAction === 'redirect'
    ? validateRedirectUrl(prefs.redirectUrl)
    : null;

  return (
    <SectionCard
      label="Failure"
      description="What happens when a challenge is failed: time runs out, attempts are exhausted, or the user gives up."
      id="section-failure"
    >
      <div className="space-y-4">
        {/* Segmented control */}
        <div
          className="flex overflow-hidden rounded-sm border border-border"
          role="radiogroup"
          aria-label="Failure action"
        >
          {FAILURE_OPTIONS.map((opt, i) => {
            const selected = prefs.failureAction === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onChange({ failureAction: opt.value })}
                className={[
                  'flex-1 px-4 py-2 font-mono text-xs transition-colors',
                  'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                  i > 0 ? 'border-l border-border' : '',
                  selected
                    ? 'bg-accent text-on-accent'
                    : 'bg-surface-2 text-muted hover:bg-surface hover:text-text',
                ].join(' ')}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Description of the selected option */}
        <p className="text-[11px] leading-relaxed text-muted">
          {FAILURE_OPTIONS.find((o) => o.value === prefs.failureAction)?.description}
        </p>

        {/* Redirect URL — only when redirect is selected */}
        {prefs.failureAction === 'redirect' && (
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={redirectId}
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
            >
              Redirect URL
            </label>
            <input
              id={redirectId}
              type="url"
              value={prefs.redirectUrl}
              onChange={(e) => onChange({ redirectUrl: e.target.value })}
              placeholder="https://example.com"
              aria-describedby={redirectError ? `${redirectId}-error` : `${redirectId}-help`}
              className={[
                'w-full rounded-sm border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text placeholder-faint',
                'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                redirectError ? 'border-border-strong' : 'border-border focus:border-border-strong',
              ].join(' ')}
            />
            {!redirectError && (
              <p id={`${redirectId}-help`} className="text-[11px] text-muted">
                The page the user is taken to when they fail.
              </p>
            )}
            {redirectError && (
              <p id={`${redirectId}-error`} role="alert" className="font-mono text-[11px] text-text">
                {redirectError}
              </p>
            )}
          </div>
        )}
      </div>
    </SectionCard>
  );
}
