/**
 * Calm blocked-state page, shown when a challenge is failed or abandoned and
 * the failure action is "redirect". Phase 7 builds the real page.
 */
export function Blocked() {
  return (
    <main className="grid min-h-full place-items-center bg-bg px-8 text-center text-text">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Blocked</h1>
        <p className="mt-2 text-sm text-muted">This site is locked by LeetLock.</p>
      </div>
    </main>
  );
}
