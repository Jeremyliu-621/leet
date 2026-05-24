# LeetLock — Python Support via Pyodide (Research & Plan)

Status: research / planning. **No code yet.** Sibling docs: `BUILD_PLAN.md` (§1 architecture, phase 13+
note), `DATA_MODEL.md` (UserPreferences shape), `PROGRESS.md` (live tasks).

This document evaluates adding Python as a second `SupportedLanguage` for the in-extension code
runner. It answers: is Pyodide compatible with our MV3 sandbox? where would it fit? what does the
problem bank look like with two languages? and what does the shippable rollout look like?

---

## 1. Pyodide today

**Current major version: 0.29.4** (release tagged `0.29.4`, line listed as the latest stable on the
GitHub releases page). Pyodide ships CPython compiled to WebAssembly via Emscripten.

**Distribution sizes (measured from the GitHub release assets):**

| Asset | Compressed (bz2) | Notes |
|---|---|---|
| `pyodide-core-0.29.4.tar.bz2` | **5.99 MB** | Minimal runtime: enough to start Pyodide and run pure-Python user code. |
| `pyodide-0.29.4.tar.bz2` | **408 MB** | Full distribution: core + every vendored 3rd-party package (NumPy, SciPy, scikit-learn, etc.). We never want this in an extension. |
| `static-libraries-0.29.4.tar.bz2` | 15 MB | Build-time only. |
| `xbuildenv-0.29.4.tar.bz2` | 6.4 MB | Build-time only. |

Source: GitHub releases API (`/repos/pyodide/pyodide/releases/tags/0.29.4`).

**What `pyodide-core` actually contains** (the only set we'd bundle):

- `pyodide.mjs` — JS loader (ES module).
- `pyodide.asm.mjs` — Emscripten-generated JS glue (ES module).
- `pyodide.asm.wasm` — the CPython WASM binary (~13 MB uncompressed in recent releases; the
  GitHub `pyodide-core` tarball gzips well — the on-disk uncompressed unpack is ~10–11 MB for
  the `.wasm` plus ~3 MB JS plus stdlib).
- `python_stdlib.zip` — a zipfile of the Python standard library (~3 MB uncompressed). Loaded
  lazily as imports occur.
- `pyodide-lock.json` — the package manifest (only relevant if we ever call `pyodide.loadPackage`).

**Uncompressed on-disk footprint for `pyodide-core`: ~16 MB**, of which the user's browser must
fetch ~6 MB compressed when the file server (in our case `chrome-extension://`) serves with
gzip/brotli — Chrome serves bundled extension assets with the OS file system's content as-is, so
the on-disk size is what matters for extension package size, not the bz2.

**Standard library availability by default** (relevant for LeetTracker-style problems):

- All "core" stdlib modules are vendored: `collections`, `heapq`, `bisect`, `math`, `itertools`,
  `functools`, `re`, `string`, `json`, `copy`, `random`, `statistics`, `dataclasses`, `typing`,
  `enum`, `decimal`, `fractions`, etc. — i.e. everything a LeetCode-style algorithm problem ever
  reaches for.
- Several heavy stdlib modules are **unvendored** to save space and must be loaded with
  `pyodide.loadPackage('module-name')` on demand: notably `test` (>20 MB), `lib2to3`, `tkinter`,
  `idlelib`, `turtle`, `pydoc_data`, plus the SSL/curses/sqlite3 family. For our use case
  (function-implementation problems) the default vendored set is sufficient.

**Load-on-demand vs bundle-into-extension tradeoffs:**

| Approach | Bundle size | Cold start | Web Store risk | Verdict |
|---|---|---|---|---|
| Bundle `pyodide-core` in `public/pyodide/` | ~16 MB on-disk added to extension | One-time disk read; ~1–2 s init on a fast laptop | None (no remote code) | **Recommended.** |
| Download on first Python use from CDN | ~0 MB extension overhead | First run downloads 6 MB + initialises (~3–5 s on a fair connection) | **High** — Chrome Web Store rejects MV3 extensions that fetch executable JS/WASM at runtime (see §2). | Rejected. |
| Lazy bundled load (files in extension, only fetched into the sandbox when user selects Python) | ~16 MB on-disk, 0 ms unless used | First Python use pays full init cost | None | Same as option 1 in practice; difference is only when the worker bootstraps. |

**Breaking changes since v0.24** (relevant to a new integrator, not exhaustive):

- **0.25** — Node.js <18 dropped; `loadPyodide({ homedir })` removed in favour of `env: { HOME }`.
- **0.27** — `pyodide-build` CLI entrypoint removed (build tooling only); shared libraries are now
  loaded locally rather than from a global namespace (affects package authors, not consumers).
- **0.28** — **ABI break:** switched from `-fexceptions` to `-fwasm-exceptions` for C++ exceptions
  and `setjmp`/`longjmp`. This only matters if you compile your own C extensions; for "execute
  user-supplied pure Python" it is invisible.
- **0.29** — `JsProxy.as_object_map()` deprecated (use `as_js_json()`); removal targeted 0.31.

None of these block us. The runtime API surface we'd touch (`loadPyodide`, `runPythonAsync`,
`globals.get/set`, `setStdout`, `setStderr`) has been stable since well before 0.24.

