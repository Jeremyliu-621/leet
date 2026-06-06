import { useEffect, useMemo, useState } from 'react';
import { getValue } from '../../lib/storage';
import { pruneTokens } from '../../lib/unlock';
import { localDateString } from '../../lib/streak';
import { getAllProblems } from '../../lib/problems';
import {
  ALL_LANGUAGES,
  DIFFICULTIES,
  LANGUAGE_LABEL,
  PROBLEM_TAGS,
} from '../../lib/types';
import type {
  BlockRule,
  Difficulty,
  KeywordRule,
  ProblemTag,
  SolvedProblemRecord,
  StreakDay,
  StreakSummary,
  SubmissionRecord,
  UnlockToken,
  UserPreferences,
} from '../../lib/types';
import { computeSolvedStats } from '../popup/popup-helpers';
import type { SolvedStats } from '../popup/popup-helpers';
import {
  buildAttemptedProblems,
  buildContributionCalendar,
  computeHeadlineStats,
  computeLanguageBreakdown,
} from './dashboard-helpers';
import type {
  AttemptedProblem,
  CalendarCell,
  ContributionCalendar,
  HeadlineStats,
  LanguageCount,
} from './dashboard-helpers';

const ALL_PROBLEMS = getAllProblems();
const BANK_SIZE = ALL_PROBLEMS.length;

const BANK_SIZE_BY_DIFF: Readonly<Record<Difficulty, number>> = {
  easy: ALL_PROBLEMS.filter((p) => p.difficulty === 'easy').length,
  medium: ALL_PROBLEMS.filter((p) => p.difficulty === 'medium').length,
  hard: ALL_PROBLEMS.filter((p) => p.difficulty === 'hard').length,
};

const BANK_SIZE_BY_TAG: Readonly<Record<ProblemTag, number>> = (() => {
  const counts: Partial<Record<ProblemTag, number>> = {};
  for (const p of ALL_PROBLEMS) for (const t of p.tags) counts[t] = (counts[t] ?? 0) + 1;
  return counts as Record<ProblemTag, number>;
})();

const DIFF_LABEL: Record<Difficulty, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
const DIFF_ABBR: Record<Difficulty, string> = { easy: 'E', medium: 'M', hard: 'H' };

interface DashboardData {
  solved: SolvedProblemRecord[];
  streakHistory: StreakDay[];
  streak: StreakSummary;
  submissionHistory: Record<string, SubmissionRecord[]>;
  blockedRules: BlockRule[];
  keywordRules: KeywordRule[];
  unlockTokens: UnlockToken[];
  prefs: UserPreferences;
}

type StatusFilter = 'all' | 'solved' | 'attempted';

export function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState(false);
  const [now] = useState(Date.now());

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const [
          solved,
          streakHistory,
          streak,
          submissionHistory,
          blockedRules,
          keywordRules,
          unlockTokens,
          prefs,
        ] = await Promise.all([
          getValue('solvedProblems'),
          getValue('streakHistory'),
          getValue('streakSummary'),
          getValue('submissionHistory'),
          getValue('blockedRules'),
          getValue('keywordRules'),
          getValue('unlockTokens'),
          getValue('userPreferences'),
        ]);
        if (cancelled) return;
        setData({
          solved,
          streakHistory,
          streak,
          submissionHistory,
          blockedRules,
          keywordRules,
          unlockTokens,
          prefs,
        });
      } catch {
        if (!cancelled) setError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <Shell>
        <p className="mt-10 text-sm text-muted">
          Couldn’t load your data. Open this page from the LeetMeow toolbar popup.
        </p>
      </Shell>
    );
  }

  if (!data) {
    return (
      <Shell>
        <p className="mt-10 font-mono text-xs text-faint">Loading…</p>
      </Shell>
    );
  }

  return <DashboardBody data={data} now={now} />;
}

