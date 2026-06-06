# LeetLock — Modern Interview Modes Research (2026)

> **Purpose.** LeetLock today gates distraction behind ~2,900 classic DSA problems. That canon is a
> 2015–2022 artifact. This doc researches **what technical interviews actually test in 2025–2026** —
> especially at YC / AI-native startups — and proposes **new challenge "modes"** that fit LeetLock's
> existing architecture (sandboxed Web Worker, no backend, optional user-provided Gemini key).
>
> **Status:** research only — no code written. Compiled 2026-06-05 from 6 parallel web-research
> sweeps; the two most load-bearing claims (Canva, interviewing.io) were verified against primary
> sources. Confidence tags: **[strong]** = primary/company source or survey; **[medium]** = reputable
> secondary roundup; **[soft]** = opinion blog (directional sentiment, not fact).
>
> **For the autonomous loop:** the actionable backlog is §8. Treat each `[ ]` as a candidate task.
> Do NOT start building until a mode is promoted into `PROGRESS.md` — this is a strategy doc.

---

## 1. Executive summary — the thesis is "bifurcation, not death"

The popular "LeetCode is dead" headline is **overstated**. The accurate picture from the best-sourced
survey in the space:

- **[strong]** interviewing.io surveyed 67 interviewers (52 at FAANG / FAANG-adjacent). **Zero of the
  52 FAANG respondents had abandoned algorithmic questions.** But **>50% expect DSA to be "not as
  prominent" in 2–5 years**, and **~20% think it never goes away.** The stark split: **67% of startup
  respondents said AI has meaningfully changed their interview process vs. 0% at FAANG.**
  (verified: https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot)

So the market is splitting into two tracks, and **LeetLock should serve both as distinct modes**:

1. **Big-tech track (DSA, often AI-off).** Still real, still required at FAANG. LeetLock's current
   bank already serves this — keep it, but *frame* it honestly as one track among several.
2. **Startup / AI-native track (everything new).** Where all the movement is. The recurring formats:
   - **AI-assisted coding** — candidates are now *expected* to use Cursor/Copilot/Claude; graded on
     how they steer, review, and debug AI output, not recall.
   - **Debugging / bug-squash** — fix a real bug in an unfamiliar multi-file repo so the tests pass.
   - **Build-a-feature / ship-a-PR** — extend an existing codebase against a product spec.
   - **Code review** — find the planted defects in a PR diff.
   - **AI engineering** — RAG, agents, tool-calling, evals, prompt quality, cost/latency.
   - **System design** (mostly senior) and **low-level/OO design** (very codeable).
   - **Practical front-end / utility JS** and **SQL/data** as adjacent audiences.

**The single biggest strategic insight:** the #1 newly-tested skill across Canva, Meta, Shopify, and
the new assessment platforms is **"can you find and fix the bugs in code (often AI-generated) inside a
realistic multi-file project?"** — and there is **no dominant dedicated practice product for it.** It
is also the *cheapest* mode for LeetLock to build, because it reuses the existing Worker test-runner
almost verbatim (see §6, §7). That is the lead recommendation.

---

## 2. AI-assisted / "AI-allowed" coding interviews

The defining shift of 2025–2026: top companies stopped banning AI and started **grading how you use
it.** The interview transcript (your prompts + what you accept/reject) is now the artifact.

