/**
 * Toolbar popup. Phase 11 builds the real status view (active unlocks,
 * today's solves, streak, quick actions).
 */
export function Popup() {
  return (
    <main className="min-w-[340px] bg-bg p-5 text-text">
      <h1 className="text-sm font-semibold tracking-tight">LeetLock</h1>
      <p className="mt-1 text-xs text-muted">Solve a problem, earn timed access.</p>
    </main>
  );
}
