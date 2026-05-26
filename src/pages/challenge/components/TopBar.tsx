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
  const isExpired = secondsLeft <= 0;

  return (
    <header
      className="flex h-11 shrink-0 items-center justify-between border-b border-border bg-surface px-5"
      role="banner"
    >
      {/* Wordmark */}
      <span
        className="font-mono text-sm font-semibold tracking-widest text-accent uppercase"
        aria-hidden="true"
      >
        LEETLOCK
      </span>

      {/* Right meta strip */}
      <div className="flex items-center gap-5" role="group" aria-label="Challenge status">
        {/* Streak */}
        {streak > 0 && (
          <div className="flex items-center gap-1.5" aria-label={`${streak} day streak`}>
            <span className="font-mono text-xs text-faint uppercase tracking-wider">streak</span>
            <span className="font-mono text-sm font-semibold text-text">{streak}</span>
          </div>
        )}

        {/* Unlock reward */}
        {prefs && (
          <div
            className="flex items-center gap-1.5"
            aria-label={`Unlock reward: ${prefs.unlockDurationMin} minutes`}
          >
            <span className="font-mono text-xs text-faint uppercase tracking-wider">unlock</span>
            <span className="font-mono text-sm font-medium text-muted">
              {formatUnlockDuration(prefs.unlockDurationMin)}
            </span>
          </div>
        )}

        {/* Timer */}
        <div
          className="flex items-center gap-1.5"
          aria-label={`Time remaining: ${formatTime(secondsLeft)}`}
          aria-live="off"
        >
          <span className="font-mono text-xs text-faint uppercase tracking-wider">time</span>
          <span
            className={[
              'font-mono text-sm font-semibold tabular-nums',
              isExpired ? 'text-accent' : isLow ? 'text-text' : 'text-muted',
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
