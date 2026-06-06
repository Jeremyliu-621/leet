import { useRef, useEffect } from 'react';
import type { UserPreferences } from '../../../lib/types';
import { formatCountdown } from '../challenge-helpers';
import { RunActions } from './RunActions';
import wordmark from '../../../../assets/leetmeowtextright.png';

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

export function TopBar({ secondsLeft, prefs, streak, settingsHref, attempts = 0, onRun, onSubmit, isRunning = false, verdictMode = 'run', attemptsRemaining = null }: TopBarProps) {
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
      className="relative flex h-11 shrink-0 items-center justify-between px-5"
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
        <span
          role="img"
          aria-label="LeetMeow"
          className="wordmark-leetmeow inline-block h-6 w-[84px] select-none"
          style={{ WebkitMaskImage: `url(${wordmark})`, maskImage: `url(${wordmark})` }}
        />
      </div>

      {/* Right meta strip */}
      <div className="flex items-center gap-2" role="group" aria-label="Challenge status">
        {/* Streak */}
        {streak > 0 && (
          <div
            className="hidden lg:flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1"
            aria-label={`${streak} day streak`}
            title={`${streak}-day streak`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-warning" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177A7.547 7.547 0 0 1 6.648 6.61a.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <span className="font-mono text-sm font-semibold text-text tabular-nums">{streak}</span>
          </div>
        )}

        {/* Attempt counter — shown after the first submit */}
        {attempts > 0 && (
          <div
            className="hidden xl:flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1"
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
            className="hidden lg:flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1"
            aria-label={`Unlock reward: ${prefs.unlockDurationMin} minutes`}
            title="Unlock reward"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="text-muted" aria-hidden="true">
              <rect x="3.5" y="7.3" width="9" height="6" rx="1.2" />
              <path d="M5.6 7.3V5.1a2.4 2.4 0 0 1 4.7-.6" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-sm font-medium text-muted tabular-nums">
              {formatUnlockDuration(prefs.unlockDurationMin)}
            </span>
          </div>
        )}

        {/* Timer — always visible, prominent. Color escalates with urgency:
            calm (neutral) → amber (last 2 min) → red (last 30 s / expired). */}
        <div
          className={[
            'flex items-center gap-1.5 rounded-md border px-3 py-1 transition-colors duration-500',
            isExpired || isCritical
              ? 'border-error bg-error-bg'
              : isLow
                ? 'border-warning bg-warning-bg'
                : 'border-border',
          ].join(' ')}
          aria-label={`Time remaining: ${formatCountdown(secondsLeft)}`}
          aria-live="off"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={[
              'transition-colors duration-500',
              isExpired || isCritical ? 'text-error' : isLow ? 'text-warning' : 'text-faint',
            ].join(' ')}
          >
            <line x1="10" x2="14" y1="2" y2="2" />
            <line x1="12" x2="15" y1="14" y2="11" />
            <circle cx="12" cy="14" r="8" />
          </svg>
          <span
            className={[
              'font-mono text-sm font-bold tabular-nums transition-colors duration-500',
              isExpired || isCritical ? 'text-error' : isLow || isWarning ? 'text-warning' : 'text-muted',
              isCritical || isExpired ? 'motion-safe:animate-pulse' : '',
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

