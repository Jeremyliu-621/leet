import { useRef, useEffect } from 'react';
import type { UserPreferences } from '../../../lib/types';
import { formatCountdown } from '../challenge-helpers';
import { RunActions } from './RunActions';

interface TopBarProps {
  /** Seconds remaining on the countdown timer. */
  secondsLeft: number;
  prefs: UserPreferences | null;
  streak: number;
  /** True when there is no blocked target URL — standalone practice mode. */
  practiceMode?: boolean;
  /** URL to navigate back to settings (problem browser). Only shown in practice mode. */
  settingsHref?: string;
  /** The domain being unlocked in gate mode (e.g. 'youtube.com'). */
  targetDomain?: string | null;
  /** Number of submit attempts made so far this session (0 = none yet). */
  attempts?: number;
  /**
   * Run/Submit wiring. When `onRun` and `onSubmit` are provided, a centered
   * Run/Submit action cluster renders in the middle of the bar (LeetCode-style).
   */
  onRun?: () => void;
  onSubmit?: () => void;
  isRunning?: boolean;
  verdictMode?: 'run' | 'submit';
  attemptsRemaining?: number | null;
}

/** Formats unlock minutes into a compact string like "10m" or "1h 30m". */
function formatUnlockDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

export function TopBar({ secondsLeft, prefs, streak, practiceMode = false, settingsHref, targetDomain, attempts = 0, onRun, onSubmit, isRunning = false, verdictMode = 'run', attemptsRemaining = null }: TopBarProps) {
  const isWarning = secondsLeft <= 120 && secondsLeft > 60;
  const isLow = secondsLeft <= 60 && secondsLeft > 0;
  const isCritical = secondsLeft <= 30 && secondsLeft > 0;
  const isExpired = secondsLeft <= 0;

  const announcedRef = useRef<Set<number>>(new Set());
  const liveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thresholds = [120, 60, 30, 10];
    for (const t of thresholds) {
      if (secondsLeft <= t && !announcedRef.current.has(t) && secondsLeft > 0) {
        announcedRef.current.add(t);
        if (liveRef.current) liveRef.current.textContent = `${t} seconds remaining`;
      }
    }
    if (secondsLeft <= 0 && !announcedRef.current.has(0)) {
      announcedRef.current.add(0);
      if (liveRef.current) liveRef.current.textContent = 'Time is up';
    }
  }, [secondsLeft]);

  return (
    <header
      className="relative flex h-12 shrink-0 items-center justify-between border-b border-border bg-surface px-5"
      role="banner"
    >
      {/* Screen-reader-only threshold announcements */}
      <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

      {/* Centered Run / Submit cluster — LeetCode-style, absolutely centered so
          it stays put regardless of the left/right strip widths. */}
      {onRun && onSubmit && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center sm:flex">
          <div className="pointer-events-auto">
            <RunActions
              onRun={onRun}
              onSubmit={onSubmit}
              isRunning={isRunning}
              verdictMode={verdictMode}
              attemptsRemaining={attemptsRemaining}
            />
          </div>
        </div>
      )}
      {/* Wordmark */}
      <div className="flex items-center gap-3">
        {settingsHref && (
          <a
            href={settingsHref}
            className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-faint uppercase tracking-wider transition-colors hover:text-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            aria-label="Back to settings"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M7 5H3M3 5L5.5 2.5M3 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            settings
          </a>
        )}
        {settingsHref && (
          <span className="hidden sm:inline-block h-4 w-px bg-border" aria-hidden="true" />
        )}
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-accent uppercase">
          LEETLOCK
        </span>
        <span className="hidden sm:inline-block h-4 w-px bg-border" aria-hidden="true" />
        <span className="hidden sm:inline-block font-mono text-[10px] text-faint uppercase tracking-wider">
          {practiceMode
            ? 'practice mode'
            : targetDomain
              ? `unlock ${targetDomain}`
              : 'solve to unlock'}
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

        {/* Attempt counter — shown after the first submit */}
        {attempts > 0 && (
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1"
            aria-label={`Attempt ${attempts}`}
          >
            <span className="font-mono text-[10px] text-faint uppercase tracking-wider">
              attempt
            </span>
            <span className="font-mono text-sm font-semibold text-text tabular-nums">{attempts}</span>
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
            'flex items-center gap-1.5 rounded-sm border px-3 py-1 transition-colors duration-500',
            isExpired
              ? 'border-accent bg-accent/10'
              : isCritical
                ? 'border-border-strong bg-surface-2'
                : isLow
                  ? 'border-border-strong'
                  : isWarning
                    ? 'border-border bg-surface-2/50'
                    : 'border-border',
          ].join(' ')}
          aria-label={`Time remaining: ${formatCountdown(secondsLeft)}`}
          aria-live="off"
        >
          <span className="font-mono text-[10px] text-faint uppercase tracking-wider">time</span>
          <span
            className={[
              'font-mono text-sm font-bold tabular-nums transition-colors duration-500',
              isExpired ? 'text-accent' : isLow ? 'text-text' : isWarning ? 'text-text' : 'text-muted',
              isCritical ? 'motion-safe:animate-pulse' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {formatCountdown(secondsLeft)}
          </span>
        </div>
      </div>
    </header>
  );
}

