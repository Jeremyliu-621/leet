import { useEffect, useState } from 'react';
import { getValue, setValue } from '../../lib/storage';
import type { StorageSchema } from '../../lib/storage';
import { extractDomain } from '../../lib/blocking';
import { pruneTokens } from '../../lib/unlock';
import { localDateString } from '../../lib/streak';
import type {
  BlockRule,
  SolvedProblemRecord,
  StreakSummary,
  UnlockToken,
} from '../../lib/types';

interface PopupData {
  streak: StreakSummary;
  activeUnlocks: UnlockToken[];
  solvedToday: number;
  currentDomain: string | null;
  alreadyBlocked: boolean;
}

/**
 * Toolbar popup. Shows the streak, today's solves, active unlocks, and lets
 * the user block the current site in one click or open Settings.
 */
export function Popup() {
  const [data, setData] = useState<PopupData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const [streak, tokens, solved, blockedRules, tabs] = await Promise.all([
        safeGet('streakSummary'),
        safeGet('unlockTokens'),
        safeGet('solvedProblems'),
        safeGet('blockedRules'),
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

      if (cancelled) return;
      setData({
        streak,
        activeUnlocks: pruneTokens(tokens),
        solvedToday,
        currentDomain,
        alreadyBlocked,
      });
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleBlock(): Promise<void> {
    if (!data || !data.currentDomain || data.alreadyBlocked) return;
    const rules = await getValue('blockedRules');
    const rule: BlockRule = {
      id: `r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      kind: 'domain',
      pattern: data.currentDomain,
      enabled: true,
      createdAt: Date.now(),
    };
    await setValue('blockedRules', [...rules, rule]);
    setData({ ...data, alreadyBlocked: true });
  }

  function handleOpenSettings(): void {
    try {
      void chrome.runtime.openOptionsPage();
    } catch {
      // Outside an extension context — silently ignore.
    }
  }

  if (data === null) {
    return (
      <main className="min-w-[340px] bg-bg p-5 text-text">
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
    <main className="min-w-[340px] bg-bg p-5 text-text">
      <header className="flex items-baseline justify-between">
        <h1 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">LeetLock</h1>
        <span className="font-mono text-[10px] text-faint" aria-label="Today's date">
          {localDateString()}
        </span>
      </header>

      <section className="mt-4 grid grid-cols-3 gap-2">
        <Stat label="Streak" value={data.streak.current} sub={`best ${data.streak.longest}`} />
        <Stat label="Today" value={data.solvedToday} sub="solves" />
        <Stat label="Unlocks" value={data.activeUnlocks.length} sub="active" />
      </section>

      <section className="mt-5">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">
          Active unlocks
        </h2>
        {data.activeUnlocks.length === 0 ? (
          <p className="mt-2 text-xs text-muted">None.</p>
        ) : (
          <ul className="mt-2 space-y-1.5">
            {data.activeUnlocks.slice(0, 4).map((token) => (
              <li
                key={token.domain}
                className="flex items-center justify-between border border-border bg-surface px-3 py-2 text-xs"
              >
                <span className="truncate font-mono text-text">{token.domain}</span>
                <span className="ml-2 shrink-0 font-mono text-muted tabular-nums">
                  {minutesLeft(token)}m left
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-5 space-y-2">
        <button
          type="button"
          onClick={() => void handleBlock()}
          disabled={!data.currentDomain || data.alreadyBlocked}
          className="w-full border border-border-strong bg-surface px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {blockLabel}
        </button>
        <button
          type="button"
          onClick={handleOpenSettings}
          className="w-full border border-border bg-bg px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          Open settings
        </button>
      </section>
    </main>
  );
}

function Stat({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="border border-border bg-surface px-3 py-3">
      <p className="font-mono text-[9px] uppercase tracking-widest text-faint">{label}</p>
      <p className="mt-1 text-xl font-semibold tracking-tight text-text tabular-nums">{value}</p>
      <p className="mt-0.5 font-mono text-[9px] text-faint">{sub}</p>
    </div>
  );
}

function minutesLeft(token: UnlockToken, now: number = Date.now()): number {
  return Math.max(0, Math.ceil((token.expiresAt - now) / 60_000));
}

async function safeGet<K extends Parameters<typeof getValue>[0]>(
  key: K,
): Promise<StorageSchema[K]> {
  try {
    return await getValue(key);
  } catch {
    // The popup is opened outside an extension context (e.g. preview) — return
    // a deep-cloned empty default by re-fetching once chrome is wired.
    throw new Error(`LeetLock: failed to read "${key}" from storage`);
  }
}

async function safeQueryActiveTab(): Promise<chrome.tabs.Tab[] | null> {
  try {
    return await chrome.tabs.query({ active: true, currentWindow: true });
  } catch {
    return null;
  }
}
