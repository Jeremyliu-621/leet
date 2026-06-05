import { useCallback, useEffect, useRef, useState } from 'react';
import { getValue, setValue, updateValue, STORAGE_DEFAULTS } from '../../lib/storage';
import type { StorageSchema, StorageKey } from '../../lib/storage';
import { extractDomain } from '../../lib/blocking';
import { pruneTokens } from '../../lib/unlock';
import { localDateString } from '../../lib/streak';
import { applyEditorFontSize, applyTheme, watchSystemTheme } from '../../lib/theme';
import type {
  BlockRule,
  Difficulty,
  EditorKeymap,
  ProblemTag,
  SolvedProblemRecord,
  StreakSummary,
  SupportedLanguage,
  ThemePreference,
  UnlockToken,
} from '../../lib/types';
import { ALL_LANGUAGES, DIFFICULTIES, LANGUAGE_SHORT, PROBLEM_TAGS } from '../../lib/types';
import { getAllProblems } from '../../lib/problems';
import { computeSolvedStats } from './popup-helpers';
import type { SolvedStats } from './popup-helpers';

const ALL_PROBLEMS = getAllProblems();
const BANK_SIZE = ALL_PROBLEMS.length;

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

const LANGUAGE_OPTIONS = ALL_LANGUAGES.map((lang) => ({ value: lang, label: LANGUAGE_SHORT[lang] }));

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
  activeUnlocks: UnlockToken[];
  solvedToday: number;
  solvedStats: SolvedStats;
  totalSolvedMs: number;
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

function formatSolveTime(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  if (hours > 0) return `${hours}h ${mins}m`;
  if (mins > 0) return `${mins}m`;
  return `${totalSec}s`;
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

      const totalSolvedMs = solved.reduce(
        (acc: number, r: SolvedProblemRecord) => acc + r.durationMs,
        0,
      );

      if (cancelled) return;
      setData({
        streak,
        activeUnlocks: pruneTokens(tokens),
        solvedToday,
        solvedStats: computeSolvedStats(solved),
        totalSolvedMs,
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
        <time
          className="font-mono text-[10px] text-faint"
          dateTime={localDateString()}
          aria-label="Today's date"
        >
          {localDateString()}
        </time>
      </header>

      {/* Primary actions — pinned to the top for one-click access. */}
      <section className="mt-4 space-y-2" aria-label="Quick actions">
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
          onClick={handlePracticeNow}
          className="w-full border border-accent bg-accent px-3 py-2 text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          Practice now
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleOpenDashboard}
            className="flex-1 border border-border-strong bg-surface px-3 py-2 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            Dashboard
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

      {/* Compact summary strip — three stats sharing one bordered card. */}
      <section
        className="mt-4 flex divide-x divide-border border border-border bg-surface"
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

      <SolveBreakdown stats={data.solvedStats} totalSolvedMs={data.totalSolvedMs} />

      {data.blockedDomains.size === 0 && (
        <section className="mt-4" aria-label="Quick start">
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

      <section className="mt-4">
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

      <section className="mt-4" aria-label="Default language">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-faint">
          Default language
        </p>
        <select
          value={data.preferredLanguage}
          onChange={(e) => void handleLanguageChange(e.target.value as SupportedLanguage)}
          aria-label="Default language"
          className="w-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          {LANGUAGE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
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

/** Compact difficulty + top-tag breakdown for the popup. */
function SolveBreakdown({ stats, totalSolvedMs }: { stats: SolvedStats; totalSolvedMs: number }) {
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
  const DIFF_BAR: Record<Difficulty, string> = { easy: 'bg-success', medium: 'bg-warning', hard: 'bg-error' };

  return (
    <section className="mt-4 border-t border-border pt-4" aria-label="Solved problem breakdown">
      <h2 className="font-mono text-[9px] uppercase tracking-widest text-faint">
        Breakdown · {stats.total}/{BANK_SIZE} solved ({pct}%)
        {totalSolvedMs > 0 && ` · ${formatSolveTime(totalSolvedMs)} invested`}
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
                    className={`h-1.5 rounded-full transition-all ${DIFF_BAR[d]}`}
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
