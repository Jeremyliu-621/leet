/**
 * UnlockSection — unlockDurationMin control.
 */

import { useId } from 'react';
import type { UserPreferences } from '../../../lib/types';
import { SectionCard } from './SectionCard';
import { FormField } from './FormField';

interface UnlockSectionProps {
  prefs: UserPreferences;
  pendingNotice: string | null;
  onChange: (patch: Partial<UserPreferences>) => void;
}

export function UnlockSection({ prefs, pendingNotice, onChange }: UnlockSectionProps) {
  const uid = useId();
  const durationId = `${uid}-duration`;

  return (
    <SectionCard
      label="Unlock"
      description="How long access is granted after solving a challenge."
      pendingNotice={pendingNotice}
      id="section-unlock"
    >
      <FormField
        label="Unlock duration (minutes)"
        htmlFor={durationId}
        help="1–240 minutes. The timer starts from the moment the challenge is solved."
      >
        <input
          id={durationId}
          type="number"
          min={1}
          max={240}
          step={5}
          value={prefs.unlockDurationMin}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val) && val >= 1 && val <= 240) {
              onChange({ unlockDurationMin: val });
            }
          }}
          className="w-28 rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          aria-describedby={`${durationId}-help`}
        />
      </FormField>
    </SectionCard>
  );
}
