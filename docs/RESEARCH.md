# LeetLock — Competitive & Technical Research

*Research compiled 2026-05-21. Concept: a Manifest V3 Chrome extension that intercepts distracting sites and replaces them with a native, in-extension LeetCode-style coding challenge. Solving within a time limit earns timed access; failing/timeout closes or redirects the tab. Positioning: "Cold Turkey for CS students, except every distraction charges you one algorithm problem."*

---

## 1. Executive summary

- **The exact niche is real but thinly served.** Several extensions force LeetCode practice as friction, but **almost none implement an in-extension challenge gate**. They redirect users to `leetcode.com` and poll LeetCode's (unofficial) submission API. That dependency is their core weakness — and LeetLock's core opportunity.
- **Closest prior art is "CodeTime"** (Matthew Kim, 2020): solve LeetCode problems → earn 15 min of blacklisted-site time. It is a *true gate by reward-balance*, but **never published to the Web Store** (load-unpacked only) and **detects submissions by scraping LeetCode endpoints**.
- **"Leetcode Torture"** by The Coding Sloth (~2,000 users, 4.7★, last updated Apr 2024) and **"LeetCode Forcer"** (~1,000 users, last updated May 2023) are the most visible live "true competitors" — but both **gate by redirecting to leetcode.com**, not by hosting their own problems. LeetCode Forcer is likely semi-abandoned (3-year-old build, broke on LeetCode UI changes).
- **No competitor authors its own problems and runs code inside the extension.** That is LeetLock's defensible differentiation: a self-contained challenge runtime that does not break when LeetCode changes its DOM/API, works offline, and cannot be bypassed by faking a LeetCode submission.
- **Math-gate blockers are a proven, simpler adjacent pattern** (Math Blocker, Puzzle Blocker, ProcrastiNOT, mobile MathLock). They validate "solve-to-unlock" friction as a product category but target a general audience, not programmers.
- **Key MV3 constraints are manageable but shape the design.** `declarativeNetRequest` cleanly redirects *navigations* to a bundled extension page; the real gap is **SPA route changes** (`youtube.com/shorts`, infinite feeds) which fire **no network request** and must be caught with a content script + `webNavigation.onHistoryStateUpdated`.
- **A safe code runner is feasible**: a **sandboxed extension page** (default CSP allows `unsafe-eval`) hosting a Web Worker, plus CodeMirror 6 as the editor. Problems must be **originally authored** — LeetCode problem text is copyrighted; Project Euler is CC BY-NC-SA (non-commercial), Rosetta Code is GFDL. Neither is cleanly reusable for a commercial product.
- **"Anti-uninstall" is mostly a myth for consumer extensions.** You can add *friction* (a settings password, a cooldown, hiding the toggle), but a user can always remove an unmanaged extension via `chrome://extensions`, a fresh profile, or another browser. True enforced installs require enterprise `ExtensionInstallForcelist` policy. Be honest about this in marketing.

---

## 2. Competitive landscape

