import type { UserPreferences } from '../../../lib/types';

interface TopBarProps {
  /** Seconds remaining on the countdown timer. */
  secondsLeft: number;
  prefs: UserPreferences | null;
  streak: number;
}

/** Formats seconds into MM:SS. */
function formatTime(seconds: number): string {
  const s = Math.max(0, seconds);
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

/** Formats unlock minutes into a compact string like "10m" or "1h 30m". */
function formatUnlockDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

export function TopBar({ secondsLeft, prefs, streak }: TopBarProps) {
  const isLow = secondsLeft <= 60 && secondsLeft > 0;
  const isCritical = secondsLeft <= 30 && secondsLeft > 0;
  const isExpired = secondsLeft <= 0;

  return (
    <header
      className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-surface px-5"
      role="banner"
    >
      {/* Wordmark */}
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-sm font-bold tracking-[0.2em] text-accent uppercase"
          aria-label="LeetLock"
        >
          LEETLOCK
        </span>
        <span className="hidden sm:inline-block h-4 w-px bg-border" aria-hidden="true" />
        <span className="hidden sm:inline-block font-mono text-[10px] text-faint uppercase tracking-wider">
          solve to unlock
        </span>
      </div>

      {/* Right meta strip */}
      <div className="flex items-center gap-4" role="group" aria-label="Challenge status">
        {/* Streak */}
        {streak > 0 && (
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1"
            aria-label={`${streak} day streak`}
          >
            <span className="font-mono text-[10px] text-faint uppercase tracking-wider">
              streak
            </span>
            <span className="font-mono text-sm font-semibold text-text tabular-nums">{streak}</span>
          </div>
        )}

        {/* Unlock reward */}
        {prefs && (
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1"
            aria-label={`Unlock reward: ${prefs.unlockDurationMin} minutes`}
          >
            <span className="font-mono text-[10px] text-faint uppercase tracking-wider">
              unlock
            </span>
            <span className="font-mono text-sm font-medium text-muted tabular-nums">
              {formatUnlockDuration(prefs.unlockDurationMin)}
            </span>
          </div>
        )}

        {/* Timer — always visible, prominent */}
        <div
          className={[
            'flex items-center gap-1.5 rounded-sm border px-3 py-1 transition-colors',
            isExpired
              ? 'border-accent bg-accent/10'
              : isCritical
                ? 'border-border-strong bg-surface-2'
                : isLow
                  ? 'border-border-strong'
                  : 'border-border',
          ].join(' ')}
          aria-label={`Time remaining: ${formatTime(secondsLeft)}`}
          aria-live="off"
        >
          <span className="font-mono text-[10px] text-faint uppercase tracking-wider">time</span>
          <span
            className={[
              'font-mono text-sm font-bold tabular-nums',
              isExpired ? 'text-accent' : isLow ? 'text-text' : 'text-muted',
              isCritical ? 'animate-pulse' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {formatTime(secondsLeft)}
          </span>
        </div>
      </div>
    </header>
  );
}

export { formatTime };
