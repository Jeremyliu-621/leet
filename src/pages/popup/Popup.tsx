import { useCallback, useEffect, useRef, useState } from 'react';
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
  SupportedLanguage,
  ThemePreference,
  UnlockToken,
} from '../../lib/types';
import { DIFFICULTIES, PROBLEM_TAGS } from '../../lib/types';
import { getAllProblems } from '../../lib/problems';
import { computeSolvedStats } from './popup-helpers';
import type { SolvedStats } from './popup-helpers';

const ALL_PROBLEMS = getAllProblems();
const BANK_SIZE = ALL_PROBLEMS.length;

const PROBLEM_TITLE_BY_ID: ReadonlyMap<string, { title: string; difficulty: Difficulty }> = new Map(
  ALL_PROBLEMS.map((p) => [p.id, { title: p.title, difficulty: p.difficulty }]),
);

const BANK_SIZE_BY_DIFF: Readonly<Record<Difficulty, number>> = {
  easy: ALL_PROBLEMS.filter((p) => p.difficulty === 'easy').length,
  medium: ALL_PROBLEMS.filter((p) => p.difficulty === 'medium').length,
  hard: ALL_PROBLEMS.filter((p) => p.difficulty === 'hard').length,
};

const BANK_SIZE_BY_TAG: Readonly<Record<ProblemTag, number>> = (() => {
  const counts: Partial<Record<ProblemTag, number>> = {};
  for (const p of ALL_PROBLEMS) {
    for (const t of p.tags) counts[t] = (counts[t] ?? 0) + 1;
  }
  return counts as Record<ProblemTag, number>;
})();

const LANGUAGE_OPTIONS: ReadonlyArray<{ value: SupportedLanguage; label: string }> = [
  { value: 'javascript', label: 'JS' },
  { value: 'typescript', label: 'TS' },
  { value: 'python', label: 'Py' },
];

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

interface RecentSolve {
  problemId: string;
  title: string;
  difficulty: Difficulty;
  solvedAt: number;
}

interface PopupData {
  streak: StreakSummary;
  streakHistory: readonly StreakDay[];
  activeUnlocks: UnlockToken[];
  solvedToday: number;
  solvedStats: SolvedStats;
  recentSolves: readonly RecentSolve[];
  currentDomain: string | null;
  alreadyBlocked: boolean;
  blockedDomains: ReadonlySet<string>;
  theme: ThemePreference;
  editorFontSize: number;
  editorKeymap: EditorKeymap;
  preferredLanguage: SupportedLanguage;
}

/**
 * Accessible radio-button group.
 * - Only the selected option is in the tab order (tabIndex=0); others are -1.
 * - Arrow keys cycle through options and move focus automatically.
 */