- **[strong] Canva** (verified) replaced its "Computer Science Fundamentals" screen with **"AI-Assisted
  Coding"** (June 2025). Quote: *"we now expect Backend, Machine Learning and Frontend engineering
  candidates to use AI tools like Copilot, Cursor, and Claude during our technical interviews."*
  Problems are deliberately realistic/ambiguous (e.g. *"Build a control system for managing aircraft
  takeoffs and landings"*) instead of Conway's Game of Life. Graded on: knowing *when* to leverage AI,
  decomposing ambiguous requirements, **identifying and fixing flaws in AI-generated code**, and
  keeping output production-grade. Candidates *without* AI experience "often struggled" despite strong
  fundamentals. — https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/
- **[strong] Meta** piloted an **AI-enabled coding round** (Oct 2025) replacing one of two onsite
  coding rounds: a custom CoderPad with a built-in multi-model AI chat (GPT-5, Claude Sonnet 4.5,
  Gemini 2.5 Pro, Llama 4, …); 60 min on a **multi-file project** (debug existing code, edit config,
  write endpoints) instead of two algorithm puzzles. One classic AI-free DSA round remains. —
  https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples
  · https://www.hellointerview.com/blog/meta-ai-enabled-coding
- **[strong] Shopify** lets candidates use any AI tool and *wants the AI to fail* — VP Eng Farhan
  Thawar: they like AI in interviews because "AI sometimes generates pure garbage," so they can watch
  how candidates respond (fix / re-prompt / discard). Tied to Tobi Lütke's April 2025 "reflexive AI
  usage is a baseline expectation" memo. — https://www.hellointerview.com/blog/shopify-ai-enabled-coding
- **[strong] Counter-example — Stripe explicitly *prohibits* AI** in interviews/take-homes (wants raw
  reasoning). The policy split is real; not everyone is going AI-on. — (cited across roundups)
- **[strong] Platforms productizing this:**
  - **CodeSignal "Agentic Coding Assessments"** (Apr 2026): build with Claude Code / Cursor / Codex,
    then explain decisions to a human; reviewers get the **AI interaction transcript**. CEO: *"the best
    [engineers] know how to get the most out of [AI agents]."* —
    https://www.prnewswire.com/news-releases/codesignal-launches-industry-first-agentic-coding-assessments-for-ai-era-engineering-hiring-302732265.html
  - **Outship (YC)**: browser VS Code + pre-installed agents on a cloud VM; records the whole agent
    session; scores rubrics on **decomposition, steering, trade-offs, error recovery.** —
    https://www.ycombinator.com/companies/outship
  - **Micro1** ("Zara" AI interviewer + "Ava" proctor), **CoderPad** (scenarios for *debugging
    AI-generated code* and *explaining trade-offs*), **Karat** ("Human + AI era" interviews).

**What's evaluated now (the new rubric, consistent across sources):** prompt/spec quality · reviewing
& verifying AI output · **debugging AI-generated bugs** · decomposition of ambiguous requirements ·
knowing when to take over manually · explaining trade-offs to a human.

---

## 3. YC / startup interview practices (the anti-LeetCode formats)

Startups move fastest and are LeetLock's stated target ("the most modern interviews take place at YC /
startups"). The recurring replacements for DSA:

- **[strong] The modern startup loop** (founder Zhi Sun's 2025 process, a clean exemplar): (1) 15–30
  min "vibe check" → (2) **24-hour take-home on a real product problem, AI required**, deliverables =
  GitHub repo + deployed URL + 5-min walkthrough video → (3) 60-min live session **extending the
  feature**. Thesis: *"writing code isn't the hard part"*; wants people who can "bring an idea to life
  in 24 hours and ship something useful." —
  https://zhisun.medium.com/hiring-software-engineers-for-startups-in-the-ai-era-heres-how-i-hire-in-2025-85a8051e4814
- **[medium] The five anti-LeetCode formats** (with rubrics): take-home (4–8 h) — *"writing tests is
  the single highest-leverage signal"*; **live debug** (60–90 min on a buggy codebase, "start with the
  failure"); pair-programming on a real stripped-down codebase; take-home + live defense/extension;
  paid trial days. — https://www.techinterview.org/post/3233474683/anti-leetcode-interview-formats/
- **[medium] Companies that dropped algorithm puzzles** (secondary-sourced, treat mechanics as
  directional): Stripe (practical debugging + systems), Airtable (take-home mirroring real work),
  Ramp/Discord (pair-programming on real code), Cloudflare/Datadog/GitHub (live debugging), plus
  Buffer/Webflow/DuckDuckGo (**paid** projects). —
  https://www.hellointerview.com/blog/companies-without-leetcode
- **[strong] "Vibe coding" as a real format**, esp. for PM/AI-PM and prototype roles: timed "build a
  working prototype of X" with Bolt/Lovable/v0/Replit/Cursor. YC's Garry Tan: for ~25% of the W2025
  batch, ~95% of code was LLM-generated. —
  https://www.news.aakashg.com/p/vibe-coding-interview · https://x.com/garrytan/status/1897303270311489931
- **[strong] Big-tech keeps DSA, startups diverge** — and even Tan warns "cracked vibe coders" still
  need "classical coding training" to catch AI-introduced security/perf/architecture problems.
  Fundamentals still matter *underneath* AI fluency. —
  https://hellointerview.substack.com/p/how-tech-coding-assessments-are-splintering

**Signals startups say they care about:** shipping speed, pragmatism, product ownership ("thinks like
a product owner"), comfort with ambiguity, AI-tool fluency, and **testing discipline** — none of which
classic DSA measures.

---

## 4. Debugging, code-review, and "make the test pass" interviews

The most concrete, most codeable, and (per §1) the highest-leverage new mode for LeetLock.

- **[strong] Stripe "Bug Squash" is the canonical format.** Candidate gets a real open-source repo
  pinned to a version with a known bug; interviewer supplies **failing unit tests** reproducing it;
  candidate locates and applies a **focused** fix (not a rewrite). Multiple bugs per repo to
  differentiate candidates. Glassdoor verbatim: *"given this open source code base, run the tests,
  identify the bug, and fix it."* — https://www.glassdoor.com/Interview/Bug-squash-...-QTN_2407542.htm
  · design write-up: https://blog.jez.io/bugsquash/
- **[strong] Why it beats LeetCode (pedagogy).** Using *The Programmer's Brain*'s five activities,
  LeetCode tests mostly **transcribing**; debugging exercises all five (searching, comprehension,
  transcribing, incrementation, exploration) — reading unfamiliar code, root-cause analysis, reading
  stack traces, tool proficiency. *"Have I ever been paid to write a function that checks if a word is
  a palindrome? No. Have I had to dive into foreign code to unbreak something? Literally every day."* —
  https://www.zhenghao.io/posts/debugging-interview · https://blog.jez.io/bugsquash/
- **[strong] The reusable grading model is SWE-bench's two test buckets:** `FAIL_TO_PASS` (red now,
  must go green = "you fixed it") + `PASS_TO_PASS` (green now, must stay green = "you didn't break
  anything / over-rewrite"). Objective, fully client-side, rewards minimal targeted fixes. —
  https://www.swebench.com/SWE-bench/
- **[medium] Code-review interviews:** candidate reviews a 100–300-line PR diff with 5–8 planted issues
  (definitely-catch / probably-catch / nice-to-catch) and writes review comments. Graded against the
  planted-issue rubric — catches the critical bug (null deref, SQL injection, race, auth bypass, N+1)
  vs. lost in style nits. — https://www.hackerrank.com/blog/code-review-questions/ ·
  https://guides.18f.gov/eng-hiring/interviews/code-review/
- **[medium] "Make the test pass" / TDD** and **Hatchways** broken-repo take-homes ("messages don't
  appear immediately" → fix + write `bug-fix.md`) round out the family. —
  https://www.hatchways.io/blog/takehome-challenge-full-stack-assessment-chat-server
- **[strong] HackerRank's 2025 Developer Skills Report**: 78% of devs say assessments don't match real
  work; debugging now billed as "the most important AI-age skill to assess." —
  https://www.hackerrank.com/reports/developer-skills-report-2025

---

## 5. AI-engineering interviews (the genuinely new canon)

A fast-growing interview category ("AI Engineer", "Applied AI Engineer", "Forward-Deployed Engineer")
that tests **building products on foundation models**, not training them. **No good interactive
practice product exists for it — this is white space.**

- **[medium] The five clusters that dominate loops:** LLM/transformer basics, **RAG architecture**,
  **agentic systems / tool-calling**, **prompt engineering + evals**, **LLM system design**. —
  https://letsdatascience.com/blog/50-llm-and-ai-engineer-interview-questions-for-2026 ·
  https://github.com/amitshekhariitbhu/ai-engineering-interview-questions
- **[medium] FDE take-home shape** (OpenAI, write-up): ~5-hour build on the LLM APIs + **video
  walkthrough**, then a 60-min decision dissection ("why this chunking strategy? what changes at
  100× data?"). Signature question: *"How do you know your AI system is actually working well?"* —
  https://gaijineer.co/openai-forward-deployed-engineer-interview-process
- **[strong] "Evals are the differentiator."** swyx ("The Rise of the AI Engineer"), Chip Huyen (*AI
  Engineering*, O'Reilly 2025), Hamel Husain ("Your AI Product Needs Evals", "LLM-as-a-Judge") are the
  canon interviewers draw on. — https://www.latent.space/p/ai-engineer · https://github.com/chiphuyen/aie-book
  · https://hamel.dev/blog/posts/evals/
- **[strong] "LeetCode for prompting" barely exists with rigorous grading.** Only prompt-**injection**
  CTFs grade cleanly: **Lakera Gandalf** (https://gandalf.lakera.ai/), **HackAPrompt**
  (https://www.hackaprompt.com). "LeetPrompt" exists but uses opaque LLM-judging. → **The defensible
  niche: a prompt/AI-engineering gym with deterministic, reproducible scoring.**

**Key feasibility insight:** the most-tested AI-eng topics are gradable **deterministically with no LLM
key** — cosine similarity / top-k kNN, BPE merge, chunking-with-overlap, tool-arg JSON-schema
validation, agent tool-router over *mocked deterministic tools*, RAG retrieval recall@k/MRR, eval-harness
authoring, deterministic injection-defense. A second tier (user supplies a key) does **prompt golf /
spec-conformance** where the LLM produces output but a **deterministic checker** grades pass-rate over
a hidden test set — the genuinely novel, rigorously-graded "LeetCode for prompting."

---

## 6. System design & low-level design

- **[strong] Mostly a senior signal; new grads get a scoped-down version or none.** Canonical prompt
  set is small (URL shortener, Twitter feed, rate limiter, chat, web crawler). The seniority axis is
  "proactiveness" — juniors answer, seniors drive. —
  https://www.hellointerview.com/blog/the-system-design-interview-what-is-expected-at-each-level ·
  https://github.com/donnemartin/system-design-primer
- **[strong] Open-ended whole-system design is hard to grade without a human** — the paid market
  (interviewing.io, Exponent at $100–400/session) still sells *human* feedback. Hello Interview &
  Exponent do **rubric-based LLM-as-judge** AI feedback, staged (requirements → entities → API →
  high-level → deep-dive). — https://www.hellointerview.com/practice/system-design
- **[strong] The deterministic slices ARE gradable offline:** **capacity estimation** (QPS, storage,
  bandwidth — pure formulas, check numeric within tolerance), **pick-the-primitive** MCQ (cache
  strategy / eviction / SQL-vs-NoSQL / Kafka-vs-RabbitMQ), **spot-the-bottleneck**, **order-the-
  components**, **API-contract checks** (cursor vs offset pagination, idempotency keys). —
  https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation
- **[strong] The unlock — Low-Level / OO design is just runnable code.** Parking lot, elevator, vending
  machine, LRU cache, rate limiter modeled as deterministic **simulations with a `tick()` API + hidden
  unit tests** — *identical to LeetLock's existing DSA harness*, just OOD-flavored. Fully objective, no
  design-judging. — https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/elevator

**Honest limit:** freeform "design Twitter" needs an LLM judge (noisy: verbosity/position bias; a
fluent-but-wrong answer can fool it) or self-assessment. Lead with the deterministic slices + LLD-as-
code; offer freeform "design X" only as optional **AI-coach feedback**, never a hard pass/fail.

---

## 7. Competitive prep-product landscape (what already exists → where the gaps are)

| Product | Core | Non-DSA modes | Angle |
|---|---|---|---|
| LeetCode | DSA | SQL, concurrency, JS-30-days, SD articles | Default DSA gym |
| NeetCode | DSA (NC150) | System design, ML, **AI engineering**, full-stack | "Everything for one price" |
| AlgoExpert | DSA (video) | SystemsExpert, FrontendExpert, MLExpert | Polished video per vertical |
| HackerRank | DSA + assess | SQL, **debugging tracks**, AI pair-programming | Pivoting hard to AI-age debugging |
| CodeSignal | DSA + assess | Industry Coding Framework (project-based), **Agentic Coding** | Hiring-grade standardized scoring |
| Codewars / Exercism | kata / fluency | many languages, mentorship | Gamified / mentored, not interview-shaped |
| Educative / Frontend Masters | courses | System design, **Frontend system design**, AI-graded design | Text/video learn-by-doing |
| **GreatFrontend** | FE coding | **build-a-component, JS utilities**, FE quizzes, FE system design | Owns the front-end-interview niche |
| **Frontend Mentor** | project builds | 120+ FE/full-stack projects from real design files | Real-workflow project practice |
| **Codecrafters** | build-your-own-X | rebuild Redis / Git / SQLite / interpreters | Systems internals; used at Google/OpenAI |
| **DataLemur / StrataScratch** | SQL | real-company SQL + data-science Qs | Owns the SQL/data-interview niche |

**Validated non-DSA niches that became real businesses:** Codecrafters (build-your-own-X), GreatFrontend
(front-end), DataLemur/StrataScratch (SQL). Proof that "not DSA" is a viable wedge.

**White space (under-served / no dominant product), from the research:**
1. **Debugging / "fix the broken code" drilling** — strongest gap; legitimized by Meta/HackerRank, no
   dominant product. (https://www.hackerrank.com/reports/developer-skills-report-2025)
2. **"Extend partial code" / AI-aware coding round practice** — essentially zero dedicated product.
3. **Rigorously-graded AI-engineering / prompt gym** — only injection CTFs grade cleanly today.
4. **Take-home rubric coaching** — 68% of companies use take-homes (+12% YoY) but only ~20% of
   completers advance; nobody teaches the rubric. (https://www.hiredkit.ai/blog/take-home-coding-assignment-guide-2025)

**Well-served — do NOT chase:** behavioral (owned by conversational-AI mock tools), pure DSA
(saturated), system-design *theory* (Educative/Grokking/NeetCode), front-end interview canon
(GreatFrontend), and DOM/visual "build a live component" (needs a real DOM + visual-diff harness the
Worker sandbox can't provide).

---

## 8. Recommended new modes + actionable backlog

Ranked by **(signal strength of the trend) × (fit with LeetLock's existing Worker/no-backend/Gemini
architecture)**. Each maps to a real interview format above. **Nothing here is approved to build** —
promote into `PROGRESS.md` first.

### Tier 1 — build first (high signal, near-zero new infra; reuses the existing JS/Python Worker)

- [ ] **Debug Mode ("bug squash") — the lead recommendation.** New problem schema: a small virtual
  **multi-file project** (`{path → source}`) + hidden tests split into `FAIL_TO_PASS` / `PASS_TO_PASS`
  (SWE-bench model). Gate clears when all FAIL_TO_PASS go green AND PASS_TO_PASS stay green. Author
  original buggy repos in `src/lib/problems/bank/` (keep golden patch test-only, per CLAUDE.md §9
  tree-shake rule). Needs: a file-tree editor view, an in-Worker multi-file module loader + tiny
  `expect`/`describe` shim (~100 lines, don't pull Jest), stack-trace surfacing mapped to virtual
  paths. Difficulty tiers L1 (off-by-one/wrong-operator) → L4 (async/ordering/validation). HintBot
  ladder: which test fails → which file → the failing data flow. *Why first: strongest white space,
  cheapest build, directly answers "78% say DSA is irrelevant."*
- [ ] **JS/TS Utility Mode.** Implement `debounce`, `throttle`, `Promise.all`/`any`, deep clone,
  `EventEmitter`, `curry`, etc. Canonical, finite, unit-testable in the existing JS Worker with
  ~zero new infra. The cheapest differentiated expansion beyond the DSA bank. (GreatFrontend validates
  demand; LeetLock has the gate they lack.)
- [ ] **Low-Level / OO Design Mode.** Parking lot, elevator (SCAN/FCFS dispatch), LRU cache, rate
  limiter, vending machine as `tick()`-driven simulations with hidden unit tests. *Reuses the DSA
  harness almost verbatim* — gives a "system design" surface that is still 100% deterministic.

### Tier 2 — build next (still mostly deterministic; modest new infra)

- [ ] **Code-Review Mode.** Render a diff (computed client-side from `before`/`after` file maps);
  collect inline comments `{path, line, text}`; grade against a planted-issue rubric `{path,
  lineRange, category, severity}` (hit = comment lands in/near range; weight by severity; lightly
  penalize false positives). Deterministic, offline. Optional later: Gemini grades comment *tone/
  quality* on top.
- [ ] **AI-Engineering Mode (deterministic tier, no key needed).** Cosine-similarity / top-k kNN, BPE
  merge step, chunking-with-overlap to spec, tool-call JSON-schema validator, agent tool-router over
  **mocked deterministic tools**, RAG retrieval recall@k/MRR over a bundled corpus, eval-harness
  authoring (catch planted regressions). Maps 1:1 onto the most-tested AI-eng topics; pure functions,
  fits the "every `src/lib/**` pure function gets tests" rule.
- [ ] **System-Design Drills (deterministic).** Capacity-estimation calculators (seeded params, numeric
  answer within ±tolerance), pick-the-primitive MCQ, spot-the-bottleneck, order-the-pipeline,
  API-contract assertion checks. Bite-sized, perfect for a gate; honest about not grading freeform.

### Tier 3 — differentiated but needs the user's Gemini key (LLM-in-the-loop, graded deterministically)

- [ ] **Prompt Golf / Spec-Conformance ("LeetCode for prompting").** User writes a prompt → LeetLock
  calls *their* LLM (existing `src/lib/ai/` Gemini plumbing) → a **deterministic checker** (regex /
  JSON-schema / exact-match over a hidden input set) scores pass-rate; shorter prompts win ties. This
  is the genuinely novel, rigorously-graded niche no product fills well.
- [ ] **AI-Assisted Build / "fix the AI's garbage" Mode.** Present AI-generated code with planted
  subtle bugs/security holes; user fixes to green. Mirrors the #1 evaluated skill at Canva/Meta/Shopify
  and is on-brand (LeetLock already ships an AI hint bot). Can be done fully deterministically (it's a
  Debug-Mode variant) — the "AI" framing is content, not new infra.
- [ ] **"Explain your decisions" gate.** After any solve, require a short written trade-off rationale
  before access unlocks (CodeSignal "explain to a human" pattern). Cheap add-on to any mode; Gemini-
  rubric-scored, or self-assessed offline.

### Tier 4 — stretch / second-segment (heavier infra, separate audience)

- [ ] **SQL Mode.** Embed SQLite-WASM in the sandbox; deterministic grading; opens the
  analyst/data-scientist segment (DataLemur/StrataScratch prove monetization). New runtime = real work.
- [ ] **Mini build-your-own-X / extend-partial-feature** (Codecrafters + Meta "extend partial code").
  Most on-trend but multi-file + longer sessions fight the "quick gate" model — best as an optional
  "deep" tier, not a default unlock.
- [ ] **Freeform "design X" with LLM-judge coach.** Staged rubric (Hello Interview model). Frame as
  optional AI *coaching*, never a hard pass/fail (grading is noisy; see §6).

### Cross-cutting product decisions to make (write into DECISIONS.md when chosen)

- [ ] **Mode taxonomy + selection UX** — per-site difficulty already exists; add per-site *mode*
  (e.g. "YouTube costs one Debug challenge", "Twitter costs one DSA"). How does the user pick/mix modes?
- [ ] **Honest positioning** — market the DSA bank as the "big-tech track" and the new modes as the
  "startup / AI-native track"; don't claim DSA is dead (the survey says FAANG still requires it).
- [ ] **Shared multi-file problem schema** — Debug, Code-Review, LLD, and AI-Eng modes all want a
  `{path → source}` + hidden-test structure. Design it once (extends `src/lib/problems/types.ts`).
- [ ] **Grading-without-a-key invariant** — keep every default mode deterministic/offline; LLM modes
  are opt-in and key-gated, so the core product never depends on a network call (matches MV3 ethos).

---

## 9. Open questions / to verify at build time

- [ ] Confirm Meta/Google AI-round mechanics against a primary source before citing specifics publicly
  (currently secondary-sourced; Canva/Shopify/Stripe/interviewing.io are verified).
- [ ] Validate in-Worker multi-file module loading for both JS (Blob-URL module graph or hand-rolled
  `require` over the file map) and Python (Pyodide FS `writeFile`) — spike before committing to Debug
  Mode scope.
- [ ] Decide whether original "buggy repos" are hand-authored or parameterized variants of existing
  bank problems (anti-repeat + legal-clean, per CLAUDE.md §9).
- [ ] Size the audiences: CS students (DSA-leaning) vs. bootcamp/career-switchers (project/practical-
  leaning) vs. data folks (SQL) — which segment does LeetLock most want, and does that reorder Tiers?

---

## 10. Sources (consolidated)

**Verified against primary source:**
- Canva AI-assisted interviews — https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/
- interviewing.io survey (67 resp / 52 FAANG; 0 abandoned DSA; 67% startups vs 0% FAANG changed) —
  https://interviewing.io/blog/how-is-ai-changing-interview-processes-not-much-and-a-whole-lot

**AI-assisted / platforms:** Meta AI round — https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples
· https://www.hellointerview.com/blog/meta-ai-enabled-coding · Shopify — https://www.hellointerview.com/blog/shopify-ai-enabled-coding
· CodeSignal Agentic — https://www.prnewswire.com/news-releases/codesignal-launches-industry-first-agentic-coding-assessments-for-ai-era-engineering-hiring-302732265.html
· Outship (YC) — https://www.ycombinator.com/companies/outship · Micro1 — https://techcrunch.com/2025/09/12/micro1-a-competitor-to-scale-ai-raises-funds-at-500m-valuation/
· Karat — https://karat.com/technical-interviews-ai-era/

**Startup formats:** Zhi Sun — https://zhisun.medium.com/hiring-software-engineers-for-startups-in-the-ai-era-heres-how-i-hire-in-2025-85a8051e4814
· anti-LeetCode formats — https://www.techinterview.org/post/3233474683/anti-leetcode-interview-formats/
· companies without LeetCode — https://www.hellointerview.com/blog/companies-without-leetcode
· assessments splintering — https://hellointerview.substack.com/p/how-tech-coding-assessments-are-splintering
· vibe-coding interview — https://www.news.aakashg.com/p/vibe-coding-interview · Garry Tan — https://x.com/garrytan/status/1897303270311489931

**Debugging / code review / TDD:** Stripe bug squash — https://blog.jez.io/bugsquash/ ·
https://www.glassdoor.com/Interview/Bug-squash-given-this-open-source-code-base-run-the-tests-identify-the-bug-and-fix-it-QTN_2407542.htm
· debugging-interview pedagogy — https://www.zhenghao.io/posts/debugging-interview · SWE-bench grading
model — https://www.swebench.com/SWE-bench/ · code review — https://www.hackerrank.com/blog/code-review-questions/
· https://guides.18f.gov/eng-hiring/interviews/code-review/ · Hatchways — https://www.hatchways.io/blog/takehome-challenge-full-stack-assessment-chat-server
· HackerRank 2025 Skills Report — https://www.hackerrank.com/reports/developer-skills-report-2025

**AI engineering:** AI-eng question canon — https://letsdatascience.com/blog/50-llm-and-ai-engineer-interview-questions-for-2026
· https://github.com/amitshekhariitbhu/ai-engineering-interview-questions · OpenAI FDE — https://gaijineer.co/openai-forward-deployed-engineer-interview-process
· swyx "Rise of the AI Engineer" — https://www.latent.space/p/ai-engineer · Chip Huyen aie-book — https://github.com/chiphuyen/aie-book
· Hamel evals — https://hamel.dev/blog/posts/evals/ · Gandalf — https://gandalf.lakera.ai/ · HackAPrompt — https://www.hackaprompt.com

**System / low-level design:** levels — https://www.hellointerview.com/blog/the-system-design-interview-what-is-expected-at-each-level
· System Design Primer — https://github.com/donnemartin/system-design-primer · capacity estimation —
https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation · LLD elevator —
https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/elevator · AI-graded practice —
https://www.hellointerview.com/practice/system-design

**Landscape / niches:** GreatFrontend — https://www.greatfrontend.com/questions · Frontend Mentor —
https://www.frontendmentor.io/ · Codecrafters — https://codecrafters.io/ · DataLemur — https://datalemur.com/
· take-home rubric gap — https://www.hiredkit.ai/blog/take-home-coding-assignment-guide-2025
· Anthropic AI-resistant evaluations — https://www.anthropic.com/engineering/AI-resistant-technical-evaluations

*Sourcing caveat: company-process mechanics (Meta, Google, Airtable, Ramp) are mostly secondary-sourced
roundups — directionally reliable, exact mechanics unconfirmed. Opinion-blog percentages ("47%", "78%")
are illustrative; the verified anchors are Canva (primary) and the interviewing.io survey.*

---

## 11. Concrete integration plan — how exactly this maps onto LeetLock's code

> Added after reading the live runner code (`src/lib/problems/types.ts`, `src/runner/worker.js`,
> `src/lib/judge/judge.ts`, `src/lib/messaging/messages.ts`, `src/pages/sandbox/runner.ts`,
> `src/lib/problems/index.ts`). This is the "how exactly," grounded in what's actually there today.

### 11.1 The execution contract as it exists today

Every current challenge is **one function, `args → return`, deep-equality judged**:

- `Problem` = `{ functionName, params, starterCode{lang}, visibleTests[], hiddenTests[], preamble? }`
  where each test is `{ args: unknown[], expected: unknown }`.
- The JS worker (`worker.js`) does `new Function("use strict" + preamble + code + "return " +
  functionName)`, then `userFn.apply(null, test.args)` per test, posting back the **raw return value**.
- **Crucially, the worker never sees `expected`.** Comparison happens challenge-side in
  `judge/verdict.ts` (`buildVerdict`). Hidden-test answers therefore live on the challenge page, not in
  the sandbox — good for keeping answers out of executed code, and it means a new mode only has to
  change *how a verdict is computed*, not necessarily the worker.
- `preamble` runs **before** the user's code (shared defs like `ListNode`). It cannot reference
  symbols the user defines, because it runs first.
- Selection (`index.ts > pickChallengeProblem`) filters the flat `bank` by difficulty + tags with
  progressive relaxation. **There is no "mode"/"kind" concept yet** — that's the central new axis.

### 11.2 The new modes need exactly three execution primitives

| Primitive | Reuses today? | Powers | Infra cost |
|---|---|---|---|
| **A. Function-call** (`args → return`, exists verbatim) | ✅ yes | AI-eng deterministic drills (cosine sim, kNN, BPE merge, chunking, JSON-schema-validator-as-function), agent tool-router (mock tools in `preamble`, user writes planner fn) | **Zero** — pure authoring + a new tag |
| **B. Assertion-suite** (hidden harness runs *after* user code; returns `{name, pass, msg}[]`) | ⚠️ new worker path | **Debug Mode**, **JS/TS Utility** (debounce/throttle/async — needs fake timers), **authentic LLD** (user writes a class, hidden driver replays ops), **multi-file repos** | **One focused investment** (highest ROI) |
| **C. Non-execution surfaces** (no worker) | ⚠️ new UI + `src/lib` checker | **Code Review** (diff + comment rubric), **system-design drills** (numeric/MCQ), **Prompt golf** (Gemini + deterministic checker), **"explain your decisions"** gate | New sub-surface; deterministic logic in `src/lib` |

**Why B is the keystone:** Debug, Utility, *and* authentic LLD all require code that runs **after** the
user's code and makes assertions — exactly what `preamble` (runs before) and the single-`functionName`
model can't express. Build primitive B once and four high-value modes light up. (Note: the LeetCode-style
"user also writes the dispatch loop" hack *can* fake LLD on primitive A, but it's inauthentic; B is the
real fix.)

### 11.3 Primitive A — ship these with **zero infra** (author-only)

Authorable in `src/lib/problems/bank/` against the *existing* schema today:

- [ ] **AI-eng pure-function drills** — `cosineSimilarity(a,b)`, `topKNearest(query, matrix, k)`,
  `bpeMerge(tokens, ranks)`, `chunkWithOverlap(text, size, overlap)`, `validateToolCall(payload)`
  (returns bool/errors against a target schema). All are `args → return`, deep-equality judged. Add an
  `ai-engineering` entry to `ProblemTag` (in `src/lib/types.ts`) and they flow through the whole
  existing pipeline unchanged.
- [ ] **Agent tool-router** — put deterministic mock tools in `preamble`; user writes
  `planAndAct(goal, tools)` returning the final state / action sequence; judge by deep-equality on the
  trajectory. Uses `preamble` exactly as linked-list problems already do.

This is the cheapest possible expansion and immediately gives LeetLock an "AI engineering" surface no
competitor drills (see §5 white space).

### 11.4 Primitive B — the one infra investment (Debug + Utility + LLD + multi-file)

Minimal, additive changes (does not disturb existing function-call problems):

1. **`src/lib/problems/types.ts`** — add a discriminant. Existing problems are implicitly
   `kind: 'function'`. New:
   ```ts
   kind: 'suite';
   files: Readonly<Record<string, string>>;   // editable virtual files {path: source}
   editablePaths: readonly string[];           // which files the user may edit
   harness: Readonly<Partial<Record<SupportedLanguage, string>>>; // hidden test code, runs AFTER files
   // (no functionName/params/visibleTests/hiddenTests for suite problems)
   ```
   The harness ships in the bundle (it must execute), but the **golden/fixed solution does not** — keep
   it test-only per CLAUDE.md §9, same discipline as today's reference solutions.
2. **`src/lib/messaging/messages.ts`** — add a `RunRequest` variant
   `{ type:'run-suite', requestId, files, harness, timeoutMs, language }` and a `RunResponse` outcome
   `{ status:'suite'; results: {name:string; pass:boolean; message?:string; durationMs?:number}[] }`.
3. **`src/runner/worker.js`** — add a second entry path: concatenate
   `"use strict" + files-in-order + harness`. The harness uses an injected global
   `__assert(name, cond, message)` (and/or returns an array); worker collects results and posts the
   `suite` outcome. ~40 lines; the existing single-function path stays untouched.
4. **Fake-clock helper** (for Utility: debounce/throttle/async) — inject a tiny deterministic clock
   into the suite worker scope that overrides `setTimeout`/`setInterval`/`Date.now` with a controllable
   queue + `__advanceTime(ms)` exposed to the harness. ~60 lines, no dependency (verified feasible in a
   fresh Blob Worker — we own its global scope). Mind microtask-vs-macrotask ordering (flush microtasks
   between timer fires).
5. **`src/pages/sandbox/runner.ts`** — route `run-suite` to the JS worker (and, for Python suites,
   write each file to Pyodide MEMFS via `pyodide.FS.writeFile()` then run the harness — verified
   pattern; Pyodide already exists in the project, so this is a small add not a new runtime).
6. **`src/lib/judge/verdict.ts`** — add a `suite` branch: pass iff every `results[i].pass`; surface
   per-assertion name/message in the existing VerdictPanel (it already renders per-test rows).
7. **Challenge UI** — a file-tree + multi-tab editor for `editablePaths` (CodeMirror already in place;
   this is a tab strip + a file list). Stack-trace surfacing mapped back to virtual file:line is the
   one genuinely new UI nicety (high value for Debug Mode — reading a stack trace is a named tested
   skill, §4).

Modes unlocked by the above, with their grading model:

- [ ] **Debug Mode ("bug squash")** — `files` = small buggy repo; `harness` = SWE-bench-style
  `FAIL_TO_PASS` (red now, must pass) + `PASS_TO_PASS` (green now, must stay green). Pass = both
  satisfied → rewards minimal targeted fixes. *(Lead mode — §1, §4.)*
- [ ] **JS/TS Utility Mode** — `files` = one stub (`debounce.js`); `harness` drives it with the
  fake-clock. Canonical, finite list (debounce, throttle, `Promise.all/any`, deep clone, `EventEmitter`,
  curry).
- [ ] **Authentic LLD Mode** — `files` = user's class stub; `harness` instantiates and replays an
  operation sequence, asserting outputs/invariants (elevator state machine, LRU, rate limiter, parking
  lot). Deterministic "system design that's really code" (§6).
- [ ] **"Fix the AI's garbage"** — a Debug-Mode content variant (planted bugs framed as AI-generated);
  no extra infra (§2).

### 11.5 Primitive C — non-execution surfaces (deterministic `src/lib` + new sub-page)

- [ ] **Code Review Mode** — new `src/lib/review/`: compute a diff client-side from `before`/`after`
  file maps; collect comments `{path, line, text}`; match against a planted-issue rubric
  `{path, lineRange, category, severity}` (hit if a comment lands in/near a range; weight by severity;
  lightly penalize false positives). 100% deterministic, offline, heavily pure-function → fits the
  "every `src/lib/**` pure function gets tests" rule. New challenge sub-view (diff + comment gutter); no
  worker.
- [ ] **System-design drills** — new `src/lib/drills/`: capacity-estimation (seeded params → numeric
  answer within ±tolerance), pick-the-primitive MCQ, spot-the-bottleneck, order-the-pipeline. Numeric/
  MCQ UI, deterministic checkers. Bite-sized — ideal for a gate.
- [ ] **Prompt Golf / spec-conformance** — reuse the existing Gemini plumbing in `src/lib/ai/`: user
  writes a prompt → call *their* key → a **deterministic checker** (regex/JSON-schema/exact-match over a
  hidden input set) scores pass-rate; shorter prompt wins ties. The rigorously-graded "LeetCode for
  prompting" niche no product fills (§5). Key-gated and opt-in, so the core gate never needs a network
  call.
- [ ] **"Explain your decisions" gate** — after any solve, a short written rationale before unlock
  (CodeSignal pattern, §2). Gemini-rubric-scored *or* self-assessed offline. Cheap cross-cutting add-on.

### 11.6 The "mode" axis (cross-cutting — required before any of the above ships in the gate)

- [ ] **Problem-level:** the `kind` discriminant (§11.4) already separates execution shapes. Add a
  user-facing `mode` grouping (e.g. `dsa | debug | utility | lld | ai-eng | review | sysd-drill |
  prompt`) — likely derived from `kind` + `tags`, surfaced as a filter.
- [ ] **Per-site policy:** extend `BlockRule` (storage schema, `DATA_MODEL.md`) so a site can cost a
  *specific* mode ("YouTube → one Debug challenge", "Twitter → one DSA"). Selection
  (`pickChallengeProblem`) gains a `modes` filter alongside difficulties/tags.
- [ ] **Routing:** the challenge page branches on `problem.kind` to mount the right surface
  (function editor / suite file-tree / review diff / drill / prompt). One switch at the top of
  `Challenge.tsx`.
- [ ] **Options UI:** mode multiselect per block rule + a global "which tracks am I practicing"
  control; reuse the existing difficulty/tag pill pattern (already shows live counts).

### 11.7 Recommended build order (effort-aware)

1. **Primitive A authoring** (AI-eng pure-function drills) — zero infra, immediate differentiated
   surface, proves the "modern modes" thesis cheaply.
2. **The `mode`/`kind` axis** (§11.6) — small, unblocks everything else and is needed even for #1 to
   appear as its own track in the gate.
3. **Primitive B** (§11.4) → ship **Debug Mode** first (highest signal, §1), then **Utility**, then
   **LLD** (all reuse the same new path).
4. **Primitive C — Code Review** (deterministic, no worker, strong white space §7).
5. **Prompt Golf** (needs key; the defensible novel niche) and **SQL Mode** (new SQLite-WASM worker,
   ~1.5 MB, opens the data-interview segment) as parallel second-segment bets.

### 11.8 Open technical spikes before committing (verify, don't assume)

- [ ] Multi-file JS module loading in the suite worker — confirm plain concatenation (with the harness
  using injected globals) is enough, or whether a hand-rolled `require` over the file map is needed for
  realistic repos.
- [ ] Fake-clock fidelity — verify debounce/throttle + `Promise`-based async resolve deterministically
  under the injected clock (microtask flushing between timer fires).
- [ ] Pyodide suite path — confirm `FS.writeFile()` + harness import + result capture round-trips inside
  the existing warm-worker model without breaking the JS suite path.
- [ ] SQLite-WASM — decide `sql.js` (in-memory, simplest, ~1.5 MB) vs official `sqlite-wasm`; confirm it
  loads under the sandbox CSP as a third worker type alongside JS and Pyodide.

*Technical-feasibility sources (this section): fake timers / debounce testing —
https://sinonjs.org/releases/latest/fake-timers/ · https://jestjs.io/docs/timer-mocks ; SQLite in the
browser — https://sqlite.org/wasm · https://github.com/sqlite/sqlite-wasm · sql.js (~1.5 MB, in-memory)
https://github.com/sql-js/sql.js ; Pyodide multi-file FS — https://pyodide.org/en/stable/usage/file-system.html
· https://github.com/pyodide/pyodide/discussions/4339 ; SWE-bench grading model —
https://www.swebench.com/SWE-bench/.*

---

## 12. Content & authoring strategy — produce the new problems at scale (LeetLock-specific)

> Added after reading `src/lib/types.ts`, `src/lib/problems/bank/design-browser-history.ts`, and
> `src/lib/ai/gemini.ts`. The §11 plan answers "what code to change"; this section answers the harder
> question — **"where do thousands of new problems come from?"** — using assets LeetLock *already has*.

### 12.1 The latent asset: ~2,942 problems, each with a verified solution + a hidden-test oracle

`problem-bank.test.ts` runs every problem's reference solution against its visible+hidden tests. That
means LeetLock owns, for free, **~2,942 (correct-solution, test-oracle) pairs**. Three of the new
modes can be *derived* from this asset rather than hand-authored from scratch.

### 12.2 Debug Mode content via **mutation** — nearly-free, auto-validated, scales to the whole bank

The single highest-leverage authoring insight in this whole doc:

1. Take a verified reference solution `S` for any bank problem.
2. Apply a **mutation operator** — the standard set from mutation testing: arithmetic
   (`+`↔`-`, `*`↔`/`), relational (`>`↔`>=`, `<`↔`<=`, `==`↔`!=`), logical (`&&`↔`||`), boundary
   (`i`→`i+1`, off-by-one on a loop bound), `return`-early, negate a condition, drop a `+1`. These
   operators are explicitly designed to resemble real bugs (the "competent programmer hypothesis").
3. Run the mutant `S'` against that problem's existing tests. **Keep it as a Debug-Mode problem iff
   `S'` fails ≥1 hidden test** (it's a genuine, observable bug) **and still parses/runs** (not a crash-
   on-load). Mutants that pass everything are "equivalent mutants" — discard them automatically.
4. Ship the **mutated (buggy) code** as the Debug-Mode problem's given code; the user must locate and
   fix the bug until all tests pass again. The **golden solution `S` stays test-only** (CLAUDE.md §9) —
   buggy code shipping is fine, it's just wrong code, not the answer key.

Why this is powerful **for LeetLock specifically**:

- **The test bank IS the SWE-bench oracle.** The hidden tests the mutant fails = `FAIL_TO_PASS`; the
  tests it still passes = `PASS_TO_PASS`. No new grading infra — Debug Mode reuses the *exact* verdict
  pipeline (and once Primitive B exists, a multi-bug variant).
- **Author-time verification is automatic.** A generator script (test-time, like the existing
  reference-solution check) emits only mutants that are provably-broken-yet-runnable. Bad content can't
  ship.
- **Difficulty falls out of the mutation.** A flipped `>`/`>=` on a boundary = "hard to spot" (L3–L4);
  a `+`→`-` in the core recurrence = "obvious" (L1). Tag tiers by operator + by how many hidden tests
  fail (fewer failing = subtler = harder).
- **Anti-repeat & legal-clean by construction** — mutants of original problems are still original.

Caveats to handle: (a) filter equivalent + trivially-crashing mutants (step 3 does this); (b) some
mutants produce a *different but arguably-valid* behavior — gate on "fails a hidden test" to avoid
ambiguous bugs; (c) a single-line single-mutation bug is easier than a real Stripe bug-squash — stack
2–3 mutations or hand-curate a subset for the "hard" tier; (d) keep a hand-authored multi-file tier
(Primitive B) for realism — mutation gives *volume*, hand-authoring gives *fidelity*.

### 12.3 LLD / "design" Mode **already half-exists** — surface it now, upgrade later

`ProblemTag` already includes **`design`**, and the bank already ships dozens of `design-*` problems
(browser-history, hashmap, circular-queue, underground-system, hit-counter, authentication-manager,
food-rating-system, …). They use the **operations-array convention** — e.g. `design-browser-history`
is `functionName: 'browserHistory'`, `params: ['homepage','ops']`, where `ops` is
`[["visit",url],["back",n],["forward",n]]` and the expected is the result array. That is LLD expressed
on **Primitive A today.** So:

- [ ] **LLD Mode v1 = zero code:** add a `design`-tag "mode" filter and present these as a "Low-Level
  Design" track immediately. Re-label/curate, done.
- [ ] **LLD Mode v2 (Primitive B):** upgrade to *authentic* class-authoring (user writes the class; a
  hidden harness replays ops) so the user practices designing the interface, not writing a dispatch
  loop. Same problems, richer format.

### 12.4 Prompt Golf reuses `src/lib/ai/gemini.ts` almost verbatim

The Gemini client is already shaped for this. `fetchHints` POSTs to
`generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key=...` with the user's own
key from `AiSettings { geminiApiKey, enabled, model }`, and maps HTTP status → friendly `AiError`
(auth/rate-limit/404/…). Prompt Golf needs only:

- [ ] a sibling `fetchCompletion({apiKey, model, systemPrompt, userInput, signal})` in `src/lib/ai/`
  that reuses the same `endpoint()` + error mapping (≈30 lines, no new dependency, no new settings —
  the key/model/enabled plumbing and Settings UI already exist);
- [ ] a deterministic checker in `src/lib/` that runs the user's prompt over a **hidden input set** and
  scores pass-rate (regex / JSON-schema / exact-match), shorter prompt winning ties.

So the "rigorously-graded LeetCode for prompting" (§5 white space) is mostly *checker* work, not LLM
plumbing — the plumbing is done.

### 12.5 SQL Mode — the language slot already exists in the type system

`SupportedLanguage` already lists `'sql'`, with `LANGUAGE_LABEL`/`LANGUAGE_DESCRIPTION` entries — but
it's currently in `JS_SYNTAX_ONLY_LANGUAGES` (syntax practice only, "executed as JavaScript under the
hood"). Real SQL Mode = promote `sql` out of that set and add a **third worker type** (sql.js /
sqlite-wasm, ~1.5 MB, in-memory) alongside the JS and Pyodide workers in `sandbox/runner.ts`: load a
seeded DB, run the user's query, compare the result set (order-insensitive unless `ORDER BY`) to the
expected. The type system, language picker, and label plumbing are already in place — the work is the
worker + a result-set comparator (a new pure function in `src/lib/`, easily unit-tested).

### 12.6 Worked Debug-Mode example (illustrative — pressure-tests §11.4 + §12.2)

A mutated binary-search, as the generator would emit it. Given code shipped to the user (bug = `<`
mutated to `<=` on the bound, an off-by-one that infinite-loops / over-reads on some inputs):

```js
// GIVEN (buggy) — one relational-operator mutation injected
function search(nums, target) {
  let lo = 0, hi = nums.length;          // bug seed: should be nums.length - 1
  while (lo <= hi) {                      // with hi = length, this over-reads
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
```

- **Oracle (reuses existing tests):** `FAIL_TO_PASS` = the hidden tests where `nums[mid]` reads
  `undefined` and returns a wrong index; `PASS_TO_PASS` = the tests that already pass. Gate clears when
  all pass — i.e., the user changes `nums.length` → `nums.length - 1`.
- **Function-call primitive (A) suffices here** (single function, `args → return`) — so the *easiest*
  Debug-Mode tier needs **no Primitive B at all**: it's a normal bank problem whose "starter code" is a
  mutated solution and whose hidden tests are inherited. Primitive B is only needed for *multi-file* and
  *assertion-style* (timer/async) debugging.

**Consequence for build order:** the §11.7 sequence can be compressed — **single-function Debug Mode
(via mutation, §12.2) ships on Primitive A with essentially no runner changes**, making it an even
cheaper first ship than previously stated. Primitive B becomes the *second* step (multi-file + Utility),
not a prerequisite for launching debugging at all.

*Sources (this section): mutation operators & the competent-programmer hypothesis —
https://stryker-mutator.io/docs/ · https://arxiv.org/pdf/2104.02517 (bug reproduction via repeated
mutations) ; LLD-as-operations-array — existing `src/lib/problems/bank/design-browser-history.ts` ;
Gemini client shape — existing `src/lib/ai/gemini.ts`.*

---

## 13. Gate-fit — matching mode to the distraction-interception context (the decisive constraint)

> The constraint everything else has to pass. LeetLock is **not a study site** — it's a *distraction
> interceptor*. A mode can be perfectly on-trend and still be wrong if it doesn't fit the moment the
> user hits a blocked site. This section is where the modes get filtered by reality.

### 13.1 The time budget is the binding constraint

- LeetLock's own default (`DEFAULT_PREFERENCES`): **`challengeTimeLimitSec: 600` (10 min)**,
  `unlockDurationMin: 10`, `difficulties: ['easy']`. Easy DSA is typically solved in **2–5 min** — that
  is the *real* gate length today, and it's calibrated for "annoying enough to deter, short enough not
  to rage-uninstall."
- Friction research confirms the tension: too-strict / too-hard challenges drive **abandonment**; the
  best-practice pattern is **adaptive/tiered commitment** ("start gentle, upgrade if you bypass"), not
  uniform severity. (https://getcoldturkey.com/ · https://focusme.com/website-blocker/ ·
  https://findfocus.net/stayfocusd/)
- Real interview formats, by duration:

| Format | Real interview length | Fits a ≤10-min gate? |
|---|---|---|
| Easy/medium DSA, single JS utility, **single-bug mutation debug**, AI-eng micro-drill, capacity-estimation drill, MCQ | minutes | ✅ yes |
| Stripe bug-squash (pointed single bug) | 45–60 min, **but initial bug found in 10–15 min** | ⚠️ only if scoped to one small, well-pointed bug |
| Multi-file debug, authentic LLD (class + harness), code-review of a 200-line PR | 45–90 min | ❌ no — Deep Session |
| Build-a-feature / take-home, freeform system design, Prompt-Golf iteration | hours | ❌ no — Deep Session |

The **mutation-based single-function Debug Mode (§12.2/§12.6) is the sweet spot**: a pointed one-line
bug is exactly the 10–15-min "find the initial bug" slice of a real bug-squash, minus the 45-min
follow-up — so it fits the gate *and* teaches the highest-signal skill.

### 13.2 Two contexts, not one — and LeetLock already has the knobs for both

- **Quick Gate** (the default interception; ≤ ~10 min; must never feel like homework): fast modes only.
  Reuses the existing `challengeTimeLimitSec` budget as-is.
- **Deep Session** (opt-in, voluntary — the user *chooses* to do a longer interview-style rep, like a
  Pomodoro of prep, in exchange for a larger `unlockDurationMin` grant): hosts the long-form modes.
  This is a *new surface/flow*, but it rides existing primitives — it's a longer timer + a bigger
  unlock, gated behind an explicit "Start a deep practice session" action rather than a surprise
  block-page.

This resolves the central risk: **you never ambush someone reaching for YouTube with a 45-minute
take-home.** Long-form, high-fidelity interview practice (multi-file bug-squash, LLD, build-a-feature,
prompt golf) lives in a mode the user opts into; the surprise gate stays short.

### 13.3 Mode × context matrix

| Mode | Quick Gate (default block) | Deep Session (opt-in) | Primitive | Content source |
|---|---|---|---|---|
| Easy/medium DSA | ✅ (today) | — | A (exists) | bank (exists) |
| **Single-bug Debug** | ✅ **lead new mode** | scale to multi-bug | A | **mutation (§12.2) — ~free** |
| JS/TS Utility | ✅ | — | B (timers) | hand-authored (finite list) |
| AI-eng micro-drill | ✅ | — | A | hand-authored |
| System-design drill (capacity/MCQ) | ✅ | — | C | hand-authored |
| LLD / "design" | ⚠️ short ones | ✅ authentic class | A now → B later | **bank `design-*` (exists)** |
| Multi-file bug-squash | ❌ | ✅ | B | hand-authored (fidelity tier) |
| Code review (PR) | ❌ | ✅ | C | hand-authored |
| Build-a-feature | ❌ | ✅ | B | hand-authored |
| Prompt Golf | ❌ (LLM latency) | ✅ | C | reuses `ai/` |
| SQL | ✅ (short queries) | ✅ | new worker | hand-authored |

### 13.4 Implication: the gate context *reorders* the roadmap

The cheapest, highest-signal, best-gate-fit launch is unambiguous, and it's all **Quick-Gate +
Primitive A + near-free content**:

1. **Single-bug Debug Mode** (mutation-generated, fits the gate, #1 trend signal).
2. **AI-eng micro-drills** (zero infra, white-space differentiation).
3. **Surface the existing `design` bank as an LLD track** (zero code).

Everything heavier (multi-file, authentic LLD, code-review, build-a-feature, prompt golf, SQL) is
**deliberately deferred to the Deep-Session tier**, which is a *later* product surface — so it doesn't
block the launch and doesn't risk the core gate's "short and tolerable" feel.

---

## 14. Committed recommendation (the decision)

Pulling §1–§13 together into one defensible call:

**Position.** Keep the DSA bank as the "big-tech track" (honestly — FAANG still requires it, §1). Add a
**"startup / AI-native track"** of new modes. This is the wedge against every existing forcer (they only
do DSA, and most don't even host their own problems) *and* against every prep product (none is a
focus-gate).

**Launch (Quick-Gate, ship-now, near-zero infra):**
1. **Debug Mode**, single-bug, **mutation-generated from the existing 2,942-solution bank** — fits the
   ≤10-min gate, reuses the `args→return` primitive + existing verdict pipeline, and is the single
   highest-signal modern skill (Canva/Meta/Shopify all grade it; no dominant practice product owns it).
2. **AI-Engineering micro-drills** — hand-authored pure functions; the only differentiated "AI-era"
   surface no competitor drills.
3. **LLD track** — surface the existing `design-*` problems as a labeled mode (zero code).
4. **The `mode`/`kind` axis + per-site mode** (§11.6) — the small enabling change that makes the above
   appear as real tracks in the gate.

**Phase 2 (still Quick-Gate):** JS/TS Utility Mode (Primitive B + fake-clock), system-design drills,
"explain your decisions" gate.

**Phase 3 (Deep-Session tier — new opt-in surface):** multi-file bug-squash, authentic LLD,
code-review, Prompt Golf (the novel rigorously-graded prompt gym), SQL Mode.

**Why this order wins:** every Phase-1 item is (a) high trend-signal, (b) gate-fit (short), (c)
cheap — Primitive A or pure authoring, with Debug content effectively free via mutation. It de-risks
the thesis fast and visibly, before committing to the heavier Primitive-B/new-worker investments, and
it never threatens the core product's "short, tolerable, don't-rage-uninstall" gate feel.

**Single most important next action when building starts:** prototype the **mutation generator** (a
test-time script that emits provably-broken-yet-runnable variants of bank solutions and confirms each
fails ≥1 hidden test) — it's the content engine the entire Debug-Mode launch rests on. Everything else
in Phase 1 is conventional authoring + a small selection/UX change.

*Sources (this section): time-budget defaults — `src/lib/storage/defaults.ts`
(`challengeTimeLimitSec: 600`) ; bug-squash duration (45–60 min; initial bug 10–15 min) —
https://blog.jez.io/bugsquash/ · https://www.1point3acres.com/interview/thread/1097252 ; friction /
abandonment & tiered commitment — https://getcoldturkey.com/ · https://focusme.com/website-blocker/ ·
https://findfocus.net/stayfocusd/.*

---

## 15. Mutation generator — build-ready spec (the content engine for Debug Mode)

> §14 named this "the single most important next action." This section pins down **exactly** how to
> build it against LeetLock's real file layout — verified by reading `test/bank-solutions.ts`,
> `test/problem-bank.test.ts`, and `src/lib/problems/stubify.ts`.

### 15.1 The three assets it stands on (all confirmed to exist)

1. **Reference solutions** — `test/bank-solutions.ts` exports
   `solutions: Record<string, (...args: unknown[]) => unknown>`, keyed by problem id; each value is a
   real, working function. **Test-only, never bundled** (CLAUDE.md §9). Python twin:
   `test/bank-solutions-python.ts`.
2. **The oracle** — `test/problem-bank.test.ts` already does, per problem,
   `solve(...testCase.args)` `toEqual(expected)` across **all** `visibleTests` + `hiddenTests`. That
   loop, run against a *mutant* instead of the golden function, is the entire grading oracle — no new
   infra.
3. **The transform precedent** — `src/lib/problems/stubify.ts` already turns a solution's source
   string into editor code (keeps the signature, blanks the body). The generator is its sibling: keep
   the whole function but **inject one plausible defect**.

### 15.2 Algorithm (deterministic, runs at build/test time like `scripts/generate-icons.mjs`)

For each problem id with a self-contained solution:

1. `const src = solutions[id].toString()` — `Function.prototype.toString()` returns the (already
   TS-stripped, under vitest/esbuild) JS source. No need to text-parse the whole module.
2. Parse `src` to an AST with **acorn** (tiny, standard JS parser; ~120 KB dev-dep, build-time only).
3. Enumerate **mutation sites** (§15.3). For each, produce one mutant source string.
4. Compile the mutant: `new Function('return ' + mutantSrc)()` → a candidate function. (Wrap in
   try/catch; a parse/throw-on-load mutant is discarded unless building a "it crashes" tier.)
5. Run the candidate through the **existing oracle loop** over `[...visibleTests, ...hiddenTests]`,
   recording per-test pass/fail.
6. **Classify and keep only the good ones (§15.4).**
7. Emit a generated Debug-Mode problem (§15.5).

### 15.3 Mutation operators (JS/TS-specific, the Stryker-canonical set)

| Operator | Example | Typical difficulty |
|---|---|---|
| Relational boundary | `<` ↔ `<=`, `>` ↔ `>=` | **hard** (subtle off-by-one) |
| Equality | `===` ↔ `!==`, `==` ↔ `!=` | medium |
| Arithmetic | `+` ↔ `-`, `*` ↔ `/`, `%` drop | easy–medium |
| Off-by-one literal | `i + 1` → `i`, `n - 1` → `n`, `0` → `1` | **hard** |
| Logical | `&&` ↔ `\|\|` | medium |
| Unary / negation | drop `!`, `-x` → `x` | medium |
| Update | `i++` → `i--`, `+=` → `-=` | easy |
| Return / init | `return a` → `return b` (sibling var), `let lo = 0` → `let lo = 1` | varies |

These are explicitly designed to resemble real bugs (competent-programmer hypothesis) —
https://stryker-mutator.io/docs/ · https://arxiv.org/pdf/2104.02517.

### 15.4 Classification (the filter that guarantees good content)

Given the per-test results of a mutant:

- **Discard — equivalent mutant:** passes *all* tests (behaviorally identical → no observable bug).
- **Discard — trivial crash:** throws on load, or *every* test throws (not a "find the subtle bug"
  exercise; optionally keep a small "it throws — find why" tier later).
- **✅ Keep — ideal bug-squash:** **fails ≥1 hidden test** *and* **passes ≥1 visible test**. Passing a
  visible test makes the code look plausible; failing a hidden test is the bug the user must surface.
  Record `FAIL_TO_PASS` = failing test indices, `PASS_TO_PASS` = passing ones.
- **Difficulty heuristic:** subtler ⇄ *fewer* hidden tests fail and *all* visible tests pass; operator
  class also signals (boundary/off-by-one = hard, arithmetic-in-core = easy). Emit a `difficulty` from
  this.

### 15.5 Output schema & what ships vs. stays test-only

Emit (e.g. into a generated `src/lib/problems/bank/_generated-debug.ts`, like generated icons):

```ts
{
  id: `${origId}-debug-${mutantHash}`,
  kind: 'debug',                       // new discriminant (see §11.4)
  baseProblemId: origId,
  title: `Fix the bug: ${origTitle}`,
  difficulty,                          // from §15.4 heuristic
  tags: [...origTags, 'debugging'],
  functionName, params,                // inherited from the base problem
  givenCode: mutantSrc,                // the BUGGY code shown in the editor
  visibleTests, hiddenTests,           // inherited verbatim — already the oracle
  bugMeta: { operator, line, col },    // for hint laddering, NOT shown up front
}
```

- **Ships:** the *buggy* `givenCode` + the *inherited tests* (the tests already ship for the base
  problem). Buggy code shipping is fine — it's wrong code, not an answer key.
- **Stays test-only:** the golden `solutions[id]` (never bundled) and `bugMeta.fix` if recorded. The
  user's fix is judged purely by the inherited tests going green — the generator never needs to ship
  "the correct line."
- **Single-function Debug fits Primitive A** (§11.3): `givenCode` is just a non-empty starter, judged
  by `args→return` over inherited tests. **No runner change at all** for the launch tier.

### 15.6 Scope for v1 (honest constraints)

- **Self-contained solutions only first.** Some `bank-solutions.ts` entries call module-scope helpers
  (`_buildTree`, `_treeToArr` for tree problems). Those won't run under `new Function` in isolation. v1
  targets the large self-contained subset (arrays, strings, math, hash-map, two-pointers, sliding-
  window, stack, bit-manipulation, DP-on-arrays…) — still **thousands** of problems. Tree/linked-list/
  graph solutions need their helpers injected as `preamble` (a v2 add — `preamble` already exists).
- **Hint ladder reuses the existing HintBot / progressive hints:** hint 1 = which hidden test fails;
  hint 2 = which line/region (`bugMeta.line`); hint 3 = the operator class — never the fix. Aligns with
  the existing 60s-per-reveal friction model.
- **Cap variants per base problem** (e.g. keep the best 1–3 mutants by difficulty spread) so one
  problem doesn't flood the bank; log how many were generated vs kept (no silent truncation).
- **Determinism:** the generator must not use `Math.random` for selection at build time if reproducible
  output matters — rank mutants by a fixed score and take top-N.

### 15.7 Why this is the right first build

It converts LeetLock's **existing, validated 2,942-solution bank into a second, equally large bank of
the #1 most-wanted modern interview format**, with **author-time correctness guaranteed by the existing
test oracle**, **zero runner changes** (Primitive A), and **content cost ≈ one build script**. No other
proposed mode has that leverage ratio. Build this first; let it prove the "modern modes" thesis before
investing in Primitive B (multi-file/Utility) or the Deep-Session tier.

*Sources (this section): reference-solution layout & oracle — `test/bank-solutions.ts`,
`test/problem-bank.test.ts` ; transform precedent — `src/lib/problems/stubify.ts` ; mutation operators —
https://stryker-mutator.io/docs/ ; acorn parser — https://github.com/acornjs/acorn.*

---

## 16. Demand validation & positioning (closes the original "appeal to a modern audience" ask)

> The founder's original question was whether new modes would "appeal to the more modern audience."
> §1–15 answered *what to build and how*; this closes the loop on *will anyone want it*.

### 16.1 Demand signals (real, but read them honestly)

- **[strong] The AI-debugging pain is acute and quantified:** ~**70% of developers report spending
  extra time debugging AI-generated code** even as ~76% say AI boosts productivity. This is the daily,
  felt problem that Debug Mode and the "fix-the-AI's-code" variant target directly — not a hypothetical
  interview trend. (https://newsletter.pragmaticengineer.com/p/the-reality-of-tech-interviews ·
  HackerRank skills data referenced in §7)
- **[medium] Explicit "beyond LeetCode: design & debugging" content demand** is now its own genre —
  CodeSignal's "LeetCode alternatives" page lists debugging + DB queries; "LeetCode isn't enough"
  guides foreground design + debugging; Balaji's "replace coding interviews with debugging" thread
  circulated widely. People are actively looking for this. (https://codesignal.com/blog/leetcode-alternatives-best-options-for-hiring-interview-prep/
  · https://www.lockedinai.com/blog/leetcode-isnt-enough-fill-gaps-coding-interview-prep ·
  https://www.linkedin.com/posts/balajivi_coding-interviews-...-activity-7311488841457025025-wIOW)
- **[medium] The white space holds on the *practice* side.** The "alternatives" are mostly *articles*
  and *conversational mock-interview* tools (Huru, LockedIn) or hiring-side assessments (CodeSignal).
  **Drilled, self-serve debugging practice remains unowned** (confirmed again, §7). LeetLock can be the
  drilling product *and* the focus gate — a combination nobody offers.
- **[context] Big, growing pool:** ~28.7M developers worldwide; the market rewards being **"always
  interview-ready, not cramming for two weeks."** (https://keyholesoftware.com/software-development-statistics-2026-market-size-developer-trends-technology-adoption/)

### 16.2 The positioning unlock — "always interview-ready" is literally the gate's mechanic

The strongest market message falls straight out of LeetLock's mechanic: a distraction gate produces
**daily, low-stakes, high-frequency reps by default**. That is exactly the "stay interview-ready
continuously instead of cramming" behavior the 2026 market rewards — but only if the reps are
*job-relevant*. Today they're FAANG-trivia (easy DSA); the modern modes make each forced rep a rep of
**the skills you actually use and are actually tested on** (find a bug, review AI code, design a small
class). So the new modes aren't just feature breadth — they **upgrade the core value prop** from
"annoying algorithm tax" to "every distraction makes you measurably more hireable at the skills that
matter now."

Messaging direction (not final copy): keep "Cold Turkey for CS students," add a second line —
*"every distraction is now a rep at the interview you're actually going to get"* (debug it, review the
AI's PR, design the class) — and honestly split the **big-tech track (DSA)** from the **startup/AI-era
track (debug · AI-eng · design)** so users self-select.

### 16.3 Honest caveats (don't oversell)

- **No hard willingness-to-pay number surfaced** — the dev-tools/edtech WTP for *this specific* combo
  (focus gate + modern interview drills) is unproven; the overlap audience (wants a blocker **and**
  interview prep) is a subset of each market, not their union. Validate with a small cohort before
  betting the roadmap on monetization.
- **Serious active job-seekers may still go to dedicated prep sites** (NeetCode, GreatFrontend) for
  focused study; LeetLock's edge is the **passive, continuous, habit** angle, not beating a prep
  platform on depth. Frame the modern modes primarily as *making the unavoidable gate worthwhile and
  current*, and secondarily as standalone prep.
- **Trend specifics will drift** — the AI-interview formats (Canva/Meta/Shopify) are 2025–2026 fresh;
  re-verify before leaning on any single company's process in public marketing (the durable, safe
  claims are the verified anchors: Canva primary + the interviewing.io survey).

---

## Research status: COMPLETE

This document now spans the full decision arc — evidence (§1–10) → code-level integration (§11) →
content strategy (§12) → gate-fit (§13) → committed decision (§14) → build-ready first deliverable
(§15) → demand & positioning (§16). The original question ("what modern modes should LeetLock add, and
how exactly do we use this") is answered end-to-end. **The next step is implementation, not more
research** — start with the §15 mutation generator. Re-open this doc for a refresh only when the
2025–2026 AI-interview specifics need re-verifying, or to pursue a narrower spike (e.g. a live
mutation-generator prototype, or a Deep-Session UX design).
