import { useEffect, useState } from 'react';
import { getValue, setValue, updateValue, STORAGE_DEFAULTS } from '../../lib/storage';
import type { StorageSchema, StorageKey } from '../../lib/storage';
import { extractDomain } from '../../lib/blocking';
import { pruneTokens } from '../../lib/unlock';
import { localDateString } from '../../lib/streak';
import { watchSystemTheme } from '../../lib/theme';
import wordmark from '../../../assets/leetmeowtextright.png';
import type {
  BlockRule,
  SolvedProblemRecord,
  StreakSummary,
  ThemePreference,
  UnlockToken,
  UserPreferences,
} from '../../lib/types';
import { ChallengeFilters } from './ChallengeFilters';

/** Common distractions surfaced as one-click adds on first run. */
const FIRST_RUN_SUGGESTIONS: readonly string[] = [
  'youtube.com',
  'reddit.com',
  'x.com',
  'instagram.com',
  'tiktok.com',
];

interface PopupData {
  streak: StreakSummary;
  activeUnlocks: UnlockToken[];
  solvedToday: number;
  currentDomain: string | null;
  alreadyBlocked: boolean;
  blockedDomains: ReadonlySet<string>;
  theme: ThemePreference;
  prefs: UserPreferences;
}

/**
 * Toolbar popup. Shows the streak, today's solves, active unlocks, and lets
 * the user block the current site in one click, switch theme + editor font
 * size, or open Settings.
 */