function RadioGroup<T extends string | number>({
  options,
  value,
  onChange,
  buttonClass,
  wrapClass = 'flex items-center gap-1',
}: {
  options: readonly { value: T; label: string; ariaLabel?: string }[];
  value: T;
  onChange: (v: T) => void;
  buttonClass: (selected: boolean) => string;
  wrapClass?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const idx = options.findIndex((o) => o.value === value);
      let next: number;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = (idx + 1) % options.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = (idx - 1 + options.length) % options.length;
      } else return;
      e.preventDefault();
      onChange(options[next]!.value);
      const radios = containerRef.current?.querySelectorAll<HTMLElement>('[role="radio"]');
      radios?.[next]?.focus();
    },
    [options, value, onChange],
  );

  return (
    <div ref={containerRef} className={wrapClass}>
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <button
            key={String(opt.value)}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={opt.ariaLabel}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(opt.value)}
            onKeyDown={handleKeyDown}
            className={buttonClass(selected)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
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

      // Last 5 unique solves (most recent first, deduplicated by problemId).
      const seenIds = new Set<string>();
      const recentSolves: RecentSolve[] = [];
      for (const record of [...solved].reverse()) {
        if (seenIds.has(record.problemId)) continue;
        seenIds.add(record.problemId);
        const meta = PROBLEM_TITLE_BY_ID.get(record.problemId);
        if (meta)
          recentSolves.push({
            problemId: record.problemId,
            title: meta.title,
            difficulty: meta.difficulty,
            solvedAt: record.solvedAt,
          });
        if (recentSolves.length >= 5) break;
      }

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
        recentSolves,
        currentDomain,
        alreadyBlocked,
        blockedDomains,
        theme: prefs.theme,
        editorFontSize: prefs.editorFontSize,
        editorKeymap: prefs.editorKeymap,
        preferredLanguage: prefs.preferredLanguage,
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

  function handlePracticeNow(): void {
    try {
      void chrome.tabs.create({
        url: chrome.runtime.getURL('src/pages/challenge/index.html'),
      });
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

  async function handleLanguageChange(next: SupportedLanguage): Promise<void> {
    if (!data || data.preferredLanguage === next) return;
    setData({ ...data, preferredLanguage: next });
    try {
      await updateValue('userPreferences', (curr) => ({ ...curr, preferredLanguage: next }));
    } catch {
      // Storage unavailable — preference change is in-session only.
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
      <RecentSolvesList solves={data.recentSolves} />

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
                  className="relative flex w-full flex-col overflow-hidden border border-border bg-surface px-3 pb-1 pt-2 text-xs transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
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
                +{data.activeUnlocks.length - 4} more · see Settings
              </li>
            )}
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
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePracticeNow}
            className="flex-1 border border-accent bg-accent px-3 py-2 text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            Practice now
          </button>
          <button
            type="button"
            onClick={handleOpenSettings}
            className="flex-1 border border-border bg-bg px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            Settings
          </button>
        </div>
      </section>

      <section className="mt-5 border-t border-border pt-4" role="radiogroup" aria-label="Theme">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">Theme</p>
        <RadioGroup
          options={THEME_OPTIONS}
          value={data.theme}
          onChange={(v) => void handleThemeChange(v)}
          buttonClass={(s) =>
            s
              ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
              : 'flex-1 border border-border bg-bg px-3 py-1.5 text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
          }
        />
      </section>

      <section className="mt-4" role="radiogroup" aria-label="Editor font size">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Editor font · {data.editorFontSize}px
        </p>
        <RadioGroup
          options={FONT_SIZE_OPTIONS.map((o) => ({
            ...o,
            ariaLabel: `Set editor font size to ${o.value} pixels`,
          }))}
          value={data.editorFontSize}
          onChange={(v) => void handleFontSizeChange(v)}
          buttonClass={(s) =>
            s
              ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 font-mono text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
              : 'flex-1 border border-border bg-bg px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
          }
        />
      </section>

      <section className="mt-4" role="radiogroup" aria-label="Default language">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Default language
        </p>
        <RadioGroup
          options={LANGUAGE_OPTIONS.map((o) => ({
            ...o,
            ariaLabel: `Set default language to ${o.label}`,
          }))}
          value={data.preferredLanguage}
          onChange={(v) => void handleLanguageChange(v)}
          wrapClass="flex flex-wrap items-center gap-1"
          buttonClass={(s) =>
            s
              ? 'border border-border-strong bg-surface-2 px-2 py-1 font-mono text-[10px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
              : 'border border-border bg-bg px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
          }
        />
      </section>

      <section className="mt-4" role="radiogroup" aria-label="Editor keymap">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Editor keymap
        </p>
        <RadioGroup
          options={KEYMAP_OPTIONS.map((o) => ({
            ...o,
            ariaLabel: `Set editor keymap to ${o.label}`,
          }))}
          value={data.editorKeymap}
          onChange={(v) => void handleKeymapChange(v)}
          buttonClass={(s) =>
            s
              ? 'flex-1 border border-border-strong bg-surface-2 px-3 py-1.5 font-mono text-[11px] font-medium text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
              : 'flex-1 border border-border bg-bg px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:bg-surface hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent'
          }
        />
      </section>
    </main>
  );
}

