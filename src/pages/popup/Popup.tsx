import { useEffect, useState } from 'react';
import { getValue, setValue, updateValue } from '../../lib/storage';
import type { StorageSchema } from '../../lib/storage';
import { extractDomain } from '../../lib/blocking';
import { pruneTokens } from '../../lib/unlock';
import { localDateString } from '../../lib/streak';
import { applyEditorFontSize, applyTheme } from '../../lib/theme';
import type {
  BlockRule,
  Difficulty,
  EditorKeymap,
  ProblemTag,
  SolvedProblemRecord,
  StreakDay,
  StreakSummary,
  ThemePreference,
  UnlockToken,
} from '../../lib/types';
import { DIFFICULTIES, PROBLEM_TAGS } from '../../lib/types';
import { getAllProblems } from '../../lib/problems';
import { computeSolvedStats } from './popup-helpers';
import type { SolvedStats } from './popup-helpers';

const BANK_SIZE = getAllProblems().length;

const KEYMAP_OPTIONS: ReadonlyArray<{ value: EditorKeymap; label: string }> = [
  { value: 'default', label: 'Default' },
  { value: 'vim', label: 'Vim' },
  { value: 'emacs', label: 'Emacs' },
];

const THEME_OPTIONS: ReadonlyArray<{ value: ThemePreference; label: string }> = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
];

const FONT_SIZE_OPTIONS: ReadonlyArray<{ value: number; label: string }> = [
  { value: 11, label: 'S' },
  { value: 13, label: 'M' },
  { value: 15, label: 'L' },
  { value: 17, label: 'XL' },
];

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
  streakHistory: readonly StreakDay[];
  activeUnlocks: UnlockToken[];
  solvedToday: number;
  solvedStats: SolvedStats;
  currentDomain: string | null;
  alreadyBlocked: boolean;
  blockedDomains: ReadonlySet<string>;
  theme: ThemePreference;
  editorFontSize: number;
  editorKeymap: EditorKeymap;
}

/**
 * Toolbar popup. Shows the streak, today's solves, active unlocks, and lets
 * the user block the current site in one click, switch theme + editor font
 * size, or open Settings.
 */