| Name | Type | Platform | Status | Does well | Lacks | URL |
|---|---|---|---|---|---|---|
| CodeTime (Matthew Kim) | TRUE COMPETITOR (reward-balance gate) | Chrome ext (unpacked only) | Dead / never shipped | Earn-time model; prevents re-submitting same problem | Not published; depends on scraping LeetCode endpoints; no own problems | https://medium.com/@mattmkim/codetime-a-chrome-extension-that-rewards-me-for-solving-leetcode-problems-cc2831c52724 |
| Leetcode Torture (The Coding Sloth) | TRUE COMPETITOR (hard gate) | Chrome Web Store | Live (last updated Apr 2024) | Blocks *all* sites until a random problem solved; popular (~2k users, 4.7★) | Solving happens on leetcode.com, not in-extension; no return-to-page; all-or-nothing | https://chromewebstore.google.com/detail/leetcode-torture/clbhgfneekiimoaakhhdjimgnnbnfbeh |
| LeetCode Forcer (anuraglodhi13) | TRUE COMPETITOR (daily gate) | Chrome Web Store + GitHub | Likely stale (build May 2023) | Daily-problem enforcement; once-a-day 3h emergency bypass | Old build, broke on LeetCode UI; redirects to leetcode.com; no own challenge | https://chromewebstore.google.com/detail/leetcode-forcer/bfhandefodflloblgbmckmildnmangcb |
| LeetCode-Focus (strange8969) | TRUE COMPETITOR (daily gate) | GitHub (open source) | Live (v1.0.0, Oct 2025) | Clean MV3 + declarativeNetRequest two-rule loop-safe design; "Emergency Break" 1–240 min | Blocks ALL non-LeetCode sites; no whitelist; no own problems; relies on leetcode submission detection | https://github.com/strange8969/LeetCode-Focus |
| Math Blocker | WEAK ADJACENT (real gate, not coding) | Chrome Web Store | Live | True in-extension math-question gate; per-question difficulty; timed access after | Math, not coding; general audience | https://chrome.google.com/webstore/detail/math-blocker/ddoloajokemkdgcgdpplnofdajbjkkkm |
| Puzzle Blocker | WEAK ADJACENT (real gate, not coding) | Chrome Web Store | Live (v2.1.0, Sep 2025; ~38 users) | In-extension puzzle gate; timed access window | Tiny userbase; generic puzzles, not algorithms | https://chromewebstore.google.com/detail/puzzle-blocker-block-webs/immcgdedpkcclkbfnbcckelhpcfcjokg |
| Simple Site Blocker | WEAK ADJACENT (real gate, not coding) | Chrome Web Store | Live | Math-challenge unblock friction | Math, not coding | https://chromewebstore.google.com/detail/simple-site-blocker/fdndoefomomlikibjjlnlgfnhcgjpalh |
| ProcrastiNOT | WEAK ADJACENT (real gate, not coding) | Safari (macOS/iOS) | Live | Math-problem-to-disable-blocking; cross-Apple | Math; Safari only | https://www.coffeeandfun.com/procrastinot/ |
| LeetMate (nitro603) | WEAK ADJACENT (study aid, no gate) | Chrome ext / GitHub | Live (MIT) | YouTube video + ChatGPT solution help on LeetCode | No blocking, no gate — opposite of LeetLock | https://github.com/nitro603/LeetMate |
| LeetMate AI (kylpg/leetmateai) | WEAK ADJACENT (study aid, no gate) | Chrome ext / GitHub | Live | AI hints/code analysis sidebar on LeetCode | No blocking, no gate | https://github.com/kylpg/leetmateai |
| LeetCodeForcer (anuraglodhi13 repo) | TRUE COMPETITOR (source of the above) | GitHub | Source for Forcer ext | GraphQL-based completion check; iframe-reload guard | Same as Forcer; no license stated | https://github.com/anuraglodhi13/LeetCodeForcer |
| Constraints Blocker | WEAK ADJACENT (not a blocker) | Chrome Web Store | Stale (Jul 2021) | Hides problem constraints for interview realism | Not a site blocker at all | https://chromewebstore.google.com/detail/constraints-blocker-leetc/poadlijigkkehhbfnmdabgecngbmoaho |
| Leetblock | WEAK ADJACENT (misnomer) | Chrome Web Store | Live (Aug 2024) | Blocks LeetCode forum *users* | Unrelated to site blocking | https://chromewebstore.google.com/detail/leetblock-block-leetcode/dopkcagmapfpgabhpnbdonlejcidmpel |
| Cold Turkey | POSITIONING ANCHOR | Win/macOS app | Live | Hardest-to-bypass; system-level; one-time purchase | No challenge gate; no coding angle | https://getcoldturkey.com |
| Freedom | POSITIONING ANCHOR | Cross-platform + mobile | Live | Cross-device sync; app+site blocking | Subscription; no gate | https://freedom.to |
| LeechBlock NG | POSITIONING ANCHOR | Browser extension | Live | Free; 30 block sets; flexible scheduling | Browser-only; easy to bypass; no gate | https://www.proginosko.com/leechblock/ |
| BlockSite | POSITIONING ANCHOR | Chrome ext + mobile | Live | Large userbase; focus mode | Freemium; no gate | https://chromewebstore.google.com/detail/blocksite/bggpghhpmdhmgpcaoncnjakckiflgecm |
| StayFocusd | POSITIONING ANCHOR | Chrome/Edge ext | Live | ~700k users; "Nuclear Option"; in-page YouTube blocking | Easy to bypass/uninstall; no gate | https://chromewebstore.google.com/ (search "StayFocusd") |

