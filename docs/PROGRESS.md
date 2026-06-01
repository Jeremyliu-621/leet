# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-06-01
**Current phase:** Phase 13 — Post-MVP polish
**Current focus:** Bank at **2859** problems; 8894 tests green. Batch 269 complete. Starter backfill ongoing.
**Build status:** 🟢 `npm run typecheck` + `npm run test` green.
**Next up:** Batch 270+; more starter backfill; continued UX polish.

### feat(bank): batch 269 — take-gifts-from-richest-pile, minimum-number-of-coins-for-fruits-i (2026-06-01)
Two new problems: `take-gifts-from-richest-pile` (easy/arrays+heap, LC 2558 — k-step max-heap simulation; each step extract max pile, replace with floor(sqrt(max)); sum remaining; O(k log n)), `minimum-number-of-coins-for-fruits-i` (medium/arrays+dp, LC 2944 — buying fruit i (1-indexed) gives next i fruits free; right-to-left DP: dp[i]=prices[i-1]+min(dp[j] for j in [i+1..2i+1]); dp[n+1]=0; O(n²)). Bank at **2859**; 8894 tests.

### feat(bank): batch 268 — count-submatrices-equal-freq-xy, k-th-smallest-prime-fraction, min-valid-strings-to-form-target-ii, max-xor-score-subarray-queries (2026-06-01)
Four new problems: `count-submatrices-with-equal-frequency-of-x-and-y` (medium/arrays+simulation, 2D prefix sums; check freq(x)≥1 and freq(x)==freq(y) per top-left submatrix; O(m*n)), `k-th-smallest-prime-fraction` (medium/arrays+binary-search, binary search on fraction value with O(n) two-pointer count per iteration; converges in 200 iterations), `minimum-number-of-valid-strings-to-form-target-ii` (hard/strings+dp, rolling hash set of all word prefixes; binary search max valid prefix length per position; greedy jump game for min concatenations; O(n log n)), `maximum-xor-score-subarray-queries` (hard/arrays+dp+bit-manipulation, O(n^2) DP dp[i][j]=dp[i][j-1]^dp[i+1][j]; suf[j][i] suffix max over starting points; mx[j][i] cumulative 2D max; O(1) per query). Also bumps marketing site to 2,840+. Bank at **2856**; 8940 tests.

### feat(bank): batch 267b — ordered-triplet-ii, sum-abs-diff-sorted, min-days-eat-oranges, min-intervals-include-query (2026-06-01)
Four new problems: `maximum-value-of-ordered-triplet-ii` (medium/arrays, LC 2874 — O(n) single pass; track maxI, maxDiff, ans in order; maxDiff=max(maxI-nums[k]), then update maxI), `sum-of-absolute-differences-in-sorted-array` (medium/arrays+math, LC 1685 — prefix sum formula; result[i] = i*nums[i]-prefix[i] + (totalSum-prefix[i+1])-(n-1-i)*nums[i]; O(n)), `minimum-days-to-eat-n-oranges` (hard/dp, LC 1553 — memoized DP: dp(n) = 1 + min(n%2+dp(n/2), n%3+dp(n/3)); O(log n) states), `minimum-intervals-to-include-each-query` (hard/arrays+binary-search+heap, LC 2106 — sort intervals by start, process queries in sorted order, min-heap keyed by interval size, pop expired intervals; O((n+q) log n)). Bank at **2856**; 8940 tests.

### feat(bank): batch 267 — cells-in-spreadsheet-range, diff-ones-zeros-row-col, make-array-zero, sum-numbers-units-digit-k (2026-06-01)
Four new problems: `cells-in-a-range-on-a-spreadsheet` (easy/strings, LC 2194 — nested column×row loops; column-first ordering), `difference-between-ones-and-zeros-in-row-and-column` (medium/arrays, LC 2482 — precompute row/col ones; apply formula per cell; O(m*n)), `make-the-array-zero-by-subtracting-equal-amounts` (easy/arrays+hash-map, LC 2357 — distinct non-zero values = number of ops; O(n)), `sum-of-numbers-with-units-digit-k` (medium/math, LC 2190 — try cnt=1..10 checking units digit match and feasibility; O(1)). Also improves `kth-missing-positive-number` with Level 1/2/3 hints and binary-search starter code. Bank at **2845**; 8864 tests.

### feat(bank): batch 266 (part b) — distinct-integers, sell-colored-balls, nodes-subtree-same-label, valid-arrangement-pairs, ordered-triplet-i (2026-06-01)
Five new problems: `count-distinct-integers-added-to-array` (easy/arrays+hash-map, LC 2423 — union of two arrays via Set; O(n)), `sell-diminishing-valued-colored-balls` (medium/arrays+math+binary-search, LC 1648 — greedy level-drain: sort desc, sweep gap between consecutive top values using arithmetic sum formula; BigInt for overflow; O(n log n)), `number-of-nodes-in-sub-tree-with-same-label` (medium/tree+hash-map, LC 1519 — post-order DFS returns 26-length frequency array; ans[node] = freq[label]; O(n)), `valid-arrangement-of-pairs` (hard/graph+simulation, LC 2097 — Hierholzer's Euler path on directed graph; start at outDeg-inDeg=1 node; iterative stack+path construction; O(n)), `maximum-value-of-ordered-triplet-i` (easy/arrays, LC 2873 — O(n³) brute force over all triplets (i,j,k); max (nums[i]-nums[j])*nums[k]; returns 0 if all negative). Bank at **2841**; 8852 tests.

### feat(bank): batch 266 — find-maximum-marked-elements, longest-path-adjacent-chars, maximize-score-removing-substrings, maximum-points-archery (2026-06-01)
Four new problems: `find-maximum-number-of-marked-elements` (medium/arrays+binary-search, LC 2576 — binary search on k pairs; check sorted[i]*2≤sorted[n-k+i] for i∈[0,k); return 2k), `longest-path-with-different-adjacent-characters` (hard/tree+dp, LC 2246 — DFS from root; at each node collect depths of children with s[c]≠s[u]; path through u = 1+top1+top2; track global max), `maximize-score-after-removing-substrings` (medium/strings+stack, LC 2124 — greedy: remove higher-value pair first via stack; push chars, pop when top+curr form target pair), `maximum-points-in-an-archery-competition` (medium/arrays+bit-manipulation, LC 2212 — 2^12=4096 bitmask enumeration; for each subset check cost≤numArrows and track max score; preamble-based validation). Bank at **2836**; 8837 tests.

### feat(bank): batch 265 (local) — rows-with-most-ones, adding-spaces-to-a-string, check-if-move-is-legal, stamping-the-grid (2026-06-01)
Four new problems: `rows-with-most-ones` (easy/arrays — find all row indices tied for max 1s; O(m*n)), `adding-spaces-to-a-string` (medium/strings+two-pointers, LC 2109 — two-pointer insert-before pass; O(n+m)), `check-if-move-is-legal` (medium/arrays+simulation, LC 2133 — 8-direction reversi "good line" check; run of opposite-color then same-color endpoint; fixed 8×8 board), `stamping-the-grid` (hard/arrays+binary-indexed-tree, LC 2132 — double 2D prefix sum: first pass finds valid stamp positions; second pass checks coverage of every empty cell; O(m*n)). Also improves hints and starter code for `maximum-number-of-words-found-in-sentences`. Bank at **2836**; 8837 tests.

### feat(editor): Go and Rust missing snippets — newset, mod, inf, deque, pq (2026-06-01)
Go gains: `newset` (map[K]struct{}), `mod` (1_000_000_007), `inf` (math.MaxInt). Rust gains: `deque` (VecDeque), `pq` (BinaryHeap max-heap), `mod`, `inf` (i64::MAX). KeyboardShortcutsModal updated to document Go/Rust coverage for inf, pq, deque, newset.

### feat(bank): batch 265 — chessboard-same-color, count-equal-divisible-pairs, min-work-sessions, max-abs-val-expr, uni-value-grid (2026-06-01)
Five new problems: `check-if-two-chessboard-squares-have-the-same-color` (easy/math+strings, LC 3240 — (charCode+digit)%2 parity comparison; O(1)), `count-equal-and-divisible-pairs-in-array` (easy/arrays+math, LC 2176 — O(n²) brute force: nums[i]==nums[j] and (i*j)%k==0), `minimum-number-of-work-sessions-to-finish-the-tasks` (hard/arrays+dp+bit-manipulation, LC 1986 — bitmask DP O(3^n) submask enumeration; dp[mask]=min sessions for exactly that subset), `maximum-of-absolute-value-expression` (medium/arrays+math, LC 1131 — 4 sign combos (±s1,±s2); f(i)=s1·arr1[i]+s2·arr2[i]+i; max−min), `minimum-operations-to-make-a-uni-value-grid` (medium/arrays+math, LC 2033 — flatten+sort; check same remainder mod x; median minimizes sum of absolute deviations). Bank at **2831**; 8813 tests.

### feat(editor): Kotlin, C#, and Swift native snippet completions (2026-06-01)
Added dedicated, language-idiomatic snippet tables for Kotlin, C#, and Swift (previously they shared Java/C++ tables giving wrong completions). Kotlin: `for (i in 0 until n)`, `downTo`, `withIndex`, `mutableMapOf/SetOf`, `PriorityQueue`, `compareByDescending`, `ArrayDeque`, `sortedMapOf`, `Long.MAX_VALUE`. C#: `for`/`foreach`, `Dictionary<K,V>`, `HashSet<T>`, `List<T>`, `PriorityQueue<T,int>` (.NET 6+), `Stack<T>`, `Queue<T>`, `SortedDictionary`, `SortedSet`, `long.MaxValue`. Swift: `for i in 0..<n`, `stride(from:through:by:)`, `enumerated()`, `[K:V]`, `Set<T>`, `sorted(by:)`, `Int.max`. `KeyboardShortcutsModal` updated to document coverage for all three languages.

### feat(bank): batch 264 — mirror-score-string, manhattan-k-changes, beautiful-string, multiply-found, divide-sets-k (2026-06-01)
Five new problems: `find-mirror-score-of-a-string` (medium/strings+stack, LC 3445 — per-char stack of unmatched positions; match closest previous same char for score; O(n)), `maximum-manhattan-distance-after-k-changes` (medium/math+strings, LC 3443 — 4-quadrant greedy: base + 2*min(k, opposing_count); each opposing step flipped gains +2 to Manhattan distance), `shortest-and-lexicographically-smallest-beautiful-string` (medium/strings+sliding-window, LC 2904 — collect positions of 1s; slide k-consecutive window; shortest then lex-min substring), `keep-multiplying-found-values-by-two` (easy/arrays+hash-map, LC 2154 — HashSet lookup, keep doubling original; O(n+log(max_val))), `divide-array-in-sets-of-k-consecutive-numbers` (medium/arrays+hash-map, LC 1296 — freq map + sorted unique values; greedy consecutive group deduction; O(n log n)). Bank at **2824**; 8798 tests.

### feat(bank): batch 262 additions — min-seconds-mountain-height-zero, max-multiplication-score, max-divisibility-score, k-items-max-sum (2026-06-01)
Four more batch 262 problems: `minimum-number-of-seconds-to-make-mountain-height-zero` (medium/arrays+binary-search, LC 3296 — binary search on time; inner binary search for each worker's max reductions; O(n log(max_t) log(h))), `maximum-multiplication-score` (medium/arrays+dp, LC 3290 — pick 4 indices from a in order; 1D DP from right j=4..1; O(n)), `find-maximum-divisibility-score` (easy/arrays+math, LC 2644 — brute force count divisible elements per divisor; return max-count divisor, ties broken by smallest; O(n*m)), `k-items-with-maximum-sum` (easy/arrays+math, LC 2600 — greedy: min(k,ones) - max(0,k-ones-zeros); O(1)). Bank at **2819**; 8783 tests.

### refactor(ui): replace ▲/▼ chevrons with animated SVG + fix all inline styles (2026-06-01)
All expand/collapse UI controls now use a consistent rotating SVG chevron (12×12 viewBox, 1.5px round path, `transition-transform duration-150`) instead of Unicode ▲/▼/▸/▾. Affected components: TestResultCard (TerminalPanel), terminal collapse toggle (TerminalPanel), SubmissionsPanel, CustomTestPanel, ProblemBrowserSection. Also removes all remaining inline `style={{ fontSize: '9px', letterSpacing: '0.05em' }}` from CopyButton in TerminalPanel and ProblemPanel, replaced with Tailwind `text-[9px] tracking-[0.05em]`/`text-[9px]`.

### feat(bank): batch 263 (local) — minimum-suffix-flips, detect-pattern-mk (2026-06-01)
Two new problems: `minimum-suffix-flips` (medium/strings+simulation, LC 1529 — scan left to right counting transitions from '0'; each change in consecutive characters requires exactly one new suffix flip; O(n)), `detect-pattern-of-length-m-repeated-k-or-more-times` (easy/arrays+simulation, LC 1566 — for each start index, check arr[i+j]==arr[i+j+m] for all j in [0, m*(k-1)); O(n*m*k)). Also improves `count-odd-numbers-in-an-interval-range` with detailed description and extra hidden tests. Bank at **2815**; 8771 tests.

### feat(bank): batch 263 — count-subarrays-fixed-bounds + update 4 existing problems (2026-06-01)
New problem: `count-subarrays-fixed-bounds` (hard/arrays+sliding-window, LC 2444 — three-pointer O(n) single pass: lastBad tracks last out-of-range element, lastMin/lastMax track last occurrence of minK/maxK; for each i, answer += max(0, min(lastMin, lastMax) - lastBad)). Also improves 4 existing problems: `longest-turbulent-subarray` (tags, Level hints, tests), `maximum-product-subarray` (3rd visible test, Level hints), `most-stones-removed-with-same-row-or-column` (3rd visible example, Level hints, tests), `minimum-operations-to-reduce-x-to-zero` (Level hints, more tests). Bank at **2813**; 8765 tests.

### feat(bank): batch 262 — rearranging-fruits, time-to-cross-a-bridge, find-number-of-coins-to-place-in-tree-nodes (2026-06-01)
Three new hard problems: `rearranging-fruits` (hard/arrays+hash-map+math, LC 2561 — parity check on combined fruit frequencies; build surplus lists sorted ascending; greedy pairing with indirect-swap optimization via 2×globalMin), `time-to-cross-a-bridge` (hard/arrays+heap+simulation, LC 2532 — event-driven 4-queue simulation; left-bank workers have bridge priority; lowest-efficiency dispatched first; stop committing r→l once k rocks in flight), `find-number-of-coins-to-place-in-tree-nodes` (hard/tree+heap+math, LC 2973 — DFS collecting top-3/bottom-2 per subtree; max(0, top[0]*top[1]*top[2]) from 5-candidate set at each node). Also improves `count-pairs-in-two-arrays` (better examples + Level 1/2/3 hints) and `minimum-time-to-complete-all-tasks` (Level 1/2/3 hints + better tags). Bank at **2812**; 8762 tests.

### feat(editor): expand snippet library + terminal verdict breakdown (2026-06-01)
Expanded CodeMirror snippet completions: Python adds `pq` (heapq min-heap), `pqmax` (heapq max via negation), `deque` (collections.deque), `counter` (Counter), `bisect` (bisect_left/right), `cache` (@functools.cache), `inf` (float('inf')), `mod` (10**9+7), `sortkey` (sorted with lambda). Java adds `pqmax` (reverseOrder), `queue` (LinkedList), `dq` (ArrayDeque), `stk` (ArrayDeque stack), `tmap` (TreeMap), `tset` (TreeSet), `mod`. C++ adds `pqmax` (no comparator), `stk`, `queue`, `dq` (deque), `tmap` (std::map), `mod`, `inf`. JS/TS adds `mod` (BigInt 1_000_000_007n), `inf` (Infinity). `KeyboardShortcutsModal` updated to document all new snippets. Terminal `Test Results` tab now shows a failure-type breakdown ("N wrong · M errors") alongside the pass/fail ratio when both error types are present.

### feat(bank): batch 261 (local) — count-prefix-suffix-pairs-i, max-product-palindromic-subsequences (2026-06-01)
Two new problems: `count-prefix-suffix-pairs-i` (easy/strings+arrays, LC 3042 — O(n²) brute force: for each pair (i,j) i<j, check startsWith+endsWith), `maximum-product-of-the-length-of-two-palindromic-subsequences` (medium/strings+dp+bit-manipulation, LC 2002 — bitmask DP for LPS of all 4096 subsets; SOS DP for maxLPS in each complement; best pair = max lps[mask]×maxLPS[full^mask]). Bank at **2811**; 8753 tests.

### feat(bank): batch 261 — hash-divided-string, min-array-changes-diffs-equal, find-subarray-bitwise-and-closest-k, occurrence-first-almost-equal-substring (2026-06-01)
Four new problems: `hash-divided-string` (easy/strings+math, LC 3271 — split into k-char groups, sum char values mod p, map to chars; O(n)), `minimum-array-changes-to-make-differences-equal` (medium/arrays+hash-map, LC 3224 — difference array + freq map; maximize pairs with zero or one change cost), `find-subarray-with-bitwise-and-closest-to-k` (medium/arrays+bit-manipulation, LC 3171 — sliding set of distinct AND values; at most O(log max_val) per step), `find-the-occurrence-of-first-almost-equal-substring` (hard/strings, LC 3298 — Z-array prefix+suffix match lengths; almost equal iff prefix+suffix >= m-1). Bank at **2809**; 8747 tests.

### feat(bank): batch 260 — xor-queries-subarray, average-salary-excl-min-max, prefix-aligned (2026-06-01)
Three new problems: `xor-queries-of-a-subarray` (medium/arrays+bit-manipulation, LC 1310 — prefix XOR array; O(n+q)), `average-salary-excluding-the-minimum-and-maximum-salary` (easy/arrays, LC 1491 — (sum−min−max)/(n−2)), `number-of-times-binary-string-is-prefix-aligned` (medium/arrays, LC 1375 — running max equals step index). Bank at **2800**; 8720 tests.

### feat(editor): expand snippet library + terminal verdict breakdown (2026-06-01)
Expanded CodeMirror snippet completions: Python adds `pq` (heapq min-heap), `pqmax` (heapq max via negation), `deque` (collections.deque), `counter` (Counter), `bisect` (bisect_left/right), `cache` (@functools.cache), `inf` (float('inf')), `mod` (10**9+7), `sortkey` (sorted with lambda). Java adds `pqmax` (reverseOrder), `queue` (LinkedList), `dq` (ArrayDeque), `stk` (ArrayDeque stack), `tmap` (TreeMap), `tset` (TreeSet), `mod`. C++ adds `pqmax` (no comparator), `stk`, `queue`, `dq` (deque), `tmap` (std::map), `mod`, `inf`. JS/TS adds `mod` (BigInt 1_000_000_007n), `inf` (Infinity). `KeyboardShortcutsModal` updated to document all new snippets. Terminal `Test Results` tab now shows a failure-type breakdown ("N wrong · M errors") alongside the pass/fail ratio when both error types are present.

### feat(bank): batch 259 — subarray-varying-threshold, maximize-total-cost-alternating (2026-06-01)
Two new problems: `subarray-with-elements-greater-than-varying-threshold` (hard/arrays+stack, LC 2334 — monotonic stack left/right bounds; for each element as min, check min*len > threshold), `maximize-total-cost-of-alternating-subarrays` (medium/arrays+dp, LC 3196 — O(n) DP with pos/neg states; pos=max(pos,neg)+num, neg=prev_pos−num). Bank at **2797**; 8711 tests.

### feat(bank): batch 258 — minimum-number-of-increments-subarrays, words-within-two-edits-dictionary, create-components-same-value (2026-06-01)
Three new problems: `minimum-number-of-increments-on-subarrays-to-form-target-array` (hard/arrays+stack, LC 1526 — greedy histogram scan: answer = target[0] + Σmax(0, target[i]-target[i-1])), `words-within-two-edits-of-dictionary` (medium/strings+arrays, LC 2452 — brute-force O(q*d*n) character diff count, return queries matching any dict word in ≤2 positions), `create-components-with-same-value` (hard/tree+dp, LC 2440 — try largest-to-smallest k divisors of totalSum; DFS with edge cut when subtree sum hits target; first valid k is answer). Bank at **2791**; 8693 tests.

### feat(bank): batch 257 — right-triangles (starter), lex-smallest-swap, vowels-game, reach-end-max-score, final-array-state-k-mult-ii (2026-06-01)
Five new problems: `right-triangles` (medium/arrays+math, LC 3128 — full starter code backfill; for each 1-cell as right-angle vertex, contribution = (rowOnes-1)*(colOnes-1)), `lexicographically-smallest-string-after-swap` (easy/strings, LC 3216 — greedy: first adjacent same-parity pair where s[i]>s[i+1], swap and return), `vowels-game-in-a-string` (medium/math+strings, LC 3227 — Alice wins iff vowelCount>0: odd→take all; even→take one, Bob stuck with odd remaining), `reach-end-of-array-with-max-score` (medium/arrays+math, LC 3282 — O(n) running max sum: each unit step earns max(nums[0..i])), `final-array-state-after-k-multiplication-operations-ii` (hard/arrays+heap+math, LC 3266 — BigInt min-heap simulation until balanced (min*mul>max), then batch remaining ops as full_rounds+modpow). Bank at **2783**; 8665 tests.

### feat(bank): batch 255 (local) — right-triangles, stable-binary-arrays-i/ii, max-points-square, subarrays-distinct-squares-ii (2026-06-01)
Five new problems: `right-triangles` (medium/arrays+math, LC 3128 — for each 1-cell as right-angle vertex, contribution = (row_sum-1)*(col_sum-1)), `find-all-possible-stable-binary-arrays-i` (medium/dp, LC 3129 — dp[i][j][v] for i zeros j ones ending in v with no run > limit; O(n²·limit)), `find-all-possible-stable-binary-arrays-ii` (hard/dp, LC 3130 — same DP with prefix-sum optimization for O(n²)), `maximum-points-inside-the-square` (medium/arrays+binary-search, LC 3143 — sort by Chebyshev distance; first tag conflict at distance d returns d−1), `subarrays-distinct-element-sum-of-squares-ii` (hard/arrays+binary-indexed-tree, LC 2914 — sum of distinct_count² for all subarrays; BIT-based O(n log n) in hints, O(n²) reference). Bank at **2778**; 8638 tests.

### feat(bank): batch 256 — minimum-levels, mark-elements, max-strength-k-disjoint, shortest-uncommon-substr, longest-common-suffix-queries (2026-06-01)
Five new problems: `minimum-levels-to-gain-more-points` (medium/arrays+math, LC 3096 — prefix delta sums; return first j where 2*prefix[j] > total), `mark-elements-on-array-by-performing-queries` (medium/arrays+heap, LC 3080 — pre-sorted array as lazy heap; pointer advances past marked elements; O(n+m)), `maximum-strength-of-k-disjoint-subarrays` (hard/arrays+dp, LC 3077 — DP dp[j][0/1] with alternating-sign contribution; O(n*k)), `shortest-uncommon-substring-in-an-array` (medium/strings+trie, LC 3076 — per-string substring sets; iterate lengths until unique substring found), `longest-common-suffix-queries` (hard/strings+trie, LC 3093 — reversed-string trie with per-node best-index tracking; O(Σlen) build, O(query len) lookup). Bank at **2773**; 8616 tests.

### feat(bank): batch 253 — apply-ops-two-strings-equal, maximize-sum-squares, max-linear-stock, subarrays-distinct-squares-i, total-chars-transformations-ii (2026-06-01)
Five new problems: `apply-operations-to-make-two-strings-equal` (medium/strings+dp, LC 2896 — collect mismatch positions; DP pairs adjacent diffs at cost min(distance, 2x) or single diffs at cost x), `apply-operations-on-array-to-maximize-sum-of-squares` (hard/arrays+bit-manipulation, LC 2897 — AND/OR preserves per-bit total count; for each bit give it to the top k elements; reconstruct and sum squares), `maximum-linear-stock-score` (medium/arrays+hash-map, LC 2898 — group by prices[i]-i; max group sum), `subarrays-distinct-element-sum-of-squares-i` (easy/arrays+hash-map, LC 2913 — O(n²) brute force with set; sum of distinct_count² mod 10^9+7), `total-characters-in-string-after-transformations-ii` (hard/strings+math, LC 3337 — 26×26 transition matrix; character i expands to next nums[i] chars cyclically; matrix exponentiation mod 10^9+7). Bank at **2761**; 8577 tests.

### feat(bank): batch 255 — maximum-number-of-elements-in-two-arrays, range-frequency-queries; fix partition tags + test (2026-06-01)
Two new problems added and indexed: `maximum-number-of-elements-in-two-arrays` (medium/arrays+hash-map — count elements in exactly one of the two arrays; symmetric difference via Set), `range-frequency-queries` (medium/design+binary-search — build index of sorted positions per value; binary search both bounds; preamble wrapper pattern for design problems). Also fixed `find-the-value-of-the-partition` (removed invalid 'sorting' tag, corrected test case), indexed all 5 batch-254 problems with TS+Python solutions. Bank at **2763**; 8607 tests.

### feat(bank): batch 254 — count-unique-good-subsequences, sum-of-k-mirror-numbers, number-of-ways-to-build-sturdy-brick-wall, count-of-sub-multisets-with-bounded-sum, get-biggest-three-rhombus-sums (2026-06-01)
Five new problems: `count-unique-good-subsequences` (hard/strings+dp, LC 1987 — dp[0]/dp[1] track distinct good subseqs ending in '0'/'1'; +1 for lone "0" if present; O(n) DP), `sum-of-k-mirror-numbers` (hard/math+strings, LC 2081 — enumerate base-10 palindromes by mirrored half in increasing order; check if base-k representation is also a palindrome; collect first n), `number-of-ways-to-build-sturdy-brick-wall` (medium/dp+bit-manipulation, LC 2184 — enumerate valid row bitmasks (no two adjacent rows share internal crack); DP with compatibility matrix; O(R²×height) where R = valid rows), `count-of-sub-multisets-with-bounded-sum` (hard/arrays+hash-map+dp, LC 2902 — bounded knapsack with sliding window prefix sums per distinct value; zeros factored out as multiplier), `get-biggest-three-rhombus-sums-in-a-grid` (medium/arrays+simulation, LC 1878 — for each center (r,c) and radius k, sum the 4k border cells; maintain top-3 distinct set). Bank at **2758**; 8568 tests.

### feat(bank): batch 252 (part 2) — maximal-range, total-chars-transformations-i, count-k-subseq-beauty, smallest-digit-product, max-semi-decreasing (2026-06-01)
Five new problems completing batch 252: `maximal-range-that-each-element-is-maximum-in-it` (easy/arrays+stack, LC 2832 — monotone stack left/right boundaries; ranges[i]=right-left-1), `total-characters-in-string-after-transformations-i` (medium/strings+math, LC 2837 — freq array[26] simulation; z splits into a+b; sum mod 10^9+7), `count-k-subsequences-of-a-string-with-maximum-beauty` (medium/strings+math+hash-map, LC 2842 — sort freqs descending; formula C(tied,need)*prod_above*min_freq^need mod p), `smallest-number-with-given-digit-product` (medium/math, LC 2847 — greedy factor 9→2; if n>1 return -1; sort ascending), `maximum-length-of-semi-decreasing-subarrays` (medium/arrays+stack+binary-search, LC 2863 — suffix-minima positions have monotone values; binary search per left endpoint). Bank at **2753**; 8553 tests.

### feat(terminal): show output value for passing tests; fix(a11y): ARIA polish; docs(site): bump count (2026-06-01)
Three improvements: (1) Passing test cards in the Test Results tab now show the actual return value with a copy button — fills LeetCode parity gap where passing tests display output; added `output: unknown` to `TestVerdict` pass variant, populated in `buildVerdict`, displayed in `TestResultCard` expanded view; tests updated. (2) A11y quick wins: `aria-valuetext` added to both the main panel splitter ("Problem panel: X%") and terminal resize handle ("Terminal panel: Xpx"); terminal resize handle gains `aria-valuenow/min/max`; language selector radiogroup label improved to "Select programming language"; `RunHistoryBar` gets `aria-live="polite"` so new run results are announced; `CustomTestPanel` toggle button gets descriptive expand/collapse `aria-label`. (3) Marketing site bumped from "2,730+" to "2,740+" in all three locations.

### feat(bank): batch 253 — count-substrings-rearranged-ii, find-index-permutation, minimize-manhattan-distances (2026-06-01)
Three new problems: `count-substrings-that-can-be-rearranged-to-contain-a-string-ii` (hard/strings+sliding-window+hash-map, LC 3298 — sliding window counting valid substrings mod 10^9+7; "valid" = multiset superset of word2; count left+1 valid substrings ending at each right), `find-the-index-of-permutation` (medium/arrays+binary-indexed-tree+math, LC 3109 — Lehmer code using BIT for O(n log n) prefix counts of unused elements; result mod 10^9+7), `minimize-manhattan-distances` (hard/arrays+math, LC 3102 — Manhattan distance = max(range(x+y), range(x-y)); only 4 extreme-index candidates need removal; try each, take min). Bank at **2748**; 8538 tests.

### feat(bank): batch 252 — set-after-removals, x-y-equal, distribute-arrays-ii-upgrade; batch 251b — max-xor-two-numbers (2026-06-01)
Batch 252: `maximum-size-of-a-set-after-removals` (medium/arrays+hash-map, LC 3002 — greedy formula: min(unique1,n/2)+min(unique2,n/2)+min(shared,remaining)), `minimum-number-of-operations-to-make-x-and-y-equal` (medium/dp, LC 2998 — memoized DP rounding to nearest multiples of 5/11 + ±1 adjustments), upgraded `distribute-elements-into-two-arrays-ii` (hard/arrays+binary-indexed-tree — added BIT-based O(n log n) starter code with coordinate compression; was empty). Batch 251b: `maximum-xor-of-two-numbers-in-array` (medium/trie+bit-manipulation, LC 421 — binary trie greedy: insert all nums, then for each pick opposite bits). Bank at **2745**; 8529 tests.

### feat(bank): batch 251 — lex-smallest-substr-op, relocate-marbles, beautiful-substrings, array-to-zero, split-array (2026-06-01)
Five new problems: `lexicographically-smallest-string-after-substring-operation` (medium/strings, LC 2734 — greedy: skip leading a's; decrement non-a's until next original a; special case all-a's changes last char to z), `relocate-marbles` (medium/arrays, LC 2766 — Set-based simulation: remove from, add to; sort at end), `partition-string-into-minimum-beautiful-substrings` (medium/dp, LC 2767 — beautiful=binary representation of 5^k; DP dp[i]=min partitions; precompute powers-of-5 set), `apply-operations-to-make-all-array-elements-equal-to-zero` (medium/arrays, LC 2772 — sweep left to right; greedy diff array: track active ops; start new ops when rem>0; fail if i+k>n or rem<0), `check-if-it-is-possible-to-split-array` (medium/arrays+dp, LC 2811 — n=1: true; n>=2: true iff some adjacent pair sums >= m). Bank at **2743**; 8523 tests.

### feat(bank): batch 250b — count-complete-components, diagonal-distinct, integer-zero, decremental-concat, good-subarrays (2026-06-01)
Five new problems extending batch 250: `count-complete-components` (medium/graph+union-find, LC 2685 — DSU to find components; complete iff edge_count == k*(k-1)/2), `difference-of-number-of-distinct-values-on-diagonals` (medium/arrays+hash-map, LC 2711 — scan top-left and bottom-right diagonals with Sets; answer is absolute difference of sizes), `minimum-operations-to-make-the-integer-zero` (medium/bit-manipulation, LC 2749 — iterate k=1..; check val=num1-k*num2 >= k and popcount(val) <= k), `decremental-string-concatenation` (medium/strings+dp, LC 2746 — DP on (firstChar, lastChar) state; at each step choose prepend or append, saving 1 if chars match at junction), `ways-to-split-array-into-good-subarrays` (medium/arrays+math, LC 2750 — count 1s positions; multiply gaps between consecutive 1s mod 10^9+7). Bank at **2737**; 8505 tests.

### refactor+feat: shared LANGUAGE_LABEL/SHORT, language in submissions, batch 250 (2026-06-01)
Three polish improvements: (1) `LANGUAGE_LABEL` and `LANGUAGE_SHORT` moved from EditorPanel (local) to `src/lib/types.ts` — fixes SolvedStandaloneScreen showing raw identifiers like `java` / `cpp` instead of `Java` / `C++`; (2) `SubmissionRecord` gains an optional `language` field, populated on every submit; `SubmissionsPanel` shows a new "Lang" column (JS/TS/Py/Java/C++/…) with "—" for legacy records; (3) Batch 250 adds three problems: `magic-squares-in-grid` (medium/simulation — check all 3×3 subgrids for distinct 1–9 and sums of 15), `k-empty-slots` (hard/arrays — ordered-set immediate-neighbor check for earliest day with exactly k off-bulbs between two on-bulbs), `optimal-account-balancing` (hard/backtracking — net-balance reduction + recursive settle-first-debtor). Bank at **2732**; 8490 tests.

### feat(bank): batch 249 — monkeys-polygon, square-free-subsets, distinct-board, bowling-winner, sum-of-distances (2026-06-01)
Five new problems: `count-collisions-of-monkeys-on-a-polygon` (medium/math, LC 2550 — (2^n − 2) mod 10^9+7; only all-CW or all-CCW arrangements are collision-free; BigInt fast exponentiation), `count-the-number-of-square-free-subsets` (medium/math+dp+bit-manipulation, LC 2572 — bitmask DP over 10 primes ≤ 30; 0/1-knapsack backward pass per element; answer = sum(dp) − 1), `count-distinct-numbers-on-board` (easy/math, LC 2549 — n=1→1; n>1→n−1; n mod (n−1)=1 chains all values 2..n onto the board), `determine-the-winner-of-a-bowling-game` (easy/arrays+simulation, LC 2660 — double pin count when either of last 2 turns was a strike; compare totals), `sum-of-distances` (medium/arrays+math, LC 2615 — group same-value indices; prefix+suffix running sum computes Σ|i−j| in O(n)). Bank at **2729**; 8481 tests.

### feat(bank): batch 248 — valid-palindrome-iii, palindrome-partitioning-iv, construct-distanced-sequence, longest-happy-string (2026-06-01)
Four new problems: `valid-palindrome-iii` (hard/dp+strings, LC 1216 — dp[i][j]=min deletions to make s[i..j] palindrome; answer: dp[0][n-1]<=k), `palindrome-partitioning-iv` (hard/dp+strings, LC 1745 — precompute O(n²) isPalin table; try all split pairs (i,j) for 3-palindrome partition), `construct-the-lexicographically-largest-valid-sequence` (medium/backtracking, LC 1718 — backtrack left-to-right, try n→1 greedily; place num at idx and idx+num simultaneously), `find-the-longest-happy-string` (medium/heap, LC 1405 — greedy max-heap: always pick most frequent that won't create 3 consecutive; preamble validator checks validity and returns length). Bank at **2724**; 8466 tests.

### feat(bank): batch 247 — sort-tree-by-level, subseq-widths, diff-subseq-gcds, smallest-range-k-lists (2026-06-01)
Four new problems: `minimum-operations-to-sort-binary-tree-by-level` (medium/tree, LC 2471 — BFS level-by-level; min swaps per level = n − cycles in value→sorted-position permutation), `sum-of-subsequence-widths` (hard/arrays+math, LC 891 — sort array; contribution of sorted[i] as max = 2^i subsequences, as min = 2^(n-1-i) subsequences; sum (sorted[i] * (2^i − 2^(n-1-i))) mod 10^9+7), `number-of-different-subsequences-gcds` (hard/arrays+math, LC 1819 — sieve approach: for each g from 1 to max, compute GCD of all multiples of g present in nums; if equals g, count it), `smallest-range-covering-elements-from-k-lists` (hard/arrays+heap, LC 632 — min-heap of (value, listIdx, elemIdx) one from each list; track curMax; pop min and check/update range; advance that list). Bank at **2717**; 8445 tests.

### feat(bank): batch 245 (local) — sparse-table-RMQ, matrix-exponentiation, suffix-array-LCP (2026-06-01)
Three new algorithm problems: `sparse-table-range-min` (medium/arrays+binary-search — O(n log n) sparse table; O(1) RMQ via two overlapping windows of size 2^k; no updates required), `matrix-exponentiation` (hard/math+dp — k×k companion matrix; O(k³ log n) via fast matrix power; handles arbitrary linear recurrences including Fibonacci, tribonacci, arithmetic progressions; returns f(n) mod 10^9+7), `suffix-array-lcp` (hard/strings — O(n log² n) prefix-doubling SA; O(n) Kasai LCP construction; returns [SA, LCP] pair). Bank at **2716**; 8442 tests.


### feat(bank): batch 246 — xor-equal-k, count-nodes-sum-desc, min-path-triangle, max-xor-from-array (2026-06-01)
Four new problems: `minimum-operations-to-make-array-xor-equal-to-k` (medium/bit-manipulation, LC 2997 — popcount(XOR_all ^ k) = min flip operations needed), `count-nodes-equal-to-sum-of-descendants` (medium/tree, LC 2265 — post-order DFS counting nodes where val equals sum of all descendants), `minimum-path-sum-in-triangle` (medium/dp, LC 120 — bottom-up DP in-place: dp[j]=triangle[i][j]+min(dp[j],dp[j+1])), `maximum-xor-with-an-element-from-array` (hard/trie+binary-search, LC 1707 — offline queries sorted by limit; insert nums into binary trie greedily; query max XOR). Bank at **2713**; 8433 tests.

### feat(bank): batch 245 — min-cost-walk-graph, grid-region-average, flip-grid-palindrome, min-abs-diff-constraint (2026-06-01)
Four new problems: `minimum-cost-walk-in-weighted-graph` (hard/graph+union-find+bit-manipulation, LC 3108 — DSU tracking AND of all edge weights per component; min walk cost = component AND), `find-the-grid-of-region-average` (medium/arrays+simulation, LC 2900 — 3x3 region qualifies if all adjacent pixel diffs ≤ threshold; average qualifying regions per cell), `minimum-number-of-flips-to-make-binary-grid-palindrome` (medium/arrays, LC 3239 — 4-corner group cost + middle row/col pair checks), `minimum-absolute-difference-between-elements-with-constraint` (medium/arrays+binary-search, LC 2817 — sweep with sorted insertion array; binary search for closest element in valid index range). Bank at **2704**; 8406 tests.

### feat(bank): batch 244 (local) — euler-path, convex-hull, aho-corasick, max-flow, lca (2026-06-01)
Five new algorithm problems: `euler-path-circuit` (hard/graph — Hierholzer's O(V+E) directed Euler path/circuit; degree balance check + pointer-based DFS), `convex-hull-graham` (hard/math — Graham scan O(n log n); pivot = min-y-then-x; CCW sort by cross product; strict left turn stack; no collinear hull points), `aho-corasick-multi-pattern` (hard/strings+trie — BFS failure-link construction; output chaining via fail links; sorted [pattern, startIndex] result), `max-flow-edmonds-karp` (hard/graph+shortest-path — BFS augmenting paths; O(VE²) adjacency-matrix residual graph; min-cut = max-flow), `lca-binary-lifting` (hard/tree+binary-search — O(n log n) up[k][u] table; O(log n) LCA via depth equalization + simultaneous lifting). Bank at **2705**; 8409 tests.

### feat(bank): batch 244 — largest-local-matrix, max-employees-invited, ideal-arrays, shortest-path-obstacles (2026-06-01)
Four new problems: `largest-local-values-in-matrix` (easy/simulation, LC 2373 — 3x3 window max scan for each interior cell), `maximum-employees-to-be-invited` (hard/graph, LC 2127 — functional graph topological peel for chain lengths; cycle decomposition separates large cycles from extended 2-cycles), `count-the-number-of-ideal-arrays` (hard/dp+math, LC 2338 — divisibility chain DP f[v][l] + C(n-1,l-1) stars-and-bars placement), `shortest-path-in-a-grid-with-obstacles-elimination` (hard/shortest-path, LC 1293 — BFS with (r,c,k_remaining) state avoiding re-visiting same cell with same k). Bank at **2700**; 8394 tests.

### feat(bank): batch 243 (local) — quickselect, tarjan-scc, kmp, bridges, total-set-bits (2026-06-01)
Five new algorithm problems: `quickselect-kth-smallest` (medium/arrays+binary-search — Quickselect O(n) average kth smallest via Lomuto partition with middle pivot), `tarjan-strongly-connected` (hard/graph+stack — Tarjan's SCC DFS with disc/low/onStack; SCCs sorted by min node), `kmp-string-search` (medium/strings — KMP failure function + scan for all occurrence indices including overlapping), `bridge-finding-undirected` (hard/graph — DFS low-link bridge detection; edge (u,v) is bridge if low[v]>disc[u]; normalized [min,max] output), `count-total-set-bits` (medium/math+bit-manipulation — O(log n) period-based formula: sum full periods + remainder per bit position). Bank at **2696**; 8382 tests.

### feat(bank): batch 243 — remove-methods-project, min-time-jobs-ii, min-ops-subarray-equal, subseq-equal-gcd (2026-06-01)
Four new problems: `remove-methods-from-project` (medium/graph, LC 2204 — DFS from k to find all suspected methods; if any non-suspected calls suspected return all, else remove suspected), `find-minimum-time-to-finish-all-jobs-ii` (medium/arrays — sort jobs and workers desc, pair by rank, return max(ceil(jobs[i]/workers[i]))), `minimum-operations-to-make-subarray-elements-equal` (medium/arrays+math — slide k-window, sort each window, compute median-deviation cost; return minimum), `find-the-number-of-subsequences-with-equal-gcd` (hard/arrays+math+dp — GCD DP map: for each x, extend all existing subsequences; answer=sum of C(cnt,2) over all GCD values). Bank at **2691**; 8367 tests.

### feat(bank): batch 242 (local) — triangulation-polygon, array-empty-ops, homecoming-robot, weighted-subgraph-path (2026-06-01)
Four new problems: `minimum-score-triangulation-polygon` (hard/dp, LC 1039 — interval DP dp[i][j]=min over k of dp[i][k]+dp[k][j]+v[i]*v[k]*v[j]), `minimum-operations-to-make-array-empty` (medium/arrays+math, LC 2870 — ceil(freq/3) per value or -1 if any freq==1), `minimum-cost-homecoming-of-a-robot` (medium/arrays, LC 2087 — optimal path never backtracks; sum rowCosts/colCosts on direct route), `minimum-weighted-subgraph-path` (hard/graph+shortest-path, LC 2203 — 3× Dijkstra from src1, src2, reversed-from-dest; answer=min d1[m]+d2[m]+d3[m]). Bank at **2687**; 8355 tests.

### feat(bank): batch 242 (local) — serialize-deserialize-tree, manacher, topological-sort-kahn, segment-tree-lazy, extended-gcd (2026-06-01)
Five new problems with classic algorithm coverage: `serialize-deserialize-tree` (hard/tree+design — preorder serialize with null markers; BFS level-order round-trip; Pyodide-safe null conversion), `manacher-palindrome-radius` (hard/strings — Manacher's O(n) palindrome algorithm; # separator transform; rightmost boundary trick), `topological-sort-kahn` (medium/graph — BFS Kahn's algorithm; in-degree tracking; FIFO queue; cycle detection via count check), `segment-tree-range-update` (hard/binary-indexed-tree — lazy propagation segment tree; O(log n) range-add and range-sum; pushDown before child access), `extended-gcd` (medium/math — Extended Euclidean algorithm; Bézout coefficients; normalize x to smallest non-negative via period b/g). Bank at **2683**; 8343 tests.

### feat(bank): batch 242 — 5 new problems + TerminalPanel copy buttons (2026-06-01)
Five new problems: `smallest-divisible-digit-product-i` (easy/math — find smallest x ≥ n with digit product divisible by t; linear scan), `maximum-frequency-after-operations-ii` (hard/arrays+binary-search — same sweep as I but k up to 10⁹; binary search on O(n) candidate targets), `maximize-the-number-of-target-nodes-after-connecting-trees-i` (medium/tree+graph — BFS per node; ans[i]=cnt1[i]+max(cnt2) where cnt2 uses k-1 budget), `minimum-number-of-operations-to-make-elements-in-array-distinct` (easy/arrays+hash-map — scan from right, find rightmost dup at i, return ⌈(i+1)/3⌉), `find-all-three-digit-even-numbers` (easy/arrays+math — iterate 100-998 step 2, freq-map check). Also added CopyButton to expected/actual values in output log fail entries (TerminalPanel). Bank at **2678**; 8328 tests.

### feat(bank): batch 241 (local) — fenwick-tree, trie-autocomplete, reverse-k-groups, longest-increasing-path-matrix, union-find-components (2026-06-01)
Five new problems targeting underrepresented data structures: `fenwick-tree-prefix-sum` (medium/binary-indexed-tree — Fenwick/BIT for O(log n) point updates and range sum queries via lowest-set-bit trick), `trie-autocomplete` (medium/trie+design — prefix tree with insert + autocomplete returning sorted matching words via DFS), `reverse-linked-list-groups` (hard/linked-list — reverse every k consecutive nodes in-place, tail < k unchanged), `longest-increasing-path-matrix` (hard/graph+dynamic-programming — DFS + memoization for longest strictly-increasing 4-directional path in a matrix), `union-find-components` (medium/union-find — DSU with path compression + union by rank supporting union/count/connected). Bank at **2673**; 8313 tests.

### feat(bank): batch 241 — count-rectangles-each-point, parse-bool-expr, reorder-array-same-bst, count-pairs-nodes (2026-06-01)
Four new problems: `count-number-of-rectangles-containing-each-point` (medium/arrays+binary-search, LC 2250 — bucket rects by height (1..100); binary-search sorted l-values per height bucket), `parsing-a-boolean-expression` (hard/strings+stack, LC 1106 — recursive descent: 't'/'f' base cases; '!', '&', '|' consume sub-exprs in parens), `number-of-ways-to-reorder-array-to-get-same-bst` (hard/tree+dp+math, LC 1569 — count=C(L+R,L)*count(left)*count(right); answer=count-1 mod 10^9+7), `count-pairs-of-nodes` (hard/arrays+binary-search, LC 1782 — sort degrees, two-pointer for deg[a]+deg[b]>q, then adjust for multi-edges). Bank at **2668**; 8298 tests.

### feat(bank): batch 240 — modular-exponentiation, xor-parity-of-sum, greedy-interval-cover, rolling-hash-search, bitmask-dp-task-cover (2026-06-01)
Five new problems spanning number theory, bit manipulation, greedy intervals, string hashing, and bitmask DP: `modular-exponentiation` (medium/math+bit-manipulation — iterative binary exponentiation, O(log exp)), `xor-parity-of-sum` (easy/bit-manipulation — XOR of LSBs determines sum parity in O(n)), `greedy-interval-cover` (medium/arrays+binary-search — greedy jump-game style interval cover, sort by start then greedily extend reach), `rolling-hash-search` (medium/strings+math — Rabin-Karp with base=31 mod 10^9+7 for O(n+m) substring search), `bitmask-dp-task-cover` (hard/dynamic-programming+bit-manipulation — 2^n subset DP over task bitmasks for minimum cost set cover). Bank at **2664**; 8286 tests.

### feat(bank): batch 240 — check-strings-equal-ops-ii, count-good-integers, min-cost-special-roads, sum-subsequence-powers (2026-06-01)
Four new problems: `check-if-strings-can-be-made-equal-with-operations-ii` (medium/strings+hash-map, LC 2840 — since i↔i+2 swaps preserve parity, sort even/odd-indexed chars of each string and compare), `find-the-count-of-good-integers` (medium/math, LC 3272 — enumerate n-digit palindromes divisible by k; deduplicate by sorted digit signature; count valid permutations n!/∏freq[d]! minus leading-zero variants), `minimum-cost-of-a-path-with-special-roads` (medium/graph+shortest-path, LC 2977 — Dijkstra over {start, target, all road endpoints}; edges = Manhattan distance or special road cost), `find-the-sum-of-subsequence-powers` (hard/arrays+dp, LC 3098 — sort; dp[i] maps min-diff→count over length-j subsequences ending at i; BigInt mod 10^9+7). Bank at **2659**; 8271 tests.

### feat(bank): batch 239b — find-longest-valid-subsequence-i/ii, count-incremovable-subarrays-ii, min-adjacent-swaps-valid-array (2026-06-01)
Four new problems: `find-the-longest-valid-subsequence-i` (medium/arrays+dp, LC 3105 — case-split all-same-parity vs alternating; dp[0/1] for longest alternating subsequence), `find-the-longest-valid-subsequence-ii` (medium/arrays+dp, LC 3176 — generalization mod k; dp[r][v]=length ending with remainder v for target sum-remainder r), `count-the-number-of-incremovable-subarrays-ii` (hard/arrays+binary-search, LC 2972 — find strictly-increasing prefix/suffix; binary search per left boundary for valid r, O(n log n)), `minimum-adjacent-swaps-to-make-a-valid-array` (medium/arrays, LC 2340 — move first-min to front + last-max to back; deduct 1 when minIdx>maxIdx). Bank at **2655**; 8259 tests.

### feat(bank): backfill TypeScript starters for all 151 problems (2026-06-01)
All 2647 problems now have `starterCode.typescript` with parameter and return types inferred from visible test cases. Users selecting TypeScript get proper annotations (`number[]`, `string[]`, `number[][]`, `boolean`, etc.) instead of falling back to untyped JS stubs. Design-pattern problems (classes: StockSpanner, ParkingSystem, MyHashSet, MyStack) got properly typed class starters.

### feat(bank): batch 239 — find-nth-value-after-k-seconds, check-word-in-crossword, brightest-position-on-street, count-k-free-subsets (2026-06-01)
Four new problems: `find-the-n-th-value-after-k-seconds` (medium/arrays+math, LC 3179 — a[n-1] after k prefix-sum steps = C(n+k, k+1) mod 10^9+7), `check-if-word-can-be-placed-in-crossword` (medium/arrays+strings, LC 2018 — scan row/col slots, check word forward/backward), `brightest-position-on-street` (medium/arrays+binary-search, LC 2021 — sweep line: +1 at start, -1 at end+1; max brightness), `count-the-number-of-k-free-subsets` (medium/arrays+dp, LC 2638 — group by mod k, Fibonacci-like dp per chain). Bank at **2646**; 8232 tests.

### feat(editor): CM6 snippet completions for JS and Python (2026-06-01)
Added tab-expandable code snippets to CodeMirror 6 via `EditorState.languageData.of()` (additive — does NOT replace native keyword/variable completions from the language plugin). JS snippets: `for`, `forr`, `forof`, `while`, `if`, `ife`, `newmap`, `newset`, `len`, `sort`. Python snippets: `for`, `forr`, `fore` (enumerate), `while`, `if`, `ife`, `ddict`, `heap`. Snippets reconfigure via Compartment when language switches. Addresses snippet expansion gap from LEETCODE_PARITY.md.

### feat(bank): batch 238b — count-beautiful-numbers, apply-operations-to-maximize-score, find-the-sum-of-good-subsequences, count-substrings-k-constraint-ii, count-balanced-permutations (2026-06-01)
Five new hard problems: `count-beautiful-numbers` (hard/math+digit-dp, LC-style — digit DP with (pos, digit_sum, num_mod_2520, tight, started) state; count integers with no-zero digits where digit_sum divides the number), `apply-operations-to-maximize-score` (hard/arrays+math+stack, LC 2818 — monotonic stack finds per-element subarray count; greedy top-k by value), `find-the-sum-of-good-subsequences` (hard/arrays+hash-map+dp, LC 3351 — hash-map DP: cnt[v]/dp[v] tracks count+sum of subsequences ending at v; update from v-1,v,v+1 neighbors), `count-substrings-that-satisfy-k-constraint-ii` (hard/strings+sliding-window+binary-search, LC 3261 — sliding window computes minLeft[i]; prefix sums + binary search answer each query in O(log n)), `count-number-of-balanced-permutations` (hard/math+dp, LC 3343 — combinatorial DP: pick digits for even positions summing to target/2; multiply by nEven! * nOdd!). Bank at **2647**; 8235 tests.

### feat(bank): batch 238 — count-submatrices-top-left-k, most-frequent-prime, find-ways-to-place-people, happy-students (2026-06-01)
Four new problems: `count-submatrices-with-top-left-element-and-sum-less-than-k` (medium/arrays+sliding-window, LC 3070 — 2D prefix sum; count (i,j) where prefix[i][j] ≤ k), `most-frequent-prime` (medium/arrays+math, LC 3044 — traverse 8 directions from each cell accumulating multi-digit numbers; find most frequent prime), `find-the-number-of-ways-to-place-people` (medium/arrays+two-pointers, LC 3027 — sort by x asc/y desc; O(n^3) check no point lies inside each pair's rectangle), `happy-students` (medium/arrays+binary-search, LC 2860 — sort; for each m check sorted[m-1]≤m AND sorted[m]>m). Bank at **2642**; 8220 tests.

### feat(bank): batch 237 — longest-uncommon-subsequence-ii, maximum-strong-pairs-i, find-max-elements-in-subset, missing-integer (2026-06-01)
Four new problems: `longest-uncommon-subsequence-ii` (medium/arrays+strings+two-pointers, LC 522 — for each string check if it's NOT a subsequence of any other; return max length or -1), `maximum-strong-pairs-in-an-array-i` (easy/arrays+hash-map+sliding-window, LC 2899 — sort + greedy adjacent pairing: pair if nums[i+1]≤2*nums[i]), `find-the-maximum-number-of-elements-in-subset` (medium/arrays+hash-map, LC 3020 — build chain x,x²,x⁴,... with freq≥2; double chain length + optional middle), `missing-integer` (easy/arrays+hash-map, LC 2996 — compute prefix sums set, return smallest positive int not in set). Bank at **2638**; 8208 tests.

### feat(bank): batch 236 — row-with-maximum-ones, distinct-prime-factors-product-array, distribute-candies-children-ii (2026-06-01)
Three new problems: `row-with-maximum-ones` (easy/arrays+math, LC 2643 — count 1s per row, return [bestIdx, count]), `distinct-prime-factors-of-product-of-array` (easy/arrays+math+hash-map, LC 2521 — factorize each element, union all prime factors, return set size), `distribute-candies-among-children-ii` (medium/math, LC 2927 — inclusion-exclusion: f(n) - 3f(n-limit-1) + 3f(n-2(limit+1)) - f(n-3(limit+1)) where f(x)=C(x+2,2)). Bank at **2634**; 8196 tests.

### feat(bank): batch 235 — apple-redistribution-into-boxes, maximum-value-string-array, check-if-string-prefix-array, reformat-phone-number (2026-06-01)
Four new problems: `apple-redistribution-into-boxes` (easy/arrays+math, LC 3074 — sum packages, sort capacity desc, greedily pick largest boxes until sum ≥ total), `maximum-value-of-a-string-in-array` (easy/arrays+strings, LC 2496 — all-digits string → int value, else length), `check-if-string-is-prefix-of-array` (easy/arrays+strings+two-pointers, LC 1961 — concatenate words, check equals s), `reformat-phone-number` (easy/strings+two-pointers, LC 1694 — strip non-digits, group into 3-2-2 blocks). Bank at **2631**; 8187 tests.

### feat(bank): batch 234 — matrix-similarity-after-cyclic-shifts, remove-adjacent-almost-equal-characters (2026-06-01)
Two new problems: `matrix-similarity-after-cyclic-shifts` (easy/arrays+simulation, LC 2946 — cyclic shift even rows right k%n, odd rows left k%n; check if result equals original), `remove-adjacent-almost-equal-characters` (medium/strings+greedy, LC 2957 — greedy: skip i+1 whenever |word[i]-word[i+1]|<=1, count replacements). Bank at **2627**; 8175 tests.

### feat(bank): batch 233 — visit-array-positions-to-maximize-score, largest-element-after-merge-operations, shortest-distance-road-queries-i+ii (2026-06-01)
Four new problems: `visit-array-positions-to-maximize-score` (medium/arrays+dp, LC 2786 — two-state DP on value parity: dp[0]=best score ending at even, dp[1]=best at odd; parity change costs x), `largest-element-in-array-after-merge-operations` (medium/arrays+simulation, LC 2789 — right-to-left greedy: accumulate cur, reset when nums[i] > cur), `shortest-distance-after-road-addition-queries-i` (medium/graph+shortest-path, LC 3243 — BFS after each query addition), `shortest-distance-after-road-addition-queries-ii` (hard/graph+union-find, LC 3244 — link-compression: deactivate skipped nodes with path compression, O(nα(n))). Bank at **2625**; 8169 tests.

### feat(bank): batch 232 — max-diff-ascending, min-swaps-balanced-str, count-subarrays-equal-ends, split-strings-by-separator (2026-05-30)
Four new problems: `maximum-difference-between-ascending-elements` (easy/arrays, running min scan, return max diff or -1), `minimum-number-of-swaps-to-make-the-string-balanced` (medium/strings, count misplaced "]" with open-bracket counter, ceil(bad/2)), `count-subarrays-with-equal-ends` (medium/arrays+hash-map, frequency map O(n): add freq[v] then increment), `split-strings-by-separator` (easy/strings, split+filter empty strings). Bank at **2621**; 8157 tests.

### feat(bank): batch 231 — count-vowels-all-substrings, two-furthest-houses-diff-colors, max-score-removing-stones, string-compression-count (2026-05-30)
Four new problems: `count-vowels-in-all-substrings` (easy/strings+math, contribution technique: vowel at i contributes (i+1)*(n-i) substrings), `two-furthest-houses-with-different-colors` (easy/arrays, scan from each end for furthest differing-color house), `maximum-score-from-removing-stones` (easy/math+heap, min(floor((a+b+c)/2), total-max)), `string-compression-count` (easy/strings+simulation, run-length-encoding char count without building string). Bank at **2617**; 8145 tests.

### feat(bank): batch 230 — count-special-triplets, kth-char-string-game-i, smallest-missing-after-ops, largest-square-two-rects, min-ops-reduce-to-0, calculate-digit-sum, find-prefix-common-array, apply-ops-sum-gte-k, max-k-divisible-comps, count-nodes-largest-group, minimum-replacements-balanced (2026-05-30)
Eleven new problems merged from multiple sessions. Highlights: `count-number-of-special-triplets` (medium/arrays+hash-map), `kth-character-in-string-game-i` (easy/bit-manipulation), `smallest-missing-non-negative-integer-after-operations` (medium/arrays+hash-map), `find-the-largest-area-of-square-inside-two-rectangles` (medium/arrays), `minimum-operations-to-reduce-an-integer-to-0` (medium/bit-manipulation), `calculate-digit-sum-of-a-string` (easy/strings), `find-prefix-common-array-of-two-arrays` (medium/arrays+hash-map), `apply-operations-to-make-sum-gte-k` (medium/math), `maximum-number-of-k-divisible-components` (hard/tree+dp), `count-number-of-nodes-in-the-largest-group` (easy/math), `minimum-replacements-to-make-string-balanced` (easy/strings). Bank at **2613**; 8133 tests.

### feat(bank): batch 229 — find-peak-ii, group-people-by-size, matrix-diag-sum, closest-fair, find-original-from-doubled (2026-05-30)
Five new problems: `find-a-peak-element-ii` (medium/arrays+binary-search, row binary search selecting row with max-col, O(m log n)), `group-the-people-given-group-size` (medium/arrays+hash-map, bucket by size, chunk people, sort output by first ID), `matrix-diagonal-sum` (easy/arrays, primary+secondary diagonals minus center if odd n), `closest-fair-integer` (medium/math, odd-digit → jump to next even-digit count, then increment until even≡odd), `find-original-array-from-doubled-array` (medium/arrays+hash-map, sort+counter greedy: pair each x with 2x). Bank at **2604**; 8100 tests.

### feat(bank): batch 227 (local) — make-prefix-sum-non-neg, maximize-topmost-after-k, sentence-sim-iii, decode-slanted-ciphertext, delete-columns-sorted (2026-05-30)
Five new problems: `make-the-prefix-sum-non-negative` (medium/arrays+heap, greedy min-heap: when prefix<0 pop min negative and move to end), `maximize-the-topmost-element-after-k-moves` (medium/arrays, parity check (k-i)%2==0 for reachable indices), `sentence-similarity-iii` (medium/strings+two-pointers, lead+trail prefix/suffix word match ≥ min length), `decode-the-slanted-ciphertext` (medium/strings+simulation, diagonal→row-major grid decode+trimEnd), `delete-columns-to-make-sorted` (easy/arrays, column-wise pair comparison). Bank at **2595**; 8073 tests.

### feat(bank): batch 228 — max-factor-score, count-partitions-even-sum, beautiful-indices-ii, sum-of-power-subsequences (2026-05-30)
Four new problems: `find-the-maximum-factor-score-of-array` (medium/arrays+math, try all n+1 removals + gcd/lcm, GCD via Euclidean), `count-partitions-with-even-sum-difference` (easy/arrays+math, O(1) total%2 check → n−1 or 0), `find-beautiful-indices-in-the-given-array-ii` (hard/strings, KMP O(n) match + two-pointer scan), `find-the-sum-of-the-power-of-all-subsequences` (hard/dp, 2D DP on length+sum × 2^(n−len) multiplier mod 1e9+7). Bank at **2588**; 8058 tests.

### feat(bank): batch 226 — height-checker, reorder-log-files, largest-time-for-given-digits, replace-elements-in-array (2026-05-30)
Four new problems: `height-checker` (easy/arrays, sorted comparison), `reorder-log-files` (easy/strings, letter-logs sorted by (content,id) then digit-logs), `largest-time-for-given-digits` (medium/simulation, 24-permutation brute force), `replace-elements-in-an-array` (medium/arrays+hash-map, val→idx map updated per operation O(m)). Bank at **2576**; 8022 tests.

### feat(bank): batch 228 — most-visited-sector, max-semi-decreasing-subarray, binary-array-ops-i, binary-array-ops-ii (2026-05-30)
Four new problems: `most-visited-sector-in-a-circular-track` (easy/arrays+simulation, frequency count with clockwise wrap), `maximum-length-of-a-semi-decreasing-subarray` (medium/arrays+binary-search, prefix-maxima + binary search O(n log n)), `minimum-number-of-operations-to-make-binary-array-elements-equal-to-one-i` (medium/arrays, greedy flip-3-consecutive left-to-right, -1 if last 2 remain 0), `minimum-number-of-operations-to-make-binary-array-elements-equal-to-one-ii` (medium/arrays, greedy suffix-flip, count transitions from virtual leading 1). Bank at **2588**; 8058 tests.

### feat(bank): batch 227 — adjacent-increasing-ii, vowel-k-consonants-ii, digits-equal-ops-ii (2026-05-30)
Three new problems: `adjacent-increasing-subarrays-detection-ii` (medium/arrays, find max k for two adjacent strictly increasing subarrays, O(n) leftLen/rightLen precompute + boundary scan), `count-substrings-with-every-vowel-and-k-consonants-ii` (medium/strings+sliding-window, atLeast(k)−atLeast(k+1) O(n) sliding window, handles n up to 5×10⁴), `check-if-digits-are-equal-in-string-after-operations-ii` (hard/strings+math, binomial formula after m=n−2 passes, Lucas' theorem mod 2 and mod 5 via iterative base-p decomposition, CRT for mod 10, O(n log n)). Bank at **2580**; 8034 tests.

### feat(bank): batch 226 — check-a-before-b, chessboard-color, most-frequent-after-key, rectangles-largest-square, first-palindromic (2026-05-30)
Five new easy problems: `check-if-all-a-appears-before-all-b` (easy/strings, "ba" not in string), `determine-color-of-a-chessboard-square` (easy/math, (col+row)%2 parity), `most-frequent-number-following-key-in-an-array` (easy/arrays+hash-map, count targets after key), `number-of-rectangles-that-can-form-largest-square` (easy/arrays, max min(l,w)), `find-first-palindromic-string-in-array` (easy/strings, first word = reverse). Bank at **2577**; 8025 tests.

### feat(bank): batch 225 (merged) — removing-min-max, double-reversal, suffix-instructions, good-days-rob + find-score-marking, prime-set-bits, edge-reversals, count-inversions (2026-05-30)
Eight problems across two concurrent sessions: `removing-minimum-and-maximum-from-array` (medium/arrays, 3-strategy cost), `number-after-double-reversal` (easy/math), `execution-of-all-suffix-instructions-staying-in-a-grid` (medium/simulation), `find-good-days-to-rob-the-bank` (medium/dp), `find-score-after-marking-all-elements` (medium/arrays+simulation), `prime-number-of-set-bits-in-binary-representation` (easy/math+bit-manipulation), `minimum-edge-reversals-so-every-node-is-reachable` (hard/graph), `count-the-number-of-inversions` (medium/arrays, merge-sort O(n log n)).

### feat(bank): batch 224 — min-cuts-circle, good-split-string, shortest-dist-circular, merge-2d-arrays (2026-05-30)
Four new problems: `minimum-cuts-to-divide-a-circle` (easy/math, 0 if n=1; n/2 if even; n if odd), `number-of-good-ways-to-split-a-string` (medium/strings+hash-map, prefix/suffix distinct-char count, O(n)), `shortest-distance-to-target-string-in-a-circular-array` (easy/arrays, min circular distance to each target match), `merge-two-2d-arrays-by-summing-values` (easy/arrays, two-pointer merge by id). Bank at **2564**; 7986 tests.

### feat(bank): batch 223 addendum — min-ops-all-chars-equal, bit-changes-equal, find-occurrences, substrings-only-1s (2026-05-29)
Four new problems: `minimum-operations-to-make-all-characters-equal` (medium/strings, count transition boundaries), `number-of-bit-changes-to-make-two-integers-equal` (easy/bit-manipulation, check k&~n==0, return popcount(n&~k)), `find-occurrences-of-an-element-in-an-array` (easy/arrays, k-th occurrence scan), `number-of-substrings-with-only-1s` (medium/strings+math, running run-length × mod). Bank at **2560**; 7974 tests.

### feat(bank): batch 223 — count-balanced-subarrays, longest-divisible-run, maximum-sum-after-xor-operations (2026-05-29)
Three new problems: `count-balanced-subarrays` (medium/arrays+hash-map, alternating prefix-diff + frequency map, O(n)), `longest-divisible-run` (easy/arrays, greedy scan checking each adjacent pair for divisibility), `maximum-sum-after-xor-operations` (medium/arrays+bit-manipulation+math, XOR even-subset constraint → sort gains, greedily take positive pairs). Bank at **2556**; 7962 tests.

### feat(bank): batch 222 — count-tested-devices, people-aware-of-secret, reachable-cell-at-given-time (2026-05-29)
Three new problems (find-beautiful-indices was duplicate): `count-tested-devices-after-test-operations` (easy/arrays+simulation), `number-of-people-aware-of-secret` (medium/dp, daily window DP), `determine-if-a-cell-is-reachable-at-a-given-time` (medium/math, Chebyshev distance + (0,1) edge case). Merged concurrent batch. Bank at **2553**; 7953 tests.

### feat(bank): batch 221 — longest-valid-substring, add-spaces, colored-pieces, longest-balanced-binary (2026-05-29)
Four new problems: `length-of-the-longest-valid-substring` (hard/strings+hash-map+sliding-window, 10-suffix check per window position), `add-spaces-to-string` (medium/strings+simulation, space insertion at given indices), `remove-colored-pieces-if-both-neighbors-same-color` (medium/strings+math, independent Alice/Bob move counts), `find-the-longest-balanced-substring-of-binary-string` (easy/strings, consecutive 0+1 block scan). Bank at **2540**; 7914 tests.

### feat(bank): batch 220 — count-submatrices-all-ones, min-swaps-strings-equal, count-special-subsequences (2026-05-29)
Three new problems (removed duplicate minimum-recolors): `count-submatrices-with-all-ones` (medium/arrays+dp, O(mn²) height sweep), `minimum-swaps-to-make-strings-equal` (medium/strings+math, count XY/YX mismatches), `count-number-of-special-subsequences` (hard/arrays+dp, O(n) DP for 0+1+2+ patterns). Bank at **2531** post-batch-220. Then merged concurrent 217-addendum (+5 problems) → **2536**; 7902 tests.

### feat(bank): batch 217 addendum — reach-a-number, minimum-degree-connected-trio, valid-square, count-subarrays-odd-sum, separate-digits-in-array (2026-05-29)
Five new problems: `reach-a-number` (medium/math+binary-search, find min k with k*(k+1)/2 ≥ target and even parity gap), `minimum-degree-of-a-connected-trio` (hard/graph, O(n³) trio enumeration, degree=sum−6), `valid-square` (medium/math, 6 pairwise distances, 2 distinct values with 2:1 ratio), `count-subarrays-with-odd-sum` (medium/arrays+math, prefix parity tracking, mod 10⁹+7), `separate-the-digits-in-an-array` (easy/arrays+simulation, flatMap digit extraction). Bank at **2533**; 7893 tests.

### feat(bank): batch 219 — non-special-count, same-digits-ops-i, smallest-string-constraint, grid-cut-sections (2026-05-29)
Four new problems: `find-the-count-of-numbers-which-are-not-special` (easy/math, count p² for primes in [l,r] via sieve), `check-if-digits-are-equal-in-string-after-operations-i` (easy/strings+simulation, reduce adjacent-sum-mod-10 until 2 chars, check equality), `lexicographically-smallest-string-after-operations-with-constraint` (medium/strings, greedy left-to-right rotation budget), `check-if-grid-can-be-cut-into-sections` (medium/arrays, interval sweep on x/y projections for ≥3 groups). Bank at **2528** (after dedup merger); 7878 tests.

### chore(bank): comprehensive deduplication — remove 305 abbreviated-name duplicates (2026-05-29)
Removed 305 duplicate problem registrations where abbreviated IDs (e.g. `best-time-buy-sell-iii`) were registered alongside their canonical equivalents (e.g. `best-time-to-buy-and-sell-stock-iii`). Used word-subset heuristic to safely identify pairs; restored `difference-ones-zeros-in-row-and-column` and `find-kth-largest-integer-in-array` which were incorrectly removed. Bank: 2827 → 2524 unique problems. Tests: 8775 → 7866 (all pass).

### feat(bank): batch 218 — phone-number-prefix, reverse-degree, min-ops-array-zero, properties-graph (2026-05-29)
Four new problems: `phone-number-prefix` (easy/strings, sort + consecutive startsWith check), `reverse-degree-of-a-string` (easy/strings+math, positional reverse-alphabet weight sum), `minimum-operations-make-array-elements-zero` (medium/arrays+hash-map+math, pair equal non-zero elements or -1 if odd count), `properties-graph` (medium/graph+union-find, union all nodes sharing a property value, count roots). Bank at **2827**; 8775 tests.

### feat(bank): batch 217 — largest-almost-missing, unique-3-digit-even, transform-by-parity, max-containers + 215-addendum merge (2026-05-29)
Four new problems: `find-the-largest-almost-missing-integer` (easy/arrays+hash-map, max freq-1 element or -1), `unique-3-digit-even-numbers` (easy/arrays+simulation, brute-force all index triplets for 3-digit evens), `transform-array-by-parity` (easy/arrays+simulation, count evens→0s, odds→1s, return sorted), `maximum-containers-on-a-ship` (easy/math, k*(k+1)/2 ≤ n², quadratic formula). Also merged concurrent 215-addendum (valid-tic-tac-toe, kth-multiplication-table, confusing-number-ii, min-swaps-binary-grid, solve-equation, count-groups-special-equiv, difference-ones-zeros, find-kth-largest-int). Bank at **2823**; 8763 tests.

### chore(bank): remove 8 near-duplicate problems, register 3 new (count-groups-special-equiv, difference-ones-zeros, find-kth-largest-int) (2026-05-29)
Removed 8 near-duplicate registrations (design-an-atm-machine, minimum-number-of-flips-to-make-binary-grid-palindrome, minimum-number-of-operations-to-sort-a-binary-tree-by-level, minimum-sum-of-mountain-triplets, find-valid-matrix-given-row-column-sums, maximize-the-confusion-of-an-exam, count-rectangles-containing-points, count-number-of-rectangles-containing-each-point). Added 3 genuinely new problems: `count-groups-of-special-equivalent-strings` (easy/strings+hash-map, group by sorted even/odd chars), `difference-ones-zeros-in-row-and-column` (medium/arrays+simulation, diff[i][j]=2*rowOnes[i]-n+2*colOnes[j]-m), `find-kth-largest-integer-in-array` (medium/strings+two-pointers, sort by length then lex). Net: 2824→2819 (−5). 8751 tests.

### feat(bank): batch 215 addendum — valid-tic-tac-toe-state, kth-smallest-multiplication-table, confusing-number-ii, minimum-swaps-arrange-binary-grid, solve-the-equation (2026-05-29)
Five new problems: `valid-tic-tac-toe-state` (medium/arrays+simulation, count X/O, check wins, validate win-count consistency), `kth-smallest-number-in-multiplication-table` (hard/binary-search, count elements ≤ v via O(m) sum over rows), `confusing-number-ii` (hard/math+backtracking, DFS over valid-digit numbers, check 180° rotation), `minimum-swaps-to-arrange-a-binary-grid` (medium/arrays+simulation, greedy: count trailing zeros per row, bubble up), `solve-the-equation` (medium/math+strings+simulation, parse both sides into coeff/constant, handle 3 cases). Bank at **2824**; 8766 tests.

### feat(bank): batch 216 (merged) — 10 problems: remove-digit, check-powers-of-three, count-rectangles, minimum-impossible-or, find-substring-max-cost, find-width-of-columns, minimum-sum-mountain-triplets, flips-binary-grid-palindrome, sort-binary-tree-by-level, design-an-atm-machine (2026-05-29)
Ten new problems merged from two concurrent sessions: `remove-digit-from-number-to-maximize-result` (easy/strings+simulation), `check-if-number-is-a-sum-of-powers-of-three` (medium/math), `count-number-of-rectangles-containing-each-point` (medium/arrays+binary-search), `minimum-impossible-or` (medium/bit-manipulation), `find-substring-with-maximum-cost` (medium/strings+dp), `find-the-width-of-columns-of-a-grid` (easy/arrays+simulation), `minimum-sum-of-mountain-triplets` (easy/arrays), `minimum-number-of-flips-to-make-binary-grid-palindrome` (medium/arrays+simulation), `minimum-number-of-operations-to-sort-a-binary-tree-by-level` (medium/tree+simulation), `design-an-atm-machine` (medium/design+simulation). Bank at **2819**; 8751 tests.

### feat(bank): batch 215b (concurrent) — distribute-candies-i, minimum-area-rectangle-ii, minimum-total-price-of-trips (2026-05-29)
Three problems from concurrent session: `distribute-candies-among-children-i` (easy/math+simulation), `minimum-area-rectangle-ii` (medium/math+hash-map), `minimum-total-price-of-trips` (hard/tree+dp). Bank at **2809**.

### feat(bank): batch 215a — partition-string-values-at-most-k, consecutive-integers-data-stream, make-distinct-chars-equal, shortest-string-contains-three (2026-05-29)
Four new medium problems: `partition-string-into-substrings-with-values-at-most-k` (greedy digit extension), `find-consecutive-integers-from-a-data-stream` (design/simulation, streak counter), `make-number-of-distinct-characters-equal` (hash-map, enumerate 676 pairs, check delta per swap), `shortest-string-that-contains-three-strings` (try all 6 orderings, greedy overlap merge + lex tiebreak). Bank at **2806**; 8712 tests.

### feat(bank): batch 214b (concurrent) — count-artifacts, closest-dessert, watering-plants-ii, rearrange-words (2026-05-29)
Four new medium problems: `count-artifacts-that-can-be-extracted` (medium/arrays+hash-map+simulation, Set-based cell lookup for rectangle coverage), `closest-dessert-cost` (medium/dynamic-programming+arrays+backtracking, DFS over toppings with pruning + tie-breaking), `watering-plants-ii` (medium/arrays+two-pointers+simulation, two-pointer meeting-in-middle with per-person refill tracking), `rearrange-words-in-a-sentence` (medium/strings+simulation, stable sort by word length + capitalize). Bank at **2802**.

### feat(bank): batch 214 — count-special-integers, minimum-moves-spread-stones, min-max-game (2026-05-29)
Three new problems: `count-special-integers` (hard/math+dp, digit DP with bitmask, 10 hidden tests including n up to 1.2B), `minimum-moves-to-spread-stones-over-grid` (medium/arrays+dp, permutation backtracking minimizing Manhattan distance), `min-max-game` (easy/arrays+simulation, alternating min/max halving). Bank at **2797**; 8685 tests.

### feat(bank): batch 212 addendum — longest-subarray-with-positive-product (2026-05-29)
One more problem: `longest-subarray-with-positive-product` (medium/arrays+dp, pos/neg DP tracking, 8 hidden tests verified). Bank at **2798**.

### feat(bank): batch 213b (concurrent) — design-neighbor-sum-service, find-valid-matrix-given-row-column-sums, count-complete-substrings (2026-05-29)
Three new problems: `design-neighbor-sum-service` (easy/design+arrays+hash-map, grid position map, O(1) adjacent/diagonal sums), `find-valid-matrix-given-row-column-sums` (medium/arrays+math, greedy min(rowSum[i],colSum[j]) fill), `count-complete-substrings` (hard/strings+sliding-window+hash-map, segment on adj-diff>2 then fixed-window per alphabet size t). Bank at **2786**; 8652 tests.

### feat(bank): batch 213a — all-1s-k-apart, binary-string-one-segment, count-distinct-reverse, maximize-confusion (2026-05-29)
Four new problems: `check-if-all-1s-are-at-least-length-k-places-apart` (easy/arrays, track previous-1 index, gap >= k+1), `check-if-binary-string-has-at-most-one-segment-of-ones` (easy/strings, no "01" substring), `count-distinct-integers-after-reverse-operations` (medium/arrays+hash-map, Set union of nums and digit-reversed nums), `maximize-the-confusion-of-an-exam` (medium/strings+sliding-window, two-pass window replacing T's then F's). Bank at **2788**; 8658 tests.

### feat(bank): batch 211b — word-k-periodic, zero-array-transformation-iii, maximum-coins-heroes, balls-to-boxes (2026-05-29)
Four new problems: `minimum-number-of-operations-to-make-word-k-periodic` (medium/strings+hash-map, split into n/k chunks, count freq, answer=total_chunks−max_freq), `zero-array-transformation-iii` (hard/arrays+heap, greedy max-heap by right endpoint, diff array coverage tracking), `maximum-coins-heroes-can-collect` (medium/arrays+binary-search, sort monsters by health, prefix sum coins, bisect per hero), `minimum-operations-to-move-all-balls-to-each-box` (medium/arrays+strings, two-pass O(n) accumulating cost+count from left then right). Bank at **2784**; 8646 tests.

### feat(bank): batch 212 — max-sum-of-a-pair-with-equal-sum-of-digits, finding-pairs-with-certain-difference, number-of-subarrays-with-and-value-of-k, maximum-number-of-coins-you-can-get (2026-05-29)
Four new medium problems: `max-sum-of-a-pair-with-equal-sum-of-digits` (medium/arrays+hash-map+math, group by digit sum, track best per group), `finding-pairs-with-certain-difference` (medium/arrays+hash-map, Set dedup + check x+k exists), `number-of-subarrays-with-and-value-of-k` (medium/arrays+bit-manipulation, sliding map of distinct AND values ending at each index), `maximum-number-of-coins-you-can-get` (medium/arrays+math, sort + take every other from n-2 down to n/3). Bank at **2780**; 8634 tests.

### feat(bank): batch 207b — find-occurrences-of-element-in-array, ways-to-express-as-sum-of-powers, minimum-right-shifts, sliding-subarray-beauty, maximum-strong-pair-xor-ii (2026-05-29)
Five new problems: `find-occurrences-of-element-in-array` (easy/arrays, precompute positions array, 1-indexed query lookup), `ways-to-express-an-integer-as-sum-of-powers` (medium/dynamic-programming+math, 0/1 knapsack over i^x items, mod 10^9+7), `minimum-right-shifts-to-sort-the-array` (easy/arrays, count break points in circular array), `sliding-subarray-beauty` (medium/arrays+sliding-window, freq array of negatives, x-th smallest via linear scan), `maximum-strong-pair-xor-ii` (hard/bit-manipulation+trie, sliding window trie with flat arrays, 21-bit max XOR). Bank at **2772**; 8610 tests.

### fix(a11y): raise --ll-faint to #808080 for WCAG AA compliance (2026-05-29)
`#767676` on `#161616` (surface) gave ~3.93:1 contrast, failing WCAG AA (needs 4.5:1). Changed `--ll-faint` to `#808080` which gives 4.59:1 on surface and 5.02:1 on bg. Tradeoff: still ~4.22:1 on `--ll-surface-2` but acceptable as a design system tradeoff.

### feat(ux): total-solved count on solved screen (2026-05-29)
`SolvedStandaloneScreen` now shows an all-time "Total solved" stat cell in the post-solve stats row alongside Time, Submissions, Language, and Streak. Value is sourced from `solvedIds.size` at the moment of submit.

### feat(bank): batch 211 — find-k-or (easy), maximum-matching-of-players-with-trainers (medium), sum-of-absolute-differences-in-a-sorted-array (medium) (2026-05-29)
Three new problems: `find-k-or` (easy/bit-manipulation, for each bit 0–30 count elements with that bit set, include if ≥k), `maximum-matching-of-players-with-trainers` (medium/arrays+two-pointers, sort both, greedy two-pointer to maximize matches), `sum-of-absolute-differences-in-a-sorted-array` (medium/arrays+math, prefix sum formula: leftSum = i*nums[i]−prefix[i-1], rightSum = (totalSum−prefix[i])−(n-1-i)*nums[i]). Bank at **2770**; 8604 tests.

### feat(bank): batch 210b — second-maximum-number-in-array, sum-of-values-at-indices-with-k-set-bits, points-that-intersect-with-cars, count-stepping-numbers-in-range (2026-05-29)
Four new problems: `second-maximum-number-in-array` (easy/arrays, find max then max of remaining below max), `sum-of-values-at-indices-with-k-set-bits` (easy/arrays+bit-manipulation, popcount(i)==k), `points-that-intersect-with-cars` (easy/arrays+simulation, Set of all covered integer points), `count-stepping-numbers-in-range` (medium/dynamic-programming+math, digit DP with tight/started flags, mod 10^9+7). Bank at **2767**; 8595 tests.

### feat(bank): batch 210 — count-elements-in-range, min-word-length, transpose-2d, count-pairs-same-sum (2026-05-29)
Four new easy problems: `count-elements-in-range` (easy/arrays, filter lo<=v<=hi), `min-word-length` (easy/arrays+strings, min word length), `transpose-2d-array` (easy/arrays, result[j][i]=matrix[i][j]), `count-pairs-with-same-sum` (easy/arrays+hash-map, O(n²) pairs summing to k). Bank at **2763**; 8583 tests.

### feat(bank): batch 209 — mode-of-array, row-with-max-sum, find-middle, count-rows-equal-first (2026-05-29)
Four new easy problems: `mode-of-array` (easy/arrays+hash-map, freq map min at maxFreq), `row-with-max-sum` (easy/arrays+math, row index with largest row sum), `find-middle-element` (easy/arrays, nums[floor(n/2)]), `count-rows-equal-to-first` (easy/arrays, rows matching matrix[0]). Bank at **2759**; 8571 tests.

### feat(bank): batch 208 — harshad, furthest-point, beautiful-array-sum, maximal-range, lex-smallest-ops (2026-05-29)
Five new problems: `harshad-number` (easy/math+simulation, digit-sum divisibility), `furthest-point-from-origin` (easy/simulation, |L−R|+zeros), `minimum-possible-sum-of-beautiful-array` (medium/math, BigInt mod 10^9+7, use 1..floor(target/2) then target..), `maximal-range-each-element-is-maximum-in` (medium/arrays+stack, monotone stack prev/next strictly-greater → r−l−1), `lexicographically-smallest-string-operations-constraint` (medium/strings, greedy left-to-right budget: reach 'a' or go left). Bank at **2747**; 8535 tests.

### feat(bank): batch 207 — count-words-longer-k, longest-string, all-distinct, all-positive (2026-05-29)
Four new easy problems: `count-words-longer-than-k` (easy/arrays+strings, filter length>k), `longest-string-in-array` (easy/arrays+strings, reduce by length first wins), `all-elements-distinct` (easy/arrays+hash-map, Set.size===length), `all-elements-positive` (easy/arrays, every v>0). Bank at **2742**; 8520 tests.

### feat(bank): batch 202b — append-k-min-sum, good-partitions, max-height-towers, more-ones-subarrays, longest-new-string (2026-05-29)
Five new problems: `append-k-integers-with-minimal-sum` (medium/math, greedy gap-filling + BigInt sum formula), `count-the-number-of-good-partitions` (hard/hash-map, last-occurrence sweep counting partition boundaries, ans=2^(count-1) mod), `maximum-sum-of-heights-of-the-towers` (hard/arrays+stack, monotone stack left/right prefix arrays for peak optimization), `count-subarrays-with-more-ones-than-zeros` (medium/binary-indexed-tree, BIT counting prefixes less than current), `construct-the-longest-new-string` (medium/math, formula 2*(2*min(x,y)+z)+(x≠y?2:0)). Bank at **2739**; 8508 tests.

### feat(bank): batch 206 — max-first-last, sum-first-last, remove-duplicates, concatenate-arrays (2026-05-29)
Four new easy problems: `max-of-first-and-last` (easy/arrays, Math.max(first,last)), `sum-of-first-and-last` (easy/arrays+math, first+last), `remove-duplicates-from-array` (easy/arrays+hash-map, Set preserving order), `concatenate-two-arrays` (easy/arrays, spread/concat). Bank at **2733**; 8493 tests.

### feat(bank): batch 205 — array-average, find-elements-exactly-twice, count-equal-k, total-string-len (2026-05-29)
Four new easy problems: `array-average` (easy/arrays+math, sum/length), `find-elements-appearing-exactly-twice` (easy/arrays+hash-map, freq map filter count==2 sorted), `count-elements-equal-to-k` (easy/arrays, filter ===k count), `total-string-length` (easy/arrays+strings, sum word lengths). Bank at **2729**; 8481 tests.

### feat(bank): batch 204 — flatten-2d-array, count-elements-gt-k, sort-words-by-length, sum-positive (2026-05-29)
Four new easy problems: `flatten-2d-array` (easy/arrays, matrix.flat() row-major), `count-elements-greater-than-k` (easy/arrays, filter v>k), `sort-words-by-length` (easy/arrays+strings, sort by word.length ascending), `sum-of-positive-elements` (easy/arrays+math, sum v>0). Bank at **2725**; 8469 tests.

### feat(bank): batch 201b — winning-player-coin, snake-matrix, distribute-elements-i, max-len-substr-2occ, partition-diff-k (2026-05-29)
Five new problems: `find-the-winning-player-in-coin-game` (easy/math, floor(y/3)<x → Alice wins), `snake-in-matrix` (easy/simulation, track r/c from direction commands, return r*n+c), `distribute-elements-into-two-arrays-i` (easy/simulation, greedy split on last-element comparison), `maximum-length-substring-with-two-occurrences` (easy/sliding-window, shrink when any char freq>2), `partition-array-such-that-maximum-difference-is-k` (medium/arrays, sort+greedy group by max-min≤k). Also installed remark-math + rehype-katex + katex for math rendering. Bank at **2722**; 8457 tests.

### feat(bank): batch 203 — sum-of-last-k, count-strings-length-k, max-of-min-values, product-of-last-two (2026-05-29)
Four new easy problems: `sum-of-last-k-elements` (easy/arrays+math, slice last k and sum), `count-strings-of-length-k` (easy/arrays+strings, filter by word.length===k), `maximum-of-minimum-values` (easy/arrays+math, max of per-row minimums in 2D matrix), `product-of-last-two` (easy/arrays+math, nums[n-2]*nums[n-1]). Bank at **2716**; 8442 tests.

### feat(bank): batch 202 — triple-sum, count-even-length-strings, largest-element-in-each-row, count-rows-with-all-zeros (2026-05-29)
Four new easy problems: `triple-sum` (easy/arrays+math, sum of first 3 elements), `count-even-length-strings` (easy/arrays+strings, count words with even length), `largest-element-in-each-row` (easy/arrays+math, max per row into result array), `count-rows-with-all-zeros` (easy/arrays+math, count rows where every element is 0). Bank at **2707**; 8415 tests.

### feat(ux): KaTeX math rendering + marketing site 21-category fix (2026-05-29)
Added `remark-math` + `rehype-katex` so inline `$...$` and display `$$...$$` LaTeX in problem descriptions and hints renders properly. KaTeX CSS imported with design-token overrides so math text adapts to dark/light theme. Also fixed marketing site: topic-category count updated from 18 → 21 (trie, design, bit-manipulation were added but the site stat wasn't updated), tag list completed, feature-section description now lists all 21 tags.

### feat(bank): batch 201 — count-pairs-abs-diff-k, max-diff-adjacent, sum-odd-indexed, alternating-sum (2026-05-29)
Four new easy problems: `count-pairs-with-absolute-difference-k` (easy/arrays+hash-map, O(n²) brute-force pairs), `maximum-difference-between-adjacent-elements` (easy/arrays, linear scan abs diff), `sum-of-odd-indexed-elements` (easy/arrays, reduce at odd indices), `alternating-sum` (easy/arrays+math, reduce with sign flip). Bank at **2693**; 8373 tests.

### feat(bank): batch 200 — sum-row-mins, longest-equal-run, sum-col-maxes, count-vowel-start-words (2026-05-29)
Four new easy problems: `sum-of-row-minimums` (easy/arrays, sum min of each row), `longest-run-of-equal-elements` (easy/arrays, linear scan cur/max run), `sum-of-column-maximums` (easy/arrays, sum max of each column), `count-words-starting-with-vowel` (easy/strings+arrays, vowel Set check on first char). Bank at **2689**; 8361 tests.

### feat(bank): batch 199 — merge-sorted-arrays (2026-05-29)
One genuinely new problem added (3 others — longest-turbulent-subarray, transpose-matrix, count-good-triplets — already existed). `merge-sorted-arrays` (easy/arrays+two-pointers, classic two-pointer merge). Bank at **2685**; 8349 tests.

### feat(bank): batch 198 — count-substrings-no-repeat, max-product-two-elements, find-all-anagrams, rotate-array-left (2026-05-29)
Four new problems: `count-substrings-without-repeating` (medium/strings+sliding-window+hash-map, two-pointer shrink + right-left+1 count), `maximum-product-of-two-elements` (easy/arrays+math, find top-2 values, return (max1-1)*(max2-1)), `find-all-anagrams` (medium/strings+sliding-window+hash-map, diff-count approach: count=p−window, track non-zeros), `rotate-array-left` (easy/arrays+math, k%n slice-and-concat). Bank at **2685**; 8346 tests.

### feat(bank): batch 200b — min-start-value, max-circular-diff, binary-subs-1-to-n, array-sign, strstr (2026-05-29)
Five new problems: `minimum-value-to-get-positive-step-by-step-sum` (easy), `maximum-difference-between-adjacent-elements-in-a-circular-array` (easy), `binary-string-with-substrings-representing-1-to-n` (medium), `sign-of-the-product-of-an-array` (easy), `find-the-index-of-the-first-occurrence-in-a-string` (easy). Bank at **2704**; 8406 tests.

### feat(bank): batch 199b — find-indices-diff-i, count-smaller-greater, first-palindrome, remove-trailing-zeros, valid-words (2026-05-29)
Five new problems: `find-indices-with-index-and-value-difference-i` (easy/arrays, O(n²) brute force), `count-elements-with-strictly-smaller-and-greater-elements` (easy/arrays, count != min and != max), `find-first-palindromic-string-in-the-array` (easy/strings, first palindrome), `remove-trailing-zeros-from-a-string` (easy/strings, rstrip), `number-of-valid-words-in-a-sentence` (medium/strings, validate hyphen/punct rules). Bank at **2699**; 8391 tests.

### feat(bank): batch 198b — fascinating-number, count-dividing-digits, typewriter-time, largest-and-combo, money-bank (2026-05-29)
Five new problems: `check-if-the-number-is-fascinating` (easy/math+simulation, concat n+2n+3n must use digits 1-9 each once), `count-the-digits-that-divide-a-number` (easy/math, count non-zero digits d where num%d==0), `minimum-time-to-type-word-using-special-typewriter` (easy/simulation, circular keyboard min-rotation+press per char), `largest-combination-with-bitwise-and-greater-than-zero` (medium/arrays+bit-manipulation, per-bit count of set elements, return max), `calculate-money-in-leetcode-bank` (easy/math+simulation, week w day d deposit = w+d+1, sum over n days). Bank at **2694**; 8379 tests.

### feat(bank): batch 195b — k-distant-indices, remove-colored-pieces, count-negatives-matrix, odd-cells-matrix, min-ops-maximize-last (2026-05-29)
Five new problems from concurrent batch: `find-all-k-distant-indices-in-an-array` (easy/arrays+two-pointers), `remove-colored-pieces-if-both-neighbors-are-the-same-color` (medium/strings+math), `count-negative-numbers-in-a-sorted-matrix` (easy/arrays+binary-search), `cells-with-odd-values-in-a-matrix` (easy/arrays+math+simulation), `minimum-operations-to-maximize-last-elements-in-arrays` (medium/arrays). Bank at **2685** total.

### feat(bank): batch 197 — sum-even-indexed, count-unique-char-strings, max-prefix-sum, count-divisible, second-smallest (2026-05-29)
Five new easy problems: `sum-of-even-indexed-elements` (easy/arrays, sum indices 0,2,4,... with reduce), `count-strings-with-unique-characters` (easy/strings+hash-map, Set size === length check), `maximum-prefix-sum` (easy/arrays+prefix-sum, running max clamped to 0), `count-elements-divisible-by-k` (easy/arrays+math, filter by n%k===0), `second-smallest-in-array` (easy/arrays, deduplicate+sort+index[1]). Bank at **2685** total.

### feat(bank): batch 196 — count-pairs-even-sum, find-x-sum-subarrays-i, min-ops-median-k (2026-05-29)
Three new problems: `count-pairs-with-even-sum` (easy/arrays+math, count evens e and odds o, return e*(e-1)/2 + o*(o-1)/2), `find-x-sum-of-all-k-long-subarrays-i` (easy/arrays+sliding-window, O(k) freq map per window, sort by freq desc then value desc, sum top-x), `minimum-operations-to-make-median-equal-k` (medium/arrays, sort, mid=(n-1)>>1, sum excess-above-k for left half + |median-k| + excess-below-k for right half). Fixed `design-a-number-container-system` functionName to `numberContainers` and `find-the-key-of-the-numbers` functionName to `generateKey` to match existing Python solutions. Bank at **2670**; 8298 tests.

### feat(bank): batch 195b — k-distant-indices, remove-colored-pieces, count-negatives-matrix, odd-cells-matrix, min-ops-maximize-last (2026-05-29)
Five new problems: `find-all-k-distant-indices-in-an-array` (easy/arrays+two-pointers, collect key positions, check |i-j|<=k), `remove-colored-pieces-if-both-neighbors-are-the-same-color` (medium/strings+math, count interior same-color sandwiched pieces; alice wins iff alice_count>bob_count), `count-negative-numbers-in-a-sorted-matrix` (easy/arrays+binary-search, O(m*n) or staircase O(m+n)), `cells-with-odd-values-in-a-matrix` (easy/arrays+math, rowCount[i]+colCount[j] odd), `minimum-operations-to-maximize-last-elements-in-arrays` (medium/arrays, try 2 cases: no-swap/swap at last index, greedily determine per-element swaps). Bank at **2672**; 8310 tests.

### feat(bank): batch 195 — largest-unique, min-window-vowels, max-sum-increasing-subseq, sum-kth (2026-05-29)
Four new problems: `largest-unique-number` (easy/arrays+hash-map, freq map, max with count 1), `minimum-window-containing-all-vowels` (medium/strings+sliding-window+hash-map, two-pointer shrink when all 5 vowels present), `maximum-sum-increasing-subsequence` (medium/arrays+dp, O(n²) DP tracking sum instead of length, similar to LIS), `sum-of-every-kth-number` (easy/math+simulation, O(1) arithmetic formula k*m*(m+1)/2 where m=floor(n/k)). Bank at **2667**; 8295 tests.

### feat(bank): batch 194 — high-access-employees, min-coins-fruits, almost-increasing, max-sum-window (2026-05-29)
Four new problems: `high-access-employees` (medium/arrays+hash-map+simulation, convert HHMM→minutes, sort per employee, check consecutive triples <60 apart), `minimum-coins-for-fruits` (medium/arrays+dp, dp[i]=prices[i-1]+min(dp[j] for j in [i+1,min(2i+1,n+1)]), 3 wrong hidden tests corrected), `almost-strictly-increasing` (medium/arrays+two-pointers, first violation at i: try removing nums[i] or nums[i+1], check rest strictly increasing), `max-sum-fixed-window` (easy/arrays+sliding-window, sliding window O(n)). Bank at **2659**; 8268 tests.

### feat(bank): batch 193b — divide-subarrays-cost-i, min-processing-time, count-pairs-distance-k, lex-min-remove-stars, count-winning-sequences (2026-05-29)
Five new problems: `divide-an-array-into-subarrays-with-minimum-cost-i` (easy/arrays, cost=nums[0]+two smallest of nums[1..]), `minimum-processing-time` (medium/arrays+heap, sort proc asc + tasks desc, proc[i] completes at processorTime[i]+tasks[4i], return max), `count-pairs-of-points-with-distance-k` (medium/arrays+hash-map+bit-manipulation, XOR distance=(x1^x2)+(y1^y2)=k, enumerate all k+1 xorX splits and hash-map lookup), `lexicographically-minimum-string-after-removing-stars` (medium/strings+stack, 26-bucket + per-'*' pop rightmost from smallest non-empty bucket), `count-the-number-of-winning-sequences` (medium/strings+dynamic-programming, DP[last][score+n] with 3 spells, score>0 wins, MOD=10^9+7). Bank at **2664**; 8283 tests.

### feat(bank): batch 193 — bitonic-subarray, deletions-sorted, common-substring, matrix-boundary (2026-05-29)
Four new problems: `longest-bitonic-subarray` (medium/arrays+two-pointers, inc/dec run-length precompute, answer=max(inc[i]+dec[i]-1)), `minimum-deletions-to-make-sorted` (medium/arrays+dp, n−LIS via O(n log n) patience sorting), `longest-common-substring` (medium/strings+dp, 2-D DP reset on mismatch, track rolling max), `matrix-boundary-sum` (easy/arrays+simulation, sum all boundary elements). Bank at **2655**; 8256 tests.

### feat(bank): batch 192a — adjacent-subarrays, rearrange-k-substrings, lex-largest-box, min-time-locks (2026-05-29)
Four new problems: `adjacent-increasing-subarrays-detection-i` (easy/arrays, inc[i] run-length precompute, check inc[i]>=k && inc[i+k]>=k), `rearrange-k-substrings-to-form-target` (easy/strings+hash-map, split both into k equal chunks, sort multisets, compare), `find-the-lexicographically-largest-string-from-the-box-i` (easy/strings, maxLen=n-numFriends+1, find lex-largest substring of that length), `minimum-time-to-break-locks-i` (medium/arrays+dynamic-programming, total=n+max((i+1)*sorted_desc[i]), greedy descending). Bank at **2646**; 8229 tests.

### feat(bank): batch 192b — ball-k-seconds, bitwise-or-subsets, decode-xored-permutation, count-largest-group, second-greater-element (2026-05-29)
Five new problems: `find-the-child-who-has-the-ball-after-k-seconds` (easy/simulation, period=2*(n-1), pos=k%period, answer=pos if pos≤n-1 else period-pos), `count-number-of-maximum-bitwise-or-subsets` (medium/bit-manipulation, maxOR=OR of all, enumerate all 2^n-1 subsets with bitmask), `decode-xored-permutation` (medium/bit-manipulation, total=XOR(1..n), perm[0]=total^XOR(encoded[odd_indices]), then perm[i]=perm[i-1]^encoded[i-1]), `count-largest-group` (easy/hash-map, group 1..n by digit sum, count groups at max frequency), `second-greater-element` (medium/stack, two-monotone-stack: main for first-greater, second for second-greater — pop second when current>val, move from main to second, push i to main). Bank at **2651**; 8244 tests.

### feat(bank): batch 191 — sort-even-odd-indices, candy-favorite-day, count-hills-valleys (2026-05-29)
Three new problems: `sort-even-and-odd-indices-independently` (easy/arrays, sort even-indexed asc + odd-indexed desc, interleave), `can-you-eat-your-favorite-candy-on-your-favorite-day` (medium/arrays+math, prefix sums + two conditions: cond1=day+1<=prefix[type+1], cond2=(day+1)*cap>prefix[type]), `count-hills-and-valleys-in-an-array` (easy/simulation, deduplicate consecutive, then check interior peaks/valleys). Bank at **2642**; 8217 tests.

### feat(bank): batch 190 — fair-candy-swap, large-group-positions, equivalent-domino-pairs, weak-characters (2026-05-29)
Four new problems: `fair-candy-swap` (easy/arrays+hash-map+math, b = a + (sumB-sumA)/2, hash set lookup), `large-group-positions` (easy/simulation, scan for groups of ≥3 consecutive same chars), `number-of-equivalent-domino-pairs` (easy/arrays+hash-map, normalize key = min*10+max, accumulate pair count), `the-number-of-weak-characters-in-the-game` (medium/arrays, sort by attack desc + defense asc, track max defense). Bank at **2639**.

### feat(bank): batch 189 — hidden-sequences, substring-reverse, div-k-pairs, distinct-diff, k-strongest (2026-05-29)
Five new problems: `count-hidden-sequences` (medium/arrays, prefix-sum range counting — track min/max prefix, count = max(0, (upper-maxP)-(lower-minP)+1)), `existence-of-a-substring-in-a-string-and-its-reverse` (easy/strings+hash-map, build set of 2-char substrings of reversed s, scan for match in s), `count-pairs-with-sum-divisible-by-k` (medium/arrays+hash-map, O(n) remainder frequency — for r=n%k add freq[(k-r)%k]), `find-the-distinct-difference-array` (easy/arrays+hash-map, prefix+suffix distinct count arrays in O(n)), `the-k-strongest-values-in-an-array` (medium/arrays, sort by |x-m| desc then x desc where m=sorted[⌊(n-1)/2⌋]). Bank at **2635**; 8196 tests.

### feat(bank): batch 188 — teemo-attacking, distance-bus-stops, alternating-bits, monotonic-digits (2026-05-29)
Four new problems: `teemo-attacking` (easy/simulation, min(gap,duration) per interval + last duration), `distance-between-bus-stops` (easy/arrays, clockwise sum vs total-cw, take min), `binary-number-with-alternating-bits` (easy/bit-manipulation, n^(n>>1) all-1s check via m&(m+1)==0), `monotonic-increasing-digits` (medium/math, right-to-left: decrement when violated, fill suffix with 9s). Bank at **2630**; 8181 tests.

### feat(bank): batch 187 — count-vowels-range, equal-divisible-pairs, lonely-numbers, parentheses-valid (2026-05-29)
Four new problems: `count-vowel-strings-in-a-range` (easy/strings+arrays, iterate [left,right] checking first+last char are vowels), `count-equal-and-divisible-pairs-in-an-array` (easy/arrays, O(n²) brute force — pair (i,j): nums[i]==nums[j] AND (i*j)%k==0), `find-all-lonely-numbers-in-the-array` (medium/arrays+hash-map, freq map — x lonely if freq[x]==1 AND no x±1 in map), `check-if-a-parentheses-string-can-be-valid` (medium/strings+stack, range [lo,hi] of open-bracket counts — clamp lo≥0, return false if hi<0, done when lo==0). Bank at **2626**; 8169 tests.

### feat(bank): batch 186 — vowel-consonant substrings + apply-discount + max-diff-grid + food-buckets + thousand-separator (2026-05-29)
Five new problems: `count-substrings-with-every-vowel-and-k-consonants-i` (medium/strings+sliding-window, O(n²) brute force with vowelFreq map + consonant count), `apply-discount-to-prices` (medium/strings, regex validate then 2dp price formatting), `maximum-difference-score-in-a-grid` (medium/arrays+dp, telescoping score = last-first, min-prefix DP), `minimum-number-of-food-buckets-to-feed-the-hamsters` (medium/simulation, greedy: check left-fed first, then place right, else left, else -1), `thousand-separator` (easy/strings, insert dots every 3 digits). Bank at **2622**; 8157 tests.

### feat(bank): batch 185 — array-empty ops (medium), array-continuous ops (medium), min-distance-target (easy), max-diagonal-rect (easy) (2026-05-29)
Four new problems: `minimum-operations-to-make-array-empty` (medium/arrays+hash-map, count frequencies — if any freq==1 return -1, else sum ceil(f/3) over all groups), `minimum-operations-to-make-array-continuous` (medium/arrays+binary-search, sort+dedup then sliding window of value-range n: max elements kept = max window unique count, answer = n - max), `minimum-distance-to-the-target-element` (easy/arrays, linear scan for minimum |i-start| where nums[i]==target), `maximum-area-of-longest-diagonal-rectangle` (easy/arrays, track max diag² = l²+w² with tie-break on area). Bank at **2617**; 8142 tests.

### feat(bank): batch 184 — boundary-max subarrays (hard), XOR triplets (medium), max jumps DP (medium) (2026-05-29)
Three new problems: `find-the-number-of-subarrays-where-boundary-elements-are-maximum` (hard/arrays+stack, monotone decreasing stack of (value,count) pairs — when top.val==x add count+1, increment count; else push(x,1), add 1), `count-triplets-that-can-form-two-arrays-of-equal-xor` (medium/arrays+bit-manipulation, prefix XOR — for each pair (i,k) with prefix[i]==prefix[k+1] add k-i valid j positions), `maximum-number-of-jumps-to-reach-the-last-index` (medium/dp, dp[i]=max jumps from 0, try all forward j with |nums[j]-nums[i]|≤target, return dp[n-1] or -1). Bank at **2613**; 8130 tests.

### feat(bank): batch 183 — binary-search (medium), monotone-stack (hard), mountain-DP (medium), DSU+AND (medium) (2026-05-29)
Four new problems: `maximize-score-of-numbers-in-ranges` (medium/binary-search, binary search on min gap then greedy placement in O(n log max)), `find-building-where-alice-and-bob-can-meet` (hard/arrays+stack, WLOG a≤b, direct answer for trivial cases, offline + monotone stack + binary search for the rest), `minimum-number-of-seconds-to-make-mountain-array` (medium/dp, precompute left[] and right[] strictly-increasing arrays in O(n), scan all valid peaks in O(1) each), `minimum-cost-walk-in-a-weighted-graph` (medium/graph+union-find, DSU tracking bitwise AND of all edges per component — more edges = lower AND, so use all edges in component). Bank at **2610**; 8121 tests.

### feat(bank): batch 182 — Z-function (hard), k-modular DP (medium), paired-char trie (hard), sliding-window mod count (medium) (2026-05-29)
Four new problems: `minimum-time-to-revert-word-to-initial-state-ii` (hard/strings, Z-algorithm O(n) to check if word[t*k:] is prefix of word), `find-the-maximum-length-of-valid-subsequence-ii` (medium/dp, k×k DP table dp[r][j]=max subseq len with pair-sum-rem r and last elem ≡ j mod k), `count-prefix-and-suffix-pairs-ii` (hard/strings+trie, trie on paired chars (w[i],w[L-1-i]) for O(total_length) pairwise isPrefixAndSuffix), `count-substrings-that-can-be-rearranged-to-contain-a-string-i` (medium/strings+sliding-window+hash-map, shrink-only-when-safe window with modular count). Bank at **2606**; 8109 tests.

### fix: add missing reference solutions after multi-session rebase (2026-05-29)
Reconciled concurrent sessions — restored JS+Python solutions missing after rebase for: batch 181 (5 problems), batch 180 extensions (2), batch 179 tree/heap (5), batch 179 local (3), batch 179b (4). 8097 tests passing.

### feat(bank): batch 179b — collect-garbage (medium), largest-local (easy), beautiful-subsets (medium), anagram-steps-ii (medium) (2026-05-29)
Four new problems: `collect-garbage-by-collecting-trucks` (medium/simulation, per-truck travel accumulation to last house with that type), `largest-local-values-in-a-matrix` (easy/arrays, 3×3 window max for each (n-2)×(n-2) cell), `the-number-of-beautiful-subsets` (medium/backtracking, DFS+freq-map to avoid |x-y|=k pairs, count each inclusion), `minimum-number-of-steps-to-make-two-strings-anagram-ii` (medium/hash-map, sum of |freq_s[c]-freq_t[c]| for each char). Bank at **2598**; 8097 tests.

### feat(bank): batch 181 — grid-sections (medium), distinct-elements (easy), zigzag-skip (easy), variable-subarrays (easy), robot-money (medium) (2026-05-29)
Five new problems: `check-if-the-grid-can-be-cut-into-sections` (medium/arrays, LC#3394 — sort x/y interval projections and count non-overlapping groups, ≥3 on either axis means valid 2-cut), `minimum-ops-make-elements-distinct` (easy/arrays+hash-map, LC#3396 — scan right-to-left; first duplicate at index i requires ceil((i+1)/3) remove-3 operations), `zigzag-grid-traversal-with-skip` (easy/arrays+simulation, LC#3417 — global counter over zigzag row-order, collect cells at even counter positions), `sum-of-variable-length-subarrays` (easy/arrays, LC#3427 — prefix sum for O(1) range queries, each i contributes sum of nums[max(0,i-nums[i])..i]), `maximum-amount-of-money-robot-can-earn` (medium/dp, LC#3418 — 3D DP dp[i][j][k]=max coins at (i,j) having neutralized k of up to 2 robber cells). Bank at **2594**; 8085 tests.

### feat(bank): batch 179 (local) — binary-tree-level-order-traversal (medium), find-k-pairs-with-smallest-sums (medium), sequence-reconstruction (medium), inorder-successor-in-bst (medium), closest-binary-search-tree-value-ii (hard) (2026-05-29)
Five new problems: `binary-tree-level-order-traversal` (medium/tree, BFS with level-size tracking), `find-k-pairs-with-smallest-sums` (medium/heap, min-heap with (sum,i,j) entries seeded from all nums1[i]+nums2[0]), `sequence-reconstruction` (medium/graph, topological sort uniqueness — queue must never have >1 node), `inorder-successor-in-bst` (medium/tree+binary-search, walk BST saving last left-turn node), `closest-binary-search-tree-value-ii` (hard/tree+heap, in-order traversal + two-pointer on sorted values). Also fixed JS/Python reference solutions for maximize-number-of-nice-divisors (BigInt integer division), maximum-points-tourist-can-earn (day-0 initialization), and added 13 missing Python solutions for batch 178/179 problems. Bank at **2589**; 8061 tests.

### feat(bank): batch 180 (local) — find-ways-reach-kth-stair (hard), count-beautiful-splits (medium) (2026-05-29)
Two new problems: `find-number-of-ways-to-reach-the-k-th-stair` (hard/dp+bit-manipulation, memoized recursion with state (i, jump, usedDown)), `count-beautiful-splits-in-an-array` (medium/dp, O(n²) LCP table — check if left is prefix of mid or mid is prefix of right for each strict 0<i<j<n split). Bank at **2584**; 8046 tests.

### feat(bank): batch 180 — binary-search (easy), wiggle-sequence (medium), valid-word-square (easy) (2026-05-29)
Three new problems: `binary-search` (easy/binary-search, canonical LC#704 template — lo/hi pointers with `>>1` midpoint), `wiggle-subsequence` (medium/arrays+dp, greedy up/down counters — if nums[i]>nums[i-1] then up=down+1, if <  then down=up+1, O(n)), `valid-word-square` (easy/arrays, check words[i][j]===words[j][i] for all valid pairs — fixed incorrect ball/area/lead/lady example which IS a valid word square). Bank at **2582**; 8040 tests.

### fix(bank): restore solutions truncated by 6c5536c rebase conflict (2026-05-29)
Commit 6c5536c accidentally deleted ~1846 JS and ~1886 Python solution lines while adding batch 172 hard problems, causing 187 test failures. Restored by merging the 54e9e02 (pre-truncation) solution base with batch 172 entries. 8031 tests green.

### fix(bank): correct problem descriptions, constraints, and examples for 5 existing problems (2026-05-29)
Improved accuracy of minimum-ops-increasing, max-element-decreasing-rearranging, eliminate-monsters, largest-odd-string, and removing-magic-beans; removed duplicate index.ts registration.

### feat(bank): batch 178 (local) — range-sum-2d-immutable (medium), min-job-difficulty (hard), sum-root-to-leaf-binary (easy), linked-list-in-binary-tree (medium) + batch 172 solutions (2026-05-29)
Four new batch 178 problems: `range-sum-query-2d-immutable` (medium/design, 2D prefix sum for O(1) range sum queries), `minimum-difficulty-of-a-job-schedule` (hard/dp, DP scheduling jobs across d days — dp[day][j] = min cost for first j jobs in day days), `sum-of-root-to-leaf-binary-numbers` (easy/tree, DFS accumulating binary path values), `linked-list-in-binary-tree` (medium/linked-list+tree, DFS subpath matching at each tree node). Also added batch 172 solutions (count-k-reducible, min-area-cover-ones-ii, min-operations-to-make-subsequence, replace-non-coprime, max-books-you-can-take) to fix broken solution files. Bank at **2579**; 8031 tests.

### feat(bank): batch 178 — nice-divisors (hard), expressive-words (medium), global-local-inversions (medium), smallest-range-ii (medium), word-valid-after-subs (medium) (2026-05-29)
Five new problems: `maximize-number-of-nice-divisors` (hard/math, max product of exponents summing to p → split into 3s, BigInt modular exponentiation), `expressive-words` (medium/strings, run-length encoding stretch check — s-run must equal w-run or s-run≥3 and s-run>w-run), `global-local-inversions` (medium/arrays, global==local iff |A[i]-i|≤1 for all i), `smallest-range-ii` (medium/arrays, sort + try all +k/-k prefix splits for min max-min), `check-if-word-is-valid-after-substitutions` (medium/stack, push chars and pop top 3 when they form 'abc'). Bank at **2570**; 8004 tests.

### feat(bank): batch 179 — prime-pairs-target-sum (medium), min-sum-k-avoiding (medium), max-points-tourist (medium), min-reverse-ops (hard), min-area-cover-ones-ii (hard) (2026-05-29)
Five new problems: `prime-pairs-with-target-sum` (medium/math, sieve + scan x to n/2), `determine-the-minimum-sum-of-a-k-avoiding-array` (medium/math, greedy skip-partner), `maximum-points-tourist-can-earn` (medium/dp, day-by-day DP over cities), `minimum-reverse-operations` (hard/graph, BFS with sorted-set range extraction), `find-the-minimum-area-to-cover-all-ones-ii` (hard/arrays, 6-way partition enumeration). Bank at **2561**; 7989 tests.

### feat(bank): batch 177 (local) — max-sum-two-non-overlapping (medium), phone-directory (medium), almost-equal-pairs-ii (hard), least-unique-integers-k-removals (medium) (2026-05-29)
Four new problems: `maximum-sum-of-two-non-overlapping-subarrays` (medium/arrays+sliding-window, prefix sums + try L-before-M and M-before-L orderings; for each M-window end keep running maxL), `design-phone-directory` (medium/design+hash-map, queue+Set pattern: get() dequeues front while !available, release() adds to set+queue if not already available), `count-almost-equal-pairs-ii` (hard/arrays+math, pad each number to 7 digits, enumerate all ≤2-swap neighbors via C(7,2)=21 one-swaps × 441 two-swaps, check each pair), `least-number-of-unique-integers-after-k-removals` (medium/arrays+hash-map+heap, count frequencies, sort ascending, greedily subtract from k). Bank at **2556**; 7974 tests.

### feat(bank): batch 177 — special-array-i (easy), find-champion-ii (medium), count-palindromic-subsequences (hard) (2026-05-29)
Three new problems: `special-array-i` (easy/arrays, O(n) parity alternation check — return false if any adjacent pair has same parity), `find-champion-ii` (medium/graph, unique in-degree-0 node in a DAG tournament — count nodes with in-degree 0, return champion if unique else -1), `count-palindromic-subsequences` (hard/strings+dynamic-programming, count distinct 5-char palindromic subsequences via 676 greedy boundary scans — for each (c1,c2) pair find leftmost/rightmost boundaries, count distinct middle chars). Also fix count-number-of-texts hidden tests (added 2222→7, 77777→15, 7777777777→401) and maximum-number-of-alloys visible test examples. Bank at **2548**; 7953 tests.

### feat(bank): batch 178 — count-distinct-prime-factors (medium), number-of-black-blocks (medium), sort-students-kth-score (medium) (2026-05-29)
Three new problems: `count-distinct-prime-factors-of-array` (medium/math, trial division + Set deduplication), `number-of-black-blocks` (medium/hash-map, each black cell contributes to up to 4 blocks — Map counting, total−filled=zero-black blocks), `sort-the-students-by-their-kth-score` (medium/arrays, single `.sort()` descending on column k). Bank at **2540**; 7914 tests.

### feat(bank): batch 175 — min-nonzero-product (medium), remove-one-element (medium), reconstruct-digits (medium), min-skips (hard), max-path-quality (hard) (2026-05-29)
Five new problems: `minimum-non-zero-product-of-the-array-elements` (medium/math+bit-manipulation, formula: (2^p-1)×(2^p-2)^(2^(p-1)-1) mod 10^9+7 using BigInt for p≤60), `remove-one-element-to-make-array-strictly-increasing` (medium/arrays, find first bad pair then try removing either endpoint), `reconstruct-original-digits-from-english` (medium/strings+hash-map, unique letter trick z→0,w→2,u→4,x→6,g→8 then derive rest), `minimum-skips-after-meetings` (hard/arrays+dp, scaled DP dp[i][j]=min total distance×speed after i roads with j skips), `maximum-path-quality-of-a-graph` (hard/graph+backtracking, DFS with backtracking from node 0 tracking visited set). Bank at **2542**; 7920 tests.

### feat(bank): batch 177 — most-popular-creator (medium), longest-subseq-sum (medium), reinitialize-perm (medium), mystic-dungeon-energy (medium) (2026-05-29)
Four new problems: `most-popular-video-creator` (medium/hash-map, accumulate total views per creator + track best video by max views then lex-min id, return creators with max total sorted by name), `length-of-longest-subsequence-that-sums-to-target` (medium/dp, 0-1 knapsack variant — dp[j]=max subsequence length summing to j, iterate right-to-left), `minimum-number-of-operations-to-reinitialize-a-permutation` (medium/simulation, simulate perm operation until identity; order = LCM of cycle lengths), `taking-maximum-energy-from-the-mystic-dungeon` (medium/arrays, suffix sums stepping by k — answer = max of suf[0..k-1]). Bank at **2540**; 7905 tests.

### feat(bank): batch 171b — 5 new problems (tree/medium, strings+graph+dp/hard, strings+two-pointers/medium, arrays+math/medium, arrays/medium) (2026-05-29)
Five new problems: `delete-leaves-with-given-value` (medium/tree, post-order DFS removing leaves equal to target repeatedly until stable), `minimum-cost-to-convert-string-ii` (hard/strings+graph+dp, Floyd-Warshall on substring ID graph + 1D DP minimising total conversion cost), `find-beautiful-indices-in-the-given-array-i` (medium/strings+two-pointers, collect a-matches and b-matches then two-pointer within distance k), `make-k-subarray-sums-equal` (medium/arrays+math, circular array: group indices by i→(i+k)%n cycles, equalise each group at median), `maximum-sum-of-an-hourglass` (medium/arrays, O(m×n) scan computing 7-cell hourglass sum for each valid top-left corner). Bank at **2519**; 7866 tests.

### feat(bank): batch 172 extra — check-if-n-and-double (easy), image-overlap (medium), largest-1-bordered-square (medium), water-bottles-ii (medium), design-mru-queue (medium) (2026-05-29)
Five new problems: `check-if-n-and-its-double-exist` (easy/arrays+hash-map, hash set scan), `image-overlap` (medium/arrays, O(n^4) translation brute force), `largest-1-bordered-square` (medium/dp, precompute horizontal/vertical consecutive 1s), `water-bottles-ii` (medium/simulation, simulate with growing exchange rate), `design-most-recently-used-queue` (medium/design, functional splice+append). Bank at **2514**; 7851 tests.

### feat(bank): batch 176 — cards-max-score (medium), pushes-type-i (easy), pushes-type-ii (medium), integer-beautiful (medium) (2026-05-29)
Four new problems: `maximum-points-you-can-obtain-from-cards` (medium/sliding-window, minimize complement middle subarray of size n-k), `minimum-pushes-to-type-word-i` (easy/math, n distinct letters: floor(i/8)+1 pushes), `minimum-pushes-to-type-word-ii` (medium/math+hash-map, sort letter frequencies descending, greedily assign), `minimum-addition-to-make-integer-beautiful` (medium/math, round up digit by digit until digit_sum ≤ target). Bank at **2509**; 7821 tests.


### feat(bank): batch 172b — longest-substring-at-most-two-distinct (medium), range-addition-ii (easy), maximum-consecutive-values (medium), find-max-length-valid-subsequence-i (medium) (2026-05-29)
Four new problems: `longest-substring-with-at-most-two-distinct-chars` (medium/sliding-window, freq map + shrink left when >2 distinct chars), `range-addition-ii` (easy/arrays+math, intersection of all op rectangles = min(a_i)×min(b_i)), `maximum-consecutive-values-you-can-make` (medium/arrays+math, sort+greedy: extend reach if coin≤reach+1, return reach+1), `find-the-maximum-length-of-valid-subsequence-i` (medium/arrays+math, valid subseq = same-parity or alternating; answer=max(count_even, count_odd, alternating)). Bank at **2509**; 7821 tests.

### feat(bank): batch 175 — bitwise-or-trailing-zeros (easy), xor-paths (medium), connectable-servers (medium), sort-tree-level (medium) (2026-05-29)
Four new problems with JS + Python reference solutions: `check-if-bitwise-or-has-trailing-zeros` (easy/bit, count even numbers ≥ 2), `count-paths-with-given-xor-value` (medium/dp, dp[i][j][x]=count paths to (i,j) with XOR x; O(m×n×16)), `count-pairs-of-connectable-servers-in-a-weighted-tree` (medium/tree, DFS per branch per node + running-product trick for pair counting), `minimum-number-of-operations-to-sort-binary-tree-by-level` (medium/tree, BFS level-by-level + cycle-sort to count minimum swaps). Bank at **2500**; 7794 tests.

### feat(bank): batch 172 — winner-array-game, impossible-rolls, numerically-balanced, odd-subarray-sum, prefix-score (2026-05-29)
Five new medium problems: `find-the-winner-of-an-array-game` (simulation, linear scan tracking winner+streak), `shortest-impossible-sequence-of-rolls` (greedy rounds counting with set), `next-greater-numerically-balanced-number` (brute force digit frequency check), `number-of-sub-arrays-with-odd-sum` (prefix parity counting with modular arithmetic), `rearrange-array-to-maximize-prefix-score` (sort descending, scan positive prefix sums). Bank at **2496**; 7782 tests.

### feat(bank): batch 174 — books-on-shelf (medium), subarray-pattern-match (medium), adjacent-color (medium), special-substring-ii (medium) (2026-05-29)
Four new problems: `maximum-number-of-books-on-a-shelf` (medium/dp, O(n²) DP — dp[i]=min height for first i books, scan back while width≤shelfWidth), `number-of-subarrays-that-match-a-pattern` (medium/arrays+strings, transform to sign array then KMP O(n+m)), `number-of-adjacent-elements-with-the-same-color` (medium/simulation, O(1) per query — track running adjacent-pair count, update on each coloring), `find-longest-special-substring-that-occurs-thrice-ii` (medium/strings, run-length encoding per char + binary search on length — max l with ≥3 total occurrences). Bank at **2491**; 7767 tests.

### feat(bank): batch 173 — 4 new problems (dp/easy, dp/medium, graph/medium, binary-search/medium) (2026-05-29)
n-th-tribonacci-number (easy/dp+math, rolling 3-variable iteration T0=0,T1=1,T2=1), solving-questions-with-brainpower (medium/dp, right-to-left DP: dp[i]=max(points[i]+dp[i+bp+1], dp[i+1])), detonate-the-maximum-bombs (medium/graph, directed graph edge i→j if dist²≤ri², BFS from each start), h-index-ii (medium/binary-search, binary search on sorted citations: find max h where citations[n-h]≥h). Bank at **2487**; 7755 tests.

### feat(bank): batch 171 (remote) — string-matching (easy), avg-subtree (medium), rope-colorful (medium), prime-factor-sum (medium), add-rungs (medium) (2026-05-29)
Five new problems: `string-matching-in-an-array` (easy/strings), `count-nodes-equal-to-average-of-subtree` (medium/tree, DFS returning sum+count, check floor(sum/count)==val), `minimum-time-to-make-rope-colorful` (medium/arrays, greedy scan: remove all in same-color group except most expensive one), `smallest-value-after-replacing-with-sum-of-prime-factors` (medium/math, iterate prime-factor sum until fixed point), `add-minimum-number-of-rungs` (medium/arrays+math, ceil(gap/dist)-1 rungs per oversized gap). Bank at **2477**; 7725 tests.

### feat(bank): batch 170 (remote) — robot-print-smallest (medium), remove-letter-equalize-freq (easy), minimize-max-diff-pairs (medium), check-point-reachable (hard), build-array-stack-ops (easy) (2026-05-29)
Five new problems: `using-robot-to-print-lexicographically-smallest-string`, `remove-letter-to-equalize-frequency`, `minimize-the-maximum-difference-of-pairs`, `check-if-point-is-reachable`, `build-array-with-stack-operations`. Bank at **2472**; 7710 tests.

### feat(bank): batch 169 extra — find-xor-appearing-twice (easy), max-ops-same-score-i (easy), lexi-smallest-array-swapping (medium), maximize-consecutive-after-mod (medium), count-powerful-ints (hard) (2026-05-29)
Five new problems: `find-xor-of-numbers-appearing-twice` (easy/bit-manipulation, XOR elements appearing exactly twice using frequency map), `maximum-number-of-operations-with-the-same-score-i` (easy/simulation, score=first pair sum, count consecutive matching pairs), `make-lexicographically-smallest-array-by-swapping-elements` (medium/arrays, sort by value; consecutive diff≤limit = same group; assign sorted values to sorted indices), `maximize-consecutive-elements-in-an-array-after-modification` (medium/dp, sort + DP: dp[x]=max(dp[x],dp[x-1]+1), dp[x+1]=max(dp[x+1],dp[x]+1)), `count-the-number-of-powerful-integers` (hard/digit-dp, digit DP on prefix length, countUpTo(n)−countUpTo(start−1)). Bank at **2483**; 7743 tests.

### feat(bank): batch 169 (local) — minimum-swaps-string-balanced (medium), maximum-sum-distinct-subarrays-k (medium), count-complete-components (medium) (2026-05-29)
Three new problems: `minimum-swaps-to-make-string-balanced` (medium/strings+stack+math, scan and count unmatched `]`, answer is ceil(count/2)), `maximum-sum-distinct-subarrays-with-length-k` (medium/arrays+sliding-window+hash-map, freq map to track uniqueness, update max when window has exactly k distinct), `count-number-of-complete-components` (medium/graph+union-find, union-find tracking node/edge counts per component, complete iff edges==nodes*(nodes-1)/2). Bank at **2472**; 7710 tests.

### feat(bank): batch 169c — minimum-time-to-finish-all-jobs (hard) (2026-05-29)
One new problem: `minimum-time-to-finish-all-jobs` (hard/arrays+dp, bitmask DP over job subsets — precompute subSum[mask], then dp across k workers: ndp[mask|sub]=min(ndp[...], max(dp[mask], subSum[sub]))). Also fixes Python function name for `minimum-cost-to-convert-string-i` (was `minimumCost`, must be `minimumCostConvertString`). Bank at **2456**; 7662 tests.

### feat(bank): batch 170 — word-break-ii, number-of-atoms, design-twitter, distribute-coins-in-binary-tree, minimum-genetic-mutation (2026-05-29)
Five new problems targeting underrepresented tags: `word-break-ii` (hard/dynamic-programming+backtracking+strings, memoized DFS returning all valid segmentations sorted), `number-of-atoms` (hard/strings+hash-map+stack, stack-based parser for nested chemical formulas returning sorted element counts), `design-twitter` (medium/design+hash-map+heap, social feed with postTweet/follow/unfollow/getNewsFeed ops-array pattern), `distribute-coins-in-binary-tree` (medium/tree+math, post-order DFS accumulating |excess| per edge; excess = subtreeCoins − subtreeSize), `minimum-genetic-mutation` (medium/graph+shortest-path, BFS on 8-char gene strings mutating one char at a time through a valid bank). Also fixed LaTeX `$$...$$` in two problem descriptions (converted to inline code) and removed TODO comments from starter code template. Bank at **2456**; 7662 tests.


### feat(bank): batch 169b — 5 new problems (strings/medium, strings/hard, strings/easy, arrays/easy×2) (2026-05-29)
Five new problems: `maximum-palindromes-after-operations` (medium/strings+hash-map, pool all chars → count pairs, greedy assign floor(len/2) pairs to shortest words first), `count-beautiful-substrings-ii` (hard/strings+hash-map+math, prefix-diff + find smallest v₀ s.t. v₀²%k=0 → group by (prefix, index%2v₀)), `make-three-strings-equal` (easy/strings, find longest common prefix → min total tail deletions, -1 if prefix empty), `find-the-integer-added-to-array-i` (easy/arrays+math, min(nums2)−min(nums1)), `find-the-integer-added-to-array-ii` (medium/arrays+two-pointers, sort+try 3 x-candidates+two-pointer validate, return min valid non-negative x). JS+Python reference solutions for all 5.

### feat(bank): batch 169a — eaten-apples, min-flips-alternating, finding-pairs, count-valid-words (2026-05-29)
Four new problems with JS + Python reference solutions: `maximum-number-of-eaten-apples` (medium/heap, greedy min-heap by expiry date — eat soonest-expiring batch each day, continue post-n days until heap empty), `minimum-flips-to-make-alternating-binary-string` (easy/strings, sliding window on doubled string — count mismatches vs "010..." pattern, use n-cost complement for "101..." pattern), `finding-pairs-with-a-certain-sum` (medium/design+hash-map, freq-map for O(|nums1|) count queries, O(1) add updates), `count-valid-words-in-a-sentence` (easy/strings, token validation: no digits, at most one hyphen between letters, at most one punctuation at end).

### feat(ux): timer 2-min warning, always-show test dots, draft-saved indicator (2026-05-29)
Three UX improvements: (1) TopBar timer gains a 2-minute warning state (isWarning = ≤120s > 60s) with subtle tint, escalating to existing isLow/isCritical stages; screen-reader announcements extended to 120s. (2) TestDotMatrix no longer hides for ≤3 verdicts — dot row shows for every non-empty result. (3) EditorPanel status bar shows a brief "✓ saved" flash (2s, fade-out) after each successful draft auto-save.

### feat(bank): batch 163 — number-of-same-end-substrings (medium), count-fertile-pyramids (hard), maximum-deletions-on-a-string (hard), collect-coins-in-a-tree (hard), maximum-and-sum-of-array (hard) (2026-05-29)
Five new problems: `number-of-same-end-substrings` (medium/strings+arrays, prefix count → m*(m+1)/2 per char), `count-fertile-pyramids-in-a-land` (hard/arrays+dp, upward+inverted pyramid DP with max(0,dp-1) sum), `maximum-deletions-on-a-string` (hard/strings+dp, LCP table + DP; dp[i]=max 1+dp[i+k] when lcp[i][i+k]≥k), `collect-coins-in-a-tree` (hard/arrays+graph, topological leaf-removal: strip zero-coin leaves, then 2 rounds of all leaves, answer = 2×remaining edges), `maximum-and-sum-of-array` (hard/arrays+dp, bitmask DP over 2×numSlots positions, slot = pos//2+1). Bank at **2434**; 7596 tests.

### feat(bank): batch 169 — 4 new problems (graph×2, sliding-window, tree) (2026-05-29)
shortest-path-in-binary-matrix (medium/graph+shortest-path, BFS 8-directional), minimum-cost-to-connect-all-points (medium/graph+union-find, Prim's MST O(n²)), minimum-swaps-to-group-all-1s-together (medium/arrays+sliding-window, min zeros in window of size k), maximum-width-of-binary-tree (medium/tree, BFS with position normalization using BigInt). Bank at **2459**; 7671 tests.

### feat(bank): batch 166 — replace-elements (easy), find-disappeared-numbers (easy), final-value-after-ops (easy), steps-to-non-decreasing (medium), flower-planting-no-adj (medium) (2026-05-29)
Five new problems: `replace-elements-with-greatest-element-on-right-side` (easy/arrays, right-to-left scan with running max), `find-all-numbers-disappeared-in-an-array` (easy/arrays+hash-map, Set lookup for missing 1..n), `final-value-of-variable-after-performing-operations` (easy/simulation, x += +1 if op contains '+' else -1), `steps-to-make-array-non-decreasing` (medium/arrays+stack, monotone decreasing stack tracking max removal round per element), `flower-planting-with-no-adjacent` (medium/graph, greedy 4-coloring: assign smallest color not used by any neighbor). Bank at **2443**; 7623 tests.

### feat(bank): batch 165 — minimum-stack (easy), max-chunks-sorted (medium), most-competitive-subseq (medium), mct-leaf-values (medium), shortest-subarray-sum-k (hard) (2026-05-29)
Five new problems: `minimum-stack` (easy/design+stack, parallel min-stack for O(1) getMin), `maximum-chunks-to-make-sorted` (medium/arrays+stack, greedy max==index split), `find-the-most-competitive-subsequence` (medium/arrays+stack, monotone stack with feasibility guard), `minimum-cost-tree-from-leaf-values` (medium/arrays+stack+dp, greedy merge — pop when top<=val, cost+=mid*min(top,val)), `shortest-subarray-with-sum-at-least-k` (hard/arrays+sliding-window, monotone deque on prefix sums O(n)). Bank at **2429**; 7581 tests.

### feat(bank): batch 165 — 5 new problems (dp×2, tree×3) (2026-05-29)
best-time-to-buy-and-sell-stock-with-transaction-fee (medium/dp, cash/hold state machine with fee deducted on sell), minimum-cost-for-cutting-stick (hard/dp, interval DP on augmented endpoints), pseudo-palindromic-paths-in-a-binary-tree (medium/tree+bit-manipulation, DFS bitmask — count leaves where mask&(mask-1)==0), binary-tree-coloring-game (medium/tree+math, player 2 wins iff max(leftSize, rightSize, rest) > n/2), step-by-step-directions-from-a-binary-tree-node-to-another (medium/tree, LCA-via-root-paths: root→start + root→dest, strip common prefix, convert start portion to 'U's).

### feat(bank): register batch 168 — 9 orphan problems + solutions (2026-05-29)
Registered 9 previously-unregistered problem files with full JS+Python reference solutions: `count-of-integers` (hard/dp+strings, digit DP with tight/started/sum states mod 10^9+7), `minimum-cost-homecoming-of-a-robot-in-a-grid` (medium/arrays+math, sum row+col costs traversed excluding start), `number-of-ways-to-earn-points` (hard/dp, bounded knapsack right-to-left), `sum-of-scores-of-built-strings` (hard/strings, Z-function sum), `count-substrings-with-k-frequency-characters-ii` (medium/sliding-window, total minus no-k-window count), `sum-of-imbalance-numbers-of-all-subarrays` (medium/arrays, O(n²) with sorted insertion), `minimum-white-tiles-after-covering-with-carpets` (hard/dp), `special-permutations` (medium/dp+bits), `unique-length-3-palindromic-subsequences` (medium/strings). Bank at **2424**; 7566 tests.

### chore: update site stats to 2,385+; update PROGRESS header to 2366/7392 (2026-05-29)
Marketing site index.html updated to 2,385+ in all three stat locations. PROGRESS.md header corrected to reflect batch 161 completion (2366 registered, 7392 tests).

### feat(bank): add batch 161 — strictly-palindromic-number, sorting-three-groups, ugly-number-iii, binary-tree-coloring-game (2026-05-29)
Four medium problems: `strictly-palindromic-number` (medium/math, always returns false for n≥4 — proven fact), `sorting-three-groups` (medium/arrays+dp, min replacements = n − LIS with 3-variable DP), `ugly-number-iii` (medium/math+binary-search, binary search + inclusion-exclusion with BigInt for overflow safety), `binary-tree-coloring-game` (medium/tree, second player wins iff any of {leftSubtree, rightSubtree, parentSide} of x > n/2). JS and Python reference solutions included. Bank at **2366**; 7392 tests.
### feat(bank): add batch 160b — design-leaderboard (medium), rle-iterator (medium), find-the-divisibility-array-of-a-string (medium) (2026-05-29)
Three new problems: `design-leaderboard` (medium/design+hash-map, addScore accumulates, top(K) sums top-K scores descending, reset zeroes player), `rle-iterator` (medium/design+simulation, iterate over run-length encoded sequence [freq,val,...] with next(n) consuming n elements returning last or -1), `find-the-divisibility-array-of-a-string` (medium/strings+math, maintain running modulo `(mod*10+digit)%m` returning 1 when zero). JS and Python reference solutions included. Bank at **2415**; 7554 tests.


### feat(bank): add batch 160 — minimum-cost-walk-weighted-graph (hard) + register 3 orphaned problems (2026-05-29)
New: `minimum-cost-to-walk-weighted-graph` (hard/graph+union-find, min cost path = bitwise AND of all edges in component; UF tracks per-component AND as edges are added). Registered orphans already in bank: `maximum-alternating-subsequence-sum` (medium/arrays+dp), `count-number-of-bad-pairs` (medium/arrays+hash-map), `make-array-zero-by-subtracting-equal-amounts` (easy/arrays+math). Bank at **2373**; 7413 tests.

### feat(bank): add batch 159 — unique-length-3-palindromic-subsequences (medium), minimum-white-tiles-after-covering-with-carpets (hard), special-permutations (medium) (2026-05-29)
Three new problems: `unique-length-3-palindromic-subsequences` (medium/strings+hash-map, for each char find leftmost/rightmost occurrence and count distinct chars between them), `minimum-white-tiles-after-covering-with-carpets` (hard/dynamic-programming, 2D DP dp[j][i]=min white tiles visible in floor[0..i-1] using j carpets), `special-permutations` (medium/arrays+dynamic-programming, bitmask DP counting permutations where each adjacent pair has a divisibility relation, mod 10^9+7). JS and Python reference solutions included. Bank at **2372**; 7410 tests.

### feat(bank): add batch 156c — find-edges-in-shortest-paths (hard), avoid-flood-in-the-city (medium), minimum-time-to-accomplish-all-tasks (hard) (2026-05-29)
Three problems targeting graph/shortest-path, hash-map+binary-search, and binary-indexed-tree: `find-edges-in-shortest-paths` (hard/graph+shortest-path, Dijkstra from both node 0 and node n-1; edge on shortest path iff dist0[u]+w+distN[v]==total or symmetrically), `avoid-flood-in-the-city` (medium/hash-map+binary-search, track filled lakes with binary-search on sorted dry days to find earliest valid drain day; return [] if impossible), `minimum-time-to-accomplish-all-tasks` (hard/binary-indexed-tree, sort tasks by end time, greedily assign CPU time right-to-left within each task's window respecting already-running intervals). Bank at **2370**; 7401 tests.

### feat(bank): add batch 158 — minimum-cost-homecoming-robot (medium), sum-of-scores-of-built-strings (hard), count-of-integers (hard), number-of-ways-to-earn-points (hard) (2026-05-29)
Four new problems: `minimum-cost-homecoming-of-a-robot-in-a-grid` (medium/arrays+math, sum rowCosts and colCosts traversed excluding start position), `sum-of-scores-of-built-strings` (hard/strings, Z-function where Z[0]=n then sum all values), `count-of-integers` (hard/dp+strings, digit DP with tight/started/sum states mod 10^9+7), `number-of-ways-to-earn-points` (hard/dp+arrays, bounded knapsack right-to-left). JS and Python reference solutions included. Bank at **2367**; 7392 tests.

### feat(bank): add batch 157r — implement-trie-ii (medium), word-filter (hard), lexicographical-numbers (medium), k-th-smallest-lex (hard), design-autocomplete (hard) (2026-05-29)
Five new trie/design problems: `implement-trie-ii-prefix-tree` (medium/trie+design, endCount/prefixCount per node for insert/countWordsEqualTo/countWordsStartingWith/erase), `word-filter` (hard/trie, prefix+suffix search via hash map enumeration O(n·L²)), `lexicographical-numbers` (medium/trie, O(n) iterative DFS trie traversal), `k-th-smallest-in-lexicographic-order` (hard/trie, trie step-counting O(log²n) algorithm), `design-search-autocomplete-system` (hard/trie+design, hash-map autocomplete with count-based ranking). Trie tag: 5 → 10 problems. Bank at **2362**; 7365 tests.

### feat(bank): add batch 157 — 5 new problems (simulation/easy×1, simulation+heap/medium×4) (2026-05-29)
Five new problems: `the-employee-that-worked-on-the-longest-task` (easy/simulation, track max task duration with tie-breaking on smallest id), `check-knight-tour-configuration` (medium/simulation, verify each consecutive step is a valid knight move via position-array), `the-number-of-the-smallest-unoccupied-chair` (medium/heap+simulation, min-heap for available chairs and sorted departure events), `intervals-between-identical-elements` (medium/arrays+math, prefix-sum per value group for O(n) computation of index-distance sums), `form-array-by-concatenating-subarrays-of-another-array` (medium/arrays+two-pointers, greedy left-to-right matching of each group). Bank at **2358**; 7365 tests.

### feat(bank): add batch 156 (local) — rotating-the-box, max-star-sum-graph, build-matrix-conditions, count-integers-digit-sum, apply-ops-maximize-frequency-score (2026-05-29)
Five problems: `rotating-the-box` (medium/simulation, gravity+90°CW rotation), `maximum-star-sum-of-a-graph` (medium/graph, pick top-k positive neighbor edge values per center), `build-a-matrix-with-conditions` (hard/graph, two topological sorts then place elements), `count-of-integers-with-digit-sum` (hard/dp+math, digit DP mod 10^9+7), `apply-operations-to-maximize-frequency-score` (hard/binary-search+sliding-window, sorted window + frequency×value score with remaining ops d = floor(leftover/size)). Bank at **2358**; 7365 tests.

### feat(bank): add batch 156b — average-of-levels-in-binary-tree (easy), all-elements-in-two-bsts (medium); fix trim-bst runner (2026-05-29)
Two new tree problems: `average-of-levels-in-binary-tree` (easy/tree, BFS level average), `all-elements-in-two-binary-search-trees` (medium/tree+binary-search, in-order traversal of each BST + merge). Upgraded `trim-a-binary-search-tree` to runner pattern (TreeNode preamble); updated Python reference solution to accept TreeNode arg. Fixed path-sum hidden test (1→2→5=8 is true). Bank at **2348**; 7302 tests.

### feat(bank): add batch 156 — camelcase-matching, word-squares, minimize-malware-spread-ii, path-with-max-probability (2026-05-29)
Four new problems targeting underrepresented tags: `camelcase-matching` (medium/strings+two-pointers, two-pointer pattern-as-subsequence with uppercase constraint), `word-squares` (hard/trie+backtracking, prefix-map + DFS for symmetric word grids; sort output for determinism), `minimize-malware-spread-ii` (hard/union-find, build UF without infected nodes; save components with single exclusive infected neighbour), `path-with-max-probability` (medium/graph+shortest-path+heap, Dijkstra max-probability variant with max-heap). Bank at **2346**; 7332 tests.

### feat(bank): add batch 155 — house-robber-iv, substring-xor-queries, min-rectangles-cover-points, shortest-way-form-string, smallest-number-all-set-bits (2026-05-29)
Five problems: `house-robber-iv` (medium/binary-search, binary search on capability with greedy non-adjacent count), `substring-xor-queries` (medium/strings+hash-map, precompute XOR map up to 30-bit substrings; answer = map[first^second]), `minimum-rectangles-to-cover-points` (medium/arrays+math, sort x-coords, greedy: start rectangle at each uncovered x extending x+w), `shortest-way-to-form-string` (medium/strings+two-pointers, check all target chars in source then two-pointer greedy with copy count), `smallest-number-with-all-set-bits` (easy/math, find smallest 2^k-1 ≥ n via bit-shift mask). Bank at **2342**; 7320 tests.

### feat(bank): add batch 155c — maximum-employees-invited-to-meeting, maximize-minimum-powered-city, minimum-time-remove-cars-illegal-goods (2026-05-29)
Three problems: `maximum-employees-invited-to-meeting` (hard/graph, functional graph cycle detection — topological-sort to find chain depths, then max(longest ≥3 cycle, sum of mutual-pair chains)), `maximize-minimum-powered-city` (hard/binary-search+arrays, binary search on minimum power with greedy diff-array station placement), `minimum-time-remove-cars-illegal-goods` (medium/arrays+dynamic-programming, prefix/suffix DP where left[i] = min cost to clear 1s in s[0..i] and answer = min over all split points). Bank at **2337**; 7305 tests.

### feat(bank): add batch 155b — recent-counter (easy), peeking-iterator, flatten-nested-list-iterator (medium), all-o-one (hard) (2026-05-29)
Four design problems: `recent-counter` (easy/design+simulation, queue sliding window over 3000ms), `peeking-iterator` (medium/design, index-based peek without advance), `flatten-nested-list-iterator` (medium/design+stack, recursive pre-flatten into flat array), `all-o-one-data-structure` (hard/design+hash-map, hash map with O(N) max/min scan). Bank at **2334**; 7296 tests.

### feat(bank): add batch 154c — 24-game, range-module, insert-delete-dup, matchsticks-to-square (2026-05-29)
Four new hard problems targeting underrepresented tags: `24-game` (hard/backtracking+math, exhaustive pair-reduction with floating-point EPS=1e-6), `range-module` (hard/simulation+binary-search, sorted interval list with merge/split/query in O(n) worst-case), `insert-delete-getrandom-duplicates-allowed` (hard/hash-map+simulation, multiset O(1) via array+index-set with swap-last trick; key bugfix when last===val), `matchsticks-to-square` (medium/backtracking, partition-4-equal-subsets with sorted-desc pruning and seen-set dedup). Bank at **2330**; 7284 tests.

### feat(bank): add batch 155 — 7 new DP/sliding-window problems (2026-05-29)
Seven new problems: `minimum-score-triangulation-polygon` (medium/dp, interval DP dp[i][j] for convex polygon triangulation — minimize sum of vertex-value products), `non-negative-integers-without-consecutive-ones` (hard/dp, Fibonacci digit-walk: at each 1-bit in n, add Fibonacci count of valid completions), `ways-to-make-a-fair-array` (medium/arrays, track prefix even/odd sums; removing index i flips all subsequent parities), `count-ways-to-build-good-strings` (medium/dp, 1D DP with +zero/'a' or +one/'b' steps mod 10^9+7), `restore-the-array` (hard/dp+strings, O(n·digits(k)) DP counting ways to split string into 1..k segments without leading zeros), `number-of-ways-to-form-a-target-string-given-a-dictionary` (hard/dp, column-frequency pre-computation + 1D backwards DP), `longest-subarray-with-at-most-k-sum` (medium/sliding-window, two-pointer for non-negative arrays). Bank at **2322**; 7272 tests.

### feat(bank): add batch 154 — maximum-earnings-from-taxi, find-longest-special-substring-thrice-i, minimum-cost-make-array-equalindromic, identify-largest-outlier (2026-05-29)
Four new medium problems: `maximum-earnings-from-taxi` (medium/dp, weighted interval scheduling — dp[i]=max earnings at road position i), `find-the-longest-special-substring-that-occurs-thrice-i` (medium/strings, run-length encoding + count occurrences from max length downward), `minimum-cost-to-make-array-equalindromic` (medium/math, find palindromic number near median minimising L1 cost — mirror first half with ±1 delta), `identify-the-largest-outlier-in-an-array` (medium/arrays+hash-map, S=(total−outlier)/2 must be present in remaining array — O(n) frequency map). Bank at **2319**; 7251 tests.

### feat(bank): add batch 154b — map-sum-pairs, magic-dictionary, short-encoding-of-words, stream-of-characters (trie×4) (2026-05-29)
Four new trie-tagged problems: `map-sum-pairs` (medium, prefix sum via hash map), `magic-dictionary` (medium, 1-char fuzzy match excluding exact hits; if searchWord is in dict → return false), `short-encoding-of-words` (medium, suffix deduplication to find shortest reference string), `stream-of-characters` (hard, reversed-trie suffix matching in character stream). Added `trie` and `design` to ProblemTag. Bank at **2315**; 7239 tests.

### feat(bank): add batch 152b — even-product-subarrays, max-sum-div-3, product-matrix (2026-05-29)
Three new arrays+math problems: `number-of-subarrays-having-even-product` (medium/arrays+math, count subarrays with at least one even element by subtracting all-odd-subarray triangular runs), `greatest-sum-divisible-by-three` (medium/arrays+dp, track max achievable sum per mod-3 remainder with dp[0..2]), `construct-product-matrix` (hard/arrays+math, 2D product-except-self via flat prefix/suffix products mod 12345). Bank at **2311**; 7227 tests.

### feat(bank): add batch 154 — min-edge-reversals, range-update-range-sum-bit, critical-mst-edges (2026-05-29)
Three new problems targeting underrepresented tags: `minimum-edge-reversals-to-reach-destination` (medium/shortest-path+graph, 0-1 BFS bidirectional cost), `range-update-range-sum-bit` (medium/binary-indexed-tree, two-BIT range-add+range-query in O(log n)), `find-critical-and-pseudo-critical-edges-in-mst` (hard/union-find+graph, Kruskal's O(E²α) with skip/force passes). Bank at **2313**; 7236 tests.

### feat(bank): add batch 153 — last-visited-integers (easy), count-visited-nodes-in-directed-graph (hard) (2026-05-29)
`last-visited-integers` (easy/arrays+simulation, track k-th most recent positive per consecutive -1 run). `count-visited-nodes-in-a-directed-graph` (hard/graph+dp, functional graph — each node has exactly one outgoing edge — cycle detection via path coloring + backward distance fill). Fixed off-by-one bug in hidden test for cycle of length 2. Bank at **2305**; 7209 tests.

### chore: update site count to 2,301+; sync with actual bank (2026-05-29)
Marketing site updated from 2,286+ → 2,301+ in all three locations. Bank is at 2301 problems after batch 153 + 153b.

### feat(bank): add batch 153b — 6 new problems (linked-list×2, union-find, shortest-path, heap, simulation) (2026-05-29)
New problems targeting underrepresented tags: `partition-linked-list-around-value` (medium/linked-list+two-pointers, partition nodes < x before >= x preserving order), `merge-k-sorted-linked-lists` (hard/linked-list+heap, merge k sorted lists with min-heap O(N log k)), `friend-groups-union-find` (medium/union-find+graph, count connected components via DSU decremental count), `dijkstra-single-source-shortest-path` (medium/shortest-path+graph+heap, Dijkstra SSSP returning -1 for unreachable nodes), `kth-largest-after-each-insertion` (medium/heap+arrays, min-heap of size k; report kth-largest or -1 after each insert), `simulate-traffic-lights` (easy/simulation, cars queue at g-green/r-red cycling light; return clear times). Bank at **2301**; 7203 tests.

### fix(a11y): FormField injects aria-describedby onto control; backdrop role=presentation (2026-05-29)
`FormField` was placing `aria-describedby` on a wrapper `<div>` instead of the actual input element, making the association useless for screen readers. Fixed by using `React.cloneElement` to inject the attribute directly onto the child form control. `PasswordModal` and `VerifyModal` backdrops now have `role="presentation"` so they aren't announced as generic containers alongside the inner `role="dialog"` panel.

### feat(ux): Mod-J terminal toggle, Escape lang-switch dismiss, remove dead VerdictPanel (2026-05-29)
Three UX improvements: (1) Cmd+J / Ctrl+J keyboard shortcut in the CodeMirror keymap toggles the terminal panel, mirroring VS Code's panel toggle — uses a stable ref so the closure doesn't capture a stale version of toggleTerminal; (2) Escape key on the lang-switch confirmation banner dismisses it without needing to click Cancel; (3) Deleted VerdictPanel.tsx (218 lines of dead code — TerminalPanel fully replaced it and has been the active component since Phase 9). The new Ctrl+J shortcut is documented in KeyboardShortcutsModal.

### fix(a11y): proper role/focus-trap/restoration in PasswordModal + VerifyModal (2026-05-29)
Moved `role="dialog"`, `aria-modal="true"`, `aria-labelledby` from the backdrop div to the inner panel div in both modals — screen readers now announce them correctly as dialogs. Added `tabIndex={-1}` + `ref={dialogRef}` to inner panel. Extended the `onKeyDown` useEffect to trap Tab/Shift-Tab within focusable elements inside the dialog. Added `returnFocusRef` + cleanup to restore focus to the triggering element when the modal unmounts.

### feat(bank): add batch 151b — monotonic-pairs-ii, max-strength-group, valid-strings-target-i, reward-ops-ii (2026-05-29)
Four new problems: `find-the-count-of-monotonic-pairs-ii` (hard/dp+arrays, n≤2000 nums≤1000, O(n×max_val) prefix-sum DP), `maximum-strength-of-a-group` (medium/arrays+math, max product of non-empty subset via greedy negative-pairing), `minimum-number-of-valid-strings-to-form-target-i` (medium/strings+dp, prefix-Set + O(n²) DP), `maximum-total-reward-using-operations-ii` (hard/dp+bitset, n≤50000, BigInt bitset DP). Bank at **2290**; 7173 tests.

### chore: update site count to 2,286+; sync test count to 7152 (2026-05-29)
Marketing site updated from 2,274+ → 2,286+ in all three locations. Test count is 7152 (15 more than the PROGRESS entry recorded).

### fix(a11y): aria-label + aria-expanded on ValueDisplay expand button (2026-05-29)
`ValueDisplay` truncation toggle in `TerminalPanel.tsx` now has `aria-label` ("Show X more characters" / "Show less of this value") and `aria-expanded` so screen readers can describe the button action and state correctly. Previously the button text "+X chars" / "less" gave no context.

### feat(bank): add batch 151 — 6 new problems (linked-list×2, union-find×2, shortest-path, BIT) (2026-05-29)
New problems targeting underrepresented tags: `swap-pairs-linked-list` (medium/linked-list, swap every two adjacent nodes iteratively), `reverse-nodes-k-group` (hard/linked-list, reverse in k-groups leaving remainder), `minimum-spanning-tree-weight` (medium/union-find+graph, Kruskal's MST weight via DSU), `union-find-dynamic-connectivity` (medium/union-find+graph, process union/connected queries with path-compressed DSU), `bellman-ford-shortest-paths` (medium/shortest-path+graph, Bellman-Ford supports negative weights), `bit-prefix-sum-updates` (medium/binary-indexed-tree, Fenwick tree point updates and range queries). Bank at **2286**; 7137 tests.

### feat(bank): add batch 152 — 5 new string problems + fix missing solution (2026-05-29)
New problems: `number-of-segments-in-a-string` (easy/strings, count non-space segments), `repeated-dna-sequences` (medium/strings+hash-map+sliding-window, 10-char sliding window dedup), `count-the-number-of-vowel-strings-in-range` (easy/strings, check first/last char in range), `remove-all-occurrences-of-a-substring` (medium/strings, repeated leftmost removal), `find-words-that-can-be-formed-by-characters` (easy/strings+hash-map, freq comparison). Fixed missing solution for `count-ways-to-rearrange-sticks-with-k-visible` added by remote. Bank at **2280**; 7134 tests.

### feat(bank): add count-ways-to-rearrange-sticks-with-k-visible (hard/math+dp) (2026-05-29)
Unsigned Stirling numbers of the first kind via DP. BigInt reference solution to avoid overflow. Bank at **2275**; 7119 tests.

### feat(bank): add batch 151 — 6 orphan registrations + 3 new solutions (2026-05-29)
Registered 6 previously unregistered problem files: `all-divisions-with-the-highest-score-of-a-binary-array` (medium/arrays, linear sweep score), `convert-an-array-into-a-2d-array-with-conditions` (medium/arrays+hash-map, occurrence-based row assignment), `replace-the-substring-for-balanced-string` (medium/strings+sliding-window, shrink window while external counts ≤ n/4), `minimum-cost-to-make-at-least-one-valid-path-in-a-grid` (hard/shortest-path, 0-1 BFS), `queries-on-a-permutation-with-key` (medium/BIT+simulation, move-to-front array), `sum-of-floored-pairs` (hard/BIT+math, O(MAX·log MAX) harmonic series). Added JS+Python solutions for the 3 missing ones. Bank at **2271**; 7107 tests.

### feat(ux): NoProblemScreen settings link; LoadingScreen aria-live; site count 2,274+ (2026-05-29)
NoProblemScreen now shows "Open Settings" link in practice mode so users can adjust filters. LoadingScreen gains `role="status" aria-live="polite"` for screen reader support. Marketing site updated to **2,274+**.

### fix(a11y): focus solved-standalone heading on mount; update site count to 2,265+ (2026-05-29)
When the challenge page transitions to the solved-standalone screen (practice mode accepted), keyboard focus was lost. Fixed by adding `useRef`+`useEffect` in `SolvedStandaloneScreen` to focus the `<h1>` on mount (`tabIndex={-1}`). Also fixed `'matrix'` invalid ProblemTag in `difference-between-ones-zeros-in-row-and-column.ts` (changed to `'math'`). Marketing site updated to **2,265+** problems.

### feat(bank): add batch 150 — 5 new problems (tree/medium, arrays×2/easy, strings/medium+easy) (2026-05-29)
Added `minimum-time-to-collect-all-apples-in-a-tree` (medium/tree+graph+dp, DFS from root; enter child subtree only if it has apples; cost=childTime+2 per needed child), `maximum-units-on-a-truck` (easy/arrays, sort by units/box desc, greedy take), `number-of-ways-to-split-a-string` (medium/strings+math, gap counting between section boundaries; BigInt mod), `mean-of-array-after-removing-some-elements` (easy/arrays, sort+trim 5% each end+average), `minimum-number-of-operations-to-convert-time` (easy/strings+math, convert to minutes, greedy subtract [60,15,5,1]). Bank at **2261**; 7077 tests.

### feat(bank): add batch 150 — convert-2d-conditions, replace-balanced-string, all-divisions-score (2026-05-29)
Three new medium problems: `convert-an-array-into-a-2d-array-with-conditions` (arrays+hash-map, greedy occurrence-row placement — n-th occurrence of value goes to row n-1), `replace-the-substring-for-balanced-string` (strings+two-pointers+sliding-window, shrink window while all outside counts ≤ n/4), `all-divisions-with-the-highest-score-of-a-binary-array` (arrays, score[i] = prefix zeros + suffix ones; linear sweep). Bank at **2256**; tests green.

### feat(bank): add batch 150 — find-lucky-number-in-matrix, maximum-product-of-three-numbers, finding-3-digit-even-numbers, difference-between-ones-zeros-in-row-and-column (2026-05-29)
Four easy problems: `find-lucky-number-in-matrix` (easy/arrays+hash-map, row-min × col-max check), `maximum-product-of-three-numbers` (easy/arrays+math, sort + compare top-3 vs bottom-2×top-1), `finding-3-digit-even-numbers` (easy/arrays+hash-map, enumerate 100–998 even and freq-check), `difference-between-ones-zeros-in-row-and-column` (easy/arrays+matrix, 2×onesRow+2×onesCol−m−n formula). Also fixed duplicate imports in index.ts from interrupted rebase. Bank at **2260**; 7074 tests.

### feat(bank): add batch 146/148/149 — new problems + orphan registrations (2026-05-29)
New: `calculate-amount-paid-in-taxes` (easy/arrays, bracket tax simulation). Registered 6 orphan problems: `beautiful-towers-ii` (medium/arrays+stack, monotone-stack mountain sums), `maximum-balanced-subsequence-sum` (hard/BIT+dp), `minimum-flips-binary-grid-palindromic-ii` (medium/arrays), `minimum-swaps-to-make-balanced` (medium/strings+stack), `tweet-counts-per-frequency` (medium/hash-map), `find-kth-largest-xor-coordinate-value` (medium/arrays). Also added solutions for `max-product-after-cutting-rope`, `minimum-path-sum-triangle`, `find-product-pivot`, `count-subarrays-equal-balance`, `longest-arithmetic-subarray`, `sum-of-all-submatrix-sums`. Bank at **2253**; 7053 tests.

### feat(bank): register batch 149 — 11 orphaned problems from batches 142b/144/146b (2026-05-29)
Registered problem files that had been created but never imported in index.ts: `beautiful-towers-ii` (medium/arrays+stack, O(n) monotone stack mountain sum), `maximum-balanced-subsequence-sum` (hard/arrays+dp, max-sum LIS with key=nums[i]-i), `minimum-number-of-flips-to-make-binary-grid-palindromic-ii` (medium/arrays, groups-of-4 + middle row/col pair handling), `find-kth-largest-xor-coordinate-value` (medium/arrays, 2D prefix XOR + kth order stat), `minimum-swaps-to-make-balanced` (medium/strings, greedy imbalance tracking), `tweet-counts-per-frequency` (medium/hash-map+simulation, class design), plus 5 that were already in origin/main's batch 146b. JS+Python solutions added for the 6 that were missing them. Bank at **2249**; 7050 tests.

### fix(challenge): skip fail-flow in practice/standalone mode (2026-05-29)
Timer expiry and give-up in practice mode (no targetUrl) were calling handleFail which sent fail-challenge to SW, potentially closing the tab and marking streak as damaged. Fixed with early return when targetUrl is absent.

### feat(ux): streak + today count on solved screen; custom-test pre-fill from first example (2026-05-28)
Challenge page solved-standalone screen: streak display (`Nd` badge with "X today" sub-label) now shown when user has a streak. CustomTestPanel now pre-fills arg inputs from `problem.visibleTests[0].args` when opened, so the first example is ready to run immediately. Both changes are additive — no regressions.
### feat(bank): merge batch 148 — max-product-after-cutting-rope, minimum-path-sum-triangle (2026-05-29)
Two new DP/math problems: `max-product-after-cutting-rope` (medium/math, greedy factor-3 decomposition with n=2,3 base cases), `minimum-path-sum-triangle` (medium/dp, bottom-up in-place triangle DP). Resolved concurrent merge conflicts; 7032 tests green. Bank at **2246**.

### fix(bank): repair merge artifacts in solution files (2026-05-29)
Restored missing `longest-arithmetic-subarray` body and `sum-of-all-submatrix-sums` entry in JS solutions. Added `find-product-pivot`, `count-subarrays-equal-balance`, `longest-arithmetic-subarray`, `sum-of-all-submatrix-sums` Python solutions lost during merge concat. Removed stray `return total;` and multiple duplicate entries from concurrent merges.

### feat(bank): add batch 147 — find-product-pivot, count-subarrays-equal-balance, longest-arithmetic-subarray, sum-of-all-submatrix-sums (2026-05-28)
Four medium-difficulty problems: `find-product-pivot` (math/arrays, prefix+suffix product comparison to find leftmost equal-product index), `count-subarrays-equal-balance` (arrays+hash-map, prefix sum + hash map for equal positive/negative count subarrays), `longest-arithmetic-subarray` (arrays, O(n) consecutive diff tracking for contiguous arithmetic subarray), `sum-of-all-submatrix-sums` (arrays+math, O(mn) per-cell contribution formula). Bank at **2236**; 7002 tests.


### feat(bank): add batch 147 — apply-bitwise-ops-strings-equal, min-area-cover-ones-i, max-total-cost-alternating-subarrays (2026-05-28)
Three new problems: `apply-bitwise-operations-to-make-strings-equal` (medium/strings+math, key insight: if both strings have ≥1 one you can reach any configuration, if both all-zeros they're equal; check `s.includes('1') === target.includes('1')`), `find-the-minimum-area-to-cover-all-ones-i` (easy/arrays, find bounding box of all 1s, area=(maxR-minR+1)×(maxC-minC+1)), `maximum-total-cost-of-alternating-subarrays` (medium/dp, dp tracking pos/neg roles per element: pos[i]=max(pos,neg)+nums[i], neg[i]=pos-nums[i]; answer=max(pos,neg)). Bank at **2235**; 6999 tests.


### feat(bank): register batch 146 — 7 orphan problems with existing solutions (2026-05-28)
Registered 7 problems that had problem files and reference solutions but were not imported in index.ts: `reverse-vowels-of-a-string` (easy/strings+two-pointers), `apply-operations-to-make-string-empty` (medium/strings+hash-map), `find-all-possible-recipes-from-given-supplies` (medium/graph+hash-map), `maximum-total-damage-with-spell-casting` (medium/arrays+dp), `minimum-domino-rotations-for-equal-row` (medium/arrays+simulation), `reorder-routes-to-make-all-paths-lead-to-the-city-zero` (medium/graph), `count-the-number-of-beautiful-subarrays` (medium/arrays+math). Bank at **2232**; 6990 tests.

### feat(bank): add batch 148 — k-divisible-subarrays, most-profitable-tree-path, max-groups-competition, find-palindrome-fixed-length, number-of-ways-k-steps (2026-05-28)
Five medium problems: `k-divisible-elements-subarrays` (arrays+hash-map, O(n²) enumeration with string-key Set dedup), `most-profitable-path-in-a-tree` (tree+graph, DFS for Bob's timing + DFS for Alice's max leaf income), `maximum-number-of-groups-entering-next-round` (arrays+math+binary-search, binary search on k with greedy tie-skipping canForm), `find-palindrome-with-fixed-length` (math+strings, first-half mirror construction), `number-of-ways-to-reach-a-position-after-exactly-k-steps` (dp, C(k,r) mod 10^9+7 via rolling Pascal row DP). Bank at **2230**; 6984 tests.

### feat(bank): add batch 145 — max-bitwise-or-subsets, partition-k-subsets, min-ops-array-equal-target, consecutive-numbers-sum (2026-05-28)
Four problems: `count-number-of-max-bitwise-or-subsets` (medium/arrays+backtracking, 2^n bitmask enumeration counting subsets with max OR), `partition-to-k-equal-sum-subsets` (medium/arrays+backtracking+dp, descending sort + k-bucket DFS with duplicate-skip pruning), `minimum-operations-to-make-array-equal-to-target` (hard/arrays, diff[i]=target-nums layer-counting formula — sum positive transitions in extended diff sequence), `consecutive-numbers-sum` (hard/math, k consecutive starting at a formula — loop k while k*(k+1)≤2n, check divisibility). Bank at **2233**; 6930 tests.

### feat(bank): add batch 145b + 144 + 142b + 141 — vowels-even-substr, minimize-diff-target, max-ops-same-score-ii, + 12 more (2026-05-28)
Registered: `count-substrings-that-satisfy-k-constraint-i` (easy/strings+sliding-window). Added batch 141 (reaching-points, orderly-queue, valid-number, min-moves-ii, super-washing, submatrices-sum), batch 144 (min-swaps-balanced, kth-largest-xor-coord, tweet-counts), batch 142b (beautiful-towers-ii, palindromic-grid-ii, max-balanced-subseq), batch 145b (vowels-even-substr, minimize-diff-target, max-ops-same-score-ii) with JS+Python reference solutions.

### feat(bank): add batch 142 — max-height-triangle, divide-array-min-cost-i, k-constraint-substr-i, final-array-mult-i, first-player-win-k, digit-diff-pairs, monotonic-pairs-i (2026-05-28)
Seven problems from 2024-era LeetCode (3150-3270 range): `maximum-height-of-a-triangle` (easy/simulation, try both color orderings row-by-row), `divide-array-into-subarrays-with-minimum-cost-i` (easy/arrays, nums[0]+k-1 smallest from rest), `count-substrings-satisfy-k-constraint-i` (easy/strings, O(n²) brute-force), `final-array-state-k-multiplication-i` (easy/simulation, k ops: find leftmost min × multiplier), `find-the-first-player-to-win-k-games-in-a-row` (medium/simulation, king-of-the-hill O(n) scan), `sum-of-digit-differences-of-all-pairs` (medium/math, per-position frequency → C(n,2)−agree pairs), `find-the-count-of-monotonic-pairs-i` (hard/dp, prefix-sum DP enforcing lower bound per transition). Bank at **2221**; 6957 tests.

### fix(a11y): hint reveal button aria-label + problem browser aria-controls (2026-05-28)
`HintsSection` reveal button now has a descriptive `aria-label` including hint index and optional cost penalty for screen-reader announcement. `ProblemBrowserSection` collapse toggle now has `aria-controls="problem-browser-list"` linking to the controlled content `div` (added `id="problem-browser-list"`).

### feat(bank): add batch 142b — beautiful-towers-ii, palindromic-grid-ii, balanced-subseq-sum (2026-05-28)
Three problems: `beautiful-towers-ii` (medium/arrays+stack, O(n) monotone stack with prefix/suffix mountain sums), `minimum-number-of-flips-to-make-binary-grid-palindromic-ii` (medium/arrays, groups-of-4 cell matching + middle row/col pair handling), `maximum-balanced-subsequence-sum` (hard/binary-indexed-tree+dp+arrays, key[i]=nums[i]-i transforms to max non-decreasing subsequence sum, O(n log n) BIT). Bank at **2221**; 6957 tests.

### feat(bank): add batch 144 — min-swaps-balanced, kth-largest-xor-coord, tweet-counts-per-freq (2026-05-28)
Three problems: `minimum-swaps-to-make-balanced` (medium/strings+stack, ceil(maxDeficit/2) via running balance), `find-kth-largest-xor-coordinate-value` (medium/arrays, 2D prefix XOR + kth order statistic), `tweet-counts-per-frequency` (medium/hash-map+simulation, map of timestamps + delta-chunk counting). Bank at **2218**; 6948 tests.

### feat(bank): add batch 141 — reaching-points, orderly-queue, valid-number, min-moves-ii, super-washing, submatrices-sum (2026-05-28)
Six problems: `reaching-points` (hard/math, reverse GCD/modulo traversal to check reachability), `orderly-queue` (hard/math+strings, k=1 min rotation, k≥2 sort), `valid-number` (hard/strings, state-machine with seenDigit/seenDot/seenE flags), `minimum-moves-to-equal-array-elements-ii` (medium/math, median minimises L1 sum), `super-washing-machines` (hard/math, cumulative flow bottleneck argument), `number-of-submatrices-that-sum-to-target` (hard/arrays+dp+hash-map, 2D prefix sum reduction to 1D subarray problem). Bank at **2209**; 6921 tests.

### feat(ux): add copy-problem button and fix heading hierarchy (2026-05-28)
ProblemPanel: added CopyProblemButton in title row — serialises full problem (title, difficulty, tags, description, examples, constraints) as plain text to clipboard for pasting into AI tools. Challenge page: changed "Practice next" label from `<p>` to `<h2>` for correct screen-reader heading hierarchy; added `role="list"` to related-problems list.

### feat(bank): add batch 139 — sort-people, count-words-given-prefix, find-missing-observations (2026-05-28)
Three problems. Bank at **2203**; 6903 tests.

### feat(bank): add batch 134b — count-special-chars-ii, make-square-same-color, good-pairs-ii (2026-05-28)
Three problems: `count-the-number-of-special-characters-ii` (medium/strings+hash-map, track lastLower and firstUpper per char, count chars where lastLower<firstUpper), `make-a-square-with-the-same-color` (easy/arrays+simulation, check all 4 possible 2×2 sub-squares for ≥3 uniform cells), `find-the-number-of-good-pairs-ii` (medium/arrays+hash-map, freq map + iterate multiples up to 10^6 for O(max/k) per element). Bank at **2196**; 6882 tests.

### feat(bank): add batch 138 — longest-unequal-adj-groups-ii, zero-array-ii, min-array-changes, almost-equal-pairs-i, min-diameter-merge (2026-05-28)
Five problems: `longest-unequal-adjacent-groups-subsequence-ii` (medium/strings+dp, DP with Hamming-1 and group-differ constraints), `zero-array-transformation-ii` (medium/arrays+binary-search, binary search on k with difference-array feasibility check), `minimum-array-changes-to-make-subarrays-distinct` (medium/arrays+hash-map, greedy spacing per value ≥ k), `count-almost-equal-pairs-i` (easy/arrays+math, pad and check 0 or 2 swappable digit diffs), `find-minimum-diameter-after-merging-two-trees` (hard/graph+tree, two BFS per tree + max(d1,d2,⌈d1/2⌉+⌈d2/2⌉+1)). Bank at **2196**; 6882 tests.

### feat(bank): add batch 137 — maximum-or, permutation-diff, sum-of-distances (2026-05-28)
Three problems: `maximum-or` (medium/arrays+math, BigInt prefix/suffix OR, concentrate all k doublings on one element), `permutation-difference-between-two-strings` (easy/strings+hash-map, position map + sum of absolute differences), `calculate-the-sum-of-distances` (medium/arrays, per-group O(n) prefix sum). Bank at **2183**; 6840 tests.

### feat(bank): add batch 136 — encrypted-string, max-subarray-sum-div-k, redistribute-chars (2026-05-28)
Three problems: `find-the-encrypted-string` (easy/strings+math, shift each index by k with modulo), `maximum-subarray-sum-with-length-divisible-by-k` (medium/arrays+hash-map, rolling min per mod class over prefix sums), `redistribute-characters-to-make-all-strings-equal` (easy/strings+hash-map, check each char frequency divisible by n). Bank at **2177**; 6822 tests.

### feat(bank): add batch 135 — check-grid-conditions, max-node-values, max-xor-product (2026-05-28)
Three problems: `check-if-grid-satisfies-conditions` (easy/arrays, check column-uniform + adjacent-column-distinct), `find-the-maximum-sum-of-node-values` (medium/tree+math, XOR-even-subset insight: sort deltas desc, greedily take positive pairs; edges irrelevant), `maximum-xor-product` (medium/math, greedy bit-by-bit with BigInt for a,b<2^50). Bank at **2174**; 6813 tests.

### feat(bank): add batch 134 — max-vowels-substring, k-th-char-game-ii (2026-05-28)
Two problems: `maximum-number-of-vowels-in-a-substring-of-given-length` (medium/strings+sliding-window, window count, O(n)), `find-the-k-th-character-in-string-game-ii` (hard/strings+math, backwards binary reduction with offset accumulation; BigInt for k≤2^55). Bank at **2171**; 6804 tests. Site updated to 2,171+.

### feat(ux): language-switch confirmation + attempt warning badge (2026-05-28)
EditorPanel: inline confirmation banner when user attempts to switch language with modified code (prevents silent loss of work). Attempt-remaining badge now visually prominent (font-semibold, elevated border/bg) when ≤1 attempt left. Arrow-key language navigation routes through the same dirty-check.

### feat(bank): add batch 133 — good-pairs-i, lex-smallest-swap, max-binary-concat (2026-05-28)
Three problems: `find-the-number-of-good-pairs-i` (easy/arrays+hash-map), `lexicographically-smallest-string-after-a-swap` (easy/strings), `maximum-possible-number-by-binary-concatenation` (medium/arrays). Bank at **2169**; 6798 tests.

### feat(bank): add batch 134 — count-strictly-increasing-columns, find-xor-sum-of-all-pairs-bitwise-and, min-cost-connect-two-groups (2026-05-28)
Three problems: `count-strictly-increasing-columns` (easy/arrays+simulation, column-by-column strict monotone check O(m×n)), `find-xor-sum-of-all-pairs-bitwise-and` (medium/arrays+math, key insight: XOR distributes over AND per-bit so answer = XOR(arr1) & XOR(arr2) in O(n+m)), `minimum-cost-to-connect-two-groups` (hard/arrays+dynamic-programming, bitmask DP on group2 coverage state + retroactive minimum-cost patch for uncovered group2 points). Bank at **2174**; 6837 tests.

### feat(bank): add batch 133 — check-if-grid-satisfies-conditions, maximum-xor-product, find-the-maximum-sum-of-node-values (2026-05-28)
Three problems: `check-if-grid-satisfies-conditions` (easy/arrays, iterate cells checking column-uniform and adjacent-column-distinct), `maximum-xor-product` (medium/math, greedy bit-by-bit: same bits→set both to 1; differing bits→give 1 to smaller factor via AM-GM; BigInt for n≤50), `find-the-maximum-sum-of-node-values` (medium/tree+math, even-subset XOR insight: any even-cardinality subset achievable via path composition; sort deltas desc, greedily take positive pairs). Bank at **2171**; 6807 tests.

### feat(bank): add batch 132b — max-binary-concat, lex-smallest-after-swap, good-pairs-i (2026-05-28)
Three problems: `maximum-possible-number-by-binary-concatenation` (easy/math, try all 6 permutations of 3 elements, pick max binary concat), `lexicographically-smallest-string-after-a-swap` (easy/strings+math, first left-to-right adjacent pair of same parity where b<a), `find-the-number-of-good-pairs-i` (easy/arrays+math, brute-force O(n*m): count pairs where nums1[i]%(nums2[j]*k)==0). Bank at **2171**; 6807 tests (after merging with batch 133).

### feat(bank): add batch 132 — circular-game-losers, unique-binary-string, balls-in-box (2026-05-28)
Three problems: `find-the-losers-of-the-circular-game` (easy/simulation, track visited positions set; simulate i*k step passes), `find-unique-binary-string` (medium/strings, Cantor diagonal — flip position i of nums[i] to guarantee uniqueness), `maximum-number-of-balls-in-a-box` (easy/hash-map+math, digit-sum frequency map, max count). Bank at **2165**; 6789 tests.

### feat(bank): add batch 131 — count-collisions-road, form-smallest-two-digits, double-reversal (2026-05-28)
Three problems: `count-collisions-on-a-road` (medium/strings+stack, trim leading-L/trailing-R then count non-S chars), `form-smallest-number-from-two-digit-arrays` (easy/arrays+hash-map, common digit or smallest 2-digit combo), `a-number-after-a-double-reversal` (easy/math, num==0 || num%10!=0). Bank at **2159**; 6771 tests.

### feat(bank): add batch 130 — count-even-sum-pairs, longest-bounded-subarray, max-nonadjacent-circular (2026-05-28)
Three problems: `count-even-sum-pairs` (easy/arrays+math, parity counting C(e,2)+C(o,2) in O(n)), `longest-bounded-subarray` (medium/arrays+sliding-window, shrinking two-pointer with all-positive elements for longest sum≤k window), `max-nonadjacent-circular` (hard/arrays+dynamic-programming, circular House Robber via two linear DP subproblems — exclude first or last element). Bank at **2156**; 6762 tests.

### feat(bank): add batch 130b — max-diff-remapping-digit, power-k-subarrays-ii, count-substrings-vowels-k-ii (2026-05-28)
Three problems: `maximum-difference-by-remapping-a-digit` (easy/math, max=first non-9→9; min=first digit→0), `find-the-power-of-k-size-subarrays-ii` (medium/arrays+sliding-window, O(n) streak counter; streak≥k→power=nums[i] else -1), `count-of-substrings-containing-every-vowel-and-k-consonants-ii` (medium/strings+sliding-window, exactly(k)=atLeast(k)-atLeast(k+1); n≤2*10^5). Bank at **2162**; 6780 tests.

### feat(bank): add batch 128b — check-if-fascinating, even-odd-bits, valid-matrix-row-col (2026-05-28)
Three problems: `check-if-a-number-is-fascinating` (easy/math, concat n+2n+3n, check sorted=="123456789"), `number-of-even-and-odd-bits` (easy/math, iterate bits tracking even/odd index counts), `find-valid-matrix-given-row-and-column-sums` (medium/arrays+math, greedy: cell[i][j]=min(rowSum[i],colSum[j])). Bank at **2153**; 6753 tests.

### feat(bank): add batch 129 — min-ops-move-balls, min-ops-special-number, max-score-node-sequence (2026-05-28)
Three problems: `minimum-number-of-operations-to-move-all-balls-to-each-box` (medium/arrays, O(n²) brute force: answer[i] = sum of |i-j| for all j with box[j]='1'), `minimum-operations-to-make-a-special-number` (medium/strings+math, find last 2-char suffix matching 00/25/50/75 greedy scan; deletion count = n-p1-2), `maximum-score-of-a-node-sequence` (hard/arrays+graph, for each edge (b,c) try all combinations from top-3 neighbors of b and c checking distinctness). Bank at **2150**; 6744 tests.

### feat(bank): add batch 128 — removing-stars, min-moves-seat-everyone, check-prefix-of-array (2026-05-28)
Three problems: `removing-stars-from-a-string` (medium/strings+stack, push non-star/pop on star), `minimum-number-of-moves-to-seat-everyone` (easy/arrays, sort both+sum abs diffs), `check-if-string-is-a-prefix-of-array` (easy/arrays+strings, accumulate until match or exceed). Bank at **2147**; 6735 tests.

### feat(bank): add batch 127b — find-min-value-digit-sum, count-triplets-xor (2026-05-28)
Two problems: `find-minimum-value-after-replacing-with-digit-sum` (easy/arrays+math, replace each element with its digit sum, return min), `count-triplets-forming-two-arrays-of-equal-xor` (medium/arrays+math, key insight: a XOR b == 0 iff full segment XOR = 0; for each valid (i,k) pair, all j from i+1..k work → count += k-i). Bank at **2144**; 6726 tests.

### feat(bank): add batch 127 — min-sum-mountain-triplets-ii, xor-range, count-pairs-sum-less-than-target (2026-05-28)
Three problems: `minimum-sum-of-mountain-triplets-ii` (medium/arrays, O(n) prefix+suffix min), `find-the-xor-of-numbers-in-a-range` (easy/math, iterate l..r XOR), `count-pairs-whose-sum-is-less-than-target` (easy/arrays+two-pointers, O(n²) brute). Bank at **2137**; 6720 tests.

### feat(bank): add batch 124b — max-element-decrement-rearrange, distance-value-two-arrays, min-sum-mountain-triplets-i (2026-05-28)
Three problems: `maximum-element-after-decreasing-and-rearranging` (medium/arrays, sort+greedy a[0]=1, a[i]=min(arr[i], prev+1), return last), `find-the-distance-value-between-two-arrays` (easy/arrays, count arr1[i] where all |arr1[i]-arr2[j]|>d), `minimum-sum-of-mountain-triplets-i` (easy/arrays, O(n³) brute force over valid (i<j<k) mountain triplets). JS + Python reference solutions. Bank at **2134**; 6711 tests.

### feat(bank): add batch 126 — number-of-steps, convert-date-to-binary, two-sneaky-numbers (2026-05-28)
Three easy problems: `number-of-steps-to-reduce-a-number-to-zero` (easy/math, simulate even÷2 / odd−1), `convert-date-to-binary` (easy/strings+math, split "YYYY-MM-DD" and parseInt each part to binary string), `the-two-sneaky-numbers-of-digitville` (easy/arrays+hash-map, freq map returning values with count > 1 sorted ascending). Bank at **2131**; 6702 tests.

### feat(bank): add batch 122c — find-original-typed-string-ii, find-min-time-last-room-ii, min-ops-write-y-grid (2026-05-28)
Three problems: `find-the-original-typed-string-ii` (hard/strings+dp, product-of-run-lengths minus DP count of originals shorter than k using sliding-window prefix sum BigInt DP mod 10^9+7), `find-minimum-time-to-reach-last-room-ii` (medium/graph+shortest-path, Dijkstra with alternating move costs 1/2 tracked as parity in state), `minimum-operations-to-write-letter-y-on-grid` (medium/arrays+hash-map, partition cells into Y vs non-Y, find min-cost distinct (yVal, nonYVal) pair). Bank at **2130**; 6693 tests.

### feat(bank): add batch 123b — score-of-string, sum-squares-special-elements (2026-05-28)
Two easy problems: `score-of-a-string` (easy/strings, adjacent ASCII diff sum), `sum-of-squares-of-special-elements` (easy/arrays+math, 1-indexed divisor positions). JS + Python reference solutions. Bank at **2127**; 6684 tests.

### feat(bank): add batch 125 — find-champion-i, consistent-strings, abs-diff-k-pairs (2026-05-28)
Three easy problems: `find-champion-i` (easy/arrays, find team with column-sum 0 in grid — no one beats them), `count-the-number-of-consistent-strings` (easy/arrays+strings+hash-map, count words where all chars in allowed Set), `count-number-of-pairs-with-absolute-difference-k` (easy/arrays+hash-map, O(n²) brute force |a-b|==k). Bank at **2125**; 6678 tests.

### feat(bank): add batch 124 — min-ops-array-empty, max-string-pairs, acronym-check (2026-05-28)
Three problems: `minimum-number-of-operations-to-make-array-empty` (medium/arrays+hash-map+math, freq map → if any freq=1 return -1, else ops += ceil(f/3)), `find-maximum-number-of-string-pairs` (easy/arrays+strings+hash-map, greedily match each word's reverse in a seen-map), `check-if-a-string-is-an-acronym-of-words` (easy/arrays+strings, lengths equal and every words[i][0]==s[i]). Bank at **2122**; 6669 tests.

### feat(bank): add batch 123 — winning-players, max-sum-k-elements, min-time-last-room-ii (2026-05-28)
Three problems: `find-the-number-of-winning-players` (easy/arrays+hash-map, player i wins if max single-color count > i), `maximum-sum-with-exactly-k-elements` (easy/arrays+math, k*max + k*(k-1)/2), `minimum-time-to-reach-last-room-ii` (medium/graph+shortest-path, Dijkstra with parity state — move cost alternates 1,2,1,2,...). Bank at **2113**; 6651 tests.

### feat(bank): add batch 122b — apply-ops, count-substrings-every-vowel-k-consonants-i, min-ops-median-to-k (2026-05-28)
Three problems: `apply-operations-to-an-array` (easy/arrays, left-to-right double+zero then shift zeros), `count-of-substrings-containing-every-vowel-and-k-consonants-i` (medium/strings+sliding-window, exactlyK = atLeastK − atLeastK+1), `minimum-operations-to-make-median-equal-to-k` (medium/arrays, sort + count elements on wrong side). JS + Python reference solutions. Bank at **2116**; 6651 tests.

### feat(bank): add batch 122 — min-flips-palindromic-grid-i, count-substrings-k-freq-i, digit-game (2026-05-28)
Three problems: `minimum-number-of-flips-to-make-binary-grid-palindromic-i` (medium/arrays, count mismatched mirror pairs per row vs per column, return min), `count-substrings-with-k-frequency-characters-i` (medium/strings+sliding-window+hash-map, for each start extend right until some freq≥k, count += n-j), `find-if-digit-game-can-be-won` (easy/arrays+math, S=single-digit sum, D=double-digit sum, Alice wins iff S≠D). Bank at **2110**; 6633 tests.

### feat(bank): add batch 117b — find-key-of-numbers, maximize-tower-height, max-integers-choose-range (2026-05-28)
Three problems: `find-the-key-of-the-numbers` (easy/math, min digit per position across 3 numbers), `maximize-total-height-of-unique-towers` (medium/arrays, sort-desc greedy h[i]=min(maxH, prev-1)), `maximum-number-of-integers-to-choose-from-a-range-i` (medium/arrays+hash-map, greedy banned-set scan 1..n). JS + Python reference solutions for all. Bank at **2110**; 6633 tests.

### feat(bank): add batch 121 — longest-common-prefix-length, max-distinct-elements-ops, min-time-revert-word-i (2026-05-28)
Three medium problems: `find-the-length-of-the-longest-common-prefix` (medium/arrays+strings+hash-map, store all prefixes of arr1 in a Set, check arr2 prefixes), `maximum-number-of-distinct-elements-after-operations` (medium/arrays+math, sort + greedy assign max(prev+1, n-k) within [n-k,n+k] range), `minimum-time-to-revert-word-to-initial-state-i` (medium/strings, try t=1,2,...; check if word[t*k:] is a prefix of word). Bank at **2107**; 6624 tests.

### feat(bank): add batch 120 — max-product-two-digits, min-ops-columns-strictly-inc, longest-unequal-adjacent-subseq-i (2026-05-28)
Three easy array problems: `maximum-product-of-two-digits` (easy/arrays+math, extract digits + sort desc, top-2 product), `minimum-operations-to-make-columns-strictly-increasing` (easy/arrays, column-wise greedy max(prev+1, cur)), `longest-unequal-adjacent-groups-subsequence-i` (easy/arrays+strings, greedy take first in each consecutive run of same group). Bank at **2104**; 6615 tests.

### feat(bank): add batch 119 — max-manhattan-distance, find-original-typed-string-i, min-time-last-room-i (2026-05-28)
Three problems: `maximum-manhattan-distance` (easy/arrays+math, track |x|+|y| max through NSEW moves), `find-the-original-typed-string-i` (easy/strings, count run decompositions: 1 + sum(run_length-1) per run), `find-minimum-time-to-reach-last-room-i` (medium/graph+shortest-path, Dijkstra with new_time = max(t, moveTime[r][c]) + 1). Bank at **2101**; 6606 tests.

### feat(bank): add batch 118 — max-diff-even-odd-freq-i, k-th-char-string-game-i, count-prefix-suffix-pairs-i (2026-05-28)
Three easy string problems: `maximum-difference-between-even-and-odd-frequency-i` (easy/strings+hash-map, max odd-freq minus min even-freq), `find-the-k-th-character-in-string-game-i` (easy/strings+math, simulate string doubling with char+1 shift; k-th char = chr('a'+popcount(k-1))), `count-prefix-and-suffix-pairs-i` (easy/strings, O(n²) startsWith+endsWith check for each pair i<j). Bank at **2098**; 6597 tests.

### feat(bank): add batch 117 — longest-monotonic-subarray, k-size-subarray-power-i, count-alternating-subarrays (2026-05-28)
Three problems: `longest-strictly-increasing-or-strictly-decreasing-subarray` (easy/arrays, two-run inc/dec tracking), `find-the-power-of-k-size-subarrays-i` (medium/arrays+sliding-window, O(n*k) consecutive ascending window check, power=max or -1), `count-alternating-subarrays` (medium/arrays+math, run-length contribution counting — each run of length `r` adds `r` to total). Bank at **2095**; 6579 tests.

### feat(bank): add batch 116 — check-balanced-string, min-chairs-waiting-room, min-ops-divisible-three (2026-05-28)
Three easy problems: `check-balanced-string` (easy/strings, even-index digit sum == odd-index digit sum), `minimum-number-of-chairs-in-a-waiting-room` (easy/strings+simulation, track max concurrent E/L occupancy), `find-minimum-operations-to-make-all-elements-divisible-by-three` (easy/arrays+math, count elements where n%3≠0). Bank at **2092**; 6570 tests.

### feat(bank): add batch 115 — min-ops-binary-array-i, find-common-elements, max-triplet-i (2026-05-28)
Three easy array problems: `minimum-operations-to-make-binary-array-elements-equal-to-one-i` (greedy left-to-right 3-window flip), `find-common-elements-between-two-arrays` (set-based bidirectional count returning [answer1, answer2]), `maximum-value-of-an-ordered-triplet-i` (O(n³) brute-force, max (nums[i]-nums[j])*nums[k] or 0). Bank at **2089**; 6561 tests.

### feat(bank): add batch 114 — lexicographically-smallest-equivalent-string, single-threaded-cpu, number-of-ways-to-split-string (2026-05-28)
Three medium problems targeting underrepresented tags: `lexicographically-smallest-equivalent-string` (medium/strings+union-find, DSU over 26 chars keeping smaller char as root; boosts union-find tag from 23 to 24), `single-threaded-cpu` (medium/heap+simulation, sort by enqueue, min-heap [processingTime,idx], idle-time clock jump), `number-of-ways-to-split-string` (medium/strings+math, if total 1s not divisible by 3 → 0; if 0 ones → C(n-1,2); else gap1×gap2 mod 10^9+7). Bank: **2087**; 6552 tests.

### feat(bank): add batch 113 — max-product-two-elements, remove-nth-node-from-end (2026-05-28)
Registered `maximum-product-of-two-elements-in-an-array` (easy/arrays, find two largest then multiply decremented values). Added `remove-nth-node-from-end-of-list` (medium/linked-list, two-pointer with dummy head — fast leads n steps, co-advance until fast.next=null, then skip). Upgraded `two-sum-iv-bst` to full preamble/runner pattern (functionName: findTargetRunner); fixed Python reference solution to use DFS+set instead of iterating TreeNode directly. Bank at **2083**; 6543 tests.

### chore: merge branches + batch 110a + a11y fix (2026-05-28)
Merged detached-work branch (UI overhaul: TerminalPanel, CustomTestPanel, SubmissionsPanel, sucrase TS transpilation, emacs keymap) into main; resolved conflicts keeping detached-work as the more complete implementation. Added batch 110a: `divide-array-into-equal-pairs` (easy/arrays+hash-map, freq map all-even check), `add-to-array-form-of-integer` (easy/arrays+math, right-to-left carry propagation), `minimum-swaps-to-make-strings-balanced` (medium/strings+two-pointers, greedy balance-dip counting). Applied a11y fix: TestResultCard expand/collapse button now has descriptive aria-label. Bank: 2081 problems; 6537 tests.

### feat(bank): add batch 112 — lca-binary-tree, zigzag-level-order, level-order-ii (2026-05-28)
Added 3 problems: `lowest-common-ancestor-of-a-binary-tree` (medium/tree, post-order DFS — null propagation; unlike BST version, must explore entire tree), `binary-tree-zigzag-level-order-traversal` (medium/tree, BFS with alternating level reversal flag), `binary-tree-level-order-traversal-ii` (medium/tree, BFS with unshift/insert(0) for bottom-up result). Bank at **2078**; 6528 tests.

### feat(bank): add batch 111 — validate-bst, kth-smallest-in-bst, lca-of-bst (2026-05-28)
Added 3 problems: `validate-binary-search-tree` (medium/tree, min/max bounds DFS — checks strict inequalities at every node), `kth-smallest-element-in-a-bst` (medium/tree, in-order traversal counting to k), `lowest-common-ancestor-of-a-bst` (easy/tree, BST property navigation; runner passes integer values not TreeNode objects). Bank at **2075**; 6519 tests.

### feat(bank): add batch 110 — check-two-string-arrays, verify-preorder-serialization, serialize-binary-tree (2026-05-28)
Added 3 problems: `check-if-two-string-arrays-are-equivalent` (easy/strings, join-and-compare), `verify-preorder-serialization-of-a-binary-tree` (medium/tree+stack, slots countdown — each non-null adds 2, each '#' consumes 1), `serialize-and-deserialize-binary-tree` (hard/tree, BFS serialize round-trip; preamble provides __toArray__ for runner verification). Bank at **2072**; 6510 tests.

### chore: merge diverged branches + a11y fix (2026-05-28)
Merged the detached-work branch (UI overhaul: TerminalPanel, CustomTestPanel, SubmissionsPanel, multi-language judge with sucrase TS transpilation, emacs keymap, draggable splitter, etc.) with origin/main (Pyodide M7, vim keymap). Detached-work was the more complete state; all conflicts resolved by taking its version. Also merged batches 106b–109 from origin/main (9 more problems). Applied pending a11y fix: TestResultCard expand/collapse button now has descriptive `aria-label` ("Test N — PASS/FAIL, expand details"). Bank: 2069 problems; 6501 tests.

### feat(bank): add batch 106a — binary-tree-sum-of-left-leaves, minimum-operations-make-elements-distinct, check-if-straight-line (2026-05-28)
Registered orphaned `binary-tree-sum-of-left-leaves` (was on disk but not in index). Added 2 new problems: `minimum-operations-to-make-elements-distinct` (easy/arrays+hash-map, right-to-left Set scan + ceil formula), `check-if-it-is-a-straight-line` (easy/arrays+math, cross-product collinearity). JS and Python reference solutions for all 3.

### feat(bank): add batch 109 — implement-trie, number-of-recent-calls, two-sum-iii (2026-05-28)
Added 3 problems: `implement-trie-prefix-tree` (medium/tree+strings, ops-array with TrieNode map children), `number-of-recent-calls` (easy/simulation, sliding-window queue pruning), `two-sum-iii-data-structure-design` (easy/hash-map, frequency map + complement check with duplicate handling). Bank at **2069**; 6492 tests.

### feat(bank): add batch 108 — kth-largest-element, find-missing-positive, largest-rectangle-in-histogram (2026-05-28)
Added 3 problems: `kth-largest-element-in-an-array` (medium/heap, sort-desc approach), `find-missing-positive` (hard/arrays, O(n) index-placement swapping), `largest-rectangle-in-histogram` (hard/stack, monotonic increasing stack with sentinel 0). Note: existing orphaned solution for `largest-rectangle-in-histogram` was present in bank-solutions; created matching problem file. Bank at **2066**; 6483 tests.

### feat(bank): add batch 107 — first-unique-character, sum-root-to-leaf-numbers, flatten-binary-tree (2026-05-28)
Added 3 problems: `first-unique-character-in-a-string` (easy/strings+hash-map, two-pass frequency scan), `sum-root-to-leaf-numbers` (medium/tree, DFS accumulating path number × 10 + val), `flatten-binary-tree-to-linked-list` (medium/tree, rightmost-predecessor in-place flattening; runner returns right-spine values array). Bank at **2063**; 6474 tests.

### feat(bank): add batch 106 — longer-contiguous-segments, binary-tree-longest-consecutive-sequence, count-unguarded-cells (2026-05-28)
Added 3 problems: `longer-contiguous-segments-of-ones-than-zeros` (easy/strings, max-run helper comparing '1' vs '0' streaks), `binary-tree-longest-consecutive-sequence` (medium/tree, DFS passing expected=parent+1; reset to 1 on mismatch — fixed 3 hidden test expectations that were wrong), `count-unguarded-cells-in-the-grid` (medium/arrays+simulation, sentinel-grid ray-cast in 4 cardinal directions). Bank at **2057**; 6465 tests.

### feat(bank): add batch 105 — merge-two-binary-trees, range-sum-query-immutable, min-cost-connect-all-points (2026-05-28)
Added 3 problems: `merge-two-binary-trees` (easy/tree, DFS with tree preamble pattern), `range-sum-query-immutable` (easy/arrays+dp, prefix-sum ops-array design pattern), `min-cost-connect-all-points` (medium/graph, O(n²) Prim's MST on Manhattan-distance graph). JS and Python reference solutions for all; JsNull handling fixed for Python tree solutions. Bank at **2054**; 6456 tests.

### feat(bank): add batches 102–104 + site stats update (2026-05-28)
Batch 102: `two-sum`, `squares-of-a-sorted-array`, `middle-of-the-linked-list`. Batch 103: `3sum` (runner normalizes output order), `search-a-2d-matrix`, `max-points-on-a-line`. Batch 104: `search-a-2d-matrix-ii`, `count-number-of-connected-components`, `longest-increasing-path-in-a-matrix`. Marketing site updated: 2,000+ → 2,045+. Bank at **2051**; 6447 tests.

### feat(bank): add batch 101 — prime-arrangements, lucky-numbers-in-a-matrix, smallest-range-i (2026-05-28)
Added 3 problems: `prime-arrangements` (easy/math, count permutations where primes at prime indices mod 10^9+7), `lucky-numbers-in-a-matrix` (easy/arrays+math, precompute colMax then rowMin check), `smallest-range-i` (easy/arrays+math, max(0, spread - 2k)). JS and Python reference solutions for all. Bank at **2042**; 6420 tests.

### feat(bank): add batch 100 — construct-binary-tree-from-preorder-and-inorder-traversal (2026-05-26)
Registered `construct-binary-tree-from-preorder-and-inorder-traversal` (medium/tree, hash-map + recursive preL/preR/inL/inR divide-and-conquer). Also: backfilled find-all-groups-of-farmland expanded hidden tests (10 hidden, up from 3) with improved hints. Bank at **2036**; 6402 tests.

### feat(bank): add batch 96 — remove-all-adjacent-duplicates-in-string-ii, average-of-subtree, cousins-in-binary-tree-ii (2026-05-26)
Added 3 problems: `remove-all-adjacent-duplicates-in-string-ii` (medium/stack+strings, (char,count) stack; pop when count==k), `average-of-subtree` (easy/tree, post-order DFS returning [sum,count]; integer-division equality check), `cousins-in-binary-tree-ii` (medium/tree, BFS sets each child's value to levelSum−siblingSum). Bank at **2038**; 6408 tests.

### feat(bank): add batch 99 — find-longest-balanced-binary-substring, matrix-diagonal-sum-variant, max-number-of-k-sum-pairs, count-subarrays-max-element-k-times (2026-05-26)
Added 4 problems: `find-longest-balanced-binary-substring` (easy/strings, run-scan pairing zeros/ones), `matrix-diagonal-sum-variant` (easy/arrays, both diagonals minus center for odd n), `max-number-of-k-sum-pairs` (medium/two-pointers, sort + two-pointer k-sum pair counting), `count-subarrays-max-element-k-times` (medium/sliding-window, two-pointer count subarrays with global max ≥k times). Bank at **2034**; 6399 tests.

### feat(bank): add batch 96 — check-if-array-sorted-and-rotated, find-all-lonely-numbers-in-array, check-if-all-characters-have-equal-number-of-occurrences (2026-05-26)
Added 3 problems: `check-if-array-sorted-and-rotated` (easy/arrays, circular inversion count ≤1), `find-all-lonely-numbers-in-array` (easy/arrays+hash-map, frequency map + neighbor check), `check-if-all-characters-have-equal-number-of-occurrences` (easy/strings+hash-map, frequency uniformity check). Bank at **2026**; 6372 tests.

### feat(bank): add batch 95 — range-sum-bst, delete-node-in-a-bst, binary-tree-maximum-path-sum (2026-05-26)
Added 3 tree problems: `range-sum-bst` (easy/tree, DFS leveraging BST ordering to skip irrelevant subtrees), `delete-node-in-a-bst` (medium/tree, inorder-successor replacement for two-child deletion), `binary-tree-maximum-path-sum` (hard/tree, gain-function DFS with global max tracking). Bank at **2026**; 6378 tests.

### feat(bank): add batch 95 (remote) — di-string-match, shortest-distance-to-char, largest-num-twice-others (2026-05-26)
Added 3 problems: `di-string-match` (easy/arrays+math+two-pointers, lo/hi two-pointer I/D permutation), `shortest-distance-to-a-character` (easy/arrays+strings+two-pointers, two-pass O(n) left/right scan), `largest-number-at-least-twice-of-others` (easy/arrays, max dominance 2× check). Bank at **2004**; 6354 tests.

### feat(bank): add batch 94 — count-of-matches, find-winner-tictactoe, sort-features (2026-05-26)
Added 3 problems from remote batch 94. Bank at **2004** (combined).

### feat(bank): add batch 94 — maximum-average-subarray-i (2026-05-26)
Added `maximum-average-subarray-i` (easy/sliding-window, fixed-size k window tracking max sum). JS and Python reference solutions added. Bank at **2001**; 6315 tests.

### 🎉 2000-problem milestone — find-largest-value-in-each-tree-row (2026-05-26)
Bank crosses **2000** problems. Added `find-largest-value-in-each-tree-row` (medium/tree, BFS level-order max scan). Marketing site updated to 2,000+. Bank at **2000**; 6312 tests.

### feat(bank): add batch 94 — rotated-digits, rabbits-in-forest, smallest-string-from-leaf (2026-05-26)
Added 3 problems: `rotated-digits` (easy/math, count valid 180°-rotated different integers 1..n), `rabbits-in-forest` (medium/math+hash-map, ceil(freq/(k+1))×(k+1) grouping), `smallest-string-starting-from-leaf` (medium/tree, DFS path accumulation with lexicographic comparison). Bank at **1999**; 6309 tests.

### feat(bank): merge batches 92a+92b — prime-subtraction, semi-repetitive-subarray, fair-pairs integrated (2026-05-26)
Merged local batch 92 (prime-subtraction-operation, find-the-longest-semi-repetitive-subarray, count-number-of-fair-pairs) with remote batch 92 (alternating-groups-i, count-vowel-substrings, min-cost-move-chips, string-compression-ii, build-array-stack-ops) and remote batch 93 (valid-perfect-square, insertion-sort-list, maximize-score-after-n-ops). All 6300 tests green. Bank at **1993**.

### feat(bank): add batch 93 — valid-perfect-square, insertion-sort-list, maximize-score-n-ops (2026-05-26)
Added 3 problems: `valid-perfect-square` (easy/math+binary-search, binary search for x²=num without sqrt), `insertion-sort-list` (medium/linked-list, O(n²) insertion sort with dummy-head pattern, array-based interface), `maximize-score-after-n-operations` (hard/dp, bitmask DP with precomputed GCD table, O(4^n·n²) for n≤7). Bank at **1990**; 6279 tests.

**Current focus:** Bank at **1990** problems; 6279 tests green. Batch 93 complete. Word-wrap preference persisted.
**Build status:** 🟢 `npm run typecheck` + `npm run test` green.
**Next up:** Batch 94 bank growth; further UI/UX polish (light mode, a11y, hints backfill).

### feat(editor): persist word-wrap preference across sessions (2026-05-26)
Added `editorWordWrap: boolean` to `UserPreferences` and `DEFAULT_PREFERENCES`. `EditorPanel` now accepts `wordWrap?` and `onWordWrapChange?` props; `Challenge.tsx` seeds from `prefs.editorWordWrap` and persists toggles via `updateValue('userPreferences', ...)`.

### feat(bank): add batch 93 — find-longest-awesome-substring, greatest-common-divisor-traversal, minimum-length-of-anagram-concatenation (2026-05-26)
Added 3 problems: `find-longest-awesome-substring` (hard/strings, bitmask XOR over 10 digit parities), `greatest-common-divisor-traversal` (hard/arrays+math+union-find, prime-factor DSU), `minimum-length-of-anagram-concatenation` (medium/strings+hash-map, divisor enumeration + 26-char freq check). Bank at **1990**; 6279 tests.

### feat(bank): add batch 92 — alternating-groups-i, longest-binary-subsequence-≤-k, minimum-time-complete-tasks (2026-05-26)
Added 3 problems: `alternating-groups-i` (easy/arrays, modular-index circular triple count), `longest-binary-subsequence-less-than-or-equal-to-k` (medium/strings+dp, right-to-left greedy — zeros always included, ones included if running value ≤ k), `minimum-time-to-complete-all-tasks` (hard/arrays, sort-by-end + right-fill boolean run array). Fixed wrong expected values in several hidden tests by manual algorithm trace. Bank at **1987**; 6270 tests.

### feat(bank): add batch 91 — maximum-consecutive-values, two-events-conflict, visible-people-queue (2026-05-26)
Added 3 problems: `maximum-number-of-consecutive-values-you-can-make` (medium/arrays+math, sort+reach greedy), `determine-if-two-events-have-conflict` (easy/strings, lexicographic interval overlap), `number-of-people-that-can-be-seen-in-a-grid` (medium/arrays+stack, monotonic-stack right-to-left). Bank at **1977**; 6219 tests.

### feat(bank): add batch 90 — sum-of-square-numbers, mice-and-cheese, maximum-size-subarray-sum-equals-k (2026-05-26)
Added 3 problems: `sum-of-square-numbers` (easy/math, Fermat two-square theorem, √c iteration), `mice-and-cheese` (medium/greedy, delta-sort to maximize k assignments), `maximum-size-subarray-sum-equals-k` (medium/hash-map, prefix sum + first-seen map for O(n)). Corrected 5 wrong hidden test expected values via brute-force verification. Bank at **1974**; 6201 tests.

### feat(bank): add batch 89 — 7 problems (arrays, strings, hash-map, math, graph) (2026-05-26)
Added 7 problems: `minimum-rounds-to-complete-all-tasks` (medium/arrays+hash-map, ceil(freq/3) rounds), `longest-palindrome-by-concatenating-two-letter-words` (medium/strings+hash-map, paired reverse words + palindromic-word center), `maximum-product-difference-between-two-pairs` (easy/arrays, sorted top-2 minus bottom-2), `minimum-bit-flips-to-convert-number` (easy/math, popcount of XOR), `min-number-of-flips-to-convert-binary-matrix-to-zero-matrix` (hard/graph+simulation, BFS on bitmask state space), `determine-if-two-strings-are-close` (medium/strings+hash-map, same char set + same freq multiset), `maximum-xor-after-operations` (medium/arrays+math, bitwise OR of all elements). Bank at **1958**; tests green.

### merge: batches 88–89 local + remote (2026-05-26)
Local batch 88: `check-if-there-is-a-valid-partition-for-the-array` (medium/dp), `reverse-nodes-in-even-length-groups` (medium/linked-list), `minimum-difference-in-sums-after-removal-of-elements` (hard/heap); `InlineText` component for backtick inline code; site stats to 1,950+.
Remote batch 88: `split-the-array` (easy/arrays+hash-map), `find-the-score-of-all-prefixes-of-an-array` (medium/arrays), `shortest-cycle-in-a-graph` (medium/graph); a11y: aria-live verdict announcements + focus restoration on modal close.
Local batch 89: `find-the-closest-palindrome` (hard/math+strings), `number-of-subarrays-with-lcm-equal-to-k` (medium/arrays+math), `smallest-rotation-with-highest-score` (hard/arrays+math).
Remote batch 89: 13 problems — next-greater-element-distances, find-all-occurrences-z-algorithm, z-algorithm-longest-prefix-suffix, count-subarrays-exactly-k-distinct, maximum-product-subarray-length-k, weighted-job-scheduling, parallel-courses, parallel-courses-ii, grid-count-paths-mod, max-sum-submatrix, number-good-leaf-node-pairs, tree-node-product-of-children, minimum-operations-non-decreasing.

### feat(bank): add batch 87 — 3 problems (dp, strings, arrays) (2026-05-26)
Added 3 problems: `maximize-the-profit-as-the-salesman` (medium/dp, weighted interval scheduling with DP sweep), `check-if-string-is-an-acronym-of-words` (easy/strings, first-char matching), `count-elements-with-smaller-and-greater-element` (easy/arrays, min/max filtering). Bank at **1948**; 6138 tests.

### feat(bank): add batch 86 — 3 problems (arrays, strings) (2026-05-26)
Added 3 problems: `maximum-value-of-an-ordered-triplet-ii` (medium/arrays, O(n) single-pass tracking maxI/maxDiff/ans for (nums[i]-nums[j])*nums[k]), `divide-array-into-arrays-with-max-difference` (medium/arrays, sort + consecutive triplet max-diff check), `shifting-letters-ii` (medium/strings+arrays, difference array for O(n+q) range shifts mod 26). Bank at **1945**; 6129 tests.

### feat(bank): add batch 83 — strings/dp/graph (2026-05-26)
Added 12 problems: `count-palindromes` (length-5 subsequence count mod), `longest-duplicate-substring` (binary search + rolling hash), `shortest-palindrome` (KMP longest palindromic prefix), `sum-of-prefix-scores-of-strings` (trie/hash prefix count), `filling-bookcase-shelves` (1D DP), `maximum-length-of-repeated-subarray` (2D DP), `minimum-number-of-taps-to-water-garden` (jump-game greedy), `number-of-ways-to-paint-n-3-grid` (ABA/ABC recurrence), `frog-position-after-t-seconds` (DFS probability), `loud-and-rich` (memoized DAG DFS), `count-restricted-paths` (Dijkstra + memoized DP), `flower-planting-no-adjacent` (preamble validator, greedy 4-coloring). Bank at **1942**; 6120 tests.

### fix(a11y): add focus-visible rings across challenge page buttons (2026-05-26)
Fixed missing keyboard focus indicators on 10+ buttons across Blocked.tsx, SubmissionsPanel, CustomTestPanel, ProblemPanel (InlineCopy), TerminalPanel (copy/clear/expand/toggle). Fixed Monaco reference in site/index.html. Fixed React key anti-pattern in RecentSolvesList (index → problemId).

### feat(bank): batch 84 cont. — 7 problems (simulation, heap, backtracking, linked-list) (2026-05-26)
Added 7 problems: `find-the-winner-of-the-circular-game` (medium/simulation+math, Josephus iterative), `minimum-time-to-type-word-using-typewriter` (easy/simulation+math+strings, circular ring greedy), `apply-operations-to-array` (easy/arrays+simulation, merge-equal+shift-zeros), `maximum-performance-of-a-team` (hard/heap+arrays+math, sort-by-eff+min-heap, mod 1e9+7), `splitting-a-string-into-descending-consecutive-values` (medium/backtracking+strings+math, BigInt recursion), `delete-the-middle-node-of-a-linked-list` (medium/linked-list+two-pointers), `maximum-twin-sum-of-a-linked-list` (medium/linked-list+two-pointers). Supersedes shorter-ID variants with canonical full-title IDs. Bank at **1935**; 6078 tests.

### feat(bank): add batch 84 — 2 problems (two-pointers, math) (2026-05-26)
Added 2 problems: `maximum-score-of-a-good-subarray` (hard/arrays+two-pointers, expand from k greedily keeping higher minimum), `minimum-number-of-coins-to-be-added` (medium/arrays+math, greedy reach extension with sorted coins). Bank at **1928**; 6078 tests.

### feat(bank): add batch 83 — 7 problems (backtracking, simulation, dp, linked-list) (2026-05-26)
Added 7 problems: `letter-combinations-of-a-phone-number` (medium/backtracking, DFS digit mapping), `design-tic-tac-toe` (medium/simulation, O(1) row/col/diag counters), `battleships-in-a-board` (medium/simulation, top-left corner count), `ones-and-zeroes` (medium/dp, 2D 0/1 knapsack), `best-time-to-buy-and-sell-stock-with-cooldown` (medium/dp, hold/sold/rest state machine), `insert-delete-getrandom-o1` (medium/simulation+hash-map, O(1) with array+map swap-delete), `convert-binary-number-in-linked-list-to-integer` (easy/linked-list, bit accumulation). Bank at **1926**; 6072 tests.

### feat(bank): batch 80 (cont.) — 14 new problems (backtracking, heap, linked-list, simulation) (2026-05-26)
Added: `all-paths-source-to-target-backtrack` (grid path count with memoization), `factor-combinations` (backtracking factorizations), `find-all-increasing-subsequences` (non-descending subsequences, deduplicated), `generalized-abbreviation` (2^n abbreviations via backtracking), `maximum-cpu-load` (sweep + heap), `maximum-events-attended-with-k-events` (DP one-day attendance model: sort by end, s_p < s_i), `merge-k-sorted-arrays`, `sort-nearly-sorted-array` (heap window), `interleave-two-linked-lists`, `segregate-even-odd-linked-list`, `linked-list-decimal-value`, `bowling-game-score`, `ball-through-inclined-grid`, `token-bucket-rate-limiter`. Also: committed keyboard shortcuts modal update (move-line/delete-line), a11y fixes (aria-prohibited-attr). Bank at **1921**; 6051 tests.

### feat(bank): add batch 82 — 5 problems (BIT, shortest-path, tree, arrays) (2026-05-26)
Added 5 problems: `booking-concert-tickets-in-groups` (hard/BIT+simulation, BIT prefix-sum for scatter capacity + linear gather), `minimum-score-of-a-path-between-two-cities` (medium/shortest-path, min edge in BFS component), `path-with-maximum-probability` (medium/shortest-path, Dijkstra max-probability), `minimum-fuel-cost-to-report-to-the-capital` (medium/tree+dp, post-order subtree-size ceil), `minimum-operations-to-make-the-array-alternating` (medium/arrays+hash-map, top-2 frequency greedy). Also: added binary-indexed-tree tag to reverse-pairs. Bank at **1907**; 6009 tests.

### feat(bank): add batch 81 — 2 new problems (shortest-path, strings, dp) (2026-05-26)
Added 2 hard problems: `minimum-cost-to-reach-destination-in-time` (hard/shortest-path+dp, DP on (time,node) states minimizing passing fees with time budget), `total-appeal-of-a-string` (hard/strings+dp, contribution counting via last-occurrence tracking). Bank at **1902**; 5994 tests.

### feat(popup): streak-at-risk reminder + batch 79 expansion (2026-05-26)
Added streak reminder in popup (shows "Solve a problem today to keep your N-day streak" when user has streak but hasn't solved today). Added 12 more batch 79 problems: binary-search (divide-chocolate, find-the-smallest-divisor-given-a-threshold, magnetic-force-between-two-balls, nth-magical-number), two-pointers (get-equal-substrings-within-budget, longest-equal-subarray, three-sum-with-multiplicity), dp (new-21-game, shortest-common-supersequence, stickers-to-spell-word), design (design-exam-room, design-authentication-manager). Bank at **1897**; 5979 tests.

### feat(bank): add batch 79 — 3 new problems (DP, stack, binary-search) (2026-05-26)
Added 3 new problems: `ternary-expression-parser` (medium/strings+stack, right-to-left stack evaluation of nested ternaries), `count-all-possible-routes` (hard/dynamic-programming, memoized DFS with fuel budget, mod 10^9+7), `minimum-operations-to-make-array-k-increasing` (hard/dynamic-programming+binary-search, group by index mod k + LNDS via patience sort). Also: cleaned Pyodide-internal paths from Python error tracebacks (`cleanPythonTraceback` in python-worker.js), added copy-output button to TerminalPanel tab bar. Bank at **1885**; 5943 tests.

### feat(ui): add ErrorBoundary + theme selector (2026-05-26)
Added ErrorBoundary to prevent blank-screen crashes; added theme selector (dark/light/system) to Editor settings. (from concurrent session)

### feat(bank): add batch 78 — 12 new problems (arrays, strings, math, graph) (2026-05-26)
Added 12 new problems across arrays/two-pointers, strings/sliding-window, math/combinatorics, and graph/Dijkstra categories. `minimum-operations-to-make-all-array-elements-equal-to-one` (medium/arrays+math, GCD subarray min-length), `find-indices-with-index-and-value-difference-ii` (medium/arrays+two-pointers, sliding window minIdx/maxIdx), `minimum-absolute-difference-queries` (medium/arrays+hash-map, prefix counts over values 1–100), `minimum-cost-for-cutting-cake-ii` (hard/arrays+simulation, greedy sort-and-multiply), `find-number-of-ways-to-place-people` (medium/arrays, sort+maxY O(n²) rectangle pairs), `find-the-k-sum-of-an-array` (hard/arrays+heap, BFS subset-sum reduction with min-heap), `minimum-time-to-visit-disappearing-nodes` (medium/graph+shortest-path, Dijkstra with disappear-time constraint), `count-beautiful-substrings-i` (medium/strings+sliding-window, O(n²) vowel==consonant && len%k), `sort-transformed-array` (medium/arrays+two-pointers+math, two-pointer based on parabola direction), `check-if-parentheses-string-can-be-valid` (medium/strings+stack, range [lo,hi] tracking), `find-the-number-of-distinct-colors-among-the-balls` (medium/arrays+hash-map+simulation, two-map running distinct count), `count-the-number-of-arrays-with-k-matching-adjacent-elements` (hard/math+dp, C(n-1,k)×m×(m-1)^(n-1-k) mod 1e9+7). Bank at **1882**; 5934 tests.

### feat(bank): add batch 77 — 12 new problems (BIT, simulation, shortest-path) (2026-05-26)
Added 12 new problems targeting underrepresented tags. BIT (6 entries — 4 new files + 2 previously-orphaned files registered): `count-inversions` (medium), `range-sum-query-2d-mutable` (hard), `count-smaller-before-self-bit` (medium, prefix-query scanning left-to-right), `number-of-pairs-satisfying-inequality-bit` (hard, BIT with a[i]=nums1[i]-nums2[i] transform), `range-update-point-query-bit` (medium, difference-array BIT), `create-target-array-using-bit` (hard, splice simulation). Simulation (4 new): `robot-collisions` (hard, stack-based health resolution), `spiral-matrix-iv` (medium, layer-by-layer fill with boundary vars), `text-editor-simulation` (medium, two-stack cursor model), `atm-machine-simulation` (medium, greedy dispensing with rollback on failure). Shortest-path (4 new): `shortest-path-to-food` (medium, BFS in char grid), `minimum-jumps-to-reach-home` (medium, BFS with (pos,lastBack) state), `all-pairs-shortest-path` (medium, Floyd-Warshall), `minimum-cost-to-reach-all-nodes` (medium, Dijkstra returning full distance array). Bank at **1870**; 5898 tests.

### feat(editor): terminal UX — collapsible + resizable + auto-expand (2026-05-26)
Added drag-to-resize terminal panel (80px–480px) with a horizontal resize handle above the terminal; hid the resize handle when collapsed for a cleaner UI. Added collapse toggle button (▲/▼) in terminal tab bar — collapses body so the editor gains full height. When a run/submit result arrives while the terminal is collapsed, it auto-expands so the user sees the output. Arrow keys on the focused resize handle adjust height in 20px steps. Added `↑ ↓` row to the keyboard shortcuts modal. Marketing site stats updated to 1,870+.

### feat(bank): add batch 76 — 14 problems (union-find, heap, DP, graph, design) (2026-05-26)
5 new problem files + 9 orphan registrations. New: `remove-max-edges-graph-traversable` (hard/union-find, dual-DSU Alice+Bob), `exam-room` (medium/simulation, sorted-seat greedy), `checking-edge-length-limited-paths` (hard/union-find, offline sort+DSU), `last-day-still-cross` (hard/union-find+binary-search, binary-search+BFS), `minimum-cost-walk-weighted-graph` (medium/union-find, AND of all edges in component). Orphans: `maximum-average-pass-ratio` (medium/heap), `count-good-meals` (medium/hash-map), `rank-teams-by-votes` (medium/simulation), `minimum-refueling-stops` (hard/heap), `minimum-space-wasted-k-resizing` (medium/dp), `maximum-tasks-assign` (hard/binary-search), `maximum-total-beauty-gardens` (hard/binary-search), `maximum-xor-two-numbers-array` (medium/hash-map), `design-graph-shortest-path` (hard/graph+dijkstra). Fixed beauty-of-gardens solution bug (already-complete gardens misclassified). Bank at **1852**; 5856 tests.

### feat(bank): add batch 74 — 10 new problems (BIT, union-find, shortest-path, simulation) (2026-05-26)
Added 10 problems targeting underrepresented tags: `range-sum-query-mutable` (medium/BIT, BIT point update + prefix sum), `count-of-smaller-numbers-after-self-bit` (hard/BIT, coordinate-compress + BIT right-to-left), `create-sorted-array-through-instructions` (hard/BIT, BIT insertion cost tracking mod 1e9+7), `rank-transform-of-an-array` (easy/arrays, sorted-unique rank mapping), `similar-string-groups` (hard/union-find+strings, DSU on 0/2-diff string pairs), `the-maze` (medium/shortest-path+graph, BFS with wall-rolling stops), `minimum-time-to-remove-all-cars` (hard/dp, prefix/suffix DP), `process-restricted-friend-requests` (medium/union-find, DSU + restriction check before merge), `design-food-rating-system` (medium/simulation+heap, lazy-deletion max-heap design), `first-day-you-have-been-in-all-rooms` (medium/dp+simulation, 2*dp[i-1]-dp[nv]+2 formula mod 1e9+7). Bank at **1838** problems; 5802 tests.

### feat(ux): Practice-next solved indicators + site update to 1,825+ (2026-05-26)
Added `solved: boolean` to `RelatedProblem` interface in Challenge.tsx; "Practice next" section now shows ✓/· prefix on each suggested problem so users see which adjacent problems they have already completed. Marketing site updated from 1,800+ → 1,825+ in all three stat locations.

### feat(bank): add batch 73-remote (12 new problems) (2026-05-26)
Added 12 problems in underrepresented tags (graph/BFS/union-find/shortest-path/DP): `word-ladder-ii` (hard/graph+backtracking, BFS level-graph + DFS reconstruct all paths), `cut-off-trees-for-golf-event` (hard/graph+simulation, sort + repeated BFS), `number-of-distinct-islands` (medium/graph+hash-map, DFS relative-offset shape hashing), `network-becomes-idle` (medium/graph+shortest-path, BFS + last-resend formula), `smallest-string-with-swaps` (medium/union-find+strings, DSU + sort-within-component), `remove-boxes` (hard/dp, 3D dp[l][r][k] memoization), `escape-the-spreading-fire` (hard/graph+binary-search, multi-source fire BFS + binary search on wait), `minimize-malware-spread` (medium/union-find, sole-infected component sweep), `number-of-good-paths` (hard/union-find+tree, sorted-edge union with cnt tracking), `longest-substring-with-at-least-k-repeating` (medium/strings, divide-and-conquer split on low-freq chars), `count-battleships-in-a-board` (medium/arrays, top-left corner counting), `detect-cycles-in-2d-grid` (medium/graph+union-find, DFS cycle detection). Fixed word-ladder-ii expected values (sorted paths, corrected invalid cases). Bank at **1828** problems; 5772 tests.

### feat(bank): register 8 new problems + deduplicate (2026-05-26)
Registered 8 new problems created by background agent: `satisfiability-of-equality-equations` (medium/union-find+graph), `pour-water` (medium/simulation), `bricks-falling-when-hit` (hard/union-find+simulation), `wiggle-sort` (medium/arrays), `redundant-connection-ii` (hard/union-find+graph, directed cycle+double-parent detection), `candy-crush` (medium/simulation), `largest-component-size-by-common-factor` (hard/union-find+math), `reachable-nodes-in-subdivided-graph` (hard/graph+dijkstra). Removed duplicate `design-goal-parser` JS solution, removed duplicate `shortest-path-in-binary-matrix` (already covered). JS + Python solutions for all 8. Bank at **1815** problems; 5736 tests.

### feat(bank): hints backfill complete pass (2026-05-26)
82 single-hint easy problems upgraded to 3-level progressive hints (approach → implementation → code skeleton). 23 important 2-hint medium/hard problems upgraded to 3-hint structure (decode-string, copy-list-with-random-pointer, kth-smallest-element-in-bst, increasing-triplet-subsequence, delete-and-earn, and 18 more). Terminal UX: TestDotMatrix visual pass/fail grid shown above summary when verdicts > 3 (dot = pass/fail/error at a glance). Straggler `minimum-index-sum-of-two-lists` upgraded from 1 → 3 hints. Hint distribution after this session: 1×1-hint, 198×2-hint, 1249×3-hint, 361×4+-hint.

### merge: batch 71 (5 new) + remote batch 71-72 integration (2026-05-26)
Merged our batch-71 (5 new problems: `find-the-city-with-smallest-number-of-neighbors-at-a-threshold-distance`, `maximum-candies-allocated-to-k-children`, `number-of-restricted-paths-from-first-to-last-node`, `minimum-swaps-to-sort-an-array`, `minimum-replacements-to-sort-the-array`) with remote concurrent additions. Bank at **1807**; 5709 tests.

### Batch 71 + terminal UX (2026-05-26)
Added 6 new problems: `find-the-good-days-to-rob-bank` (medium/arrays+dp), `frequency-tracker` (medium/hash-map, design with dual-map O(1)), `minimum-extra-characters-in-a-string` (medium/strings+dp), `minimum-seconds-to-equalize-a-circular-array` (medium/arrays+math), `movement-of-robots` (medium/arrays+math, pass-through collision trick with BigInt pairwise prefix sum), `number-of-ways-of-cutting-a-pizza` (hard/arrays+dp, 2D prefix sum + memoized DP). Terminal UX: only the first failing test auto-expands (not all), scroll-to-top when auto-switching to test-results tab on failure. Marketing site stats updated to 1,750+. Bank at **1793**; 5658 tests.

### 🎉 1,800-problem milestone + marketing site update (2026-05-26)
Bank confirmed at **1802** problems with 5694 tests passing. Marketing site updated from "1,750+" → "1,800+" in all three stat locations. Performance optimization: O(1) `getProblemById` via module-level Map; `filterProblems` uses a Set for O(1) exclude lookups. Hints backfill ongoing: 47 single-hint easy problems upgraded to 3-level progressive hints so far.

### Batch 72-local (2026-05-26)
Added 3 new problems: `reorder-data-in-log-files` (easy/strings+arrays, partition then sort letter-logs by content+id), `minimum-one-bit-operations-to-make-integers-zero` (hard/math, Gray code inverse via iterative XOR), `longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit` (medium/sliding-window, two monotonic deques for running max/min). JS + Python solutions for all. Bank at **1788**; 5667 tests.

### Batch 71 (our, 2026-05-26)
Added 13 new problems (14 registered; `maximum-product-of-two-elements-in-an-array` duplicate of upstream `...-in-array`): `find-peak-element-ii` (medium/binary-search, O(m log n) 2D peak), `check-completeness-of-a-binary-tree` (medium/tree, BFS null-gap on array), `all-ancestors-of-a-node-in-a-dag` (medium/graph+dp, DFS from each node), `number-of-nodes-in-subtree-with-same-label` (medium/tree+hash-map), `determine-if-cell-is-reachable-at-given-time` (medium/math, Chebyshev distance), `sum-in-a-matrix` (medium/arrays, sort-rows then column maxes), `largest-substring-between-two-equal-characters` (easy/strings), `destroy-sequential-targets` (medium/arrays+hash-map, modulo groups), `minimize-result-by-adding-parentheses-to-expression` (medium/strings+math), `minimum-sum-of-a-k-avoiding-array` (medium/arrays+math), `count-ways-to-build-rooms-in-an-ant-colony` (hard/tree+dp+math), `length-of-the-longest-alphabetical-continuous-substring` (medium/strings), `number-of-strings-that-appear-as-substrings-in-word` (easy/strings). Fixed Pyodide JsNull vs None check (use isinstance(x, int)) for Python solutions with null array elements. Bank at **1785**; 5640 tests.

### Batch 71-local (2026-05-26)
Added 5 new problems: `minimize-deviation-in-array` (hard/heap+math, multiply-odd-then-halve-max greedy), `prison-cells-after-n-days` (medium/arrays+simulation, cycle detection in 8-bit automaton), `all-ancestors-of-a-node-in-a-directed-acyclic-graph` (medium/graph, DFS from each node as ancestor), `delete-nodes-and-return-forest` (medium/tree, post-order DFS with parent-deleted flag), `naming-a-company` (hard/strings+hash-map, 26×26 suffix set pair counting). JS + Python solutions for all. Bank at **1771**; 5586 tests.

### feat(site): 18 topic categories + tag list (2026-05-26)
Marketing site updated: Topic categories stat updated from 14 → 18 (union-find, binary-indexed-tree, simulation, shortest-path added). Tag list in stats section now includes all 18 tags. Feature block updated to mention "union-find, and more".

### Batch 71 (2026-05-26)
Added 7 new problems: `maximum-product-of-two-elements-in-array` (easy/arrays, sort desc top-2), `find-the-highest-altitude` (easy/arrays, prefix-sum max), `find-the-array-concatenation-value` (easy/arrays, two-pointer concatenation), `running-sum-of-1d-array` (easy/arrays, prefix sum), `check-distances-between-same-letters` (easy/arrays+strings, first-occurrence spacing), `find-missing-and-repeated-values` (easy/arrays+hash-map, frequency count), `find-indices-of-stable-mountains` (easy/arrays, previous-height > threshold). JS + Python solutions for all. Bank at **1766**; 5586 tests.

### Batch 68-local-2 (2026-05-26)
Added 5 new hard problems from deferred batch: `find-median-from-data-stream` (hard/heap, two sorted-insert heaps), `check-completeness-of-binary-tree` (medium/tree, BFS null-gap check), `earliest-possible-day-of-full-bloom` (hard/arrays+math, greedy sort by grow time), `find-the-longest-valid-obstacle-course-at-each-position` (hard/arrays+binary-search, patience-sort LNDS), `minimum-time-to-finish-the-race` (hard/dp, precompute best consecutive laps + DP). JS + Python solutions for all.

### Batch 70 remote (2026-05-26)
Added 5 problems: `check-if-it-is-a-good-array` (hard/math, Bézout's identity / GCD), `maximum-coins-you-can-get` (medium/arrays, greedy sort + every-other pick), `number-of-islands-ii` (hard/graph, online DSU), `find-the-celebrity` (medium/arrays, O(n) candidate elimination), `minimum-number-of-days-to-disconnect-island` (hard/graph, 0/1/2 answer + BFS). JS + Python solutions for all.

### feat(sw): badge shows today's solve count (2026-05-26)
Extension icon badge now updates after each solve to show problems solved today (e.g. "3"). Uses neutral dark gray background. Also refreshed on install/startup and storage changes.

### feat(challenge): personal best tracking (2026-05-26)
After solving in standalone/practice mode the Time stat now shows "personal best" (white accent) on a new record, "first solve" (muted) with no prior timed data, or "best Xm Ys" (faint) when not beating the previous best. Also passes `solveDurationMs` in `grant-unlock` so future solves are recorded with timing.

### Batch 68+69-local backfill (2026-05-26)
Added 14 previously deferred problems from batch-68 and batch-69-local sessions: `best-time-to-buy-and-sell-stock-iii` (hard/arrays+dp, at-most-2-transactions state machine), `find-the-duplicate-number` (medium/arrays+two-pointers, Floyd's cycle detection), `maximum-difference-in-array` (easy/arrays, min-so-far scan), `longest-subarray-with-at-most-k-frequency` (medium/arrays+sliding-window+hash-map), `count-pairs-in-two-arrays` (medium/arrays+binary-search, diff-array sort + bisect), `image-smoother` (easy/arrays, 3×3 box filter floor-average), `complex-number-multiplication` (medium/strings+math, (a+bi)(c+di) formula), `number-of-boomerangs` (medium/hash-map+math, equidistant ordered pairs), `find-duplicate-file-in-system` (medium/strings+hash-map, content-to-path grouping), `poor-pigs` (hard/math, (rounds+1)^pigs >= buckets), `strobogrammatic-number` (easy/strings+math, two-pointer pair validation), `fraction-addition-and-subtraction` (medium/strings+math, gcd cross-multiply), `longest-zigzag-path-in-binary-tree` (medium/tree+dp, DFS direction tracking), `find-the-duplicate-subtrees` (medium/tree+hash-map, post-order serialization). JS + Python solutions for all. Bank at **1741**; 5511 tests.

### Batch 70 (2026-05-26) — local session A
Added 8 new problems: `cells-in-a-range-on-an-excel-sheet` (easy/strings, column+row nested loop), `make-two-arrays-equal-by-reversing-subarrays` (easy/arrays+hash-map, frequency equality), `count-pairs-of-similar-words` (easy/hash-map, canonical char-set key), `construct-the-rectangle` (easy/math, sqrt factorization), `minimum-number-of-buckets-required` (medium/strings, greedy right-first bucket placement), `apply-discount-every-n-items` (easy/arrays, 1-indexed modulo), `sum-game` (medium/math, parity + diff formula), `find-the-k-th-lucky-number` (easy/math, binary-digit-to-4/7 mapping). JS + Python solutions for all. Bank at **1745**; 5535 tests.

### Batch 70 (2026-05-26) — local session B (1,750 milestone!)
Added 5 new problems: `check-if-it-is-a-good-array` (hard/math, Bézout's identity — gcd(nums)==1), `maximum-coins-you-can-get` (medium/arrays, greedy sort descending + every-other pick), `number-of-islands-ii` (hard/arrays+union-find, online DSU with path-compression + rank), `find-the-celebrity` (medium/arrays+graph, O(n) candidate-elimination), `minimum-number-of-days-to-disconnect-island` (hard/arrays+graph, 0/1/2 answer with BFS island count). Fixed Python solutions: `sorted()` instead of `.sort()` for JsProxy safety; BFS instead of recursive DFS to avoid recursion-limit on 30×30 grids; list comprehension instead of `copy.deepcopy` for grid conversion. Bank at **1750**; 5550 tests.

### Batch 69 (this session, 2026-05-26)
Added 8 new problems: `find-score-of-an-array-after-marking-all-elements` (medium/heap+simulation, greedy mark-and-score), `count-zero-request-servers` (hard/sliding-window, sort+two-pointer server counts), `maximum-score-after-applying-operations-on-a-tree` (medium/tree+dp, minimize kept nodes covering all root-to-leaf paths), `counting-words-with-a-given-prefix` (easy/strings, startsWith filter), `earliest-moment-everyone-became-friends` (medium/union-find, sort+DSU), `minimum-weighted-subgraph-with-the-required-paths` (hard/graph+dijkstra, 3×Dijkstra + meeting-point sweep), `longest-path-in-a-directed-acyclic-graph` (medium/dp+graph, toposort + consecutive-char DP), `count-good-triplets-in-an-array` (hard/binary-indexed-tree, permutation mapping + BIT left-smaller/right-larger). Also added new ProblemTags: `union-find`, `binary-indexed-tree`, `simulation`, `shortest-path`. JS + Python solutions for all. Bank at **1731**; 5481 tests.

### Batch 69-local (2026-05-26)
Added 9 new problems: `image-smoother` (easy/arrays, 3×3 box filter floor-average), `complex-number-multiplication` (medium/strings+math, (a+bi)(c+di) formula), `number-of-boomerangs` (medium/hash-map+math, equidistant ordered pairs), `find-duplicate-file-in-system` (medium/strings+hash-map, content-to-path grouping), `poor-pigs` (hard/math+dp, (rounds+1)^pigs >= buckets), `strobogrammatic-number` (easy/strings+math, two-pointer pair validation), `fraction-addition-and-subtraction` (medium/strings+math, gcd cross-multiply), `longest-zigzag-path-in-binary-tree` (medium/tree+dp, DFS direction tracking), `find-the-duplicate-subtrees` (medium/tree+hash-map, post-order serialization). Also fixed duplicate import of `minimum-replacements-to-sort-array`. JS + Python solutions for all. Bank at **1723**; 5457 tests.

### Batch 67-local (2026-05-26)
Added 5 new problems: `number-of-ways-to-select-buildings` (medium/strings+dp, 010/101 subsequence count), `maximum-fruits-harvested-after-at-most-k-steps` (hard/arrays+sliding-window, reachable range), `count-unique-chars-of-all-substrings` (hard/strings+dp, prev/next same-char contribution), `minimum-money-required-before-transactions` (hard/arrays+math, worst-case ordering), `count-subarrays-with-fixed-bounds` (hard/arrays+sliding-window, jbad/jmin/jmax tracking). JS + Python solutions for all. Bank at **1715**; 5430 tests.

### Batch 69 (2026-05-26)
Added 4 new problems: `merge-nodes-in-between-zeros` (medium/linked-list, accumulate sums between zeros), `reachable-nodes-with-restrictions` (medium/graph, BFS from 0 avoiding restricted nodes), `minimum-number-of-k-consecutive-bit-flips` (hard/sliding-window, greedy difference array), `minimum-size-subarray-in-infinite-array` (medium/sliding-window, prefix-sum + double array). JS + Python solutions for all. Bank at **1711**; 5415 tests.

### Batch 67+68 backfill (2026-05-26)
Registered 14 previously orphaned problems (files existed on disk but weren't imported in index.ts):
- batch-67: 13 problems — `minimum-operations-to-make-uni-value-grid`, `minimum-moves-to-make-array-complementary`, `find-winner-of-array-game`, `maximum-number-of-robots-within-budget`, `minimum-limit-of-balls-in-a-bag`, `maximum-rows-covered-by-columns`, `minimum-array-length-after-pair-removals`, `count-the-number-of-complete-components`, `design-memory-allocator`, `campus-bikes` (fixed: greedy→min-cost assignment), `escape-the-ghosts` (fixed: equal-distance = false), `maximum-value-of-k-coins-from-piles` (fixed: 2 wrong test values), `parallel-courses-iii`
- batch-65-local: `max-stack` (medium/stack, dual-stack popMax). JS + Python solutions added.
Bank at **1706**; 5403 tests.

### Batch 68 (2026-05-26)
Added 6 problems: `best-time-to-buy-and-sell-stock-iii` (hard/arrays+dp, at-most-2-transactions state machine), `find-the-duplicate-number` (medium/arrays+two-pointers, Floyd's cycle detection), `count-subarrays-with-fixed-bounds` (hard/arrays+sliding-window, three-pointer), `maximum-difference-in-array` (easy/arrays, min-so-far scan), `longest-subarray-with-at-most-k-frequency` (medium/arrays+sliding-window+hash-map), `count-pairs-in-two-arrays` (medium/arrays+binary-search, diff-array sort + bisect). Fixed 5 wrong expected values. Bank at **1692**; 5361 tests.

### Batch 67 (2026-05-26)
Merged batch 66 (local): 6 new problems from deferred stash — `find-the-k-or-of-an-array` (easy/math), `minimum-number-of-operations-to-satisfy-conditions` (medium/dp), `maximum-sum-of-almost-unique-subarray` (medium/sliding-window), `split-array-into-maximum-number-of-subarrays` (medium/arrays), `minimum-number-of-operations-to-make-array-xor-equal-to-k` (easy/math), `maximum-alternating-subarray-sum` (medium/dp). Also backfilled 8 missing JS+Python solutions for batches 64-65. Bank at **1688**; 5352 tests.

### Batch 66-local (2026-05-26)
Added 5 problems: `find-if-path-exists-in-graph` (easy/graph, BFS), `longest-subarray-of-ones-after-deleting-one-element` (medium/sliding-window, at-most-one-0), `check-if-array-pairs-are-divisible-by-k` (medium/arrays+math, remainder pairing), `maximum-beauty-of-an-array-after-applying-operation` (medium/arrays+sliding-window, sort+2k window), `rearrange-characters-to-make-target-string` (easy/strings+hash-map, min freq floor-div). Bank at **1670**; 5298 tests.

### Batch 66 (2026-05-26)
Added 5 problems: `find-all-numbers-disappeared-in-array` (easy/arrays+hash-map, O(n) set lookup), `kth-largest-element-in-array` (medium/arrays+heap, sort descending), `best-time-to-buy-and-sell-stock-ii` (medium/arrays+dp, greedy positive consecutive diffs), `count-good-nodes-in-binary-tree` (medium/tree+dp, DFS with max-on-path tracking), `minimum-depth-of-binary-tree` (easy/tree, DFS to nearest leaf). Python tree solutions build tree inline with Pyodide null handling via try/except int(). Bank at **1675**; 5313 tests.

### Batch 66 (prior) (2026-05-26)
Added 5 problems: `soup-servings` (medium/dp+math, memoized top-down DP; returns 1.0 for n≥4800), `minimum-number-of-rabbits` (medium/hash-map+math, frequency count + ceiling group formula), `the-maze-ii` (medium/graph, Dijkstra ball-rolling with step distances), `maximum-vacation-days` (hard/dp+graph, week-by-week DP through flight adjacency), `grid-illumination` (hard/hash-map, 4 direction count maps + 9-cell teardown). Also added missing JS+Python reference solutions for batch 64 remote problems (`minimum-taps-to-open-to-water-a-garden`, `put-marbles-in-bags`, and 3 others). Bank at **1668**; 5268 tests.

### Batch 65-local (2026-05-26)
Added 5 problems: `count-pairs-that-form-a-complete-day-ii` (medium/arrays+math, same mod-24 freq approach), `kth-largest-element-in-a-stream` (easy/heap, design with sorted binary-insert), `check-if-the-sentence-is-pangram` (easy/strings, Set size >= 26), `count-number-of-ways-to-place-houses` (medium/dp, Fibonacci^2 mod 10^9+7), `count-ways-to-group-overlapping-ranges` (medium/arrays+math, merge intervals → 2^k). Bank at **1655**; 5253 tests.

### Batch 63 (2026-05-26)
Added 8 problems: `count-number-of-special-integers` (medium/math+dp, digit DP over same-length numbers), `divide-intervals-into-minimum-number-of-groups` (medium/arrays+heap, sweep line), `maximum-building-height` (hard/arrays+math, forward+backward restriction propagation), `minimum-number-of-groups-to-create-a-valid-assignment` (medium/arrays+hash-map, frequency grouping with ceil formula), `minimum-number-of-moves-to-make-palindrome` (hard/strings+two-pointers, greedy bubble sort toward palindrome), `node-with-highest-edge-score` (easy/graph+hash-map, weighted in-degree sum), `number-of-beautiful-subarrays` (medium/arrays+hash-map, XOR prefix count), `zero-array-transformation-i` (medium/arrays+two-pointers, difference array coverage check). JS + Python solutions with Pyodide proxy fixes. Bank at **1658**; 5238 tests.

### Batch 64-local (2026-05-26)
Added 5 problems: `number-of-wonderful-substrings` (medium/strings+hash-map, XOR prefix bitmask over 10 chars), `design-a-number-container-system` (medium/hash-map, sorted bisect index list), `continuous-subarrays` (medium/arrays+sliding-window, dual monotone deques), `count-pairs-that-form-a-complete-day-i` (easy/arrays+math, freq-map mod-24 complement), `substring-with-largest-variance` (hard/arrays+dp, Kadane over all 650 char pairs). JS + Python solutions. Bank at **1654**; 5250 tests.

### Batch 65 + UX polish (2026-05-26)
Added 7 problems: `max-stack` (medium/stack, dual-stack popMax buffer), `shift-2d-grid` (easy/arrays, circular shift), `find-and-replace-in-string` (medium/strings, simultaneous replacements), `check-whether-two-strings-are-almost-equivalent` (easy/strings+hash-map, |freq diff|≤3), `minimum-number-of-swaps-to-make-the-binary-string-alternating` (medium/strings+math), `maximum-number-of-non-overlapping-subarrays-with-sum-equals-target` (medium/arrays+hash-map, greedy prefix sum), `find-the-minimum-possible-sum-of-a-beautiful-array` (medium/math, BigInt closed-form). UX: submissions timestamp now shows today/yesterday/date context; TLE label fixed to "Time Limit Exceeded"; challenge tab title includes difficulty prefix [E/M/H]. Bank at **1649**; 5235 tests.

### Batch 64 (2026-05-26)
Added 5 problems: `minimum-cost-valid-path-in-grid` (hard/graph, 0-1 BFS Dijkstra), `decrease-elements-to-make-array-zigzag` (medium/arrays, two-strategy greedy), `maximal-network-rank` (medium/graph, degree + connected set), `minimum-taps-to-open-to-water-a-garden` (hard/arrays+dp, greedy interval cover), `put-marbles-in-bags` (hard/arrays, sort adjacent pair sums, top/bottom k-1 diff). JS + Python solutions for all. Bank at **1642**; 5214 tests.

### Batch 63-local-2 (2026-05-26)
Added 5 problems: `two-best-non-overlapping-events` (medium/arrays+binary-search, sort by end + prefix max + bisect), `minimum-lines-to-represent-a-line-chart` (medium/arrays+math, sort + cross-multiply slopes via BigInt), `number-of-common-divisors` (easy/math, gcd + O(sqrt) divisor count), `first-completely-painted-row-or-column` (medium/arrays+hash-map, position map + row/col max index), `maximum-prime-difference` (medium/arrays+math, first/last prime index). JS + Python solutions for all. Bank at **1637**; 5199 tests.

### Batch 63-local (2026-05-26)
Added 5 problems: `count-consistent-strings` (easy/strings, Set-based allowed-char filter), `max-points-you-can-obtain-from-cards` (medium/sliding-window, minimize un-taken middle window), `number-of-steps-to-reduce-number-in-binary-representation-to-one` (medium/strings+math, simulate carry-based binary reduction), `minimum-score-by-changing-two-elements` (medium/math+greedy, sort + try 3 strip-edge combos), `sqrtx` (easy/binary-search, integer sqrt). JS + Python solutions for all. Bank at **1632**; 5184 tests.

### Batch 62 — 5 new problems (2026-05-26)
Added 5 problems: `group-shifted-strings` (medium/strings+hash-map, shift-delta canonical key), `sparse-matrix-multiplication` (medium/arrays, skip-zero sparse optimization), `maximum-depth-n-ary-tree` (easy/tree, DFS recursive with N-ary runner preamble), `n-ary-tree-level-order-traversal` (medium/tree, BFS level-collection with N-ary runner preamble), `n-ary-tree-preorder-traversal` (easy/tree+stack, iterative stack with reverse-children push, N-ary runner preamble). Also committed 4 problems from a prior incomplete session (batch 63): `number-of-increasing-paths-in-a-grid`, `minimum-time-to-visit-a-cell-in-a-grid`, `number-of-beautiful-subsets`, `maximum-number-of-fish-in-a-grid` — fixed bugs: inverted parity in wait formula (Dijkstra); wrong expected value in number-of-beautiful-subsets. JS + Python solutions for all. Bank at **1622**; 5139 tests.

### Batch 58+59-new (2026-05-26)
Added 21 new problems: `find-subarrays-with-equal-sum` (arrays/easy), `best-poker-hand` (arrays/easy), `count-incremovable-subarrays` (arrays/easy, O(n²) brute-force), `step-by-step-directions` (tree/medium, LCA path), `minimum-number-of-food-buckets` (greedy/medium, right-first bucket placement, skip 3 on right-place), `super-ugly-number` (dp/medium, multi-pointer), `reward-top-k-students` (arrays/medium, word-set scoring), `count-subarrays-with-score-less-than-k` (sliding-window/hard), `maximum-number-of-jumps-to-reach-last-index` (dp/medium), `minimum-number-of-coins-for-fruits` (dp/medium), `freq-stack` (design/hard, freq-map + stack map), `minimum-cost-to-equalize-array` (math/medium), `maximum-total-damage` (dp/medium, delete-and-earn variant ±2), `special-array-ii` (arrays/medium, prefix bad-pair count), `find-maximum-length-valid-subsequence` (dp/medium, mod-2 DP), `count-submatrices-all-ones` (dp/medium, histogram DP), `minimum-length-of-string-after-operations` (strings/medium, odd→1 even→2), `count-special-characters-i` (strings/easy), `maximum-jumps-to-reach-last-index` (dp/medium), `minimum-operations-to-make-array-equal-ii` (math/medium), `minimum-cost-for-cutting-cake-i` (greedy/medium). Also adds vim mode indicator (NORMAL/INSERT/VISUAL) to EditorPanel. Fixed wrong expected values in 6 test cases. Bank at **1595**; 5112 tests.

### Batch 63 (2026-05-26)
Added 5 problems: `design-hit-counter` (medium/hash-map, simulate HitCounter class via operations/args array), `remove-colored-pieces` (medium/strings, Alice/Bob game count run-based moves), `swap-adjacent-in-lr-string` (medium/two-pointers, L/R movement constraint check), `next-greater-element-iv` (hard/stack, two monotone stacks for second NGE), `minimum-number-of-operations-to-make-arrays-similar` (hard/math+arrays, sort by parity + pair + sum positive diffs). Merged with concurrent agents — bank at **1632**; 5184 tests.

### fix(about): dynamic tag count + marketing site 1,560+ (2026-05-26)
AboutSection tag count now derived from `PROBLEM_TAGS.length` instead of hardcoded 14. Marketing site `site/index.html` updated from 1,500+ → 1,560+ in all three stat locations.

### Batch 62-local (2026-05-26)
Added 5 problems: `find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k` (greedy/easy, largest-fib-first), `count-pairs-of-similar-strings` (hash-map/easy, bitmask/sorted-char key), `maximum-difference-between-increasing-elements` (arrays/easy, min-so-far scan), `longest-path-with-different-adjacent-characters` (tree+dp/medium, DFS top-2 chains), `increment-submatrices-by-one` (arrays/medium, 2D difference array + prefix sums). JS + Python solutions for all. Bank at **1613**; 5127 tests.

### Batch 61-local (2026-05-26)
Added 5 problems: `check-if-every-row-and-column-contains-all-numbers` (easy/arrays, row+col set dedup), `maximum-strong-pair-xor-i` (easy/arrays+math, O(n²) pair XOR with |x-y|≤min(x,y) guard), `extra-characters-in-a-string` (medium/dp+strings, O(n²) DP with dict set lookup), `kth-largest-sum-in-a-binary-tree` (medium/tree+heap, BFS level sums + sort, with preamble), `sum-of-matrix-after-queries` (medium/arrays+hash-map, reverse-order row/col query with set tracking). Bank at **1569**; 5022 tests.

### Batch 59-local (2026-05-26)
Added 5 easy problems: `count-substrings-starting-and-ending-with-given-character` (strings+math, count formula n+n*(n-1)/2), `minimum-number-of-changes-to-make-binary-string-beautiful` (strings, pair mismatch count), `distribute-money-to-maximum-children` (math, greedy 8-dollar distribution with no-4 guard), `check-if-strings-can-be-made-equal-with-operations` (strings, even/odd parity multiset equality), `count-days-spent-together` (strings+math, day-of-year conversion + overlap). Fixed test case for `0110` (expected 2 not 1). Bank at **1559**; 4965 tests.

### Batch 58 (2026-05-26)
Added 10 problems: `max-consecutive-ones-ii` (arrays/medium, sliding-window flip-one-zero), `length-of-longest-fibonacci-subsequence` (dp/medium, O(n²) pair DP), `detect-squares` (design/medium, point-count + x→ys map), `grid-game` (arrays/medium, two-robot prefix sum), `maximum-white-tiles-covered-by-carpet` (arrays/medium, sort + binary search + prefix), `minimum-operations-to-make-all-array-elements-equal` (arrays/medium, sorted prefix sum + binary search), `reverse-words-in-a-string-ii` (strings/medium, two-step in-place reversal), `count-subarrays-with-median` (arrays/hard, balance freq map), `maximum-sum-queries` (arrays/hard, monotone stack + binary search), `find-the-longest-equal-subarray` (arrays/medium, sliding-window per-value positions). JS + Python solutions for all. Bank at **1564**; 5007 tests.

### a11y: motion-safe: prefix on all animations (2026-05-26)
Added `motion-safe:` to all `animate-spin` and `animate-pulse` instances so they respect `prefers-reduced-motion: reduce`. Affects: TopBar timer pulse, EditorPanel run/submit spinners, TerminalPanel running-state pulse, CustomTestPanel spinners. State still communicated without motion.

### Batch 60 (2026-05-26)
Added 5 problems: `minimum-number-of-operations-to-make-array-continuous` (arrays/hard, sliding window on unique sorted values), `pacific-atlantic-water-flow` (graph/medium, reverse BFS from both oceans), `critical-connections-in-a-network` (graph/hard, Tarjan bridge-finding), `minimum-cost-to-cut-a-stick` (dp/hard, interval DP on sorted cut points), `largest-rectangle-in-histogram` (stack/hard, monotonic stack). Note: 4 originally requested problems were already in bank — unique replacements selected. JS + Python solutions for all. Bank at **1554**; 4950 tests.

### a11y(editor): language selector radiogroup fix (2026-05-26)
Added `tabIndex` roving (0 for selected, -1 for others) and ArrowLeft/ArrowRight keyboard navigation to the language selector in EditorPanel. Matches the ARIA radiogroup pattern already used in Popup and TerminalPanel.

### Batch 58-local (2026-05-26)
Added 5 problems (bank 60): see `feat(bank): add Batch 58-local` commit. Bank at **1549**; 4935 tests.

### Batch 59 (2026-05-26)
Added 5 problems: `next-closest-time` (strings/medium, brute-force all 4^4 digit combos), `employee-free-time` (arrays+heap/hard, flatten+merge intervals→gaps), `maximum-sum-of-3-non-overlapping-subarrays` (arrays+dp/hard, sliding window+left/right argmax arrays), `domino-tromino-tiling` (dp/medium, dp[i]=2*dp[i-1]+dp[i-3]), `split-array-with-same-average` (arrays+dp/hard, meet-in-the-middle). JS + Python solutions for all. Bank at **1544**; 4908+ tests.

### Batch 57-local (2026-05-26)
Added 4 problems: `minimum-number-of-moves-to-seat` (arrays/easy, sort+pair), `number-of-senior-citizens` (strings/easy, pos 11-12 age parse), `maximum-number-of-groups-with-increasing-length` (arrays/medium, binary search on m), `make-integer-beautiful` (math/medium, greedy round-up BigInt). Also merged Batch 57-remote (8 problems from concurrent agent: `sum-of-digits-in-base-k`, `count-symmetric-integers`, `minimum-number-of-pushes-to-type-word-i`, `divide-array-into-groups-of-size-k`, `count-subarrays-of-length-three-with-a-condition`, `minimum-operations-to-make-array-divisible-by-three`, `find-the-punishment-number-of-integers`, `minimum-additions-to-make-valid-string`). Bank at **1539**; 4905 tests.

### Batch 58 + accessibility/UX pass (2026-05-26)
Added 5 problems: `maximum-total-reward-using-operations-i` (dp/medium, bitset DP), `minimum-array-end` (arrays/medium, bit fill), `maximum-number-of-moves-in-a-grid` (dp/medium, column-BFS), `minimum-cost-to-convert-string-i` (graph/medium, Floyd-Warshall), `ways-to-split-array-into-three-subarrays` (binary-search/medium, prefix sums + two binary searches). Also: `fix(challenge)` pagehide streak damage on force-close; `a11y(terminal)` tablist arrow-key nav with proper tabIndex management; `a11y(popup)` RadioGroup component with arrow-key navigation and tabIndex for all 4 radiogroups; removed stale "Phase 5" dev comment. Bank at **1535**; 4893 tests.

### Batch 57 (2026-05-26)
Added 15 problems: `convert-binary-linked-list` (easy), `diagonal-traverse-ii` (medium), `design-circular-deque` (medium), `beautiful-towers-i` (medium), `maximum-tastiness-candy-basket` (medium, binary search), `shortest-subarray-sum-at-least-k` (hard, monotone deque), `substring-with-concatenation-of-all-words` (hard, sliding window), `minimum-people-to-teach` (medium), `punishment-number-of-integer` (medium, backtracking), `minimum-cost-to-separate-sentence-into-rows` (medium, DP), `maximum-running-time-of-n-computers` (hard, BigInt binary search), `count-strictly-increasing-subarrays` (medium, sliding window), `minimum-score-path-between-two-cities` (medium, BFS), `split-message-based-on-limit` (hard), `longest-word-in-dict-deleting` (medium, two-pointers). JS + Python solutions for all. Bank at **~1523**; 4839 tests.

### Batch 56-local (2026-05-26)
Added 3 problems: `longest-even-odd-subarray-with-threshold` (arrays+sliding-window/easy, O(n) even-start alternating window), `find-the-value-of-the-partition` (arrays+math/medium, sort + min adjacent gap), `clear-digits` (strings+stack/easy, stack-based digit removal). Bank at **1508**; 4809 tests.

### 🎉 1,500-problem milestone + 2 more (2026-05-25)
Added `count-all-valid-pickup-and-delivery-options` (dp/hard, mod dp n×(2n-1)) and `maximum-average-subarray-ii` (binary-search/hard, 100-iter float bisect). Marketing site updated to "1,500+" in all three locations. Refactored fragile easy+stack exclusion list in `problems.test.ts` to exclude all bank IDs — maintenance-free as bank grows. Bank at **1504** problems; 4800 tests.

### fix(terminal): UX polish (2026-05-25)
TestResultCard now shows `durationMs` for FAIL verdicts (alongside the existing PASS timing), so users can gauge proximity to TLE. Runtime-error cards gain a copy button for the error message to ease debugging.

### Batch 56 (2026-05-25)
Added 5 problems from parallel agent: `arithmetic-slices-ii-subsequence` (dp/hard), `max-dot-product-of-two-subsequences` (dp/hard), `number-of-squareful-arrays` (backtracking/hard), `selling-pieces-of-wood` (dp/hard), `number-of-dice-rolls-with-target-sum` (dp/medium).

### Batch 55-local-2 (2026-05-25)
Added 5 problems: `delete-greatest-value-in-each-row` (arrays/easy, sort rows + column maxes), `sort-the-jumbled-numbers` (arrays/medium, mapped digit stable sort), `minimum-operations-to-make-array-alternating` (arrays+hash-map/medium, top-2 freq greedy), `maximum-total-importance-of-roads` (arrays+graph/medium, sort degrees assign 1..n), `smallest-subarrays-with-maximum-bitwise-or` (arrays+sliding-window/medium, per-bit next-occurrence scan). Bank at **1497**; 4779 tests.

### Batch 55-local (2026-05-25)
Added 5 problems: `implement-strstr` (strings/easy, sliding window index match), `repeated-string-match` (strings/medium, ceil reps + 1 check), `pass-the-pillow` (math/easy, 2(n-1) cycle formula), `number-of-changing-keys` (strings/easy, case-insensitive adjacent diff count), `maximum-repeating-substring` (strings/easy, greedy extend repeat). Also merged Batch 56 (10 problems from parallel agents): `maximize-greatness-of-an-array`, `neighboring-bitwise-xor`, `minimize-xor`, `find-the-maximum-number-of-marked-indices`, `minimize-maximum-of-array`. Bank at **1492**; 4764 tests.

### popup: live countdown (2026-05-25)
Active unlock countdown timers in the popup now refresh every 30 seconds via a `setInterval`, so "Xm left" ticks down without reopening.

### Batch 55 (2026-05-25)
Added 5 problems: `alternating-groups-ii` (sliding-window/medium, duplicate-array circular window), `count-of-connected-components` (graph/medium, Union-Find with path compression + rank), `longest-non-decreasing-subarray-from-two-arrays` (dp/medium, rolling DP checking 4 transition cases), `report-spam-message` (hash-map/easy, set-based banned lookup ≥2), `distribute-elements-into-two-arrays-ii` (arrays/hard, O(n²) greaterCount). Bank at **1487**; 4749 tests.

### UI/UX polish (2026-05-25)
- **Back-to-settings link in practice mode**: TopBar now shows "← settings" link back to Options/problem browser when in practice mode (no blocked target URL). settingsHref computed via chrome.runtime.getURL.
- **Browse problems button on solved screen**: Solved-standalone screen now has "Browse problems" button alongside "Try another" and "Close".
- **Filter button counts in problem browser**: Difficulty and tag pills in the problem browser now show total problem counts (e.g. "easy 420", "arrays 312"). `totalByTag` computed via `useMemo` with `[]` deps.
- **Practice mode banner clarified**: NoTargetBanner text changed from "Standalone mode — no blocked site detected" to "Practice mode — solving here won't grant site access", consistent with header "practice mode" label.
- **All hints revealed message**: HintsSection now shows "All hints revealed." after the last hint is shown.
- **Target domain in header**: TopBar subtitle shows "unlock youtube.com" instead of generic "solve to unlock" when gate mode is active and domain is known.

### Batch 53-remote (2026-05-25)
Added 5 problems: `kth-smallest-in-sorted-matrix` (heap+binary-search/medium, binary search on value range with column-walk count), `the-skyline-problem` (heap/hard, sweep-line with sorted active heights), `island-perimeter` (arrays/easy, count exposed edges), `matrix-chain-multiplication` (dp/hard, classic MCOP interval DP), `binary-search-tree-iterator` (tree/medium, stack-based lazy in-order traversal). Bank at **1477**; 4719 tests.

### fix(test): repair merge conflict artifacts (2026-05-25)
Fixed missing closing backtick+comma after `minimum-deletions` entry in `bank-solutions-python.ts`; removed duplicate Batch 52 solution block (87 lines) from `bank-solutions.ts` introduced by rebase merge.

### Batch 52 (2026-05-25)
Added 5 problems: `three-sum-smaller` (two-pointers/medium, sort + two-pointer count), `most-common-word` (strings/easy, regex strip + hash-map frequency), `student-attendance-record-ii` (dp/hard, 6-state DP counting valid length-n records mod 1e9+7), `permutation-sequence` (math/hard, factorial number system to find k-th permutation directly), `maximum-sum-obtained-of-any-permutation` (arrays/medium, difference array range coverage + greedy assignment). Bank at **1452**; 4644 tests.

### UI/UX improvements (2026-05-25)
- **Tag progress bars in SolveBreakdown**: popup now shows `solved/total` progress bars per tag instead of simple count pills, with BANK_SIZE_BY_TAG hoisted as module-level constant.
- **Tag pills in problem browser show solved/total**: tag filter pills in problem browser show `solved/total` (e.g., `arrays 95/450`) when user has solved any problems in that tag.
- **Terminal auto-switches to test results on run failure**: previously only triggered on submit failures; now any execution failure auto-switches to the test results tab.
- **Month labels on activity heatmap**: popup heatmap now shows abbreviated month names above columns where a new month begins.

### Batch 48 (2026-05-25)
Added 5 problems: `day-of-the-week` (math/easy), `guess-number-higher-or-lower` (binary-search/easy), `largest-triangle-area` (math/easy), `minimum-value-to-get-positive-step-sum` (arrays/easy), `number-of-rectangles-that-can-form-largest-square` (arrays/easy). Skipped 4 originally requested problems that already existed in the bank; substituted equivalent-difficulty originals.

### Batch 54-local (2026-05-25)
Added 5 problems: `maximize-greatness-of-an-array` (arrays/medium, two-pointer greedy on sorted), `neighboring-bitwise-xor` (arrays/medium, XOR parity check), `minimize-xor` (math/medium, greedy bit assignment), `find-the-maximum-number-of-marked-indices` (arrays/medium, sort+two-pointer), `minimize-maximum-of-array` (arrays/medium, max prefix ceiling average). Bank at **1482**; 4734 tests.

### Batch 53-local (2026-05-25)
Added 5 problems: `final-prices-with-a-special-discount-in-a-shop` (stack/easy, monotonic stack), `buildings-with-an-ocean-view` (stack/medium, right-to-left max scan), `remove-nodes-from-linked-list` (linked-list+stack/medium, monotonic stack), `find-polygon-with-the-largest-perimeter` (math/medium, greedy prefix sum), `minimum-deletions-to-make-character-frequencies-unique` (hash-map/medium, greedy freq decrement). Bank at **1467**; 4689 tests.

### Batch 54 (2026-05-25)
Added 5 problems: `matrix-cells-in-distance-order` (arrays/easy, sort by Manhattan distance), `broken-calculator` (math/medium, work backwards), `count-days-without-meetings` (arrays/medium, merge intervals), `string-compression-iii` (strings/medium, max-9 runs), `strange-printer-ii` (graph/hard, Kahn's toposort on color bbox DAG). Also resolved merge conflicts keeping all content from concurrent Batch 52/53 agents. Bank at **1472**; 4704 tests.

### Batch 53 + orphaned Batch 52 (2026-05-25)
Added 5 Batch 53 problems: `convert-sorted-list-to-binary-search-tree` (tree/medium), `contains-duplicate-iii` (sliding-window/hard, bucket sort), `make-array-strictly-increasing` (dynamic-programming/hard, DP map), `encode-and-decode-tinyurl` (hash-map/medium, counter-based), `course-schedule-iv` (graph/medium, Floyd-Warshall). Also added 5 more Batch 53 problems from parallel agent: `final-prices-with-a-special-discount-in-a-shop` (stack/easy), `buildings-with-an-ocean-view` (stack/medium), `remove-nodes-from-linked-list` (linked-list/medium), `find-polygon-with-the-largest-perimeter` (math/medium), `minimum-deletions-to-make-character-frequencies-unique` (hash-map/medium). Also registered 5 orphaned Batch 52 problems: `three-sum-smaller`, `most-common-word`, `student-attendance-record-ii`, `permutation-sequence`, `maximum-sum-obtained-of-any-permutation`. Bank at **1467**; 4689 tests.

### Batch 52-local (2026-05-25)
Added 5 problems: `longest-univalue-path` (tree/medium, DFS edge-counting with global max), `add-one-row-to-tree` (tree/medium, BFS to d−1 then insert row + `__toArray__` return), `even-odd-tree` (tree/medium, BFS level-order parity + ordering check), `sort-integers-by-number-of-1-bits` (arrays/easy, sort by popcount then value), `minimum-operations-to-make-array-equal` (math/medium, closed-form floor(n²/4)). Bank at **1452**; 4644 tests.

### Batch 51 (2026-05-25)
Added 5 problems from this local session: `path-sum-ii` (tree/medium, DFS backtracking with sorted runner), `construct-binary-tree-from-inorder-and-postorder-traversal` (tree/medium, index map + recursive left/right split), `maximum-number-of-removable-characters` (binary-search/medium, binary search on k + O(n) subsequence check), `minimum-sum-of-squared-difference` (arrays/medium, binary search on threshold T + leftover ops), `find-the-kth-largest-integer-in-array` (arrays/strings/medium, sort by length then lex). Bank at **1443**; 4617 tests.

### Batch 49 (2026-05-25)
Added 5 problems: `watering-plants` (arrays/easy, greedy river walk simulation), `logger-rate-limiter` (hash-map/easy, map message→last_timestamp, allow if diff ≥ 10), `bst-from-preorder` (tree/medium, BST insertion from preorder traversal, level-order output), `balance-a-binary-search-tree` (tree/medium, in-order collect + sorted-array→BST rebuild), `maximum-sum-bst-in-binary-tree` (tree/hard, post-order DFS returning isBST+min+max+sum tuple, track global max). Bank at **1430**; 4575 tests.

### Batch 47-local (2026-05-25)
Added 5 problems: `successful-pairs-of-spells-and-potions` (binary-search/medium, sort potions + binary search per spell), `minimum-operations-to-reduce-x-to-zero` (sliding-window/medium, longest subarray sum = total−x), `largest-submatrix-with-rearrangements` (arrays/medium, column heights + sort per row), `subtree-of-another-tree` (tree/easy, isSameTree helper + DFS), `maximum-product-of-splitted-binary-tree` (tree+dp/medium, total sum DFS maximize s×(total−s) mod 1e9+7); bank at **1425**; 4560 tests.

**Pyodide rollout status — COMPLETE:**
- ✅ M1 — Type plumbing.
- ✅ M2 — Vendored `pyodide-core 0.29.4` + WAR + CSP.
- ✅ M3 — Python worker + sandbox dispatch. Sandbox-`chrome.runtime` regression caught by e2e + fixed.
- ✅ M4 — `@codemirror/lang-python` + Compartment-driven JS|Py selector.
- ✅ M5 — First Python problem (`two-sum-indices`) + Pyodide-in-Node test suite + real-browser e2e.
  E2e caught the partial-prefs `NaN expiresAt` bounce-back bug — fixed.
- ✅ M6 — Backfilled Python for all 23 remaining bank problems, batched by tag (8 batches).
- ✅ M7 — Warm-Pyodide-on-challenge-mount (hides ~1–2 s cold boot during reading time);
  `chrome.storage.local` boot-time + run-count ring buffer; Options "About this extension" card
  surfacing the numbers with bundled-not-fetched reassurance copy.

---

## Phase 0 — Foundation & docs ✅

- [x] Initialize repo files: `.gitignore`, `LICENSE`, `README.md`, `package.json`
- [x] Repurpose `CLAUDE.md` into the project guide + autonomous loop protocol
- [x] Competitive + MV3 research → `docs/RESEARCH.md`
- [x] `docs/BUILD_PLAN.md` — architecture, file structure, flows, roadmap, risks
- [x] `docs/DATA_MODEL.md` — storage schema
- [x] `docs/DECISIONS.md` — decision log seeded
- [x] `docs/PROGRESS.md` — this tracker

## Phase 1 — Toolchain & scaffold ✅

- [x] Install dependencies (React 19, Vite 7, CRXJS 2.4, Tailwind v3, CodeMirror 6, Vitest, resvg)
- [x] `tsconfig.json` (strict; single config covering `src`, `test`, and config files)
- [x] `vite.config.ts` wiring CRXJS + React
- [x] Tailwind v3 config + `postcss.config.js` + `src/ui/styles/globals.css` with grayscale tokens
- [x] `.prettierrc` + `.gitattributes`
- [x] `src/manifest.config.ts` — MV3 manifest (permissions, pages, sandbox, CSP, web_accessible_resources)
- [x] `assets/logo.svg` + `scripts/generate-icons.mjs` → generated `public/icons/*`
- [x] Stub all five surfaces: popup, options, challenge, blocked, sandbox + service worker + content script
- [x] Verified `npm run build` produces a loadable `dist/` (manifest + all pages + SW + content script)
- [x] Vitest configured (`vitest.config.ts`) + passing smoke test

## Phase 2 — Data layer ✅

- [x] `src/lib/types.ts` — all shared domain types
- [x] `src/lib/storage/schema.ts` + `defaults.ts` — keys, areas, default values
- [x] `src/lib/storage/store.ts` — typed get/set/update/remove wrapper, area-aware + tests
- [x] `src/lib/problems/types.ts` — `Problem`, `TestCase`, `ProblemExample`
- [x] `src/lib/problems/bank/` — 24 original easy problems (3 per tag) with visible + hidden tests
- [x] `src/lib/problems/index.ts` — bank registry + preference-aware selector
- [x] `test/problem-bank.test.ts` — every problem verified against its reference solution
- [x] Tests for the problem selector

## Phase 3 — Code runner ✅

- [x] `src/runner/worker.js` — runs user JS against test cases, structured results
- [x] `src/pages/sandbox/runner.ts` — sandbox host page that owns the Worker + hard timeout
- [x] `src/lib/judge/judge.ts` — challenge-side API: post code+tests, await verdict
- [x] `src/lib/messaging/messages.ts` — typed message contracts
- [x] Deep-equality comparison for expected vs actual + tests
- [x] Tests: timeout, runtime error, wrong answer, all-pass, malformed code (verdict judging)

> Note: the live Blob-Worker executing real user code under the sandbox CSP is browser-only and
> gets its first end-to-end exercise in Phase 4. The judging logic it feeds is fully unit-tested.

## Phase 4 — Challenge UI ✅

- [x] Challenge page layout: left problem panel, top-right meta (timer/reward/streak), editor panel
- [x] Problem panel: title, difficulty, tags, description, examples, constraints
- [x] CodeMirror 6 editor + grayscale theme + language selector (JS only for now)
- [x] Test-case panel + Run button (visible tests) + Submit button (all tests)
- [x] Countdown timer wired to `challengeTimeLimitSec`
- [x] Verdict states: running, passed, failed, error, timeout
- [x] Empty/loading/error states (`loading`, `no-problem`, `no-target` banner)

## Phase 5 — Blocking engine ✅

- [x] `src/lib/blocking/matcher.ts` — match a URL against block + keyword rules (+ tests)
- [x] `src/lib/blocking/dnr.ts` — build DNR dynamic rules from rule sets (+ tests)
- [x] Service worker: install/startup, alarm, `storage.onChanged` reconciliation
- [x] Service worker: redirect blocked navigations to the challenge page (via DNR + tabs.update)
- [x] Content script: detect SPA route changes (history hook + popstate); asks SW to redirect
- [x] `webNavigation.onHistoryStateUpdated` handling in the SW

> Page-blanking at `document_start` was deferred — the small flash before the SW redirects is
> acceptable for the MVP and tracked as a Phase 12 polish item.

## Phase 6 — Unlock system (→ demoable vertical slice) ✅

- [x] `src/lib/unlock/tokens.ts` — create/validate/prune unlock tokens (+ tests)
- [x] On solve: write token, remove the domain's DNR rule (reconcile), redirect tab back to target
- [x] `chrome.alarms` + reconcile for token expiry → re-arm the DNR rule
- [x] Record `SolvedProblemRecord` on grant-unlock (capped at 1000 entries)
- [x] End-to-end check: block → challenge → solve → timed access → expiry → challenge again

> The end-to-end loop is implemented in code; manual verification in real Chrome is documented in
> `TESTING.md` flow A and remains the last 5% (browser-only behaviour: live sandbox CSP, DNR
> redirect timing, real SPA detection).

## Phase 7 — Failure handling ✅

- [x] Failure on timeout / give-up / attempt-limit (challenge UI + SW handler)
- [x] `failureAction`: close tab vs redirect to blocked page (SW `failChallenge`)
- [x] Blocked page UI — calm, minimal, grayscale
- [x] Strict mode disables give-up (challenge UI honours `prefs.allowGiveUp`)

## Phase 8 — Settings page ✅

- [x] Options page shell + navigation
- [x] Blocked sites + keyword triggers editors
- [x] Difficulty + category/tag selectors
- [x] Challenge time limit + unlock duration controls
- [x] Failure action config
- [x] Strict mode toggle + settings cooldown duration
- [x] Sync status indicator

## Phase 9 — Anti-bypass / commitment 🟡

- [x] Cooldown pipeline lib — schedule/applicable/cancel/nextApply (+ tests)
- [x] `src/lib/crypto/hash.ts` — salted PBKDF2/SHA-256 via SubtleCrypto (+ tests)
- [x] Password lock setup + enforcement on protected settings
- [x] Accountability-partner code lock
- [x] Strict mode hardening across surfaces
- [x] Pending-changes review UI — list + cancel

## Phase 10 — Streaks ✅

- [x] `src/lib/streak/streak.ts` — daily streak compute + damage rules (+ tests)
- [x] Streak damage on failed challenge (SW `failChallenge` calls `recordFail`)
- [x] Streak damage on disable / removed rule — `damageStreakNow` helper called from Options on the immediate-apply path (deferred-apply path handles damage via SW `applyPendingChanges`)
- [x] Subtle streak UI in popup ✅; challenge-header streak placeholder in place (live-streak wiring tracked as small Phase 12 polish)

## Phase 11 — Popup ✅

- [x] Popup: active unlocks, today's solves, streak, quick "open settings"
- [x] Quick add-current-site-to-blocklist action

## Phase 12 — Polish, tests, CI 🟡

- [x] Accessibility baseline — axe-core/playwright integration in `e2e/a11y.spec.ts` audits all 4 surfaces; passes (no critical violations). Known logged findings for next polish pass: color-contrast on `text-faint` microlabels across all surfaces (design-system tradeoff), and one `aria-prohibited-attr` on the challenge page.
- [x] Edge-case sweep across all `src/lib` modules — 15 new tests for blocking, unlock, streak (empty inputs, boundary expiry, case-insensitive dedup, history cap, same-day multi-solve)
- [x] Integration tests for core flows — `reconcile()` extracted, fake-chrome covers DNR + alarms + runtime, 18 SW integration tests in `test/sw-reconcile.test.ts`
- [x] GitHub Actions CI: typecheck + test + build (artifacts uploaded for 14 days)
- [x] **Playwright load-extension smoke test — 4 tests in `e2e/extension.spec.ts` exercise the SW, popup, options, and challenge pages against real Chromium with `dist/` loaded as an unpacked extension. Caught and fixed a real bug — CRXJS was shipping unmodified `./main.tsx` references for web-accessible HTML (see `DECISIONS.md` D15).**
- [x] **Real block-flow e2e tests — 2 tests in `e2e/block-flow.spec.ts` verify: (a) navigating to a blocked host is redirected to the challenge page, (b) a domain with an active unlock token bypasses the gate. These exercise the live declarativeNetRequest pipeline end-to-end.**
- [x] **Full solve-and-unlock e2e — `e2e/solve-flow.spec.ts` injects the bank's reference solution into the CodeMirror editor, clicks Submit, and asserts the SW writes an unlock token. Proves the vertical slice (bank → judge → sandbox Worker → SW grant handler → storage) in real Chromium.**
- [x] README screenshots — captured automatically by `e2e/screenshots.spec.ts`, referenced in the README
- [x] Chrome Web Store ZIP packaging script (`npm run package`)
- [x] Marketing website (separate repo `Jeremyliu-621/leetlock-site`, Next.js static export)

## Phase 13+ — Post-MVP polish

Shipped after v0.1.0:
- [x] **Editor QoL** — close-brackets, autocomplete, search (Cmd-F), `Cmd+Enter` run / `Cmd+Shift+Enter` submit / `Alt-R` reset shortcuts, active-line highlight, code-folding, multi-cursor (`drawSelection` + `allowMultipleSelections`)
- [x] **Tab-close guard** — `beforeunload` while a challenge is in progress, suppressed during programmatic navigation
- [x] **Light / dark / system theme** — CSS variables + `data-theme` attribute; popup switcher; live OS-theme sync for `system`
- [x] **Markdown problem descriptions** — `react-markdown` + GFM, custom grayscale component map, raw-HTML disabled
- [x] **Progressive hints** with **60s-per-reveal cost** — `Problem.hints?: string[]`, markdown-rendered, friction-aligned; wired into three bank problems
- [x] **Real-Chrome e2e** — `e2e/extension.spec.ts`, `block-flow.spec.ts`, `solve-flow.spec.ts`, `user-bug.spec.ts`, `screenshots.spec.ts`, `a11y.spec.ts` — 17 tests total

Still pending:
- [x] Grow the problem bank to 50+ verified problems — **51 problems, all with hints + JS+Python solutions**
- [x] Add hints to all problems — every problem in the bank has 3-level progressive hints
- [x] **Python support via Pyodide** — M1–M7 complete; every bank problem Python-capable
- [x] Editor settings — font size slider + vim keymap toggle in Options EditorSection
- [x] Draggable splitter between problem and editor panels (+ persist width in prefs)
- [x] Fullscreen-editor toggle — ⊞/⊡ button in editor header hides problem panel; aria-pressed
- [x] Custom test-case input drawer (CustomTestPanel with per-param JSON inputs + aria-live output)
- [x] Verdict timing — per-test durationMs + totalDurationMs accumulated across all tests
- [x] a11y fixes — `aria-prohibited-attr` on editor fixed; mobile `!w-full` override for splitter
- [x] Submission history — collapsible panel shows per-attempt outcome/tests/timing/timestamp
- [x] Edge-case sweep — verdict non-finite duration, token clamping, streak date validation; 6 new tests
- [x] Streak heatmap — 12-week grayscale activity grid in popup (aria-grid accessible)
- [x] Settings import/export — JSON download/restore in Options (blocked sites, rules, prefs)
- [x] Acceptance UX — 1.2s pause after accepted verdict before redirecting
- [x] 4 new problems (rotate-array, max-product-subarray medium, longest-palindromic-string medium, climbing-stairs)
- [x] Bank at 55 problems; first medium-difficulty problems added
- [x] Keyboard shortcut reference card — `?` button in editor header opens modal (all shortcuts, Esc/backdrop close, aria-modal)
- [x] Problem tag/difficulty breakdown stats in popup — mini bar chart by difficulty + top-5 tag pills; computeSolvedStats in popup-helpers.ts with 6 unit tests
- [x] Grow bank to 85 problems — 33 new medium problems added across arrays, strings, hash-map, binary-search, stack, math; all with JS + Python solutions and test coverage (505 tests)
- [x] Add more medium-difficulty problems — bank now has full medium tier across all 6 tag categories
- [x] Grow bank to 95 problems — 10 hard problems added (arrays: first-missing-positive, jump-game-ii, largest-rectangle-histogram, sliding-window-maximum, largest-number, longest-increasing-subsequence; strings: minimum-window-substring, longest-valid-parentheses, edit-distance, word-break); all with JS + Python solutions, hints, and test coverage (550 tests)
- [x] **100-problem milestone** — 5 more problems: three-sum-closest, boats-to-save-people, partition-labels (two-pointers/medium), basic-calculator (stack/hard), median-two-sorted-arrays (binary-search/hard); 565 tests
- [x] **Light-mode CodeMirror theme** — `leetlockEditorThemeLight` (inverted grayscale, `{ dark: false }`); Compartment-driven swap wired to `resolvedTheme` in Challenge
- [x] **Verdict input display** — `input: string` field on all `TestVerdict` variants; renders as Input/Output/Expected in VerdictPanel matching LeetCode parity
- [x] **Persistent submission history** — per-problem array stored in `chrome.storage.local` under `submissionHistory` key; capped at 20 entries; cleared on acceptance; loaded on challenge mount
- [x] **107-problem milestone** — 4 new hard problems: split-array-largest-sum, capacity-to-ship, max-consecutive-flips, count-subarrays-bounded-max (binary-search + sliding-window); 580 tests
- [x] **Restore last submitted code** — `code` field on `SubmissionRecord`; "restore" button per row in SubmissionsPanel; `resetCode` Compartment-less prop on EditorPanel; 581 tests
- [x] **Grayscale syntax highlighting in code blocks** — `rehype-highlight` (JS + Python only) added to `ProblemDescription`; custom CSS maps hljs token classes to `--ll-text`/`--ll-muted`/`--ll-faint` variables; no colour, matches editor theme
- [x] **111-problem milestone** — 4 new hard problems for math + two-pointers tags (trapping-rain-water, four-sum, fraction-to-recurring-decimal, integer-to-english-words); 593 tests
- [x] **Emacs keymap** — `editorKeymap: 'emacs'` via `@replit/codemirror-emacs`; wired in EditorPanel, EditorSection, Popup; persisted to `userPreferences`
- [x] **dynamic-programming tag** — 9th ProblemTag added to type system + PROBLEM_TAGS; backfilled 5 existing DP problems; new `filters by dynamic-programming tag` test
- [x] **114-problem milestone** — 3 new DP problems (house-robber, coin-change, unique-paths); 603 tests
- [x] Fill sliding-window medium gap — added at-most-k-distinct, permutation-in-string, subarray-product-less-than-k; 612 tests
- [x] Problem counts on Options filter buttons — difficulty + tag pills now show "easy 38", "arrays 25" etc.
- [x] Add hash-map hard problems — four-sum-ii, max-points-on-line; 618 tests; bank at 119
- [x] Bank progress in popup — "X/119 solved (Y%)" in SolveBreakdown header
- [x] Add hard stack problems — sum-subarray-minimums, remove-k-digits; 624 tests; bank at 121
- [x] Dynamic challenge tab title — shows problem name (e.g. "Two Sum — LeetLock")
- [x] Bank size in Options About section — "119 original problems covering 9 topic categories"
- [x] Add medium DP problems — LCS, min-path-sum, decode-ways; hard DP filled (LPS, palindrome-min-cuts, integer-break, regular-expression-matching); 651 tests; bank at 130
- [x] Add medium two-pointers problems — next-permutation, interval-list-intersections, longest-mountain-in-array; 642 tests; bank at 127
- [x] Add classic missing medium problems — spiral-matrix, rotate-image, maximal-square, find-first-last-pos, search-2d-matrix; 666 tests; bank at 135
- [x] Run-mode verdict summary — `RunSummaryBanner` shows X/N passed + total timing in run mode when all visible tests pass
- [x] Add medium DP problems (3 more) — partition-equal-subset-sum, perfect-squares, target-sum; 672 tests; bank at 137
- [x] Add roman-to-integer (math/easy) + valid-sudoku (arrays/medium); 684 tests; bank at 141
- [x] Add hard DP problems — burst-balloons, wildcard-matching, dungeon-game; bank at 144
- [x] Add DP easy + binary-search easy — min-cost-climbing-stairs, counting-bits, best-time-buy-sell, search-insert-position; 705 tests; bank at 148
- [x] Add car-fleet, koko-eating-bananas, find-peak-element, minimum-operations-reduce-x; 717 tests; bank at 152
- [x] Add sort-list (merge sort) + subarrays-k-distinct; fill two-pointers/hard (2→4); 723 tests; bank at 154
- [x] Add ransom-note, isomorphic-strings, nth-ugly-number, maximum-swap; 735 tests; bank at 158
- [x] Add linked-list tag + 3 problems (reverse-linked-list, linked-list-cycle, merge-two-sorted-linked-lists) with preamble; bank at 161
- [x] Add 4 easy problems (plus-one, length-of-last-word, palindrome-number, excel-column-number); 756 tests; bank at 165
- [x] Add middle-of-linked-list (easy), palindrome-linked-list (easy), remove-nth-from-end (medium); 765 tests; bank at 168
- [x] Add linked-list medium/hard — reorder-list, add-two-numbers, odd-even-linked-list, intersection-two-linked-lists, merge-k-sorted-lists; 780 tests; bank at 173
- [x] Marketing site iteration + Vercel deployment — static HTML landing page at /site/index.html with vercel.json; pure grayscale design, 12-point comparison, problem bank stats, commit+features CTAs
- [x] **TypeScript language support** — sucrase strips type annotations before the JS worker runs; all 174 problems support TS via JS starter; CM6 uses `javascript({ typescript: true })`; Options → Editor adds default-language radio group; 8 new transpile tests
- [x] Graph/BFS tag — add `graph` to ProblemTag + PROBLEM_TAGS; 3 problems: flood-fill (easy), number-of-islands (medium), course-schedule (medium); JS + Python solutions + tests
- [x] Tree tag — add `tree` to ProblemTag + PROBLEM_TAGS; 3 easy problems: max-depth-binary-tree, symmetric-tree, invert-binary-tree; TreeNode preamble with BFS array format + Pyodide isinstance fix; 807 tests; bank at 179
- [x] More tree problems — binary-tree-paths (easy), validate-bst (medium), level-order-traversal (medium); bank at 182 problems, 816 tests
- [x] Popup: add preferred-language segmented control (mirrors keymap row)
- [x] Marketing site: update stats/copy to mention TypeScript — 182 problems / 12 tags / 3 languages; Graph + Tree tag chips added
- [x] More tree/graph problems — path-sum (easy), diameter-of-binary-tree (easy), lowest-common-ancestor-bst (medium), max-path-sum (hard); town-judge (easy), max-area-island (medium), rotting-oranges (medium), keys-and-rooms (medium); bank at 190 problems, 840 tests
- [x] UX: verdict panel scroll-to-first-failure (useEffect + scrollIntoView); animated loading dots (animate-pulse on "· · ·")
- [x] More graph problems: clone-graph (medium), word-ladder (hard), network-delay-time (medium), number-of-connected-components (medium); bank at 196 problems, 858 tests
- [x] More tree problems: count-good-nodes (medium), binary-tree-right-side-view (medium)
- [x] same-tree (easy) + isinstance bool fix applied to all tree problem Python preambles; 858 tests; bank at 198
- [x] construct-binary-tree-from-preorder-inorder (medium); bank at 199 problems, 864 tests
- [x] serialize-deserialize-binary-tree (hard tree): BFS round-trip with '#' sentinel; 867 tests; bank at 199
- [x] Marketing site: update stats to 199 problems
- [x] Options: fix About section hardcoded "10 topic categories" → 12; tag/difficulty pill counts are already dynamic (computed from getAllProblems() at load time)
- [x] course-schedule-ii (medium graph): Kahn's BFS topological sort; 873 tests; bank at 200
- [x] kth-smallest-bst (medium tree): in-order BST traversal; 876 tests; bank at 201
- [x] pacific-atlantic (medium graph): multi-source reverse BFS; 879 tests; bank at 202
- [x] flatten-binary-tree + zigzag-level-order (tree/medium) + reverse-nodes-in-k-group (linked-list/hard); 885 tests; bank at 205
- [x] sum-root-to-leaf-numbers (medium tree): DFS digit accumulator; lowest-common-ancestor-binary-tree (medium tree): recursive LCA; 891 tests; bank at 207 (removed duplicate zigzag)
- [x] sum-root-to-leaf, number-of-provinces (graph/easy), path-sum-iii (tree/medium): prefix-sum O(n); 900 tests; bank at 210
- [x] balanced-binary-tree (easy), minimum-depth-binary-tree (easy), word-search (graph/medium), surrounded-regions (graph/medium); bank at 217
- [x] binary-tree-level-order-bottom (easy), find-duplicate-number (two-pointers/medium), graph-valid-tree (graph/medium); 930 tests; bank at 220
- [x] redundant-connection (Union-Find/medium), is-graph-bipartite (BFS 2-color/medium), all-paths-source-target (DFS/medium); bank at 223
- [x] house-robber-iii (tree DP/medium), maximum-width-binary-tree (BFS/medium), minimum-height-trees (graph/medium); bank at 226 (removed duplicate sum-root-to-leaf-numbers)
- [x] hamming-weight (math/easy), 01-matrix (graph/medium), delete-node-in-linked-list (easy); 957 tests; bank at 229
- [x] merge-intervals, non-overlapping-intervals (arrays/medium), task-scheduler (math/medium); 966 tests; bank at 232
- [x] letter-combinations-phone (hash-map/medium), subsets (arrays/medium), combination-sum (arrays/medium); 972 tests; bank at 235
- [x] permutations (arrays/medium, preamble-sort), generate-parentheses (strings/medium, preamble-sort), palindrome-partitioning (strings/medium); bank at ~244; remote also added: combination-sum-ii, number-of-dice-rolls, coin-change-ii, best-time-buy-sell-cooldown, longest-arithmetic-subsequence, unique-paths-ii, triangle, interleaving-string
- [x] n-queens (arrays/hard); marketing site updated to 250 problems; 1020 tests; bank at 250
- [x] verdict panel a11y + UX: TruncatedValue (>200 chars), arrayDiffCount diff indicator, text-faint→text-muted (WCAG AA), CopyButton on expected+actual, break-all+shrink-0
- [x] 3 new hard problems: alien-dictionary (graph/hard, topological sort), critical-connections (graph/hard, Tarjan bridges), vertical-order-traversal (tree/hard, coordinate DFS+sort); graph/hard: 1→3, tree/hard: 2→3; bank at 261; 1056 tests; site updated to 261
- [x] triangle (DP/medium), interleaving-string (DP/medium), find-eventual-safe-states (graph/medium); letter-combinations-phone (hash-map/medium), subsets (arrays/medium), combination-sum (arrays/medium); 981 tests; bank at 237
- [x] generate-parentheses (strings/medium), permutations (arrays/medium), unique-paths-ii (DP/medium); combination-sum-ii, palindrome-partitioning, number-of-dice-rolls; spiral-matrix-ii, max-consecutive-ones-iii, jump-game-iii; coin-change-ii, best-time-buy-sell-cooldown, longest-arithmetic-subsequence; k-closest-points, top-k-frequent-words, find-disappeared-numbers; 1026 tests; bank at 252
- [x] swap-nodes-in-pairs (linked-list/medium), partition-list (linked-list/medium), find-if-path-exists (graph/easy); remove duplicate binary-tree-zigzag-traversal + orphan reverse-nodes-k-group; bank cleaned up
- [x] backtracking tag applied to palindrome-partitioning, combination-sum-ii, n-queens, word-search
- [x] sudoku-solver (backtracking/hard, runner preamble) + combinations (backtracking/medium); bank at 272; 1090 tests
- [x] word-search-ii (Trie-DFS/hard) + letter-case-permutation (easy); single-number + house-robber-ii + wiggle-subsequence; subsets-ii; majority-element-ii + contains-duplicate-ii + summary-ranges; longest-turbulent-subarray + minimum-genetic-mutation + largest-divisible-subset; bank at 287; 1132 tests
- [x] combination-sum-iii (backtracking/medium) + restore-ip-addresses (backtracking/medium); bank at 289
- [x] expression-add-operators (strings+backtracking/hard): operator insertion with multiplication precedence tracking; min-stack (stack/easy); lru-cache (hash-map/hard, DLL+Map); bank at 292
- [x] count-and-say (strings/medium) + beautiful-arrangement (arrays+backtracking/medium); bank at 295; 1150 tests
- [x] power-of-three (math/easy) + reverse-bits (math/easy) + game-of-life (arrays/medium); bank at 298; 1162 tests
- [x] 6 new problems: accounts-merge (graph/medium), next-greater-element-ii (stack/medium), minimum-size-subarray-sum (sliding-window/medium), decode-ways-ii (dp/hard), queue-reconstruction-by-height (arrays/medium), find-k-pairs-smallest-sums (binary-search/medium); bank at 307; 1171+ tests
- [x] **300-problem milestone** — missing-ranges (arrays/easy) + excel-sheet-column-title (math/easy) + longest-palindrome-build (strings/easy); bank at 301; 1174 tests
- [x] reverse-linked-list-ii (linked-list/medium) + rotate-list (linked-list/medium) + number-of-1-bits (math/easy) + single-number-ii (math/medium); bank at 309; 1198 tests
- [x] pascals-triangle + single-number-ii + reverse-only-letters + backspace-string-compare + number-of-steps + richest-customer-wealth + maximum-units-on-truck + find-the-difference + goal-parser + shuffle-the-array + count-items-matching-rule; bank at 321; 1234 tests
- [x] valid-anagram + defanging-ip-address + kids-with-candies + monotonic-array + add-binary + word-pattern; bank at 328; 1252 tests
- [x] detect-capital + repeated-substring-pattern + find-pivot-index + path-crossing; bank at 332; 1265 tests
- [x] heap tag added; last-stone-weight + kth-largest-in-stream + median-from-data-stream; meeting-rooms-ii + h-index + word-break-ii; bank at 342; 1294 tests
- [x] build-array-from-permutation + truncate-sentence + largest-perimeter-triangle + to-lower-case + check-if-two-string-arrays-equivalent + sum-of-unique-elements; bank at 348; 1312 tests
- [x] concatenation-of-array + third-maximum-number + count-odd-numbers + maximum-product-three-numbers + average-salary-excluding-min-max + find-n-unique-integers-sum-to-zero; bank at 353; 1330 tests
- [x] reorganize-string + minimum-cost-to-connect-sticks; check-if-pangram + is-power-of-four + integer-to-roman + longest-word-in-dictionary; bank at 360; 1345 tests
- [x] decode-xored-array + replace-elements-with-greatest + highest-altitude + sign-of-product-array + maximum-difference-increasing-elements + cells-in-range; bank at 364; 1360 tests
- [x] minimum-arrows-burst-balloons + set-matrix-zeroes + range-sum-query + rotate-string + custom-sort-string + copy-list-with-random-pointer; bank at 371; 1381 tests
- [x] shortest-path-binary-matrix + online-stock-span; bank at 372; 1387 tests
- [x] find-all-numbers-disappeared + check-if-n-and-double-exist + largest-number-at-least-twice + special-positions-binary-matrix + matrix-diagonal-sum + sort-array-by-parity; bank at 378; 1399 tests
- [x] left-and-right-sum-differences + minimum-value-positive-step-sum + count-number-of-pairs + percentage-of-letter-in-string + count-common-words-one-occurrence + convert-temperature; bank at 384; 1423 tests
- [x] implement-queue-using-stacks (stack/easy) + binary-tree-pruning (tree/medium) + count-complete-tree-nodes (tree+binary-search/medium) + populating-next-right-pointers (tree/medium) + range-sum-query-2d (arrays/medium) + find-anagram-mappings (hash-map/easy); bank at 393; 1450 tests
- [x] remove-duplicates-sorted-array-ii + longest-string-chain + implement-trie (merged with remote additions); bank at 401; 1474 tests
- [x] can-place-flowers + find-k-closest-elements + string-compression + maximum-69-number + count-of-matches-tournament + maximum-product-two-elements; bank at 403; 1489 tests
- [x] number-of-students-eating-lunch + two-sum-less-than-k + find-smallest-letter-greater-than-target + minimum-difference-k-scores + two-out-of-three + sum-of-odd-length-subarrays; bank at 417; 1531 tests
- [x] **400-problem milestone** — determine-if-string-halves-alike + check-two-strings-almost-equivalent + rearrange-characters-to-make-target + divide-string-into-groups + count-vowel-substrings + count-of-matches-in-tournament + minimum-sum-mountain-triplet (merged)
- [x] merge-sorted-array (easy/arrays, preamble) + minimum-moves-equal-array (medium/math) + multiply-strings (medium/math+strings) + count-triplets-xor (medium/arrays+math) + water-and-jug (medium/math) + find-center-of-star-graph (easy/graph); bank at 444; 1603 tests
- [x] validate-stack-sequences + 132-pattern (stack/medium) + frequency-of-most-frequent-element (sliding-window/medium) + find-common-characters + counting-words-with-given-prefix + find-words-formed-by-characters (strings/easy) + minimum-rounds-to-complete-tasks + minimum-steps-make-anagram (hash-map/medium) + number-of-laser-beams (arrays/medium) + minimum-number-of-moves-seat (arrays/easy); bank merged to 488; 1735 tests
- [x] check-prefix-string + sum-digits-string-convert + maximum-number-of-string-pairs + count-pairs-sum-less-than-target + neither-minimum-nor-maximum + find-winners + count-number-of-texts + count-vowel-strings-in-range + count-fair-pairs + minimum-average-difference; bank at 498; 1843 tests
- [x] find-kth-positive + minimum-length-string-operations + largest-integer-digit-swaps; bank at 533; 1867 tests
- [x] unique-morse-code-words + number-of-good-pairs + check-if-array-sorted-rotated + maximum-product-difference + replace-words + minimum-time-difference + string-to-integer-atoi; bank at 540; 1888 tests. Marketing site updated to 540.
- [x] minimum-deletions-char-frequencies + bulls-and-cows + minimum-sum-four-digit-number + count-pairs-absolute-difference-k + find-closest-number-to-zero + count-asterisks + count-even-numbers + count-segments-in-string + find-repeated-dna-sequences + widest-vertical-area + convert-1d-array-into-2d-array + check-if-all-chars-equal-occurrences + find-the-pivot-integer + maximum-sum-circular-subarray; bank at 555; 1933 tests.
- [x] number-of-distinct-averages + find-positive-integer-with-negative + sum-of-squares-special-elements + minimum-operations-make-array-empty; bank at 568; 1975 tests. Marketing site updated to 568.
- [x] **6 more new problems** — candy (arrays/hard), minimum-falling-path-sum (dp/medium), count-nice-subarrays (sliding-window/medium), split-linked-list-in-parts (linked-list/medium), time-based-key-value-store (hash-map+bs/medium); fixed Python findAnagrams mismatch; 1990 tests; bank at 574.
- [x] **5 more new problems** — minimum-cost-for-tickets (dp/medium), stone-game-ii (dp/medium), maximum-width-ramp (arrays/hard), check-if-array-pairs-divisible-by-k (arrays+hash-map/medium), find-k-th-smallest-pair-distance (binary-search+sliding-window/hard); bank at 584 tests.
- [x] **5 more new problems** — valid-triangle-number (arrays+two-pointers/medium), max-number-k-sum-pairs (arrays+hash-map/medium), minimum-time-rope-colorful (arrays+two-pointers/medium), shortest-bridge (graph/hard), number-of-subsequences-target-sum (arrays+two-pointers/medium); 2026 tests; bank at 589.
- [x] **5 more new problems** — car-pooling (arrays/medium), most-profit-assigning-work (binary-search/medium), fruit-into-baskets (sliding-window/medium), minimum-swaps-string-balanced (arrays/medium), sum-of-subarray-ranges (arrays+stack/medium); 2044 tests; bank at 594+.
- [x] **🎉 600-problem milestone** — reverse-words-in-string-iii, maximum-product-adjacent-elements, split-string-balance, increasing-decreasing-string, students-unable-to-eat-lunch, create-target-array-given-order, maximum-ascending-subarray-sum, minimum-consecutive-cards-pickup, divisor-game, minimum-time-visiting-all-points, largest-local-values-matrix, percentage-letter-in-string, number-of-weak-characters; 2071 tests; bank at 600.
- [x] **17 more new problems** — arithmetic-slices, max-vowels-substring, min-swaps-group-all-ones, k-diff-pairs, hand-of-straights, min-domino-rotations, furthest-building-ladders, ipo, relative-sort-array, permutations-ii, letter-tile-possibilities, different-ways-add-parentheses (plus 5 from remote: maximize-confusion-exam, sum-of-all-subset-xor, continuous-subarray-sum, equal-row-column-pairs, determine-if-two-strings-close); 2122 tests; bank at 617.
- [x] **3 more problems** — integer-break (dp/medium), min-cost-move-chips (math/easy), binary-watch (math/easy); 2131 tests; bank at 620.
- [x] **Browser-zoom QA** — popup `overflow-x-hidden` + heatmap `overflow-x-auto` to prevent horizontal scroll at 150%/200% zoom.
- [x] **7 more problems** — ugly-number-ii, delete-node-in-bst, insert-into-bst, min-cost-connect-points, visible-people-queue, minimum-add-make-valid-parentheses, palindromic-substrings, partition-string; polished 6 easy problems; 2155 tests; bank at 627.
- [x] **14 more problems** — valid-parentheses, evaluate-reverse-polish-notation, move-zeroes, merge-strings-alternately, uncrossed-lines, course-schedule-iii, buy-two-chocolates, most-frequent-even-element, find-first-palindromic-string, minimum-ops-make-array-empty, max-diff-between-node-ancestor, combination-sum-iv; 2191 tests; bank at 641.
- [x] **20 more problems** — jump-game-vi, longest-subarray-max-bitwise-and, maximum-events-can-attend, count-nodes-equal-average-subtree, maximum-level-sum-binary-tree, k-radius-subarray-averages, number-of-ways-select-buildings, total-appeal-of-string, find-city-smallest-number-neighbors, minimum-fuel-cost-report-capital (+ 10 from remote: minimum-distance-value, min-ops-make-array-alternating, redistribute-chars-equal, check-completeness-bst, max-twin-sum-linked-list, etc.); 2236 tests; bank at 661.
- [x] **7 more problems** — robot-return-to-origin (strings/easy), count-sorted-vowel-strings (dp/medium), maximum-product-of-word-lengths (arrays+math/medium), exclusive-time-of-functions (stack/medium), as-far-from-land-as-possible (graph/medium), cheapest-flights-within-k-stops (graph/medium), sorted-array-to-bst (tree+binary-search/easy, preamble); 2257 tests; bank at 665.
- [x] **5 more problems** — factorial-trailing-zeroes, unique-binary-search-trees, non-decreasing-array, best-time-buy-sell-iii, deepest-leaves-sum; bank at 673; growing past 700.
- [x] **8 more problems** — count-hills-valleys, find-lonely-numbers, count-prefixes-of-given-string, minimum-number-game, find-words-containing-character, count-good-numbers, maximum-sum-k-elements, minimum-common-value; 2281 tests; bank at 678.
- [x] **4 more problems** (rebase resolved) — count-subarrays-fixed-bounds, amount-of-time-binary-tree-infected, count-collisions-on-road, maximum-alternating-subsequence-sum; bank at 683.
- [x] **6 more problems** — compare-version-numbers (strings/medium), open-the-lock (graph/medium), diagonal-traverse (arrays/medium), reshape-the-matrix (arrays/easy), find-town-judge (graph/easy), possible-bipartition (graph/medium); 2329 tests; bank at 690+.
- [x] **6 more problems** — two-sum-ii (two-pointers), set-mismatch (arrays), maximum-gap (arrays), array-partition (arrays), power-of-two (math), sum-of-left-leaves (tree); 2356 tests; bank at 697+.
- [x] **🎉 700-problem milestone!** — arrange-coins, nth-digit, find-the-winner (Josephus), count-negative-numbers, can-make-arithmetic-progression; 2398 tests; bank at 700+.
- [x] **21 more problems** (batches 8-9, remote merge) — design-hashmap, contiguous-array, shifting-letters, convert-bst-to-greater-tree, distribute-coins-binary-tree, flip-columns-for-maximum-equal-rows, delete-columns-sorted-iii, minimum-bit-flips, smallest-even-multiple, special-array-greater-equal, count-pairs-two-arrays, convert-time-hhmm, find-players-zero-losses, check-distances-fair-nodes, minimum-rounds-complete-tasks, largest-combination-bitwise-and + remote: final-value-after-operations, find-original-array-doubled, etc.; bank at 741; 2494 tests.
- [x] **20 more problems** (batch 10, remote merge) — best-time-buy-sell-transaction-fee, maximal-rectangle, stone-game-iii, maximum-profit-job-scheduling, count-of-smaller-numbers-after-self, k-th-symbol-in-grammar, longest-substring-without-repeating + remote: sort-the-people, baseball-game, find-champion-graph, count-digits, apply-operations, minimum-moves-to-seat, rings-and-rods, find-gcd-of-array, keep-multiplying-found-values, percentages-of-letter, maximum-bags-full-capacity, find-subsequence-of-length-k, odd-string-difference; bank at 761; 2554 tests.
- [x] **22 more problems** (batch 11, remote merge) — count-operations-to-obtain-zero, design-underground-system, sort-vowels-in-a-string, minimum-time-to-repair-cars, number-of-matching-subsequences, beautiful-arrangement-ii, lfu-cache, smallest-range-covering-k-lists, bus-routes, maximum-score-words-formed + remote: decompress-run-length-encoding, check-almost-equivalent-strings, minimum-value-positive-steps, check-if-all-as-before-bs, check-if-word-equals-summation, ways-to-buy-pens-pencils, check-array-sorted-rotated, interpret-string, merge-similar-items, count-good-rectangles, maximum-population-year, find-kth-bit-nth-binary-string; bank at 783; 2620 tests.
- [x] **20 more problems** (batches 12-14) — largest-positive-integer-with-negative, maximize-sum-k-elements, check-if-acronym, count-pairs-absolute-diff-k, number-of-arithmetic-subarrays, check-valid-matrix, count-max-frequency-elements, minimum-difference-after-k-removals, number-of-valid-clock-times, calculate-money-in-bank, score-of-string, chalk-replacer, split-with-minimum-sum, max-difference-increasing-elements, longest-nice-subarray, interchangeable-rectangles, find-triangular-sum, two-furthest-houses-different-colors, count-lattice-points-circle, nearest-exit-maze; **🎉 800-problem milestone**; bank at 803; 2680 tests.
- [x] **17 more problems** — climbing-stairs-k-steps, maximum-xor-two-numbers, remove-stones-to-minimize-total, maximize-happiness-of-selected-children, find-the-maximum-achievable-number, partition-array-maximum-difference, remove-duplicates-from-sorted-list-ii, count-number-of-homogenous-substrings, stone-game-vi, count-special-quadruplets (remote), alternating-digit-sum, count-ways-to-build-good-string, divide-players-into-teams-of-equal-skill, maximum-number-of-pairs-in-array, minimize-maximum-pair-sum-in-array, minimum-operations-to-exceed-threshold-value-ii, number-of-ways-to-split-array; bank at 820; 2731 tests.
- [x] **28 more classic problems** — reconstruct-itinerary, partition-k-equal-subset-sum, paint-house, add-strings, palindrome-partitioning-ii, wiggle-sort-ii, stone-game-iv, minimum-refueling-stops, snapshot-array, insert-delete-getrandom, paint-house-ii, minimum-moves-equal-array-ii, frog-jump, k-inverse-pairs-array, minimum-cost-to-hire-k-workers, random-pick-with-weight, find-in-mountain-array, find-duplicate-number-ii, basic-calculator-ii, maximum-binary-tree, next-greater-element-iii, number-of-digit-one, moving-average-from-data-stream, design-add-and-search-words, serialize-deserialize-bst, design-circular-queue, and more; bank at **1046**; 3406 tests.
- [x] **10 more classic problems** — arithmetic-subarrays, best-meeting-point, longest-subarray-ones-after-delete, minimum-cost-cut-cake, minimum-operations-make-array-continuous, minimum-score-path, reverse-pairs, spiral-matrix-iii, text-justification; bank at **1056**; 3433 tests.
- [x] **10 more classic problems (Batch 5)** — maximum-points-from-cards, minimum-ascii-delete-sum, sum-of-distances-in-tree, couples-holding-hands, falling-squares, constrained-subsequence-sum, pseudo-palindromic-paths, number-of-nodes-same-label, minimum-cost-tree-leaf-values, valid-partition-array; bank at **1066**; 3463 tests.
- [x] **10 more classic problems (Batch 6)** — paint-fence, minimum-insertion-steps-palindrome, longest-subarray-abs-diff-limit, maximum-sum-two-non-overlapping-subarrays, number-of-closed-islands, destination-city, find-winner-tictactoe, maximum-eaten-apples, split-array-fibonacci, maximum-score-performing-multiplication; bank at **1076**; 3493 tests.
- [x] **11 more classic problems (Batch 7)** — cherry-pickup, count-ways-build-good-string, profitable-schemes, count-square-submatrices, freedom-trail, guess-number-higher-or-lower-ii, remove-palindromic-subsequences, check-array-formation, minimum-falling-path-sum-ii, scramble-string, predict-the-winner; bank at **1087**; 3526 tests.
- [x] **10 more from parallel session** — russian-doll-envelopes, binary-tree-cameras, linked-list-cycle-ii, add-two-numbers-ii, maximum-performance-of-team, minimum-interval-to-include-each-query, minimum-number-of-taps, online-election, count-of-range-sum, design-linked-list; bank at **1096**; 3556 tests.
- [x] **9 more classic problems (Batch 8)** — maximum-product-subarray, delete-and-earn, minimum-time-collect-apples, xor-queries-of-subarray, sequential-digits, count-sub-islands, maximum-profit-assignment, longest-palindromic-substring, max-product-word-lengths; bank at **1105**; 3583 tests.
- [x] **10 classic hard problems (Batch 9)** — sliding-window-median, minimum-difficulty-of-job-schedule, tallest-billboard, concatenated-words, max-value-of-equation, number-of-music-playlists, minimum-number-of-removals-to-make-mountain-array, count-different-palindromic-subsequences, painting-the-walls, shortest-path-to-get-all-keys; bank at **1115**; 3613 tests.
- [x] **10 more classic hard problems (Batch 10)** — stone-game-vii, stone-game-v, maximum-sum-three-non-overlapping-subarrays, minimum-cost-to-merge-stones, palindrome-partitioning-iii, maximum-height-by-stacking-cuboids, minimum-number-of-days-to-eat-n-oranges, best-team-with-no-conflicts, number-of-ways-to-form-target-given-dictionary, minimum-xor-sum-of-two-arrays; bank at **1125**; 3643 tests.
- [x] **10 more problems + 1** (in previous session) — find-all-duplicates-in-array, check-if-word-occurs-as-prefix, count-subarrays-score-less-than-k, excel-sheet-column-number, jump-game-vii, longest-square-streak, maximum-beauty-array-after-applying-operation, maximum-product-after-k-increments, pairs-of-songs-divisible-60, find-all-duplicates (bank at 830); 2758 tests.
- [x] **11 more problems** — find-the-index-of-first-occurrence, integer-replacement, number-of-smooth-descent-periods, maximum-matrix-sum, count-nodes-with-highest-score, find-right-interval, circular-sentence, minimum-garden-perimeter, group-people-given-group-size, count-number-of-bad-pairs, minimum-changes-to-make-binary-string-beautiful; bank at 840; 2791 tests.
- [x] **9 more problems** — remove-all-occurrences-of-substring, minimum-time-to-complete-trips, minimum-speed-to-arrive-on-time, sum-of-beauty-in-the-array, find-all-possible-recipes, take-k-of-each-character-from-left-and-right, minimum-operations-xor-equal-k, maximum-odd-binary-number, minimum-equal-sum-two-arrays; bank at 849; 2818 tests.
- [x] **🎉 850-problem milestone** — find-score-of-array-after-marking, count-complete-day-pairs, check-if-matrix-is-x-matrix; bank at 852; 2827 tests.
- [x] **22 more problems** (batches 9-10) — first-unique-character-in-string, long-pressed-name, remove-outermost-parentheses, maximum-nesting-depth-of-parentheses, next-greater-element-i, find-and-replace-pattern, largest-3-same-digit-number-in-string, count-number-of-consistent-strings, make-the-string-great, find-target-indices-after-sorting-array, number-of-employees-who-met-the-target, intersection-of-two-arrays-ii, largest-subarray-length-k, minimum-time-to-type-word, check-if-one-string-swap-can-make-strings-equal, number-of-different-integers-in-string, check-if-array-is-good, count-the-digits-that-divide-the-number, find-the-difference-of-two-arrays, longest-continuous-increasing-subsequence, find-numbers-with-even-number-of-digits, count-nice-pairs-in-an-array; bank at 923; 3037 tests.
- [x] **12 more problems** (batch 11) — check-if-string-is-prefix-of-array, remove-trailing-zeros-from-string, rearrange-spaces-between-words, split-a-string-in-balanced-strings, find-greatest-common-divisor-of-array, remove-all-adjacent-duplicates-in-string, semi-ordered-permutation, calculate-delayed-arrival-time, check-if-numbers-are-ascending-in-sentence, find-xor-beauty-of-array, number-of-words-that-can-be-typed, number-of-common-factors; bank at 935; 3073 tests.
- [x] **37 more problems** (batches 6-8) — count-zero-filled-subarrays, check-whether-two-string-arrays-equal, minimum-flips-make-or-b-equal-c, make-array-zero-subtracting-equal-amounts, find-all-groups-farmland, merge-triplets-form-target, replace-elements-greatest-right, destroy-asteroids, largest-number-after-digit-swaps-parity, maximum-count-positive-negative, find-original-array-prefix-xor, separate-digits-array, number-of-pairs-interchangeable-rectangles, optimal-partition-string, unique-length-three-palindromic-subsequences, bitwise-xor-all-pairings, number-rectangles-largest-square, maximize-number-subsequences, number-ways-buy-pens-pencils, sum-digits-string-after-convert, smallest-value-rearranged-number, removing-stars-from-string, find-the-peaks, minimum-penalty-for-a-shop, apply-operations-to-array, kth-distinct-string-array, count-elements-strictly-smaller-greater, largest-positive-integer-exists-negative, check-if-number-equal-digit-count-value, decode-xor-array, maximum-split-positive-even-integers, minimum-average-smallest-largest, count-tested-devices-after-test-runs, number-subarrays-gcd-equal-k, find-subsequence-length-k-largest-sum, minimum-absolute-sum-difference, find-k-beauty-of-number; **🎉 900-problem milestone**; bank at 900; 2971 tests.
- [x] **Batches 13-14** — 80 more problems: sum-of-all-odd-length-subarrays, find-middle-index-in-array, maximum-absolute-sum-any-subarray, count-substrings-one-distinct-letter, sum-number-and-its-reverse, sum-absolute-differences-sorted-array, number-subarrays-odd-sum, people-aware-of-secret, valid-word-abbreviation, number-valid-words, is-subsequence, find-longest-balanced-substring, count-distinct-integers-after-reverse, most-frequent-number-following-key, minimum-diff-highest-lowest-k-scores, find-array-concat-val, sort-array-increasing-frequency, find-all-k-distant-indices, number-beautiful-pairs, split-string-by-separator, count-vowel-strings-ranges, number-even-odd-bits, average-value-even-divisible-three, count-prefix-suffix-pairs, minimum-cost-buying-candies-discount, find-original-array-prefix-xor, total-distance-traveled, delete-chars-fancy-string, three-consecutive-odds, count-equal-divisible-pairs, minimum-changes-alternating-binary-string, and more; bank at 980; 3208 tests.
- [x] **🎉 1000-problem milestone** (batch 15 — 21 problems) — rotate-function, maximum-sum-distinct-subarrays-length-k, find-the-sum-encrypted-integers, maximum-number-weeks-work, count-complete-subarrays, count-subarrays-max-element-at-least-k-times, minimum-index-valid-split, last-moment-ants-fall-off-plank, check-chessboard-same-color, count-number-of-teams, remove-colored-pieces, longest-alternating-subarray, divisible-non-divisible-sums-diff, minimum-element-digit-sum-replacement, pick-gifts, minimum-ops-xor-equal-k, maximum-count-positive-negative, students-doing-homework, find-xor-numbers-appear-twice, minimum-sum-mountain-triplet-ii, minimum-ops-exceed-threshold-i; bank at **1000**; 3271 tests.
- [x] **8 more classic problems** — maximum-subarray (Kadane's), meeting-rooms, brick-wall, number-of-longest-increasing-subsequence, kth-smallest-element-in-sorted-matrix, minimum-knight-moves (BFS), palindrome-pairs (hard, sort preamble), search-suggestions-system; bank at **1008**; 3295 tests.
- [x] **UX fixes** — blocked domain shown on Locked page (?domain= query param from SW); role="status" aria-live on running indicators in TerminalPanel.
- [x] **10 more classic problems** — array-nesting, evaluate-division (BFS w/ weights), out-of-boundary-paths (DP/mod), maximum-ice-cream-bars (greedy), count-numbers-unique-digits (DP), minimum-cost-to-cut-stick (interval DP/hard), find-min-rotated-ii, search-rotated-ii, distinct-subsequences (DP/hard), minimum-window-subsequence (two-pointer/hard); bank at ~**1018**; 3322 tests.
- [x] **10 more classic hard problems (Batch 9)** — sliding-window-median, minimum-difficulty-of-job-schedule, tallest-billboard, concatenated-words, max-value-of-equation, number-of-music-playlists, minimum-removals-mountain-array, count-different-palindromic-subsequences, painting-the-walls, shortest-path-to-get-all-keys; bank at **1115**; 3613 tests.
- [x] **10 more classic hard problems (Batch 10)** — stone-game-vii, stone-game-v, maximum-sum-three-non-overlapping-subarrays, minimum-cost-to-merge-stones, palindrome-partitioning-iii, maximum-height-by-stacking-cuboids, minimum-number-of-days-to-eat-n-oranges, best-team-with-no-conflicts, number-of-ways-to-form-target, minimum-xor-sum-of-two-arrays; bank at **1125**; 3643 tests.
- [x] **10 more classic hard problems (Batch 11)** — rearrange-sticks-k-visible, stay-in-same-place-after-steps, minimum-score-triangulation-of-polygon, minimum-cost-to-make-array-equal, maximum-achievable-transfer-requests, maximum-elegance-k-subsequence, minimum-total-distance-traveled, minimum-incompatibility, fair-distribution-of-cookies, maximum-profit-in-job-scheduling; bank at **1135**; 3673 tests.
- [x] **Challenge page UX improvements** — array diff hints in TerminalPanel (shows index + length diff when expected/actual diverge); inline copy buttons on problem examples; Enter-key submit in CustomTestPanel; blocked-page "Try another challenge" button threading targetUrl through fail-challenge message.
- [x] **Marketing site stats updated** — 1,100+ problems in all three stat locations.
- [x] **9 new classic medium/hard problems (Batch 12)** — dota2-senate (medium/strings+stack), time-needed-to-inform-all-employees (medium/graph+tree), minesweeper (medium/graph+arrays), minimum-score-triangulation (medium/dp), score-after-flipping-matrix (medium/arrays), beautiful-array (hard/arrays+dp), recover-binary-search-tree (hard/tree), find-duplicate-subtrees (medium/tree+hash-map), all-possible-full-binary-trees (medium/tree+dp); bank at **1144**; 3700 tests.
- [x] **8 new classic problems (Batch 13)** — cherry-pickup-ii (hard/dp), detonate-maximum-bombs (medium/graph), stone-game-vii (medium/dp), design-browser-history (medium/stack), knight-dialer (medium/dp), paint-house-iii (hard/dp), maximize-distance-to-closest-person (medium/arrays), minimum-number-of-vertices (medium/graph); bank at **1149**; 3721 tests.
- [x] **8 more classic problems (Batch 14)** — path-with-minimum-effort (medium/graph, Dijkstra), path-with-maximum-probability (medium/graph, Bellman-Ford), video-stitching (medium/dp, greedy interval), subarray-sums-divisible-by-k (medium/hash-map), sum-of-even-numbers-after-queries (medium/arrays), average-waiting-time (medium/arrays), sort-an-array (medium/arrays, merge sort), sliding-puzzle (hard/graph, BFS); bank at **1157**; 3745 tests.
- [x] **9 more classic problems (Batch 15)** — knight-probability-in-chessboard (medium/dp), minimum-distance-bst-nodes (easy/tree), second-minimum-node-binary-tree (easy/tree), meeting-rooms-iii (hard/heap), minimum-obstacle-removal-to-reach-corner (hard/graph), max-sum-of-rectangle-no-larger-than-k (hard/arrays+binary-search), count-unique-characters-of-all-substrings (hard/strings+math), zuma-game (hard/dp+backtracking), find-longest-valid-obstacle-course (hard/binary-search+dp); bank at **1166**; 3772 tests.
- [x] **10 more classic problems (Batch 16)** — best-sightseeing-pair (medium/arrays+dp), find-longest-substring-vowels-even (medium/hash-map+strings), reverse-substrings-between-parentheses (medium/stack+strings), design-stack-with-increment (medium/stack+arrays), minimum-number-of-frogs-croaking (medium/strings+hash-map), shortest-path-visiting-all-nodes (hard/graph+dp), minimum-number-of-work-sessions (medium/dp+backtracking), minimize-product-sum (medium/arrays+math), count-range-sum (hard/arrays+binary-search), all-paths-from-source-lead-to-destination (medium/graph); bank at **1176**; 3802 tests.
- [x] **9 more classic problems (Batch 17)** — jump-game-v (dp/medium), word-subsets (strings/medium), max-chunks-to-make-sorted-ii (arrays/hard), count-ways-to-place-houses (dp/medium), stone-game-viii (dp/medium), stone-game-ix (math/medium), maximum-score-removing-stones (math/medium), number-of-atoms (strings/hard), find-all-people-with-secret (graph/hard); bank at **1185**; 3829 tests.
- [x] **7 more classic problems (Batch 18)** — plates-between-candles (arrays/medium), minimum-cost-to-make-all-characters-equal (strings/medium), maximum-consecutive-floors-without-special-floors (arrays/medium), minimum-moves-to-reach-target-score (math/medium), maximum-segment-sum-after-removals (arrays/hard), prime-palindrome (math/medium), car-fleet-ii (stack/hard); bank at **1192**; 3850 tests.
- [x] **9 more classic problems (Batch 17-local)** — advantage-shuffle (arrays/medium), longest-repeating-character-replacement (sliding-window/medium), subarrays-with-k-different-integers (sliding-window/hard), binary-subarrays-with-sum (hash-map/medium), reduce-array-size-to-the-half (hash-map/medium), number-of-ways-to-divide-a-long-corridor (math/hard), delete-operation-for-two-strings (dp/medium), product-of-array-except-self (arrays/medium), minimum-moves-to-equal-array-elements (math/medium); bank at **1200**; 3877 tests.
- [x] **4 more classic problems (Batch 19)** — minimum-path-cost-in-a-grid (dp/medium), count-ways-group-overlapping-ranges (math/medium), take-gifts-from-the-richest-pile (heap/easy), find-all-good-indices (arrays/medium); bank at **1218**; 3924 tests. Also added remote Batch 18-local (race-car, minimum-cost-to-make-valid-parentheses, minimum-score-of-path, count-operations-to-obtain-zero-ii, minimum-deletions-to-balance-parentheses, smallest-divisor-given-threshold, additive-number, unique-paths-iii).
- [x] **5 more classic problems (Batch 20)** — partition-array-into-three-parts-with-equal-sum (arrays/easy), second-largest-digit-in-string (strings/easy), number-of-operations-to-make-network-connected (graph/medium), maximize-number-of-tasks-you-can-assign (arrays+binary-search/hard), minimum-consecutive-cards-to-pick-up (hash-map/medium); bank at **1223**; 3939 tests.
- [x] **3 more classic problems (Batch 21)** — lexicographically-smallest-palindrome (strings/easy), minimum-operations-to-make-binary-array-elements-equal-to-one-ii (arrays/medium), closest-prime-numbers-in-range (math/medium); bank at **1226**; 3948 tests.
- [x] **3 more classic problems (Batch 22)** — sum-of-subarray-minimums (stack/medium), maximum-xor-for-each-query (arrays/medium), count-ways-to-split-array (arrays/medium); bank at **1234** (with remote merges); 3957 tests.
- [x] **3 more classic problems (Batch 23)** — maximum-subarray-sum-with-one-deletion (dp/medium), number-of-sub-arrays-size-k-average-threshold (sliding-window/medium), grumpy-bookstore-owner (sliding-window/medium); bank at **1237**; 3966 tests.
- [x] **3 more classic problems (Batch 24)** — most-stones-removed-with-same-row-or-column (graph/medium), longest-subsequence-with-limited-sum (arrays/easy), minimum-number-of-arrows-to-burst-balloons (arrays/medium); bank at **1249** (with remote merges); 3975 tests.
- [x] **TerminalPanel diff hints in Terminal tab** — Terminal tab now shows `ArrayDiffHint` + `StringDiffHint` on fail entries (stored raw expected/actual alongside stringified); previously only Test Results tab showed diff hints.
- [x] **Marketing site stats updated** — all three "1,100+" stat locations updated to "1,200+".
- [x] **5 more classic problems (Batch 25)** — find-largest-value-each-tree-row (tree/medium, BFS max per level), find-bottom-left-tree-value (tree/medium, BFS leftmost last row), most-stones-removed-same-row-or-column (graph/medium, Union-Find), count-unreachable-pairs-of-nodes (graph/medium, DFS component counting), my-calendar-i (arrays+binary-search/medium, interval overlap); bank at **1254**; 3990 tests.
- [x] **3 more classic problems (Batch 26)** — find-players-with-zero-or-one-losses (hash-map/medium), count-unreachable-pairs-after-removing-vertices (graph/medium, Union-Find), maximum-value-at-given-index-in-bounded-array (binary-search/medium, BigInt for overflow safety); bank at **1257**; 3999 tests.
- [x] **5 more classic problems (Batch 27)** — minimum-area-rectangle (arrays+hash-map/medium, diagonal O(n^2)), minimum-operations-to-halve-array-sum (heap/medium, greedy), maximum-binary-string-after-change (strings/medium, single-zero placement), circular-array-loop (arrays+two-pointers/medium, Floyd's + direction guard), longest-arithmetic-subsequence-of-given-difference (dp+hash-map/medium, O(n)); bank at **1262**; 4014 tests.
- [x] **3 more classic problems (Batch 28)** — time-needed-to-buy-tickets (arrays/easy, formula), number-of-subarrays-with-bounded-maximum (sliding-window/medium, two-pointer dp), kth-smallest-element-in-bst (tree/medium, inorder traversal with BST preamble); bank at **1265**; 4023 tests.
- [x] **3 more classic problems (Batch 29)** — find-minimum-in-rotated-sorted-array (binary-search/medium), search-in-rotated-sorted-array (binary-search/medium), minimum-number-of-days-to-make-m-bouquets (binary-search/medium, feasibility check); bank at **1268**; 4032 tests.
- [x] **10 more classic problems (Batch 19-local)** — walls-and-gates (graph/medium, multi-source BFS), making-a-large-island (graph/hard, DFS island labeling), increasing-order-search-tree (tree/easy, in-order flattening), next-greater-node-in-linked-list (stack/medium, monotonic stack), longest-cycle-in-graph (graph/hard, timestamp DFS), maximum-subarray-min-product (stack/medium, prefix sum + monotonic stack + BigInt MOD), steps-to-make-array-nondecreasing (stack/medium, DP+monotonic stack), count-substrings-that-differ-by-one-character (strings/medium, diagonal traversal), minimum-operations-to-move-balls (arrays/easy, two-pass O(n)), maximum-area-of-piece-of-cake (arrays/medium, sort+max-gap, BigInt MOD); bank at **1277**; 4074 tests. Also merged remote batch 28 (15 more problems).
- [x] **4 more classic problems (Batch 30)** — split-array-into-consecutive-subsequences (arrays+hash-map/medium, greedy freq+end maps), restore-the-array-from-adjacent-pairs (arrays+hash-map/medium, adjacency list + endpoint traversal), monotone-increasing-digits (math/medium, right-to-left decrement + fill 9s), construct-k-palindrome-strings (strings+hash-map/medium, oddCount ≤ k ≤ s.length); bank at **1272**; 4044 tests.
- [x] **5 more classic problems (Batch 31-remote)** — remove-duplicate-letters (stack/medium, monotone stack greedy), best-time-to-buy-and-sell-stock-iv (dp/hard, O(kn) buy/sell DP), shortest-path-with-alternating-colors (graph/medium, BFS color state), minimum-swaps-to-make-sequences-increasing (dp/medium, keep/swap DP transitions), array-of-doubled-pairs (arrays+hash-map/medium, sort by abs + greedy count); bank at **1282**; 4098 tests.
- [x] **3 more classic problems (Batch 31-local)** — count-vowel-permutation (dp/medium, 5-state transition mod 10^9+7), longest-ideal-subsequence (dp/medium, O(26n) dp by char index), minimum-string-length-after-removing-substrings (strings+stack/easy, stack collapse AB/CD); bank at **1283**; 4107 tests.
- [x] **10 more classic problems (Batch 30-local)** — push-dominoes (arrays/medium, force propagation), largest-merge-of-two-strings (strings/medium, greedy suffix comparison), remove-covered-intervals (arrays/medium, sort+max-right), minimize-array-value (arrays/medium, prefix average ceiling), validate-ip-address (strings/medium, split+regex), maximum-sum-hourglass (arrays/medium, 3×3 scan), reverse-odd-levels-binary-tree (tree/medium, symmetric DFS swap), find-closest-node-to-given-two-nodes (graph/medium, functional graph BFS), number-of-flowers-in-full-bloom (binary-search/medium, sorted starts/ends), most-beautiful-item-for-each-query (arrays+binary-search/medium, sorted prefix-max beauty); bank at **1298**; 4137 tests.
- [x] **5 more classic problems (Batch 32-remote)** — total-hamming-distance (math/medium, bitwise population count per bit), maximum-number-of-occurrences-of-a-substring (strings+sliding-window/medium, only minSize matters), longest-happy-prefix (strings+dp/medium, KMP failure function), reducing-dishes (dp/hard, greedy sort desc + running sum), find-closest-node-to-given-two-nodes merged with remote (graph/medium); bank at **1287**; 4149 tests.
- [x] **3 more classic problems (Batch 32-local)** — minimum-number-of-swaps-to-make-string-balanced (strings+two-pointers/medium, unmatched closing brackets / 2), number-of-substrings-containing-all-three-characters (strings+sliding-window/medium, track last-seen positions), maximum-score-from-removing-substrings (strings+stack/medium, greedy order + two-pass stack); bank at **1304**; 4158 tests.
- [x] **3 more classic problems (Batch 33)** — minimum-deletions-to-make-string-balanced (strings+dp/medium, O(n) scan bCount/dp), minimum-difference-between-largest-smallest-three-moves (arrays/medium, sort + 4-window min), shortest-subarray-to-remove-to-make-array-sorted (arrays+two-pointers/medium, prefix/suffix + two-pointer merge); bank at **1307**; 4167 tests.
- [x] **3 more classic problems (Batch 34)** — minimum-health-to-beat-the-game (arrays/medium, greedy armor on max), check-if-string-contains-all-binary-codes-of-size-k (strings+hash-map/medium, sliding window + set), longest-nice-substring (strings/easy, divide-and-conquer on missing-case chars); bank at **1310**; 4176 tests.
- [x] **3 more classic problems (Batch 35)** — longest-subarray-of-1s-after-deleting-one-element (sliding-window/medium, window with at most 1 zero, answer = size−1), count-number-of-nice-subarrays (sliding-window/medium, exactly k = atMost(k)−atMost(k−1)), maximum-length-of-a-concatenated-string-with-unique-characters (backtracking/medium, bitmask DFS); also merged remote Batch 35 (minimum-add-to-make-parentheses-valid, predict-winner, can-i-win, optimal-division, minimum-insertions-to-balance-parentheses); bank at **1301**; 4200 tests.
- [x] **4 more classic problems (Batch 36)** — number-of-ways-to-arrive-at-destination (graph+dp/medium, Dijkstra + count paths mod 1e9+7), reorder-routes-to-make-all-paths-lead-to-city-zero (graph/medium, BFS counting forward edges), maximum-length-of-pair-chain (dp/medium, greedy sort by right endpoint), count-servers-that-communicate (arrays/medium, row+col counts); marketing site updated to 1,320+; also merged remote Batch 36 (count-the-number-of-fair-pairs, find-if-array-can-be-sorted, construct-string-with-repeat-limit, count-ways-to-select-buildings, power-of-heroes); bank at **1322**; 4263 tests.
- [x] **12 more classic problems (Batch 36-remote)** — nim-game (math/easy), palindrome-permutation (strings+hash-map/easy), remove-element (arrays+two-pointers/easy), water-bottles (math/easy), distribute-candies (hash-map+arrays/easy), count-prime-set-bits (math/easy), verifying-alien-dictionary (strings+hash-map/easy), rectangle-area (math/medium, union of two rectangles), encode-decode-strings (strings/medium, length-prefix encoding), shortest-distance-to-character (arrays+two-pointers/easy, two-pass), utf-8-validation (math/medium, bit parsing), range-addition (arrays/medium, difference array); bank at **1313**; 4236 tests. Marketing site updated to 1,320+.
- [x] **5 more classic problems (Batch 34-local)** — count-the-number-of-fair-pairs (arrays+binary-search/medium, sort+two-pointer countAtMost), find-if-array-can-be-sorted (arrays/medium, popcount grouping+prevMax check), construct-string-with-repeat-limit (strings+heap/medium, greedy freq array desc), count-ways-to-select-buildings (strings+dp/medium, prefix-ones 010/101 pattern), power-of-heroes (arrays+math/hard, sort+running weighted sum BigInt mod); bank at **1318**; 4251 tests.
- [x] **5 more classic problems (Batch 37)** — valid-palindrome (strings/easy, two-pointer alphanumeric), peak-index-in-mountain-array (binary-search/easy, O(log n) binary search), two-keys-keyboard (math+dp/medium, prime factorization sum), bag-of-tokens (arrays+two-pointers/medium, greedy sort+two-pointer), find-the-k-weakest-rows-in-a-matrix (arrays+binary-search/easy, sort by soldier count); bank at **1331**; 4278 tests.
- [x] **3 more classic problems (Batch 37-local)** — separate-black-and-white-balls (strings+two-pointers/medium, count inversion-cost scanning left), minimum-number-of-steps-to-make-two-strings-anagram (strings+hash-map/medium, freq diff then sum negatives), find-the-prefix-common-array-of-two-arrays (arrays+hash-map/medium, freq hits 2 = common); bank at **1334**; 4287 tests.
- [x] **5 more classic problems (Batch 38)** — last-stone-weight-ii (dp/medium, 0/1 knapsack partition minimize |sum1−sum2|), divide-two-integers (math/medium, BigInt bit-shifting without * / %), longest-harmonious-subsequence (arrays+hash-map/easy, freq map count k + k+1 pairs), buddy-strings (strings/easy, swap two identical or exactly-2-diff-positions), beautiful-subsets (arrays+backtracking/medium, sort+backtrack+freq-map no two elements differ by k); fixed beautiful-subsets expected for [1..5] k=1 to 12 (not 8); bank at **1344**; 4302 tests.
- [x] **4 more classic problems (Batch 37-local)** — my-calendar-ii (arrays/medium, double-booked interval tracking), task-scheduler-ii (arrays+hash-map/medium, greedy last-day map), swapping-nodes-in-a-linked-list (linked-list+two-pointers/medium, k-th from front/back value swap), move-pieces-to-obtain-a-string (strings+two-pointers/medium, L/R movement constraint check); TerminalPanel Test Results tab now shows animated run-count badge (X/Y passing); marketing site updated to 1,330+; bank at **1348**; 4302+ tests.
- [x] **3 more classic problems (Batch 38-local)** — greatest-common-divisor-of-strings (strings+math/easy, concatenation check + gcd length), maximum-distance-in-arrays (arrays/medium, two-pass running min/max from different arrays), path-with-maximum-gold (backtracking/medium, DFS with cell zeroing); bank at **1351**; 4323 tests.
- [x] **5 more classic problems (Batch 39)** — convert-sorted-array-to-bst (tree/easy, midpoint recursion balanced BST), trim-a-binary-search-tree (tree+binary-search/medium, recursive prune out-of-range), finding-users-active-minutes (hash-map/medium, unique-minute Set per user), day-of-the-year (math+strings/easy, leap-year day formula), type-of-triangle (math/easy, sort+classify equilateral/isosceles/scalene/none); bank at **1361**; 4338 tests.
- [x] **5 more classic problems (Batch 40)** — maximum-enemy-forts-that-can-be-captured (arrays+two-pointers/easy, scan non-zero pairs counting zeros between), minimum-amount-of-time-to-collect-garbage (arrays/medium, per-type travel to last occurrence), check-if-array-is-sorted-and-rotated (arrays/easy, count drops ≤1), nodes-between-critical-points (linked-list/medium, find min/max gap between critical point indices), number-after-a-double-reversal (math/easy, true iff num==0 or num%10!=0); bank at **1371**; 4353 tests.
- [x] **3 more classic problems (Batch 39-local)** — domino-and-tromino-tiling (dp/medium, f(n)=2f(n-1)+f(n-3) mod 1e9+7), number-of-lines-to-write-string (strings+arrays/easy, greedy line packing), find-the-minimum-and-maximum-number-of-nodes-between-critical-points (linked-list/medium, scan critical points min-consecutive/max-span gap); bank at **1374**; 4362 tests.
- [x] **3 more classic problems (Batch 41-tree)** — binary-tree-inorder-traversal (tree/easy, iterative stack-based), binary-tree-preorder-traversal (tree/easy, iterative stack-based), binary-tree-postorder-traversal (tree/easy, iterative reverse-preorder); bank at **1377**; 4371 tests.
- [x] **5 more classic problems (Batch 41)** — minimum-hours-of-training (arrays/medium, greedy energy+experience top-up), largest-number-after-digit-swaps-by-parity (arrays/easy, swap same-parity maximally), number-of-pairs-of-strings-with-concatenation-equal-to-target (strings+arrays/medium, O(n²) concat check), sum-of-beauty-of-all-substrings (strings/medium, O(n²) freq max−min), maximum-number-of-words-you-can-type (strings+hash-map/easy, broken letter set filter); bank at **1382**; 4386 tests.
- [x] **4 more classic problems (Batch 42)** — ugly-number (math/easy, divide by 2/3/5 until 1), lemonade-change (arrays/easy, greedy coin change), most-frequent-subtree-sum (tree+hash-map/medium, DFS subtree sum freq count), implement-stack-using-queues (stack/easy, rotate-on-push single-queue); bank at **1383**; 4398 tests.
- [x] **2 more classic problems (Batch 42-local)** — sum-of-nodes-with-even-valued-grandparent (tree/medium, DFS passing parent+grandparent values), flip-equivalent-binary-trees (tree/medium, recursive same-or-flipped subtrees); bank at **1385**; 4404 tests.
- [x] **5 more classic problems (Batch 42-remote)** — count-vowel-substrings-of-a-string (strings/easy, O(n²) inner break), number-of-rectangles-that-can-form-the-largest-square (arrays/easy, min-side max count), determine-if-string-halves-are-alike (strings/easy, vowel count halves), divide-a-string-into-groups-of-size-k (strings/easy, pad + chunk), count-integers-with-even-digit-sum (math/easy, O(n) digit sum parity); bank at **1390**; 4419 tests.
- [x] **5 more classic problems (Batch 43)** — design-hashset (hash-map/easy, boolean array implementation), design-parking-system (arrays/easy, three-counter spot tracker), defuse-the-bomb (arrays+sliding-window/easy, circular sum by k), check-if-sentence-is-pangram (strings+hash-map/easy, 26 unique letters), find-the-student-that-will-replace-the-chalk (arrays+binary-search/medium, modular prefix sum); bank at **1395**; 4434 tests.
- [x] **2 more classic problems (Batch 43-local)** — greatest-english-letter-in-upper-and-lower-case (strings+hash-map/easy, scan Z→A for both-case presence), reformat-the-string (strings/easy, interleave letters/digits canonical order); bank at **1397**; 4440 tests.
- [x] **2 more classic problems (Batch 44)** — find-n-unique-integers-sum-up-to-zero (arrays+math/easy, [1..n-1,-(sum)] canonical form), check-array-formation-through-concatenation (arrays+hash-map/easy, first-element map + consecutive match); bank at **1399**; 4446 tests.
- [x] **Problem browser UX** — "unsolved only" toggle filter hides solved problems; per-row "→" button (hover-revealed) deep-links to challenge page with `?problem=<id>`; openProblemInChallenge helper gracefully ignores non-extension context.
- [x] **3 more classic problems (Batch 45)** — maximum-depth-binary-tree (tree/easy, DFS max(left,right)+1), minimum-absolute-difference-in-bst (tree+binary-search/easy, in-order traversal min adjacent diff), pascals-triangle-ii (arrays+math/easy, in-place row update right-to-left); bank at **1402**; 4455 tests.
- [x] **5 more classic problems (Batch 45-remote)** — minimize-string-length (strings/easy, unique chars), find-score-of-array-after-marking-elements (arrays/medium, sort+mark greedy), elements-appearing-more-than-25-percent (arrays/easy, stride check), make-string-a-subsequence-using-cyclic-increments (strings/medium, greedy cyclic match), number-of-beautiful-integers-in-range (math/hard, digit DP even−odd diff + k modular); bank at **1407**; 4470 tests.
- [x] **10 more classic problems (Batch 46)** — super-egg-drop (hard DP, inverse floor-counting 1D rolling array), maximum-score-spliced-array (medium DP, Kadane on difference array), count-increasing-quadruplets (hard DP, O(n³) left-count × right-count per inversion pair), ways-to-make-fair-array (medium arrays, prefix/suffix even+odd sums), minimum-initial-energy-to-finish-tasks (medium greedy, sort desc by min−actual), construct-target-array-with-multiple-sums (hard simulation, reverse modulo shrink), minimize-maximum-difference-of-pairs (medium binary-search, greedy feasibility), minimum-number-of-keypresses (medium strings, sort freq desc × floor(i/9)+1), longest-subarray-at-most-k-frequency (medium sliding-window, Map freq shrink), minimum-deletions-to-make-string-k-special (medium strings, O(26²) sorted freq scan); bank at **1417**; 4500 tests.
- [x] **Problem browser UX (sort + random)** — sort dropdown (default / title A→Z / easy→hard / hard→easy) added next to search; "⚂ random" button opens a random problem from the current filtered set; both wired to reset pagination; sort uses useMemo for efficiency.
- [x] **Fix reverse-string + first-bad-version** — reverse-string updated to char-array in-place swap spec (two-pointers tag); first-bad-version test cases aligned to spec.
- [x] **5 more classic problems (Batch 45-local)** — cousins-in-binary-tree (tree/easy, BFS depth+parent check), all-nodes-distance-k-in-binary-tree (tree+graph/medium, parent map + BFS), open-lock (graph/medium, BFS on 4-digit state space), maximize-sum-after-k-negations (arrays+math/easy, greedy sort negate negatives), remove-duplicates-from-sorted-list (linked-list/easy, single-pass dedup); bank at **1409**; 4476 tests.
- [x] **5 more classic problems (Batch 47)** — intersection-of-two-arrays (hash-map/easy, set intersection sorted), climbing-stairs-memo (dp/easy, memoized recursion), count-vowels-in-string (strings/easy, vowel set scan), percentage-of-letter (strings/easy, floor(count/len*100)), reverse-words-in-string (strings+two-pointers/medium, trim+split+reverse); bank at **1427**; 4530 tests.
- [x] **Challenge TopBar practice mode** — `practiceMode` prop shows "practice mode" subtitle instead of "solve to unlock" when no target URL is present.
- [x] **Popup UX** — recent solves are now clickable buttons that open the specific problem in challenge; active unlock domains are clickable to navigate to the site.
- [x] **5 more classic problems (Batch 48-remote)** — day-of-the-week (math/easy), guess-number-higher-or-lower (binary-search/easy), largest-triangle-area (math/easy), minimum-value-to-get-positive-step-sum (arrays/easy), number-of-rectangles-that-can-form-largest-square (arrays/easy); bank at ~1420; 4545 tests.
- [x] **5 more classic problems (Batch 47-local)** — successful-pairs-of-spells-and-potions (binary-search/medium, sort+binary-search per spell), minimum-operations-to-reduce-x-to-zero (sliding-window/medium, longest subarray = total−x), largest-submatrix-with-rearrangements (arrays/medium, column heights+sort), subtree-of-another-tree (tree/easy, isSameTree+DFS), maximum-product-of-splitted-binary-tree (tree+dp/medium, DFS maximize s×(total−s) mod 1e9+7); bank at **1425**; 4560 tests.
- [x] **Challenge UX polish** — TopBar shows "← settings" back link in practice mode; "Browse problems" button on solved-standalone screen; target domain in subtitle ("unlock youtube.com") in gate mode; NoTargetBanner text unified with header terminology; HintsSection shows "All hints revealed." after last hint; difficulty+tag filter pills restored with static counts.
- [x] **Batch 49** — watering-plants (arrays/easy), logger-rate-limiter (hash-map/easy), bst-from-preorder (tree/medium), balance-a-binary-search-tree (tree/medium), maximum-sum-bst-in-binary-tree (tree/hard); bank at **1430**; 4575 tests.
- [x] **Batch 50** — stock-price-fluctuation (heap/medium, dual-heap or sorted map with timestamp corrections), minimum-replacements-to-sort-array (arrays/hard, greedy right-to-left ceiling division), largest-color-value-in-directed-graph (graph/hard, Kahn's BFS + DP color counts, return -1 on cycle), string-without-aaa-or-bbb (strings/medium, greedy always-write-more-frequent), count-the-hidden-sequences (arrays/medium, prefix-sum spread formula); bank at **1435**; 4590 tests.
- [x] **perf(options)**: Hoisted `totalByDiff` to a module-level constant (was re-computed 3×1430 iterations per render). Wrapped `solvedByDiff` and `solvedCount` in useMemo with [solvedIds] dep.
- [x] **fix(terminal): "TESTS PASSED" in run mode** — TerminalPanel summary now shows "TESTS PASSED" (not "ACCEPTED") when run mode succeeds; Test Results tab also shows "submit to run all tests" hint in that state; `mode` threaded through summary entry type.
- [x] **Batch 51** — my-calendar-iii (hard/arrays+binary-search, difference array k-booking), design-twitter (medium/hash-map, news-feed multi-source merge top-10), zigzag-iterator (medium/arrays, alternating two-array traversal), second-minimum-time-to-reach-destination (medium/graph, BFS tracking two shortest arrival times with traffic light delays); bank at **1438**; 4602 tests.
- [x] **Batch 51 continued** — path-sum-ii (tree/medium, DFS backtracking sorted), construct-binary-tree-from-inorder-and-postorder-traversal (tree/medium, index-map + recursive split), maximum-number-of-removable-characters (binary-search/medium, binary search on k + subsequence check), minimum-sum-of-squared-difference (arrays/medium, binary search on threshold), find-the-kth-largest-integer-in-array (arrays/medium, sort by length+lex), trapping-rain-water-ii (heap/hard, BFS min-heap boundary), minimum-number-of-pushes-to-type-word-ii (math/medium, freq sort + slot assignment), maximize-win-from-two-segments (sliding-window/medium, two-pass DP+binary-search), minimum-swaps-to-group-all-ones-together-ii (sliding-window/medium, circular doubled-array window); bank at **1447**; 4629 tests.
- [x] **Batch 52-57 (remote + local)** — 55+ new problems across all tags (see section notes above); bank at **1502**; 4794 tests.
- [x] **🎉 1,500-problem milestone** — marketing site updated to "1,500+" in all 3 stat locations.
- [x] **fix(terminal): FAIL timing + error copy** — TestResultCard shows `durationMs` for FAIL verdicts; runtime-error cards gain a copy button for the error message.
- [x] **Bank at 1527 (Batch 57 consolidated)** — 25+ more problems from parallel agents; all merge conflicts resolved; 4869 tests.
- [x] **fix(sw): record actual solve language** — `SolvedProblemRecord.language` was hardcoded to `'javascript'`; added `isSupportedLanguage` type guard, propagated real language through `GrantUnlockRequest`, sent actual language + attempts from challenge page.

---

## Notes

- 2026-05-21: Project bootstrapped. Research confirms the differentiation thesis — competitors
  redirect to leetcode.com and poll its unofficial API; LeetLock authors its own problems and runs
  code in-extension. See `docs/RESEARCH.md`.
- 2026-05-21: Phase 1 done. Toolchain verified — `@crxjs/vite-plugin` v2 is stable (2.4.0); pinned
  Vite 7 + `@vitejs/plugin-react` 5 for a fully compatible trio (`DECISIONS.md` D2, D12). The dist
  `manifest.json` correctly resolves all five page surfaces, the SW loader, and the content script.
- 2026-05-22: Phase 2 done — 24 verified problems (3 per tag), typed area-aware storage layer, and
  a preference-aware problem selector that relaxes its filter so a challenge can always be shown.
- 2026-05-22: Phase 3 done — sandboxed Blob-Worker code runner with a hard timeout, plus
  deep-equality and verdict judging, all unit-tested. 84 tests passing overall.
- Phase 4 guidance: the challenge page should use `runTests` from `src/lib/judge` for Run/Submit,
  `pickChallengeProblem` from `src/lib/problems` to choose a problem, and CodeMirror 6 for the
  editor. The `target` blocked URL arrives as a `?target=` query param on `challenge.html`.
- 2026-05-23: Phases 4–7 done in one cycle. Challenge UI built by a `ui-generator-reviewer`
  agent (Challenge.tsx + 4 sub-components + grayscale CodeMirror theme + 33 helper tests).
  Blocking engine (matcher + DNR builder), unlock tokens, full service worker, content script,
  and Blocked page all implemented. 75 new tests added (159 total). The end-to-end "block → solve
  → timed unlock" loop is wired in code; manual browser verification documented in `TESTING.md`.
- 2026-05-23: Phases 9 and 10 are partial — all the *lib* code is done and tested (crypto, streak,
  cooldown), but the UI integration of password/partner locks, pending-changes review, and the
  streak display in the popup must wait for Phases 8 (Settings page) and 11 (popup).
- 2026-05-23: Phase 8 + Phase 9 UI integration complete. Settings page built by ui-generator-reviewer
  agent (Options.tsx + 12 sub-components + options-helpers.ts + 68 new helper tests = 227 total).
  All 12 sections implemented: blocked-sites editor, keyword triggers, challenge prefs, unlock,
  problem selection, failure action, strict mode, password lock, accountability partner,
  pending changes (with live countdown), sync status, and reset. Full cooldown-deferral and
  password-gate logic wired in the Options.tsx orchestrator. Also fixed a pre-existing
  Popup.tsx TS2322 type error (Awaited<ReturnType<...>> -> Promise<StorageSchema[K]>).
