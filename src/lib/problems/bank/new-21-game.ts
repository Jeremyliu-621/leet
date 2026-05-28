import type { Problem } from '../types';

export const problem: Problem = {
  id: 'new-21-game',
  title: 'New 21 Game',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'sliding-window'],
  description: `Alice plays the following game, risking her mental health:

Alice starts with \`0\` points and draws numbers while she has fewer than \`k\` points. During each draw, she gains an integer number of points randomly chosen from the range \`[1, maxPts]\`, with each point value equally likely.

Alice stops drawing when she accumulates **at least \`k\` points**.

Return the **probability** that Alice has **\`n\` or fewer** points when she stops.

Note that if \`k = 0\`, she will stop without drawing any cards and has 0 points, which is ≤ n for any n ≥ 0.`,
  constraints: [
    '0 <= k <= n <= 10^4',
    '1 <= maxPts <= 10^4',
  ],
  examples: [
    {
      input: 'n = 10, k = 1, maxPts = 10',
      output: '1.00000',
      explanation: 'Alice draws exactly once and gets 1–10 points. All possible scores are ≤ 10 = n. Probability = 1.',
    },
    {
      input: 'n = 6, k = 1, maxPts = 10',
      output: '0.60000',
      explanation: 'Alice draws once. Scores 1–6 are ≤ n, scores 7–10 are > n. Probability = 6/10 = 0.6.',
    },
    {
      input: 'n = 21, k = 21, maxPts = 1',
      output: '1.00000',
      explanation: 'With maxPts=1, Alice draws exactly k=21 times, always ending with score 21 ≤ n=21.',
    },
  ],
  hints: [
    'Let `dp[x]` = probability of having exactly `x` points at the end. `dp[0] = 1`. For each score `x` in `[1, n]`, `dp[x] = (sum of dp[x-1], dp[x-2], ..., dp[x-maxPts]) / maxPts` — but only for predecessors in `[0, k-1]` (states where drawing still occurs).',
    'Maintain a sliding window sum of `dp[max(0, x-maxPts)..x-1]` to avoid an O(maxPts) inner loop. Increment the window sum only while `x-1 < k` (still drawing); once `x-1 >= k`, that state contributes to the final answer, not the window.',
    'Return `sum(dp[k..n])`. The edge cases are `k = 0` (return 1.0) and `n >= k + maxPts` (return 1.0 — cannot overshoot).',
  ],
  functionName: 'new21Game',
  params: ['n', 'k', 'maxPts'],
  starterCode: {
    javascript: `function new21Game(n, k, maxPts) {
  if (k === 0 || n >= k + maxPts) return 1.0;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1.0;
  let windowSum = 1.0, result = 0.0;
  for (let i = 1; i <= n; i++) {
    dp[i] = windowSum / maxPts;
    if (i < k) windowSum += dp[i];        // still in drawing range
    else result += dp[i];                  // i >= k: final state
    if (i >= maxPts) windowSum -= dp[i - maxPts];  // slide window
  }
  return result;
}`,
    typescript: "function new21Game(n: number, k: number, maxPts: number): number {\n  if (k === 0 || n >= k + maxPts) return 1.0;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1.0;\n  let windowSum = 1.0, result = 0.0;\n  for (let i = 1; i <= n; i++) {\n    dp[i] = windowSum / maxPts;\n    if (i < k) windowSum += dp[i];        // still in drawing range\n    else result += dp[i];                  // i >= k: final state\n    if (i >= maxPts) windowSum -= dp[i - maxPts];  // slide window\n  }\n  return result;\n}",

    python: `def new21Game(n, k, maxPts):
    if k == 0 or n >= k + maxPts:
        return 1.0
    dp = [0.0] * (n + 1)
    dp[0] = 1.0
    window_sum = 1.0
    result = 0.0
    for i in range(1, n + 1):
        dp[i] = window_sum / maxPts
        if i < k:
            window_sum += dp[i]
        else:
            result += dp[i]
        if i >= maxPts:
            window_sum -= dp[i - maxPts]
    return result`,
  },
  visibleTests: [
    { args: [10, 1, 10], expected: 1.0 },
    { args: [6, 1, 10], expected: 0.6 },
    { args: [21, 21, 1], expected: 1.0 },
  ],
  hiddenTests: [
    { args: [0, 0, 1], expected: 1.0 },
    { args: [1, 2, 3], expected: 0.0 },
    { args: [2, 2, 3], expected: 0.4444444444444444 },
    { args: [3, 2, 3], expected: 0.8888888888888888 },
    { args: [5, 4, 1], expected: 1.0 },
  ],
};