---

## 3. True competitors — deeper notes

**CodeTime (Matthew Kim, Aug 2020).** The closest conceptual ancestor. Model: solving a LeetCode problem grants **15 minutes** of access to blacklisted sites; time decrements every second while a blacklisted tab is open; at zero, navigation to blacklisted domains is redirected to a block page. It guards against farming by checking *both* correctness *and* whether the problem was already solved. **Detection is fragile**: it regex-matches LeetCode submission endpoints, then polls the unofficial `/api/submissions/{problem}` and `/submissions/detail/{id}/check` endpoints once per second. It was **never published to the Chrome Web Store** — load-unpacked from source only. *Implication for LeetLock:* the earn-time-balance economy is good and worth borrowing; the LeetCode-scraping dependency is exactly what LeetLock should eliminate by hosting problems itself.

**Leetcode Torture (The Coding Sloth, repo `The-CodingSloth/haha-funny-leetcode-extension`).** Most visible *live* competitor: ~2,000 users, 4.7★ (~80 ratings), v1.0.5.1 last updated 2024-04-11. Behavior: on activation it **blocks all websites except LeetCode** until you solve a randomly assigned LeetCode problem; problems are solved **on leetcode.com**, not in the extension. Notable UX complaint in reviews: after solving, you cannot return to the page you were trying to reach. *Implication:* validates demand and the "hostage browser" mechanic, but the all-or-nothing block and the external-site dependency are weak points LeetLock can beat with per-site timed access and a native challenge.

**LeetCode Forcer (`anuraglodhi13/LeetCodeForcer`).** ~1,000 users, 4.5★ (11 reviews), build v2.0.6 dated **2023-05-05** — likely semi-abandoned; its own listing notes breakage with LeetCode's "new UI" and tells users to switch to the old interface. Mechanic: redirects all browsing to LeetCode until the daily problem is done; modes for "daily challenge" vs "any problem"; one 3-hour emergency bypass per day. Tech: JS/HTML/CSS, queries LeetCode's GraphQL endpoint, uses `chrome.tabs.onUpdated` with iframe-reload guards. No license file. *Implication:* its breakage on LeetCode UI changes is a direct case study for why LeetLock should not depend on LeetCode's DOM/API.

**LeetCode-Focus (`strange8969/LeetCode-Focus`).** Open-source, MIT, **MV3**, v1.0.0 dated **2025-10-04**, ~17 commits — the most modern reference. Architecture worth copying: a **two-rule `declarativeNetRequest` design** — one rule allowlists LeetCode domains, one redirects everything else back to LeetCode — explicitly engineered to be **loop-safe** (avoids redirect loops). Uses `chrome.storage.local`, `alarms`, `scripting`, `tabs`. Content script watches for the LeetCode "Submit" button and waits for the "Accepted" status. "Emergency Break" pause is 1–240 minutes. Limitations: blocks **all** non-LeetCode sites (no whitelist), no cross-device sync, still depends on detecting a LeetCode submission. *Implication:* excellent free MV3 reference for DNR redirect plumbing; LeetLock differs by hosting the challenge instead of detecting one.

---

## 4. Weak / adjacent tools

