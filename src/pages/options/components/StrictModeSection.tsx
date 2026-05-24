/**
 * StrictModeSection — strictMode toggle + settingsCooldownMs selector.
 */

import { useId } from 'react';
import type { UserPreferences } from '../../../lib/types';
import { COOLDOWN_PRESETS } from '../options-helpers';
import { SectionCard } from './SectionCard';
import { Toggle } from './Toggle';

interface StrictModeSectionProps {
  prefs: UserPreferences;
  pendingNotice: string | null;
  onToggleStrict: (enabled: boolean) => void;
  onChangeCooldown: (ms: number) => void;
}

export function StrictModeSection({
  prefs,
  pendingNotice,
  onToggleStrict,
  onChangeCooldown,
}: StrictModeSectionProps) {
  const uid = useId();
  const strictId = `${uid}-strict`;
  const cooldownId = `${uid}-cooldown`;

  return (
    <SectionCard
      label="Strict mode"
      description="When strict mode is on, give-up is disabled and changes that reduce friction are deferred by the cooldown period."
      pendingNotice={pendingNotice}
      id="section-strict-mode"
    >
      <div className="space-y-5">
        {/* Strict mode toggle */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <label
              htmlFor={strictId}
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
            >
              Strict mode
            </label>
            <p className="mt-0.5 text-[11px] leading-relaxed text-muted" id={`${strictId}-desc`}>
              {prefs.strictMode
                ? 'Active. Turning this off is deferred by the cooldown.'
                : 'Inactive. Enable to harden the commitment.'}
            </p>
          </div>
          <Toggle
            id={strictId}
            checked={prefs.strictMode}
            onChange={onToggleStrict}
            aria-label="Enable strict mode"
            aria-describedby={`${strictId}-desc`}
          />
        </div>

        {/* Cooldown duration */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={cooldownId}
            className="font-mono text-[10px] uppercase tracking-widest text-faint"
          >
            Settings cooldown
          </label>
          <p className="text-[11px] leading-relaxed text-muted" id={`${cooldownId}-help`}>
            How long to wait before a strictness-reducing change takes effect.
            {!prefs.strictMode && (
              <> Only applies when strict mode is on.</>
            )}
          </p>
          <div
            className="mt-1 flex overflow-hidden rounded-sm border border-border"
            role="radiogroup"
            aria-label="Settings cooldown duration"
            aria-describedby={`${cooldownId}-help`}
          >
            {COOLDOWN_PRESETS.map((preset, i) => {
              const selected = prefs.settingsCooldownMs === preset.ms;
              return (
                <button
                  key={preset.ms}
                  id={i === 0 ? cooldownId : undefined}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onChangeCooldown(preset.ms)}
                  className={[
                    'flex-1 px-3 py-2 font-mono text-xs transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    i > 0 ? 'border-l border-border' : '',
                    selected
                      ? 'bg-accent text-on-accent'
                      : 'bg-surface-2 text-muted hover:bg-surface hover:text-text',
                  ].join(' ')}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
