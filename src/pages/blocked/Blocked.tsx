/**
 * The calm blocked-state page, shown when a challenge is failed or abandoned
 * and the user's failure action is "redirect". Deliberately spare — the whole
 * point is calm: no nagging copy, no animations, no manipulative prompts.
 * The user should close the tab and move on.
 */
export function Blocked() {
  const domain = new URLSearchParams(window.location.search).get('domain');

  return (
    <main className="grid min-h-full place-items-center bg-bg px-8 text-text">
      <section className="w-full max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">LeetLock</p>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">Locked</h1>
        {domain ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            <span className="font-mono text-text">{domain}</span> is blocked.{' '}
            Earn timed access by solving the next challenge.
          </p>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This site is blocked. Earn timed access by solving the next challenge.
          </p>
        )}
        <p className="mt-10 font-mono text-[11px] leading-relaxed text-faint">
          Close this tab when you&rsquo;re ready to move on.
        </p>
      </section>
    </main>
  );
}