**Sources:** [Pyodide releases](https://github.com/pyodide/pyodide/releases),
[Pyodide changelog (stable)](https://pyodide.org/en/stable/project/changelog.html),
[Downloading & deploying](https://pyodide.org/en/stable/usage/downloading-and-deploying.html),
[wasm-constraints (stdlib coverage)](https://pyodide.org/en/stable/usage/wasm-constraints.html).

---

## 2. Manifest V3 fit

**TL;DR — yes, Pyodide runs inside a sandboxed extension page hosting a Web Worker, provided we
(a) bundle the files, (b) load them via `chrome.runtime.getURL` / relative paths, and
(c) keep them in `web_accessible_resources`.**

### 2.1 Can WASM load from a `chrome-extension://` URL?

Yes. Chrome's MV3 documentation explicitly classifies remotely-hosted code (RHC) as anything
"executed by the browser that is loaded from someplace other than the extension's own files —
JavaScript and WASM. It does *not* include data or things like JSON or CSS." Files served from
`chrome-extension://<id>/...` are the extension's own files and do not count as RHC.
`pyodide.asm.wasm` instantiated from a `fetch('/pyodide/pyodide.asm.wasm')` (which resolves to a
`chrome-extension://` URL when run from our sandbox page) is therefore fine.

### 2.2 CSP entries we need

Our current sandbox CSP (from `src/manifest.config.ts`):

```
sandbox allow-scripts allow-forms allow-modals;
script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:;
worker-src 'self' blob:;
object-src 'self';
```

For Pyodide we additionally need `'wasm-unsafe-eval'` in `script-src`. Chrome restricts MV3 CSP
`script-src` to `'self' | 'none' | 'wasm-unsafe-eval'` for extension pages, and the same value is
recognised inside the sandbox CSP. Final sandbox CSP becomes:

```
sandbox allow-scripts allow-forms allow-modals;
script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:;
worker-src 'self' blob:;
object-src 'self';
```

The `extension_pages` CSP does **not** need `wasm-unsafe-eval` — Pyodide never instantiates inside
those pages, only inside the worker spawned from the sandboxed page.

Note: `'unsafe-eval'` is already present (it powers the JS `new Function(...)` in
`src/runner/worker.js`). `'wasm-unsafe-eval'` is the narrower permission that actually enables
`WebAssembly.compile`/`instantiate` from buffers without granting full JS eval — strictly speaking,
since we already have `'unsafe-eval'`, WASM is already permitted. Adding `'wasm-unsafe-eval'`
explicitly is best practice for clarity and forward compatibility if we ever drop `'unsafe-eval'`.

### 2.3 Bundled vs runtime-downloaded

Chrome Web Store policy on remotely hosted code is unambiguous: "With Manifest V3 extensions, you
need to bundle all code they are using inside the extension itself." Extensions that have shipped
Pyodide/Transformers.js/etc. by fetching `.wasm` from a CDN at runtime have been rejected — see
[transformers.js issue #839](https://github.com/huggingface/transformers.js/issues/839). The fix
for those projects has been to copy WASM artifacts into the build, list them in
`web_accessible_resources`, and load them via `chrome.runtime.getURL(...)`.

**Therefore we must bundle the `pyodide-core` artifacts in the extension.** Concretely:

1. Vendor the `pyodide-core` tarball contents into `public/pyodide/` so Vite copies them through
   to `dist/pyodide/` verbatim.
2. Add `pyodide/*` to `web_accessible_resources` in `manifest.config.ts` so the sandbox page (and
   its worker) can fetch them.
3. Pass `indexURL: chrome.runtime.getURL('pyodide/')` to `loadPyodide`. Inside the sandbox worker,
   which doesn't have `chrome.runtime`, pass the resolved URL from the host page via the worker's
   constructor URL or first message.

**Web Store reviewer reaction to a multi-MB extension:** there's no hard size limit (the Chrome Web
Store accepts ZIPs up to about 2 GB). The reaction risk is *user-facing*: install size goes from
the current ~1–2 MB to ~17–18 MB, and the install spinner becomes noticeable. Mitigations in §9.

**Sources:** [Chrome — Deal with remote hosted code violations](https://developer.chrome.com/docs/extensions/develop/migrate/remote-hosted-code),
[Chrome — Manifest CSP reference](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy),
[chromium-extensions thread "Load wasm module using manifest V3"](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/sJiaTnFMLHQ),
[transformers.js #839](https://github.com/huggingface/transformers.js/issues/839).

---

## 3. Integration shape

Two reasonable shapes, given LeetLock's existing sandbox-page → Web Worker architecture:

### Option A — language-specific workers

A new `src/runner/python-worker.js` that:

1. Statically imports `pyodide.asm.mjs` and `pyodide.mjs` (must be a **module worker**, since
   Pyodide ≥0.26 requires it — classic worker + `importScripts()` is no longer supported).
2. Calls `loadPyodide({ indexURL, _createPyodideModule: <static import default> })` once at startup
   and memoises the promise.
3. Exposes the same `RunRequest` → `RunResponse` contract as today's `worker.js`. The "compile"
   step becomes `pyodide.runPythonAsync(userCode)` followed by `pyodide.globals.get(functionName)`;
   each test calls that function via `JsProxy.callKwargs`/`.apply` after `toJs`-converting args.

The sandbox host (`runner.ts`) picks which worker to spawn based on `RunRequest.language`:

```ts
const worker = request.language === 'python'
  ? new Worker(pythonWorkerUrl, { type: 'module' })
  : new Worker(jsWorkerUrl);  // existing path, unchanged
```

### Option B — single polyglot worker

One worker that imports both runtimes and dispatches on `language`. The `new Function(...)` JS
path stays; the Pyodide path lives behind a lazy initialiser.

### Recommendation: **Option A.**

Reasons:

1. **JavaScript runs stay fast.** Today's JS worker is ~120 lines and spawns/dies in ~5 ms. Option
   B would force a single worker module to either (a) import Pyodide eagerly — making JS runs
   also pay Pyodide's load cost — or (b) lazily import it on first Python use, which works but
   adds dispatch code and a second worker-instance-keepalive policy. Two workers stays simpler.
2. **Different lifecycle.** The JS worker is created per `executeRun()` so `worker.terminate()`
   kills infinite loops cheaply. Pyodide's worker is expensive to boot (~1–2 s warm, more on cold
   disk) and should be **reused across runs**, with timeouts enforced by sending an "abort"
   message + falling back to `terminate()` on the host. Two distinct lifecycle policies map cleanly
   to two distinct files.
3. **Bundle-size accounting is clean.** JS worker → no Pyodide cost. Python worker → loads Pyodide
   only when the user actually picks Python on a Python-capable problem.

**Code surface estimate (new code):**

| File | Lines (rough) | Notes |
|---|---|---|
| `src/runner/python-worker.js` | ~180 | Pyodide bootstrap, runPython glue, test loop, stdout capture, abort handler. |
| `src/runner/python-bridge.ts` | ~80 | Arg/return marshalling helpers (`toJs`/`toPy`, deep-clone for `postMessage`). Shared between worker and any future Python-aware code. |
| `src/pages/sandbox/runner.ts` | +40 | Dispatch by `request.language`; long-lived Python worker w/ abort flow. |
| `src/lib/messaging/messages.ts` | +5 | Add `language: SupportedLanguage` to `RunRequest`. |
| `public/pyodide/*` | (vendored) | Copied from `pyodide-core-0.29.4.tar.bz2`. |

Plus tests (~120 lines) and the CodeMirror + selector UI in §5.

**Bundle-size impact:**

- Extension `.zip` payload: **+16 MB on disk** (pyodide-core unpacked).
- JS bundle (the part Vite processes): **negligible.** Pyodide's loader is loaded via static
  `import` inside the worker file, which Vite will treat as a worker entry — but the `.wasm` and
  `.zip` are static asset references, not parsed.

**First-run cold-start cost** (realistic estimates from published benchmarks and Cloudflare
Workers' Pyodide work):

- Disk read + WASM compile + Python heap init: **1.0–2.0 s** on a modern laptop (`pyodide-core`,
  no extra packages, files on local disk — no network).
- The 6.4 MB download number frequently quoted (4–5 s init) assumes CDN delivery; serving from
  `chrome-extension://` removes the network leg entirely.
- We can hide this behind an "Initialising Python…" placeholder in the editor's verdict region.
  See §5 for UX.

**Sources:** [Pyodide — Using Pyodide in a web worker (stable)](https://pyodide.org/en/stable/usage/webworker.html),
[Pyodide — Using Pyodide in a service worker](https://pyodide.org/en/stable/usage/service-worker.html),
[Cloudflare — Bringing Python to Workers using Pyodide and WebAssembly](https://blog.cloudflare.com/python-workers/).

---

## 4. Problem-bank changes

`Problem.starterCode` is already typed `Readonly<Record<SupportedLanguage, string>>`. Today
`SupportedLanguage = 'javascript'`, so it's just a one-key record. Becoming
`'javascript' | 'python'` is mechanically:

```ts
// src/lib/types.ts
export type SupportedLanguage = 'javascript' | 'python';
```

**This change is type-checked everywhere immediately.** Every problem in `src/lib/problems/bank/*`
will fail TypeScript until it has a `python: '...'` key. That's intentional: it surfaces every
problem that needs Python authoring. We will not do all of them at once — see phased rollout
below.

**Reference solutions in `test/bank-solutions.ts` would also need a Python variant.** Today
`solutions` is `Record<string, JsFunc>`. Two options:

- **4A.** Add `pythonSolutions: Record<string, string>` (Python source code, executed against tests
  inside Node by spawning Pyodide in a Node Vitest setup — Pyodide ships a Node target). This
  proves Python expected-values the same way JS does today.
- **4B.** Keep `solutions` (JS) authoritative and *generate* the Python reference solution from
  the same algorithm by hand-authoring it, then run a separate `python-bank.test.ts` that boots
  Pyodide once in Node and validates each Python solution against the visible+hidden test cases.
  This keeps two parallel proofs and is more resilient to either side drifting.

**Recommendation: 4B.** A single shared cases array, two parallel reference solutions, two
separate test files. The two suites share `visibleTests`/`hiddenTests` (the source of truth for
expected values) and prove each language independently.

**Authoring cost per problem:** translating each JS reference solution to Python is ~5–10 minutes
for a competent author (function body is usually trivially porting list operations and hash maps).
Adding Python starter code is another ~30 seconds. The 25 problems currently in the bank are all
in scope; estimate **3–4 focused hours total** including the test scaffolding to verify them.

### Phased rollout (problem bank)

> "JavaScript stays the default. Python is opt-in. Only problems with Python starter code show
> Python in the selector."

Concretely, we relax the type from "every problem must define every language" to "every problem
must define at least JavaScript", and the selector filters by per-problem support.

```ts
// proposed
starterCode: Readonly<Partial<Record<SupportedLanguage, string>>> &
             Readonly<Record<'javascript', string>>;
```

Rollout:

1. **Cycle 1 (no problem changes):** Type change above + Python runtime plumbing + selector UI
   present but disabled until the current problem exposes Python. Ship JavaScript-only behaviour
   identical to today.
2. **Cycle 2 (1 problem):** Pick `two-sum-indices` (the canonical demo); author Python starter +
   reference + test wiring. Selector becomes enabled when this problem loads.
3. **Cycle 3 (cohort):** Backfill the remaining 24 problems in batches grouped by tag (arrays
   first, then strings, then hash-map, etc.). Each batch is one commit.

The test integrity invariant — every problem's `expected` values are correct — must hold for
**every language a problem ships**. See §6.

---

## 5. UI surface

### 5.1 Where the selector lives

Today the editor header is a label-only "JavaScript" tag (`EditorPanel.tsx` lines 261–266). Replace
with a small inline dropdown when the current problem ships more than one language. When only one
language ships, render the label-only tag (no flicker, no UX regression for JS-only problems).

```
┌─────────────────────────────────────────────────┐
│ [▾ Python]                                      │  <- inline dropdown / segmented control
├─────────────────────────────────────────────────┤
│  def pair_sum_indices(nums, target):            │
│      ...                                        │
```

A segmented control of `JS | Py` reads better than a dropdown for two options. If we ever add a
third, switch to a popover.

### 5.2 Persistence

Add to `UserPreferences` in `src/lib/types.ts`:

```ts
/** User's preferred language for new challenges. Falls back to 'javascript'
 * if the chosen problem doesn't expose this language. */
preferredLanguage: SupportedLanguage;
```

This goes in `chrome.storage.sync` like the rest of `UserPreferences`. Default = `'javascript'`.
Updating it from the editor selector requires no cooldown (it's not a strictness-reducing
setting). It's persisted on every selector change.

On challenge load:

```ts
const supported = Object.keys(problem.starterCode) as SupportedLanguage[];
const lang = supported.includes(prefs.preferredLanguage)
  ? prefs.preferredLanguage
  : 'javascript';            // problem always defines this
```

`SolvedProblemRecord.language` already exists in storage — it'll record whichever language the
user actually submitted in.

### 5.3 CodeMirror integration

Today `EditorPanel.tsx` line 130 includes a flat `javascript()` extension. Switch to a per-instance
language compartment so we can swap on selector change without recreating the EditorView:

```ts
import { Compartment } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';

const languageCompartment = new Compartment();
// ...in extensions:
languageCompartment.of(lang === 'python' ? python() : javascript()),
// ...on selector change:
view.dispatch({ effects: languageCompartment.reconfigure(
  lang === 'python' ? python() : javascript()
) });
```

`@codemirror/lang-python` 6.x adds ~40 KB minified (Lezer parser + grammar). It pulls in
`@lezer/python` as its only non-CodeMirror dep. Trivial relative to Pyodide. No tree-shaking
concerns.

The starter-code reset hotkey (Alt-R, line 153) already reads `starterCodeRef.current`, so as long
as we update that ref when the language changes, reset stays correct.

---

## 6. Test impact

The current `test/problem-bank.test.ts` proves correctness of JS expected values by running every
test through the JS reference solution. Two clean options for the multi-language world:

- **6A. Per-selected-language.** A single suite reads the user's preferred language from a config
  and validates that language only. Fast, but fragile — Python regressions could land via a PR
  that ran the suite under JS only.
- **6B. Per-shipped-language.** For every problem, validate every language it ships against the
  shared test cases. Slower (Python suite boots Pyodide once in Node, ~1.5 s overhead) but
  catches drift.

**Recommendation: 6B.** Concretely:

- `test/problem-bank.test.ts` — unchanged. Validates JS reference solutions (synchronous, fast).
- `test/problem-bank-python.test.ts` — new. `beforeAll` boots Pyodide in Node once; iterates all
  problems where `problem.starterCode.python` is defined; for each, executes the matching string in
  `pythonSolutions[problem.id]` against `visibleTests + hiddenTests`.
- Both suites import the same `visibleTests`/`hiddenTests` from each problem file. The expected
  values are the contract.

Vitest already supports this — the Python suite is conditional on the problem opting in, so until
problems start shipping Python solutions, the new suite is a no-op past the Pyodide boot, which
itself can be `describe.skipIf(!problemsWithPython.length)`.

---

## 7. Alternatives — Skulpt and Brython

**Skulpt** — Python-to-JS-AST translator written in JS. Pros: tiny (~200 KB), runs without WASM,
zero CSP friction. Cons: implements an ageing Python subset (≈Python 2.7-ish syntax plus selected
3.x), no `f"..."` strings in older versions, no `dataclasses`, no `typing`, no `collections.Counter`,
no `heapq` (or partial), no `itertools.product`/`combinations`. For "implement `pairSumIndices`"
problems Skulpt would mostly work; for anything reaching for stdlib it wouldn't. Maintained but
slow-moving.

**Brython** — Python 3 implemented in JS. Pros: ~500 KB, real Python 3 syntax, surprisingly broad
stdlib coverage. Cons: it's an *interpreter in JS*, so it's slow (~10–100× slower than Pyodide on
algorithm benchmarks), has occasional semantic edge-cases (especially around integers larger than
Number.MAX_SAFE_INTEGER, which it represents as JS numbers in some code paths), and the project
is single-maintainer.

**Pyodide is the right choice for LeetLock** despite being 30× the size of Skulpt and 15× Brython,
because the use case is "let users practise the language they'll be tested on in real interviews."
That means **real CPython semantics**: real `int` arithmetic (no JS-Number overflow), real
`collections.Counter`, real `heapq`, real `bisect`, f-strings, walrus operator, `match` statements,
the lot. Skulpt and Brython are educational toys that quietly diverge from CPython at the edges,
and the moment a user submits something that worked locally but fails in our sandbox we lose
trust in the whole tool. The 16 MB on-disk cost is bearable for a focus extension that the user
installs once and uses daily; the credibility cost of "your Python isn't real Python" is not.

---

## 8. Phased plan (next ~2 cron cycles)

Each milestone = one coherent commit. Ordered so each is independently shippable: at any
intermediate point the extension still builds, the JS path is unchanged, and Python is either
not yet visible or fully working as far as it goes.

### Cycle 1

**M1 — Type plumbing.** Widen `SupportedLanguage` to `'javascript' | 'python'`. Widen
`Problem.starterCode` to require JS and allow Python. Add `RunRequest.language`. Update every
problem file in `src/lib/problems/bank/` to satisfy the new shape (only JS key — Python is absent
everywhere). Update `UserPreferences.preferredLanguage` (default `'javascript'`) and storage
defaults. **No behaviour change.** All existing tests pass. *(~120 lines diff, ~1 hour.)*

**M2 — Vendor Pyodide core into the build.** Drop `pyodide-core-0.29.4` into `public/pyodide/`.
Add `pyodide/*` to `web_accessible_resources`. Add `'wasm-unsafe-eval'` to the sandbox CSP.
Verify `npm run build` produces a `dist/pyodide/` directory containing the asset set
(`pyodide.mjs`, `pyodide.asm.mjs`, `pyodide.asm.wasm`, `python_stdlib.zip`,
`pyodide-lock.json`). **No runtime use yet.** *(~10 lines diff + vendored binary blobs.)*

**M3 — Python worker.** Add `src/runner/python-worker.js` as a module worker that boots Pyodide
once, then handles `RunRequest`/`RunResponse` with the same message contract as `worker.js`.
Update `src/pages/sandbox/runner.ts` to dispatch by `request.language` — JS path unchanged,
Python path spawns the new module worker (long-lived, kept warm across runs, terminated on
timeout). Add an `init-ack` ping so the sandbox host knows when Pyodide is ready.
*(~250 lines new + ~40 lines edited.)*

**M4 — CodeMirror language selector + `lang-python`.** Install `@codemirror/lang-python`. Add
the language Compartment in `EditorPanel.tsx`. Render the segmented JS|Py selector when the
problem ships more than one language; persist the choice to `UserPreferences.preferredLanguage`.
Editor placeholder shows "Initialising Python…" on first Python pick. *(~150 lines diff.)*

### Cycle 2

**M5 — First Python problem + reference solution + Python test suite.** Author the Python starter
and reference solution for `two-sum-indices`. Add `test/problem-bank-python.test.ts` (boots
Pyodide in Node, validates against shared test cases). One problem visible in Python from the
selector. **End-to-end demoable: user solves `two-sum-indices` in Python and unlocks the blocked
site.** *(~80 lines diff + ~30 lines Python.)*

**M6 — Backfill remaining problems (batched).** Add Python starter + reference solution for the
remaining 24 problems in 3–4 commits grouped by tag. Each batch is independently green.
*(~750 lines diff total, mostly Python source strings.)*

**M7 — Polish.** Pyodide boot-warmup on extension install (optional, controlled by a hidden
`UserPreferences.warmPyodide`); telemetry-free console log on first-run init duration to a local
ring buffer (so a user reporting "Python feels slow" can be diagnosed); add a `"Python interpreter
loaded from your extension's bundled files — no network is involved."` line in the options
"About" section, to reassure security-minded users. *(~60 lines diff.)*

---

## 9. Risks & open questions

**Bundle size for a focus extension.** Going from ~1–2 MB → ~17–18 MB is a one-time install hit.
Concerns: (a) the install spinner on slow connections; (b) some corporate Chromium managed
installs gate by size; (c) updates re-download the full ZIP from the Chrome Web Store, so version
bumps drag Pyodide along. **Mitigation:** none truly cheap. We could ship a separate "LeetLock
Python" companion extension that the user installs on demand, but this multiplies install
friction. Better to bite the size cost; LeetLock is an opt-in focus tool — install size is the
last conversion barrier we should worry about.

**First-run latency.** ~1–2 s of editor unresponsiveness the very first time the user selects
Python on a given session, and ~50 ms on every subsequent run (warm worker). The editor has to
visibly communicate this. Mitigation: pre-warm on challenge-page open if the user's
`preferredLanguage === 'python'`; show "Initialising Python…" in the verdict region rather than
freezing the Run button.

**Web Store reviewer reactions.** Risk that a reviewer flags `'wasm-unsafe-eval'` or the bundled
WASM files for manual inspection. Mitigation: bundle integrity is provable (file hashes match the
upstream `pyodide-core-0.29.4.tar.bz2`); record this in a `THIRD_PARTY.md` and reference it in
the listing's privacy practices section. Several extensions (Transformers.js consumers, online
Python IDEs) have shipped this pattern successfully — see [chromium-extensions
discussion](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/sJiaTnFMLHQ).

**`time.sleep` and `input()` in a worker context.** Pyodide's `time.sleep` blocks the WASM thread
— since the worker has nothing else to do, this is fine: the wall-clock timeout still triggers
via `worker.terminate()` from the host page. `input()` is harder: in Pyodide, `input()` calls a
prompt callback that, by default, calls `window.prompt`. In a worker there is no `prompt`. Two
mitigations: (a) pre-set `sys.stdin = io.StringIO('')` so any `input()` raises `EOFError` rather
than hanging; (b) document explicitly that `input()` is not supported and lint user code for it
before submit. Choose (a) — silent EOF is fine for LeetCode-style "implement this function"
problems where `input()` shouldn't appear at all.

**Open questions to resolve in M1/M2:**

1. Do we want Pyodide to be **opt-in via a feature flag** (off by default in v1) so we can A/B
   test bundle-size impact on conversion? (Recommendation: yes, gate on
   `UserPreferences.experimentalPythonRuntime: boolean = false` for the first stable release.)
2. Does the chosen Pyodide version need to be pinned in `package.json` even though we vendor it
   directly? (Recommendation: yes, as a comment-only entry in `THIRD_PARTY.md` plus a Renovate
   ignore — npm install must never pull a newer Pyodide silently.)
3. Should `RunRequest.timeoutMs` be different for Python (Pyodide is slower; recursion limits
   trip earlier)? (Recommendation: same default for v1; revisit after first-run telemetry.)

---

### Cited sources

- [Pyodide releases (GitHub)](https://github.com/pyodide/pyodide/releases)
- [Pyodide release 0.29.4 (GitHub API)](https://api.github.com/repos/pyodide/pyodide/releases/tags/0.29.4)
- [Pyodide — Downloading and deploying](https://pyodide.org/en/stable/usage/downloading-and-deploying.html)
- [Pyodide — Using Pyodide in a web worker](https://pyodide.org/en/stable/usage/webworker.html)
- [Pyodide — Using Pyodide in a service worker](https://pyodide.org/en/stable/usage/service-worker.html)
- [Pyodide — wasm-constraints / stdlib coverage](https://pyodide.org/en/stable/usage/wasm-constraints.html)
- [Pyodide — Change Log (stable)](https://pyodide.org/en/stable/project/changelog.html)
- [Chrome — Manifest CSP reference](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy)
- [Chrome — Deal with remote hosted code violations](https://developer.chrome.com/docs/extensions/develop/migrate/remote-hosted-code)
- [chromium-extensions thread — "Load wasm module using manifest V3"](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/sJiaTnFMLHQ)
- [Cloudflare — Bringing Python to Workers using Pyodide and WebAssembly](https://blog.cloudflare.com/python-workers/)
- [transformers.js #839 — extension rejected for remotely hosted code](https://github.com/huggingface/transformers.js/issues/839)