function DashboardBody({ data, now }: { data: DashboardData; now: number }) {
  const stats: SolvedStats = useMemo(() => computeSolvedStats(data.solved), [data.solved]);
  const headline: HeadlineStats = useMemo(() => computeHeadlineStats(data.solved), [data.solved]);
  const calendar: ContributionCalendar = useMemo(
    () => buildContributionCalendar(data.streakHistory),
    [data.streakHistory],
  );
  const languages: LanguageCount[] = useMemo(
    () => computeLanguageBreakdown(data.solved),
    [data.solved],
  );
  const attempted: AttemptedProblem[] = useMemo(
    () => buildAttemptedProblems(data.solved, data.submissionHistory),
    [data.solved, data.submissionHistory],
  );

  const activeUnlocks = useMemo(() => pruneTokens(data.unlockTokens), [data.unlockTokens]);
  const blockedDomains = data.blockedRules.filter((r) => r.kind === 'domain');
  const pct = BANK_SIZE === 0 ? 0 : Math.round((stats.total / BANK_SIZE) * 100);

  const topTags = useMemo(
    () =>
      PROBLEM_TAGS.flatMap((tag) => {
        const count = stats.byTag[tag] ?? 0;
        return count > 0 ? [{ tag, count }] : [];
      })
        .sort((a, b) => b.count - a.count)
        .slice(0, 8),
    [stats],
  );

  return (
    <Shell streak={data.streak}>
      {/* Headline metric cards */}
      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Metric label="Solved" value={`${stats.total}`} sub={`of ${BANK_SIZE} · ${pct}%`} />
        <Metric label="Current streak" value={`${data.streak.current}`} sub={`best ${data.streak.longest}`} />
        <Metric label="Time invested" value={formatDuration(headline.totalSolvedMs)} sub="total" />
        <Metric
          label="Avg attempts"
          value={headline.totalSolves === 0 ? '—' : headline.avgAttempts.toFixed(1)}
          sub="to solve"
        />
        <Metric
          label="Fastest"
          value={headline.fastestMs === null ? '—' : formatDuration(headline.fastestMs)}
          sub="single solve"
        />
      </section>

      {/* Contribution calendar */}
      <Card className="mt-6">
        <CardHeader
          title="Contributions"
          aside={`${calendar.totalSolved} solves · ${calendar.activeDays} active days`}
        />
        <ContributionGrid calendar={calendar} />
      </Card>

      {/* Breakdown + language */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="By difficulty" />
          <div className="mt-3 space-y-2">
            {DIFFICULTIES.map((d) => (
              <BarRow
                key={d}
                label={DIFF_LABEL[d]}
                count={stats.byDifficulty[d]}
                total={BANK_SIZE_BY_DIFF[d]}
                barClass={DIFF_BAR_CLASS[d]}
              />
            ))}
          </div>

          {topTags.length > 0 && (
            <>
              <CardHeader title="By topic" className="mt-5" />
              <div className="mt-3 space-y-2">
                {topTags.map(({ tag, count }) => (
                  <BarRow key={tag} label={tag} count={count} total={BANK_SIZE_BY_TAG[tag] ?? 1} />
                ))}
              </div>
            </>
          )}
        </Card>

        <Card>
          <CardHeader title="Languages" />
          {languages.length === 0 ? (
            <Empty>No solves yet.</Empty>
          ) : (
            <div className="mt-3 space-y-2">
              {languages.map(({ language, count }) => (
                <BarRow
                  key={language}
                  label={LANGUAGE_LABEL[language]}
                  count={count}
                  total={stats.total || 1}
                  showTotal={false}
                  barClass="bg-brand"
                />
              ))}
            </div>
          )}

          <CardHeader title="Active unlocks" className="mt-5" />
          {activeUnlocks.length === 0 ? (
            <Empty>None right now. Solve a problem to earn timed access.</Empty>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {activeUnlocks.slice(0, 6).map((token) => (
                <li
                  key={token.domain}
                  className="flex items-center justify-between border border-border bg-bg px-3 py-1.5 font-mono text-xs"
                >
                  <span className="truncate text-text">{token.domain}</span>
                  <span className="ml-2 shrink-0 text-muted tabular-nums">
                    {minutesLeft(token, now)}m left
                  </span>
                </li>
              ))}
            </ul>
          )}

          <CardHeader title="Blocked sites" aside={`${blockedDomains.length}`} className="mt-5" />
          {blockedDomains.length === 0 ? (
            <Empty>No sites blocked.</Empty>
          ) : (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {blockedDomains.slice(0, 24).map((rule) => (
                <span
                  key={rule.id}
                  className="border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {rule.pattern}
                </span>
              ))}
              {blockedDomains.length > 24 && (
                <span className="px-1 py-0.5 font-mono text-[11px] text-faint">
                  +{blockedDomains.length - 24} more
                </span>
              )}
            </div>
          )}
        </Card>
      </div>

      {/* Problems table */}
      <Card className="mt-6">
        <ProblemsTable problems={attempted} />
      </Card>

      {/* Settings overview */}
      <Card className="mt-6">
        <SettingsOverview prefs={data.prefs} blocked={blockedDomains.length} keywords={data.keywordRules.length} />
      </Card>

      <footer className="mt-8 pb-10 text-center font-mono text-[10px] text-faint">
        LeetMeow · {BANK_SIZE} problems in the bank
      </footer>
    </Shell>
  );
}

// ---------------------------------------------------------------------------
// Layout shell + header
// ---------------------------------------------------------------------------

function Shell({ children, streak }: { children: React.ReactNode; streak?: StreakSummary }) {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-baseline gap-3">
            <h1 className="text-lg font-semibold tracking-tight text-text">Dashboard</h1>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">LeetMeow</span>
            {streak && streak.current > 0 && (
              <span className="font-mono text-[10px] text-muted">{streak.current}-day streak</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <time className="mr-1 font-mono text-[10px] text-faint" dateTime={localDateString()}>
              {localDateString()}
            </time>
            <button
              type="button"
              onClick={openPractice}
              className="rounded-md border border-brand bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Practice now
            </button>
            <button
              type="button"
              onClick={openSettings}
              className="border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Settings
            </button>
          </div>
        </header>
        {children}
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Reusable primitives
// ---------------------------------------------------------------------------

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-card border border-border bg-surface p-4 sm:p-5 ${className}`}>
      {children}
    </section>
  );
}

function CardHeader({
  title,
  aside,
  className = '',
}: {
  title: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline justify-between ${className}`}>
      <h2 className="font-mono text-[10px] uppercase tracking-widest text-faint">{title}</h2>
      {aside && <span className="font-mono text-[10px] text-muted tabular-nums">{aside}</span>}
    </div>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-card border border-border bg-surface px-4 py-3">
      <p className="font-mono text-[9px] uppercase tracking-widest text-faint">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-text tabular-nums">{value}</p>
      <p className="mt-0.5 font-mono text-[9px] text-faint">{sub}</p>
    </div>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-xs text-muted">{children}</p>;
}

function BarRow({
  label,
  count,
  total,
  showTotal = true,
  barClass = 'bg-border-strong',
}: {
  label: string;
  count: number;
  total: number;
  showTotal?: boolean;
  /** Tailwind background class for the filled portion. */
  barClass?: string;
}) {
  const widthPct = total === 0 ? 0 : Math.max(count === 0 ? 0 : 3, Math.round((count / total) * 100));
  return (
    <div
      className="flex items-center gap-3"
      aria-label={`${label}: ${count}${showTotal ? ` of ${total}` : ''}`}
    >
      <span className="w-24 shrink-0 truncate font-mono text-[10px] text-muted">{label}</span>
      <div className="h-1.5 flex-1 rounded-full bg-bg">
        <div className={`h-1.5 rounded-full transition-all ${barClass}`} style={{ width: `${widthPct}%` }} />
      </div>
      <span className="w-16 shrink-0 text-right font-mono text-[10px] text-faint tabular-nums">
        {showTotal ? `${count}/${total}` : count}
      </span>
    </div>
  );
}

/** LeetCode-style difficulty colors. */
const DIFF_BAR_CLASS: Record<Difficulty, string> = {
  easy: 'bg-success',
  medium: 'bg-warning',
  hard: 'bg-error',
};

const DIFF_TEXT_CLASS: Record<Difficulty, string> = {
  easy: 'text-success',
  medium: 'text-warning',
  hard: 'text-error',
};

// ---------------------------------------------------------------------------
// Contribution calendar
// ---------------------------------------------------------------------------

function cellClass(c: CalendarCell): string {
  if (c.inFuture) return 'bg-transparent';
  if (c.solved === 0) return 'bg-bg';
  return '';
}

/** Green intensity ramp for solved days (like GitHub/LeetCode contributions). */
function cellStyle(c: CalendarCell): React.CSSProperties | undefined {
  if (c.inFuture || c.solved === 0) return undefined;
  const opacity = c.solved === 1 ? 0.4 : c.solved <= 3 ? 0.62 : c.solved <= 6 ? 0.82 : 1;
  return { backgroundColor: 'var(--ll-success)', opacity };
}

/** Inline styles for the calendar legend swatches (matches the cell ramp). */
const LEGEND_STEPS: ReadonlyArray<React.CSSProperties> = [
  { backgroundColor: 'var(--ll-bg)' },
  { backgroundColor: 'var(--ll-success)', opacity: 0.4 },
  { backgroundColor: 'var(--ll-success)', opacity: 0.62 },
  { backgroundColor: 'var(--ll-success)', opacity: 0.82 },
  { backgroundColor: 'var(--ll-success)', opacity: 1 },
];

function ContributionGrid({ calendar }: { calendar: ContributionCalendar }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month labels */}
        <div className="mb-1 flex gap-[3px] pl-6" aria-hidden="true">
          {calendar.weeks.map((_, wi) => (
            <div key={wi} className="w-2.5">
              {calendar.monthLabels[wi] && (
                <span className="font-mono text-[8px] text-faint">{calendar.monthLabels[wi]}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-[3px]">
          {/* Weekday rail */}
          <div className="mr-1 flex w-5 flex-col gap-[3px]" aria-hidden="true">
            {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
              <span key={i} className="h-2.5 font-mono text-[7px] leading-[10px] text-faint">
                {d}
              </span>
            ))}
          </div>
          {calendar.weeks.map((col, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]" aria-hidden="true">
              {col.map((cell) => (
                <div
                  key={cell.date}
                  title={
                    cell.inFuture
                      ? undefined
                      : `${cell.date}: ${cell.solved} solve${cell.solved !== 1 ? 's' : ''}`
                  }
                  className={`h-2.5 w-2.5 rounded-[2px] ${cellClass(cell)}`}
                  style={cellStyle(cell)}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="mt-2 flex items-center justify-end gap-1 pr-1">
          <span className="font-mono text-[8px] text-faint">Less</span>
          {LEGEND_STEPS.map((s, i) => (
            <div key={i} className="h-2.5 w-2.5 rounded-[2px]" style={s} />
          ))}
          <span className="font-mono text-[8px] text-faint">More</span>
        </div>
        <p className="sr-only">
          {calendar.activeDays} active days, {calendar.totalSolved} total solves in the last year.
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Problems table
// ---------------------------------------------------------------------------

const MAX_TABLE_ROWS = 200;

function ProblemsTable({ problems }: { problems: readonly AttemptedProblem[] }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<StatusFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return problems.filter((p) => {
      if (status !== 'all' && p.status !== status) return false;
      if (q && !p.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [problems, query, status]);

  const shown = filtered.slice(0, MAX_TABLE_ROWS);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <CardHeader title="Problems attempted" aside={`${problems.length}`} />
        <div className="flex items-center gap-2">
          <div className="flex" role="tablist" aria-label="Filter by status">
            {(['all', 'solved', 'attempted'] as StatusFilter[]).map((s) => (
              <button
                key={s}
                type="button"
                role="tab"
                aria-selected={status === s}
                onClick={() => setStatus(s)}
                className={
                  status === s
                    ? 'border border-border-strong bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-text'
                    : 'border border-border bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-text'
                }
              >
                {s}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            aria-label="Search problems"
            className="w-40 border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-text placeholder:text-faint focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          />
        </div>
      </div>

      {shown.length === 0 ? (
        <Empty>{problems.length === 0 ? 'No problems attempted yet.' : 'No matches.'}</Empty>
      ) : (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border font-mono text-[9px] uppercase tracking-widest text-faint">
                <th className="py-1.5 pr-2 font-normal">Status</th>
                <th className="py-1.5 pr-2 font-normal">Problem</th>
                <th className="py-1.5 pr-2 font-normal">Diff</th>
                <th className="py-1.5 pr-2 font-normal">Lang</th>
                <th className="py-1.5 pr-2 text-right font-normal">Tries</th>
                <th className="py-1.5 pr-2 text-right font-normal">Time</th>
                <th className="py-1.5 text-right font-normal">When</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((p) => (
                <tr
                  key={p.problemId}
                  className="border-b border-border transition-colors hover:bg-surface-2"
                >
                  <td className="py-1.5 pr-2">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="max-w-[260px] py-1.5 pr-2">
                    <button
                      type="button"
                      onClick={() => openProblem(p.problemId)}
                      className="block truncate text-left text-xs text-text hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      title={`Practice ${p.title}`}
                    >
                      {p.title}
                    </button>
                  </td>
                  <td className="py-1.5 pr-2">
                    <span className={`font-mono text-[10px] font-semibold ${DIFF_TEXT_CLASS[p.difficulty]}`}>
                      {DIFF_ABBR[p.difficulty]}
                    </span>
                  </td>
                  <td className="py-1.5 pr-2 font-mono text-[10px] text-muted">
                    {p.language ? LANGUAGE_LABEL[p.language] : '—'}
                  </td>
                  <td className="py-1.5 pr-2 text-right font-mono text-[10px] text-muted tabular-nums">
                    {p.attempts}
                  </td>
                  <td className="py-1.5 pr-2 text-right font-mono text-[10px] text-muted tabular-nums">
                    {p.durationMs === null ? '—' : formatDuration(p.durationMs)}
                  </td>
                  <td className="py-1.5 text-right font-mono text-[10px] text-faint tabular-nums">
                    {timeAgo(p.lastActivityAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length > MAX_TABLE_ROWS && (
            <p className="mt-2 font-mono text-[10px] text-faint">
              Showing first {MAX_TABLE_ROWS} of {filtered.length}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: AttemptedProblem['status'] }) {
  return status === 'solved' ? (
    <span className="rounded border border-success bg-success-bg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-success">
      Solved
    </span>
  ) : (
    <span className="border border-border bg-bg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
      Tried
    </span>
  );
}

// ---------------------------------------------------------------------------
// Settings overview (read-only summary; full editing lives in Options)
// ---------------------------------------------------------------------------

function SettingsOverview({
  prefs,
  blocked,
  keywords,
}: {
  prefs: UserPreferences;
  blocked: number;
  keywords: number;
}) {
  const difficulties =
    prefs.difficulties.length === 0
      ? 'None'
      : prefs.difficulties.map((d) => DIFF_LABEL[d]).join(', ');
  const tags = prefs.tags.length === 0 ? 'All topics' : prefs.tags.join(', ');

  const rows: Array<[string, string]> = [
    ['Challenge time limit', formatDuration(prefs.challengeTimeLimitSec * 1000)],
    ['Unlock reward', `${prefs.unlockDurationMin} min`],
    ['Difficulties', difficulties],
    ['Topics', tags],
    ['Max attempts', `${prefs.maxSubmissionAttempts}`],
    ['On failure', prefs.failureAction],
    ['Strict mode', prefs.strictMode ? 'On' : 'Off'],
    ['Give up allowed', prefs.allowGiveUp ? 'Yes' : 'No'],
    ['Preferred language', LANGUAGE_LABEL[prefs.preferredLanguage]],
    ['Theme', prefs.theme],
    ['Editor font', `${prefs.editorFontSize}px`],
    ['Indent', `${prefs.editorIndentSize} spaces`],
    ['Keymap', prefs.editorKeymap],
    ['Word wrap', prefs.editorWordWrap ? 'On' : 'Off'],
    ['Autocomplete', prefs.editorAutocomplete ? 'On' : 'Off'],
    ['Blocked sites', `${blocked}`],
    ['Keyword rules', `${keywords}`],
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <CardHeader title="Settings overview" />
        <button
          type="button"
          onClick={openSettings}
          className="border border-border bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:bg-surface-2 hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          Edit in Settings
        </button>
      </div>
      <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-3 border-b border-border py-1">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{k}</dt>
            <dd className="truncate text-right font-mono text-[11px] text-text" title={v}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 font-mono text-[10px] text-faint">
        {ALL_LANGUAGES.length} languages supported · {BANK_SIZE} problems in the bank
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Formatting + chrome helpers
// ---------------------------------------------------------------------------

function formatDuration(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < 60_000) return 'just now';
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(diff / 3_600_000);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(diff / 86_400_000);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function minutesLeft(token: UnlockToken, now: number): number {
  return Math.max(0, Math.ceil((token.expiresAt - now) / 60_000));
}

function openProblem(problemId: string): void {
  try {
    const base = chrome.runtime.getURL('src/pages/challenge/index.html');
    void chrome.tabs.create({ url: `${base}?problem=${encodeURIComponent(problemId)}` });
  } catch {
    /* outside extension context */
  }
}

function openPractice(): void {
  try {
    void chrome.tabs.create({ url: chrome.runtime.getURL('src/pages/challenge/index.html') });
  } catch {
    /* outside extension context */
  }
}

function openSettings(): void {
  try {
    void chrome.runtime.openOptionsPage();
  } catch {
    /* outside extension context */
  }
}