const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/** Grayscale contribution grid — last 12 weeks of solve activity. */
function StreakHeatmap({ history }: { history: readonly StreakDay[] }) {
  const WEEKS = 12;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Build a lookup from date string → solved count.
  const lookup = new Map<string, number>(history.map((d) => [d.date, d.solved]));

  // Collect WEEKS × 7 days ending today, starting from the most recent Monday.
  const cells: Array<{ date: string; count: number; month: number; day: number }> = [];
  const start = new Date(today);
  start.setDate(today.getDate() - (WEEKS * 7 - 1));

  for (let i = 0; i < WEEKS * 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    cells.push({ date: key, count: lookup.get(key) ?? 0, month: d.getMonth(), day: d.getDate() });
  }

  // Split into columns of 7 days.
  const columns: Array<Array<{ date: string; count: number; month: number; day: number }>> = [];
  for (let w = 0; w < WEEKS; w++) {
    columns.push(cells.slice(w * 7, w * 7 + 7));
  }

  // Compute month label for each column: show abbreviated month name when the
  // first day of a new month falls within this column.
  const monthLabels: (string | null)[] = columns.map((col) => {
    for (const cell of col) {
      if (cell.day === 1) return MONTH_ABBR[cell.month] ?? null;
    }
    return null;
  });
  // Always show the first column's month.
  if (monthLabels[0] === null) {
    monthLabels[0] = MONTH_ABBR[columns[0]?.[0]?.month ?? 0] ?? null;
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
      <div className="mt-2 overflow-x-auto">
        {/* Month labels row */}
        <div className="flex gap-0.5 mb-0.5" aria-hidden="true">
          {columns.map((_, wi) => (
            <div key={wi} className="w-2 shrink-0">
              {monthLabels[wi] ? (
                <span className="font-mono text-[7px] leading-none text-faint">{monthLabels[wi]}</span>
              ) : null}
            </div>
          ))}
        </div>
        {/* Cell grid */}
        <div className="flex gap-0.5" aria-label="Last 12 weeks of solve activity">
          {columns.map((col, wi) => (
            <div key={wi} className="flex flex-col gap-0.5" aria-hidden="true">
              {col.map(({ date, count }) => (
                <div
                  key={date}
                  title={`${date}: ${count} solve${count !== 1 ? 's' : ''}`}
                  className={`h-2 w-2 rounded-[1px] ${cellClass(count)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Screen-reader summary of activity range */}
      <p className="sr-only">
        {cells.filter((c) => c.count > 0).length} active days in the last 12 weeks.{' '}
        Total solves: {cells.reduce((s, c) => s + c.count, 0)}.
      </p>
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
          const total = BANK_SIZE_BY_DIFF[d];
          const widthPct = count === 0 ? 0 : Math.max(4, Math.round((count / total) * 100));
          return (
            <div
              key={d}
              className="flex items-center gap-2"
              aria-label={`${DIFF_LABEL[d]}: ${count} of ${total} solved`}
            >
              <span className="w-7 font-mono text-[9px] text-faint">{DIFF_LABEL[d]}</span>
              <div className="flex flex-1 items-center gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-surface">
                  <div
                    className="h-1.5 rounded-full bg-border-strong transition-all"
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
                <span className="w-12 text-right font-mono text-[9px] text-muted tabular-nums">
                  {count}/{total}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top tags with solved/total */}
      {activeTags.length > 0 && (
        <div className="mt-3 space-y-1">
          {activeTags.map(({ tag, count }) => {
            const total = BANK_SIZE_BY_TAG[tag] ?? 1;
            const widthPct = Math.max(2, Math.round((count / total) * 100));
            return (
              <div
                key={tag}
                className="flex items-center gap-2"
                aria-label={`${tag}: ${count} of ${total} solved`}
              >
                <span className="w-20 shrink-0 font-mono text-[9px] text-faint truncate">{tag}</span>
                <div className="flex flex-1 items-center gap-1.5">
                  <div className="h-1 flex-1 rounded-full bg-surface">
                    <div
                      className="h-1 rounded-full bg-border-strong transition-all"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-[9px] text-faint tabular-nums">
                    {count}/{total}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

/** Last 5 recently-solved problems, shown below the breakdown stats. */
function RecentSolvesList({ solves }: { solves: readonly RecentSolve[] }) {
  if (solves.length === 0) return null;

  function timeAgo(ts: number): string {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60_000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(diff / 3_600_000);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(diff / 86_400_000)}d ago`;
  }

  function openProblem(problemId: string): void {
    try {
      const base = chrome.runtime.getURL('src/pages/challenge/index.html');
      void chrome.tabs.create({ url: `${base}?problem=${encodeURIComponent(problemId)}` });
    } catch {
      // Outside extension context — silently ignore.
    }
  }

  const DIFF_ABBR: Record<Difficulty, string> = { easy: 'E', medium: 'M', hard: 'H' };

  return (
    <section className="mt-4 border-t border-border pt-4" aria-label="Recent solves">
      <h2 className="font-mono text-[9px] uppercase tracking-widest text-faint">Recent</h2>
      <ul className="mt-2 space-y-0.5">
        {solves.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => openProblem(s.problemId)}
              aria-label={`Practice ${s.title} again`}
              className="group flex w-full items-center gap-2 rounded-sm px-1 py-0.5 text-left transition-colors hover:bg-surface focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <span className="shrink-0 font-mono text-[9px] text-faint w-3">
                {DIFF_ABBR[s.difficulty]}
              </span>
              <span className="flex-1 truncate font-mono text-[10px] text-muted group-hover:text-text transition-colors">
                {s.title}
              </span>
              <span className="shrink-0 font-mono text-[9px] text-faint tabular-nums">
                {timeAgo(s.solvedAt)}
              </span>
            </button>
          </li>
        ))}
      </ul>
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
