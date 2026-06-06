/**
 * The calm blocked-state page, shown when a challenge is failed or abandoned
 * and the user's failure action is "redirect". Deliberately spare — the whole
 * point is calm: no nagging copy, no animations, no manipulative prompts.
 * The user should close the tab or try again.
 */
export function Blocked() {
  const params = new URLSearchParams(window.location.search);
  const domain = params.get('domain');
  const target = params.get('target');

  function handleTryAgain(): void {
    try {
      const challengeUrl = chrome.runtime.getURL('src/pages/challenge/index.html');
      const url = target
        ? `${challengeUrl}?target=${encodeURIComponent(target)}`
        : challengeUrl;
      window.location.href = url;
    } catch {
      // Outside extension context — silently ignore.
    }
  }

  return (
    <main className="grid min-h-full place-items-center bg-bg px-8 text-text">
      <section className="w-full max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">LeetMeow</p>
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
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleTryAgain}
            className="rounded-sm border border-accent bg-accent px-6 py-2 font-mono text-xs font-bold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Try another challenge
          </button>
          <button
            type="button"
            onClick={() => window.close()}
            className="font-mono text-[11px] text-faint transition-colors hover:text-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm"
          >
            Close tab
          </button>
        </div>
      </section>
    </main>
  );
}