- **Math-gate blockers** (Math Blocker, Simple Site Blocker, Puzzle Blocker, Safari's ProcrastiNOT, mobile MathLock / "App locker with math problems"). These *do* implement a genuine in-app solve-to-unlock gate with timed access afterward — the exact UX pattern LeetLock wants — but use trivial math/puzzles for a general audience. They prove the friction model works; none target programmers or use real algorithm problems.
- **LeetMate / LeetMate AI** — AI study aids that overlay hints and solutions on LeetCode. No blocking; conceptually the *opposite* of LeetLock (they make problems easier; LeetLock makes distraction harder). Name-collision risk: "LeetMate" already exists, reinforcing the choice of "LeetLock."
- **Constraints Blocker** — hides problem constraints on LeetCode for interview realism; not a website blocker despite the name. Stale (2021).
- **Leetblock** — blocks abusive LeetCode *forum users*; unrelated to focus/blocking.
- **Serious blockers as positioning anchors** — **Cold Turkey** (system-level, deliberately near-unbreakable, one-time purchase), **Freedom** (cross-device sync, subscription), **LeechBlock NG** (free, flexible scheduling, 30 block sets, but trivially bypassed by switching browsers), **StayFocusd** (~700k users, free, "Nuclear Option," in-page YouTube blocking), **BlockSite** (freemium, large userbase). All are pure blockers/schedulers with **no challenge gate** — LeetLock's "every distraction charges you one algorithm problem" is a genuinely distinct hook.

---

## 5. What the category does well / common gaps

**Does well**
- The "solve-to-unlock" friction model is validated by both math-gate blockers (general) and LeetCode-forcers (programmers).
- Earn-time economies (CodeTime's 15-min reward) and timed access windows are well understood and liked.
- Emergency/one-time-bypass valves (Forcer's 3h, Focus's Emergency Break) reduce rage-uninstalls.
- MV3 `declarativeNetRequest` redirect plumbing is a solved problem (LeetCode-Focus's loop-safe two-rule pattern).

**Common gaps (LeetLock's openings)**
- **External-dependency fragility.** Every LeetCode-forcer relies on detecting submissions on leetcode.com via unofficial/GraphQL endpoints or DOM scraping. This breaks whenever LeetCode redesigns (LeetCode Forcer is the cautionary tale) and fails offline / behind login walls.
- **No native challenge.** Nobody hosts the problem and a code runner inside the extension. That means no offline use, no control over difficulty, and easy bypass by faking a LeetCode "Accepted" state.
- **All-or-nothing blocking.** Torture and Focus block *every* site; no per-site policy, no whitelist, no graduated access.
- **SPA blind spots.** Most rely on navigation redirects and miss in-app feeds (YouTube Shorts, Reddit infinite scroll, Twitter/X) that never trigger a new network request.
- **Weak UX after solving** (Torture: can't return to intended page).
- **No problem variety / anti-farming depth, no analytics, no cross-device sync** in the open-source forcers.
- **Honest anti-bypass story is missing** — products imply enforcement they cannot deliver.

---

## 6. LeetLock differentiation

1. **Self-contained challenge gate.** Problems are authored by LeetLock and rendered inside a bundled extension page with an in-browser code editor + runner. No dependency on leetcode.com DOM or API → does not break on LeetCode redesigns, works offline, cannot be spoofed by faking a LeetCode submission.
2. **The challenge IS the block page.** Instead of redirecting to LeetCode, the distracting URL is replaced in-tab by the LeetLock problem screen. Solve within the timer → earn timed access to that site; fail/timeout → close or redirect.
3. **Per-site, graduated policy** — different sites can cost different difficulty tiers or different time grants; whitelist support; earn-balance economy à la CodeTime rather than all-or-nothing.
4. **SPA-aware blocking** — content script + `webNavigation.onHistoryStateUpdated` catches YouTube Shorts / Reddit / X in-app navigation that pure DNR misses.
5. **Original, pattern-based problem bank** (arrays, two-pointer, hashmap, BST, DP, etc.) — legally clean, tunable difficulty, infinite-feeling via parameterized variants and anti-repeat tracking.
6. **Honest friction, not fake enforcement** — a settings password / cooldown for self-bind, transparently marketed as friction, with an optional enterprise/parent force-install path for those who want real lockdown.
7. **Programmer-native positioning** — "Cold Turkey for CS students" — turns wasted distraction time into measurable interview-prep reps, with streaks/stats.

---

## 7. Manifest V3 technical constraints

Citations: `developer.chrome.com`.

**declarativeNetRequest (DNR)** — https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest
- **Dynamic rule limits:** `MAX_NUMBER_OF_DYNAMIC_RULES` allows at least **30,000 "safe" dynamic rules**; "unsafe" rules (e.g. `redirect`) are capped lower (historically **5,000**, `MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES`). Session rules: `MAX_NUMBER_OF_SESSION_RULES` ~**5,000** (cleared on browser shutdown). **Regex rules across all rulesets are capped at `MAX_NUMBER_OF_REGEX_RULES` = 1,000.** Static rules: `GUARANTEED_MINIMUM_STATIC_RULES` ~30,000 across up to 50 enabled rulesets.
- **Redirect to an extension page:** a `redirect` rule can target an extension page via `action.redirect.extensionPath` (or a full URL), **but the destination must be listed in `web_accessible_resources`** — redirecting to a non-web-accessible resource throws an error. Redirects to `javascript:` URLs are disallowed.
- **regexFilter / regexSubstitution:** regex rules match `regexFilter`; `regexSubstitution` builds the redirect URL using `\1`–`\9` capture groups (`\0` = whole match). Useful to carry the blocked URL into the challenge page as a query param (e.g. `...?return=\0`).
- **Host permissions:** `redirect` requires host access to the matched domains. Use the `declarativeNetRequest` permission (implicit access for block/allow/upgradeScheme) plus host permissions, or `declarativeNetRequestWithHostAccess` (rules apply only where host permission is granted).
- *Design implication:* register a small set of **dynamic redirect rules** (one per blocked domain, or regex) that redirect main-frame navigations to a `web_accessible_resources` challenge page, passing the original URL via `regexSubstitution`. Add/remove rules as the user edits their blocklist or earns access — well within limits. Keep regex rules few (≤1,000 cap).

**Intercepting navigations & the SPA gap** — https://developer.chrome.com/docs/extensions/reference/api/webNavigation
- DNR and `webNavigation.onBeforeNavigate`/`onCommitted` only see real navigations that produce a network request. **SPA route changes via `history.pushState()` (e.g. `youtube.com/shorts`, Reddit/X feeds) produce no network request** and are therefore **invisible to DNR**.
- `webNavigation.onHistoryStateUpdated` (and `onReferenceFragmentUpdated` for hash changes) **does** fire on these client-side route changes, with tab id + new URL.
- *Design implication:* DNR catches first-load and full navigations; a **content script + a background `onHistoryStateUpdated` listener** must catch in-app route changes and then redirect the tab (`chrome.tabs.update`) or replace page content with the challenge. This dual mechanism is mandatory to block Shorts-style distraction.

**chrome.storage quotas** — https://developer.chrome.com/docs/extensions/reference/api/storage
- `storage.sync`: `QUOTA_BYTES` = **102,400** (~100 KB total), `QUOTA_BYTES_PER_ITEM` = **8,192** (8 KB/item), `MAX_ITEMS` = **512**, `MAX_WRITE_OPERATIONS_PER_HOUR` = **1,800**, `MAX_WRITE_OPERATIONS_PER_MINUTE` = **120**.
- `storage.local`: `QUOTA_BYTES` = **10,485,760** (10 MB; 5 MB in Chrome ≤113); raisable with the `unlimitedStorage` permission (does **not** affect sync).
- *Design implication:* keep only small synced settings (blocklist, preferences, streak counters) in `storage.sync`, mindful of the 8 KB/item and write-rate caps — **do not write earn-time countdowns to sync**. Store the **problem bank, solve history, code drafts, and frequently-updated state in `storage.local`**. A per-second timer must never touch `storage.sync`.

**MV3 service worker lifecycle** — https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle
- The background **service worker is ephemeral**: terminated after **~30 s of inactivity**; any event/API call resets the timer; a single task running >5 min is killed.
- `setTimeout`/`setInterval` are unreliable — they are cancelled when the worker is suspended. Use **`chrome.alarms`** for timers; minimum alarm period is **30 s** (aligned to the lifecycle).
- *Design implication:* never hold the access-window countdown purely in worker memory. Persist `accessExpiresAt` timestamps in `storage.local`; use `chrome.alarms` to wake and re-evaluate; recompute remaining time from timestamps on each wake/navigation. A precise UI countdown can run in the (non-ephemeral) challenge page, but enforcement must be timestamp-based.

**Sandboxed pages & CSP for a code runner** — https://developer.chrome.com/docs/extensions/reference/manifest/sandbox
- The extension's normal CSP forbids `eval`/`unsafe-inline`. **Sandboxed pages** (declared under the manifest `"sandbox"` key) get a separate, permissive CSP — default `sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';` — so they **can run `eval()` / `new Function()`** and untrusted code.
- Sandboxed pages **cannot access `chrome.*` APIs** and cannot directly talk to non-sandboxed pages; they communicate only via **`postMessage()`**.
- *Design implication:* host the code runner in a **sandboxed iframe**, and inside it spin up a **Web Worker** to execute the user's solution against test cases (worker = crash/loop isolation + ability to terminate on timeout). Flow: challenge page → `postMessage` code into sandboxed iframe → iframe runs it in a Worker → posts back pass/fail → challenge page (with `chrome.*` access) updates state. CodeMirror 6 lives in the non-sandboxed challenge page as the editor.

---

## 8. Anti-bypass reality — be honest

**Achievable friction (legitimate to ship):**
- A user-set **settings password / PIN** to edit or disable the blocklist.
- A **cooldown / commitment timer** before disabling takes effect (Cold Turkey's approach; you cannot make it un-cancellable in a browser extension, but you can delay it).
- **Limited emergency bypasses** (e.g. one 3h pass/day, like LeetCode Forcer).
- Hiding the on/off toggle behind the challenge itself ("solve to disable").
- Catching the **SPA bypass** (Shorts, feeds) via the content-script mechanism above — most competitors miss this.
- Detecting and re-blocking when the user opens the target site in a way the extension still sees.

**Impossible / dishonest to claim:**
- **You cannot prevent uninstall of an unmanaged extension.** Any user can remove it from `chrome://extensions`, disable it, run a fresh/guest profile, use another browser, or use the device outside Chrome.
- `chrome.management` can *observe* other extensions and your own (`getSelf`, uninstall self) but **cannot block the browser's own uninstall UI**.
- Developer-mode and `--disable-extensions` flags can neuter extensions entirely.
- **True enforced installation requires enterprise policy** — `ExtensionInstallForcelist` (e.g. `HKLM\Software\Policies\Google\Chrome\ExtensionInstallForcelist`), which greys out removal. Even Google documents this as **"best effort"**: "some operating systems make it impossible for Chrome to defend robustly against extensions being modified externally." This path is only for managed devices (employer/school/parent admin), not consumers.
- *Recommendation:* market LeetLock honestly as **self-imposed friction** ("makes quitting annoying enough that you don't"), not as an unbreakable lock. Offer an **optional managed/force-install guide** for parents, schools, or self-bind-via-MDM power users. Over-claiming invites 1-star reviews and erodes trust.

---

## 9. Recommended MVP architecture (brief)

- **Stack:** MV3 + React + TypeScript + Vite. Use a maintained boilerplate (see §10) — given CRXJS is seeking maintainers, a stable choice is either a recent fork of `Jonghakseo/chrome-extension-boilerplate-react-vite` (custom HMR, no CRXJS dependency) or CRXJS 2.4.x with awareness of HMR quirks.
- **Background service worker:** registers `declarativeNetRequest` dynamic redirect rules from the user's blocklist; listens to `webNavigation.onHistoryStateUpdated` for SPA route changes; manages `chrome.alarms`; owns the earn-time/access-window state (timestamps in `storage.local`).
- **DNR rules:** one redirect rule per blocked domain (or regex), redirecting main-frame navigations to the bundled `challenge.html` (declared in `web_accessible_resources`), passing the original URL via `regexSubstitution`/query param so the user can return after solving.
- **Content script:** on blocked SPA sites, watches `pushState`/route changes and tells the background to gate; can also render the challenge in-place.
- **Challenge page (`challenge.html`):** React UI, CodeMirror 6 editor, problem description, countdown timer (UI-only; enforcement via persisted timestamps). Has `chrome.*` access.
- **Code runner:** a **sandboxed iframe** (manifest `"sandbox"`) hosting a **Web Worker** that runs the user's JS against hidden test cases with a hard timeout; communicates via `postMessage`. Worker isolates infinite loops and can be terminated.
- **Problem bank:** ~30–60 **originally authored** problems shipped in `storage.local` / bundled JSON, tagged by pattern and difficulty, with parameterized variants and anti-repeat tracking. Start JavaScript-only for the MVP.
- **Storage split:** `storage.sync` for small settings (blocklist, prefs, streaks); `storage.local` for problem bank, solve history, code drafts, access timestamps. Never write per-second state to sync.
- **Settings protection:** optional PIN + disable-cooldown + capped emergency bypass.

---

## 10. Reference repositories & libraries

| Name | URL | License | How it helps |
|---|---|---|---|
| chrome-extension-boilerplate-react-vite (Jonghakseo) | https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite | MIT | Mature MV3 + React + TS + Vite + Turborepo monorepo; popup/options/content/background/side-panel/new-tab; custom HMR (no CRXJS dep). **Archived Feb 2026 (read-only)** — fork it. |
| @crxjs/vite-plugin | https://www.npmjs.com/package/@crxjs/vite-plugin · https://crxjs.dev/vite-plugin/ | MIT | Turns Vite into an MV3 build tool (manifest.json as entry), HMR for extensions. Current ~v2.4.0 (early 2026). **Caveat: project is seeking new maintainers; 2.x has documented HMR flakiness** — pin versions, test HMR. |
| Chrome-Extension-Boilerplate-React-Vite (Gunock/ThomasKiljanczykDev) | https://github.com/Gunock/chrome-extension-boilerplate-react-vite | MIT | Actively maintained Vite 7 + React 19 + TS MV3 starter; popup/background/content + watch script. Good alternative to the archived Jonghakseo repo. |
| react-vite-chrome-extension (timelessco) | https://github.com/timelessco/react-vite-chrome-extension | MIT | React + TS + Vite + TailwindCSS MV3 starter. |
| CodeMirror 6 | https://codemirror.net/ | MIT | In-browser code editor for the challenge page; modular, TS-friendly; JS language + linting extensions. |
| codemirror6-code-editor (jaykapade) | https://github.com/jaykapade/codemirror6-code-editor | MIT (check repo) | Minimal working CodeMirror 6 setup — saves time wiring extensions/theme. |
| LeetCode-Focus (strange8969) | https://github.com/strange8969/LeetCode-Focus | MIT | Reference for a loop-safe MV3 two-rule `declarativeNetRequest` redirect/block design; uses `alarms`/`scripting`/`storage.local`. |
| LeetCodeForcer (anuraglodhi13) | https://github.com/anuraglodhi13/LeetCodeForcer | No license stated | Reference only (do not reuse code without a license) — shows `chrome.tabs.onUpdated` redirect pattern and iframe-reload guards. |
| haha-funny-leetcode-extension (The Coding Sloth) | https://github.com/The-CodingSloth/haha-funny-leetcode-extension | Check repo | Source of "Leetcode Torture"; reference for the hard-gate UX and its pitfalls. |
| Project Euler problems | https://projecteuler.net/copyright | CC BY-NC-SA 4.0 | Inspiration only — **non-commercial license; cannot ship verbatim in a commercial product.** Math-heavy, not interview-style. |
| Rosetta Code | https://rosettacode.org/wiki/Rosetta_Code:Copyrights | GFDL 1.2 | Inspiration only — **GFDL is incompatible with most software licenses; not cleanly reusable.** |
| Exercism | https://exercism.org/ | Exercises MIT-ish, content varies per track | Open-source practice exercises; check per-track licensing before any reuse. Best treated as inspiration. |
| **Original problem authoring** | n/a | n/a (LeetLock-owned) | **Required path.** LeetCode problem statements are copyrighted. LeetLock must author original problems "inspired by common patterns" (two-sum-style hashmap, two-pointer, sliding window, BFS/DFS, DP). Pattern *categories* are not protectable; specific problem text is. |

**Licensing bottom line:** there is **no large, cleanly commercially-licensed bank of interview-style coding problems** to drop in. LeetLock must write its own. Open sets either carry non-commercial (Project Euler) or copyleft/doc (Rosetta Code, GFDL) licenses, or are math/curriculum-oriented rather than algorithm-interview problems.

---

## 11. Sources

- CodeTime — https://medium.com/@mattmkim/codetime-a-chrome-extension-that-rewards-me-for-solving-leetcode-problems-cc2831c52724
- Leetcode Torture (Chrome Web Store) — https://chromewebstore.google.com/detail/leetcode-torture/clbhgfneekiimoaakhhdjimgnnbnfbeh
- haha-funny-leetcode-extension (Torture source) — https://github.com/The-CodingSloth/haha-funny-leetcode-extension
- LeetCode Forcer (Chrome Web Store) — https://chromewebstore.google.com/detail/leetcode-forcer/bfhandefodflloblgbmckmildnmangcb
- LeetCodeForcer (GitHub) — https://github.com/anuraglodhi13/LeetCodeForcer
- LeetCode-Focus (GitHub) — https://github.com/strange8969/LeetCode-Focus
- LeetMate (nitro603) — https://github.com/nitro603/LeetMate
- LeetMate AI (kylpg) — https://github.com/kylpg/leetmateai
- Math Blocker — https://chrome.google.com/webstore/detail/math-blocker/ddoloajokemkdgcgdpplnofdajbjkkkm
- Puzzle Blocker — https://chromewebstore.google.com/detail/puzzle-blocker-block-webs/immcgdedpkcclkbfnbcckelhpcfcjokg
- Simple Site Blocker — https://chromewebstore.google.com/detail/simple-site-blocker/fdndoefomomlikibjjlnlgfnhcgjpalh
- ProcrastiNOT (Safari) — https://www.coffeeandfun.com/procrastinot/
- Constraints Blocker — https://chromewebstore.google.com/detail/constraints-blocker-leetc/poadlijigkkehhbfnmdabgecngbmoaho
- Leetblock — https://chromewebstore.google.com/detail/leetblock-block-leetcode/dopkcagmapfpgabhpnbdonlejcidmpel
- chrome.declarativeNetRequest — https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest
- chrome.webNavigation — https://developer.chrome.com/docs/extensions/reference/api/webNavigation
- chrome.storage — https://developer.chrome.com/docs/extensions/reference/api/storage
- Service worker lifecycle — https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle
- Longer extension service worker lifetimes (blog) — https://developer.chrome.com/blog/longer-esw-lifetimes
- Sandboxed pages / CSP — https://developer.chrome.com/docs/extensions/reference/manifest/sandbox
- ExtensionInstallForcelist / enforcing extensions — https://www.techlockdown.com/articles/how-to-enforce-browser-extensions ; https://support.google.com/chrome/a/answer/7532015
- @crxjs/vite-plugin — https://www.npmjs.com/package/@crxjs/vite-plugin ; https://crxjs.dev/vite-plugin/
- CRXJS HMR issues — https://github.com/crxjs/chrome-extension-tools/issues/829 ; https://github.com/crxjs/chrome-extension-tools/issues/515
- chrome-extension-boilerplate-react-vite (Jonghakseo) — https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite
- Chrome-Extension-Boilerplate-React-Vite (Gunock) — https://github.com/Gunock/chrome-extension-boilerplate-react-vite
- react-vite-chrome-extension (timelessco) — https://github.com/timelessco/react-vite-chrome-extension
- CodeMirror — https://codemirror.net/ ; https://github.com/jaykapade/codemirror6-code-editor
- Building a code editor with CodeMirror 6 — https://www.raresportan.com/how-to-make-a-code-editor-with-codemirror6/
- Project Euler copyright — https://projecteuler.net/copyright
- Rosetta Code copyrights — https://rosettacode.org/wiki/Rosetta_Code:Copyrights
- LeetCode alternatives / open-source — https://openalternative.co/alternatives/leetcode ; https://github.com/mbucko/openleetcode
- Website blocker comparisons (Cold Turkey / Freedom / LeechBlock / StayFocusd) — https://www.digitalzen.app/blog/best-website-blocker-for-productivity/ ; https://www.slant.co/topics/5561/versus/~stayfocusd-chrome-extension_vs_leechblock-firefox-extension_vs_cold-turkey-windows-app
- Making Chrome extensions SPA-aware — https://medium.com/@softvar/making-chrome-extension-smart-by-supporting-spa-websites-1f76593637e8

*Note on verification gaps: chrome-stats.com blocked automated fetches; install counts, ratings, and "last updated" dates above were taken from Chrome Web Store listings and search-result summaries and should be re-verified at build time. Exact DNR limit constants can shift between Chrome versions — confirm against the live `developer.chrome.com` reference before relying on specific numbers.*