export function Popup() {
  const [data, setData] = useState<PopupData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const [streak, streakHistory, tokens, solved, blockedRules, prefs, tabs] = await Promise.all([
        safeGet('streakSummary'),
        safeGet('streakHistory'),
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
        streakHistory,
        activeUnlocks: pruneTokens(tokens),
        solvedToday,
        solvedStats: computeSolvedStats(solved),
        currentDomain,
        alreadyBlocked,
        blockedDomains,
        theme: prefs.theme,
        editorFontSize: prefs.editorFontSize,
        editorKeymap: prefs.editorKeymap,
      });
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, []);

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
      alreadyBlocked: data.currentDomain === lower ? true : data.alreadyBlocked,
    });
  }

  function handleOpenSettings(): void {
    try {
      void chrome.runtime.openOptionsPage();
    } catch {
      // Outside an extension context — silently ignore.
    }
  }

  async function handleThemeChange(next: ThemePreference): Promise<void> {
    if (!data || data.theme === next) return;
    applyTheme(next);
    setData({ ...data, theme: next });
    try {
      await updateValue('userPreferences', (curr) => ({ ...curr, theme: next }));
    } catch {
      // Storage unavailable — the visual change still applied for this session.
    }
  }

  async function handleFontSizeChange(next: number): Promise<void> {
    if (!data || data.editorFontSize === next) return;
    const applied = applyEditorFontSize(next);
    setData({ ...data, editorFontSize: applied });
    try {
      await updateValue('userPreferences', (curr) => ({ ...curr, editorFontSize: applied }));
    } catch {
      // Storage unavailable — the visual change still applied for this session.
    }
  }

  async function handleKeymapChange(next: EditorKeymap): Promise<void> {
    if (!data || data.editorKeymap === next) return;
    setData({ ...data, editorKeymap: next });
    try {
      await updateValue('userPreferences', (curr) => ({ ...curr, editorKeymap: next }));
    } catch {
      // Storage unavailable — preference change is in-session only.
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

      <StreakHeatmap history={data.streakHistory} />
      <SolveBreakdown stats={data.solvedStats} />

      {data.blockedDomains.size === 0 && (
        <section className="mt-5" aria-label="Quick start">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">
            Add a site to start
          </h2>
          <p className="mt-1 text-xs text-muted">
            Pick a distraction. You can change or remove these any time in Settings.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {FIRST_RUN_SUGGESTIONS.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => void addDomainRule(domain)}
                aria-label={`Block ${domain}`}
                className="rounded-sm border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                + {domain}
              </button>
            ))}
          </div>
        </section>
      )}

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

      <section
        className="mt-5 border-t border-border pt-4"
        role="radiogroup"
        aria-label="Theme"
      >
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">Theme</p>
        <div className="flex items-center gap-1">
          {THEME_OPTIONS.map((opt) => {
            const selected = data.theme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => void handleThemeChange(opt.value)}
                className={
                  selected
                    ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                    : 'flex-1 border border-border bg-bg px-3 py-1.5 text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                }
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-4" role="radiogroup" aria-label="Editor font size">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Editor font · {data.editorFontSize}px
        </p>
        <div className="flex items-center gap-1">
          {FONT_SIZE_OPTIONS.map((opt) => {
            const selected = data.editorFontSize === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={`Set editor font size to ${opt.value} pixels`}
                onClick={() => void handleFontSizeChange(opt.value)}
                className={
                  selected
                    ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 font-mono text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                    : 'flex-1 border border-border bg-bg px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                }
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-4" role="radiogroup" aria-label="Editor keymap">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Editor keymap
        </p>
        <div className="flex items-center gap-1">
          {KEYMAP_OPTIONS.map((opt) => {
            const selected = data.editorKeymap === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={`Set editor keymap to ${opt.label}`}
                onClick={() => void handleKeymapChange(opt.value)}
                className={
                  selected
                    ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 font-mono text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                    : 'flex-1 border border-border bg-bg px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
                }
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}

/** Grayscale contribution grid — last 12 weeks of solve activity. */
function StreakHeatmap({ history }: { history: readonly StreakDay[] }) {
  const WEEKS = 12;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Build a lookup from date string → solved count.
  const lookup = new Map<string, number>(history.map((d) => [d.date, d.solved]));

  // Collect WEEKS × 7 days ending today, starting from the most recent Monday.
  const cells: Array<{ date: string; count: number }> = [];
  // Start from WEEKS * 7 days ago.
  const start = new Date(today);
  start.setDate(today.getDate() - (WEEKS * 7 - 1));

  for (let i = 0; i < WEEKS * 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    cells.push({ date: key, count: lookup.get(key) ?? 0 });
  }

  // Split into columns of 7 days.
  const columns: Array<Array<{ date: string; count: number }>> = [];
  for (let w = 0; w < WEEKS; w++) {
    columns.push(cells.slice(w * 7, w * 7 + 7));
  }

  function cellClass(count: number): string {
    if (count === 0) return 'bg-surface';
    if (count === 1) return 'bg-border-strong';
    if (count === 2) return 'bg-muted';
    return 'bg-text';
  }

  return (
    <section className="mt-4" aria-label="Solve activity heatmap">
      <h2 className="font-mono text-[9px] uppercase tracking-widest text-faint">Activity</h2>
      <div className="mt-2 flex gap-0.5" role="grid" aria-label="Last 12 weeks">
        {columns.map((col, wi) => (
          <div key={wi} className="flex flex-col gap-0.5" role="row">
            {col.map(({ date, count }) => (
              <div
                key={date}
                role="gridcell"
                aria-label={`${date}: ${count} solve${count !== 1 ? 's' : ''}`}
                title={`${date}: ${count} solve${count !== 1 ? 's' : ''}`}
                className={`h-2 w-2 rounded-[1px] ${cellClass(count)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
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

/** Compact difficulty + top-tag breakdown for the popup. */
function SolveBreakdown({ stats }: { stats: SolvedStats }) {
  if (stats.total === 0) return null;
  const pct = Math.round((stats.total / BANK_SIZE) * 100);

  // Max count across difficulties — used to size the mini bars.
  const maxDiff = Math.max(1, ...DIFFICULTIES.map((d) => stats.byDifficulty[d]));

  // Tags the user has actually solved, sorted by count descending, capped at 5.
  const activeTags: Array<{ tag: ProblemTag; count: number }> = PROBLEM_TAGS.flatMap((tag) => {
    const count = stats.byTag[tag] ?? 0;
    return count > 0 ? [{ tag, count }] : [];
  })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const DIFF_LABEL: Record<Difficulty, string> = { easy: 'Easy', medium: 'Med', hard: 'Hard' };

  return (
    <section className="mt-4 border-t border-border pt-4" aria-label="Solved problem breakdown">
      <h2 className="font-mono text-[9px] uppercase tracking-widest text-faint">
        Breakdown · {stats.total}/{BANK_SIZE} solved ({pct}%)
      </h2>

      {/* Difficulty mini bars */}
      <div className="mt-2 space-y-1">
        {DIFFICULTIES.map((d) => {
          const count = stats.byDifficulty[d];
          const widthPct = count === 0 ? 0 : Math.max(4, Math.round((count / maxDiff) * 100));
          return (
            <div
              key={d}
              className="flex items-center gap-2"
              aria-label={`${DIFF_LABEL[d]}: ${count}`}
            >
              <span className="w-7 font-mono text-[9px] text-faint">{DIFF_LABEL[d]}</span>
              <div className="flex flex-1 items-center gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-surface">
                  <div
                    className="h-1.5 rounded-full bg-border-strong transition-all"
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
                <span className="w-4 text-right font-mono text-[9px] text-muted tabular-nums">
                  {count}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top tags */}
      {activeTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {activeTags.map(({ tag, count }) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-sm border border-border bg-surface px-1.5 py-0.5"
              aria-label={`${tag}: ${count} solved`}
            >
              <span className="font-mono text-[9px] text-muted">{tag}</span>
              <span className="font-mono text-[9px] text-faint tabular-nums">{count}</span>
            </span>
          ))}
        </div>
      )}
    </section>
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
