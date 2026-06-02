/**
 * ChallengeSection — time limit, max attempts, allow-give-up controls.
 */

import { useId } from 'react';
import type { UserPreferences } from '../../../lib/types';
import { SectionCard } from './SectionCard';
import { Toggle } from './Toggle';
import { FormField } from './FormField';

interface ChallengeSectionProps {
  prefs: UserPreferences;
  pendingNotice: string | null;
  onChange: (patch: Partial<UserPreferences>) => void;
}

export function ChallengeSection({ prefs, pendingNotice, onChange }: ChallengeSectionProps) {
  const uid = useId();
  const timeLimitId = `${uid}-time-limit`;
  const attemptsId = `${uid}-attempts`;
  const giveUpId = `${uid}-give-up`;

  return (
    <SectionCard
      label="Challenge"
      description="How long a challenge runs and how many attempts are allowed before failure."
      pendingNotice={pendingNotice}
      id="section-challenge"
    >
      <div className="space-y-5">
        {/* Time limit */}
        <FormField
          label="Time limit (seconds)"
          htmlFor={timeLimitId}
          help="60–3600 seconds. The countdown starts when the challenge page loads."
        >
          <input
            id={timeLimitId}
            type="number"
            min={60}
            max={3600}
            step={30}
            value={prefs.challengeTimeLimitSec}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!Number.isNaN(val) && val >= 60 && val <= 3600) {
                onChange({ challengeTimeLimitSec: val });
              }
            }}
            className="w-32 rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            aria-describedby={`${timeLimitId}-help`}
          />
        </FormField>

        {/* Max submission attempts */}
        <FormField
          label="Max submission attempts"
          htmlFor={attemptsId}
          help="1–20. After this many failed submits the challenge counts as failed."
        >
          <input
            id={attemptsId}
            type="number"
            min={1}
            max={20}
            step={1}
            value={prefs.maxSubmissionAttempts}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!Number.isNaN(val) && val >= 1 && val <= 20) {
                onChange({ maxSubmissionAttempts: val });
              }
            }}
            className="w-24 rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            aria-describedby={`${attemptsId}-help`}
          />
        </FormField>

        {/* Allow give-up */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <label
              htmlFor={giveUpId}
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
            >
              Allow give-up
            </label>
            <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
              {prefs.strictMode
                ? 'Disabled while strict mode is on.'
                : 'Shows a "give up" button on the challenge page.'}
            </p>
          </div>
          <Toggle
            id={giveUpId}
            checked={prefs.allowGiveUp && !prefs.strictMode}
            onChange={(val) => onChange({ allowGiveUp: val })}
            disabled={prefs.strictMode}
            aria-label="Allow give-up on challenges"
            aria-describedby={`${giveUpId}-desc`}
          />
        </div>
      </div>
    </SectionCard>
  );
}