export function Popup() {
  const [data, setData] = useState<PopupData | null>(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const [streak, tokens, solved, blockedRules, prefs, tabs] = await Promise.all([
        safeGet('streakSummary'),
        safeGet('unlockTokens'),
        safeGet('solvedProblems'),
        safeGet('blockedRules'),
        safeGet('userPreferences'),
        safeQueryActiveTab(),
      ]);

      const url = tabs?.[0]?.url ?? null;
      const currentDomain = url ? extractDomain(url) : null;
      const alreadyBlocked = currentDomain
        ? blockedRules.some(
            (rule) => rule.kind === 'domain' && rule.pattern.toLowerCase() === currentDomain,
          )
        : false;

      const today = localDateString();
      const solvedToday = solved.filter(
        (record: SolvedProblemRecord) => localDateString(new Date(record.solvedAt)) === today,
      ).length;

      const blockedDomains = new Set(
        blockedRules
          .filter((rule) => rule.kind === 'domain')
          .map((rule) => rule.pattern.toLowerCase()),
      );

      if (cancelled) return;
      setData({
        streak,
        activeUnlocks: pruneTokens(tokens),
        solvedToday,
        currentDomain,
        alreadyBlocked,
        blockedDomains,
        theme: prefs.theme,
        prefs,
      });
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, []);

  // Watch OS dark/light changes so "system" theme updates the popup live.
  useEffect(() => {
    if (!data) return;
    return watchSystemTheme(() => data.theme);
  }, [data?.theme]);

  async function handleBlock(): Promise<void> {
    if (!data || !data.currentDomain || data.alreadyBlocked) return;
    await addDomainRule(data.currentDomain);
  }

  async function addDomainRule(domain: string): Promise<void> {
    if (!data) return;
    const lower = domain.toLowerCase();
    if (data.blockedDomains.has(lower)) return;
    const rules = await getValue('blockedRules');
    const rule: BlockRule = {
      id: `r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      kind: 'domain',
      pattern: lower,
      enabled: true,
      createdAt: Date.now(),
    };
    await setValue('blockedRules', [...rules, rule]);
    const nextDomains = new Set(data.blockedDomains);
    nextDomains.add(lower);
    setData({
      ...data,
      blockedDomains: nextDomains,
      alreadyBlocked: data.currentDomain === lower || data.alreadyBlocked,
    });
  }

  // Persist a preferences patch (problem filters) and reflect it locally so the
  // dropdowns update immediately. Uses updateValue's read-modify-write so we
  // never clobber other preference fields.
  async function updatePrefs(patch: Partial<UserPreferences>): Promise<void> {
    setData((d) => (d ? { ...d, prefs: { ...d.prefs, ...patch } } : d));
    try {
      await updateValue('userPreferences', (curr) => ({ ...curr, ...patch }));
    } catch {
      // Outside an extension context — local state already reflects the change.
    }
  }

  function handleOpenSettings(): void {
    try {
      void chrome.runtime.openOptionsPage();
    } catch {
      // Outside an extension context — silently ignore.
    }
  }

  function handlePracticeNow(): void {
    try {
      void chrome.tabs.create({
        url: chrome.runtime.getURL('src/pages/challenge/index.html'),
      });
    } catch {
      // Outside an extension context — silently ignore.
    }
  }

  function handleOpenDashboard(): void {
    try {
      void chrome.tabs.create({
        url: chrome.runtime.getURL('src/pages/dashboard/index.html'),
      });
    } catch {
      // Outside an extension context — silently ignore.
    }
  }

  if (data === null) {
    return (
      <main className="min-w-[340px] overflow-x-hidden bg-bg p-5 text-text">
        <p className="font-mono text-[10px] text-faint">Loading…</p>
      </main>
    );
  }

  const blockLabel = !data.currentDomain
    ? 'No site to block'
    : data.alreadyBlocked
      ? `${data.currentDomain} is already blocked`
      : `Block ${data.currentDomain}`;

  return (
    <main className="min-w-[340px] overflow-x-hidden bg-bg p-5 text-text">
      <header className="flex items-center justify-between">
        <span
          role="img"
          aria-label="LeetMeow"
          className="wordmark-leetmeow inline-block h-6 w-[84px] select-none"
          style={{ WebkitMaskImage: `url(${wordmark})`, maskImage: `url(${wordmark})` }}
        />
        <time
          className="font-mono text-[10px] text-faint"
          dateTime={localDateString()}
          aria-label="Today's date"
        >
          {localDateString()}
        </time>
      </header>

      {/* Hero CTA */}
      <button
        type="button"
        onClick={handlePracticeNow}
        className="mt-4 w-full rounded-md border border-brand bg-brand px-3 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        Practice now
      </button>

      {/* Block current site */}
      <button
        type="button"
        onClick={() => void handleBlock()}
        disabled={!data.currentDomain || data.alreadyBlocked}
        className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {blockLabel}
      </button>

      {/* Compact summary strip */}
      <section
        className="mt-5 flex divide-x divide-border overflow-hidden rounded-md border border-border bg-surface"
        aria-label="Summary"
      >
        <Stat label="Streak" value={data.streak.current} sub={`best ${data.streak.longest}`} />
        <Stat label="Today" value={data.solvedToday} sub="solves" />
        <Stat label="Unlocks" value={data.activeUnlocks.length} sub="active" />
      </section>

      {data.streak.current > 0 &&
        data.solvedToday === 0 &&
        data.streak.lastSolvedDate !== null &&
        data.streak.lastSolvedDate !== localDateString() && (
          <p
            className="mt-2 font-mono text-[9px] text-muted"
            role="status"
            aria-live="polite"
          >
            Solve a problem today to keep your {data.streak.current}-day streak.
          </p>
        )}

      {/* Active unlocks */}
      {data.activeUnlocks.length > 0 && (
        <section className="mt-5">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">
            Active unlocks
          </h2>
          <ul className="mt-2 space-y-1.5">
            {data.activeUnlocks.slice(0, 4).map((token) => {
              const pctLeft = Math.max(0, Math.min(100, ((token.expiresAt - now) / token.durationMs) * 100));
              const minsLeft = minutesLeft(token, now);
              return (
              <li key={token.domain}>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      void chrome.tabs.create({ url: `https://${token.domain}` });
                    } catch {
                      // Outside extension context — silently ignore.
                    }
                  }}
                  aria-label={`Visit ${token.domain} (${minsLeft} minutes left)`}
                  className="relative flex w-full flex-col overflow-hidden rounded-md border border-border bg-surface px-3 pb-1 pt-2 text-xs transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate font-mono text-text">{token.domain}</span>
                    <span className="ml-2 shrink-0 font-mono text-muted tabular-nums">
                      {minsLeft}m left
                    </span>
                  </div>
                  <div className="mt-1.5 h-px w-full bg-surface-2" aria-hidden="true">
                    <div
                      className="h-px bg-border-strong transition-all duration-1000"
                      style={{ width: `${pctLeft}%` }}
                    />
                  </div>
                </button>
              </li>
              );
            })}
            {data.activeUnlocks.length > 4 && (
              <li className="font-mono text-[10px] text-faint px-1">
                +{data.activeUnlocks.length - 4} more
              </li>
            )}
          </ul>
        </section>
      )}

      {/* First-run suggestions */}
      {data.blockedDomains.size === 0 && (
        <section className="mt-5" aria-label="Quick start">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">
            Add a site to start
          </h2>
          <p className="mt-1 text-xs text-muted">
            Pick a distraction. Change or remove these any time in Settings.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {FIRST_RUN_SUGGESTIONS.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => void addDomainRule(domain)}
                aria-label={`Block ${domain}`}
                className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                + {domain}
              </button>
            ))}
          </div>
        </section>
      )}

      <ChallengeFilters prefs={data.prefs} onChange={updatePrefs} />

      {/* Secondary navigation */}
      <div className="mt-5 flex gap-2 border-t border-border pt-4">
        <button
          type="button"
          onClick={handleOpenDashboard}
          className="flex-1 rounded-md border border-border-strong bg-surface px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          Dashboard
        </button>
        <button
          type="button"
          onClick={handleOpenSettings}
          className="flex-1 rounded-md border border-border bg-bg px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          Settings
        </button>
      </div>

      <div className="mt-3 text-center">
        <a
          href="https://ko-fi.com/leetmeow"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-text"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" fill="currentColor"/>
          </svg>
          Support LeetMeow on Ko-fi
        </a>
      </div>
    </main>
  );
}

function Stat({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="flex-1 px-3 py-2">
      <p className="font-mono text-[9px] uppercase tracking-widest text-faint">{label}</p>
      <p className="mt-0.5 flex items-baseline gap-1 leading-none">
        <span className="text-lg font-semibold tracking-tight text-text tabular-nums">{value}</span>
        <span className="font-mono text-[9px] text-faint">{sub}</span>
      </p>
    </div>
  );
}

function minutesLeft(token: UnlockToken, now: number = Date.now()): number {
  return Math.max(0, Math.ceil((token.expiresAt - now) / 60_000));
}

async function safeGet<K extends StorageKey>(
  key: K,
): Promise<StorageSchema[K]> {
  try {
    return await getValue(key);
  } catch {
    // The popup is opened outside an extension context (e.g. preview) — return
    // a deep-cloned empty default so the UI can still render.
    return structuredClone(STORAGE_DEFAULTS[key]);
  }
}

async function safeQueryActiveTab(): Promise<chrome.tabs.Tab[] | null> {
  try {
    return await chrome.tabs.query({ active: true, currentWindow: true });
  } catch {
    return null;
  }
}
