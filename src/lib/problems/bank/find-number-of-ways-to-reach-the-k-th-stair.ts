import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-number-of-ways-to-reach-the-k-th-stair',
  title: 'Find Number of Ways to Reach the K-th Stair',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer \`k\`. There is a staircase with an infinite number of stairs, and you begin on stair **1**.

Return the number of ways you can reach stair \`k\`.

At each step, you can perform one of two operations:

- **Go down** one stair (stair \`i - 1\`). Cannot be used if you are already at stair 0, and cannot be used two consecutive times.
- **Go up** using operation \`jump\`: move to stair \`i + 2^jump\`, then increment \`jump\` by 1. \`jump\` starts at 0.

Note that you may visit a stair more than once.`,
  constraints: [
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'k = 0',
      output: '2',
      explanation: 'Two ways: (1→0) via go-down, or (1→2^0=1+1→2→1→2^1+1=3→2→1→0) — going down from stair 1 once; or starting at 1→go-down→0.',
    },
    {
      input: 'k = 1',
      output: '4',
      explanation: 'Start at stair 1 (already there), or 1→0→1→..., etc. Four distinct paths.',
    },
  ],
  hints: [
    'Level 1: Use memoized recursion: state = (current stair i, current jump counter, whether last op was go-down).',
    'Level 2: dp(i, jump, usedDown): if i > k+1 return 0; ways = (i==k ? 1 : 0) + dp(i + 2^jump, jump+1, false) + (i>0 && !usedDown ? dp(i-1, jump, true) : 0).',
    'Level 3: Alternatively, use the closed form: the answer equals the sum over j of C(j+1, 2^j - k) where the jump sequence covers k.',
  ],
  functionName: 'waysToReachStair',
  params: ['k'],
  starterCode: {
    javascript: `function waysToReachStair(k) {
  const memo = new Map();
  function dp(i, j, lastDown) {
    if (i > k + 1) return 0;
    const key = i + ',' + j + ',' + lastDown;
    if (memo.has(key)) return memo.get(key);
    let ways = i === k ? 1 : 0;
    ways += dp(i + (1 << j), j + 1, false);
    if (i > 0 && !lastDown) ways += dp(i - 1, j, true);
    memo.set(key, ways);
    return ways;
  }
  return dp(1, 0, false);
}`,
    typescript: `function waysToReachStair(k: number): number {
  const memo = new Map<string, number>();
  function dp(i: number, j: number, lastDown: boolean): number {
    if (i > k + 1) return 0;
    const key = i + ',' + j + ',' + lastDown;
    if (memo.has(key)) return memo.get(key)!;
    let ways = i === k ? 1 : 0;
    ways += dp(i + (1 << j), j + 1, false);
    if (i > 0 && !lastDown) ways += dp(i - 1, j, true);
    memo.set(key, ways);
    return ways;
  }
  return dp(1, 0, false);
}`,
    python: `def waysToReachStair(k):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(i, j, last_down):
        if i > k + 1: return 0
        ways = 1 if i == k else 0
        ways += dp(i + (1 << j), j + 1, False)
        if i > 0 and not last_down: ways += dp(i - 1, j, True)
        return ways
    return dp(1, 0, False)`,
  },
  visibleTests: [
    {
      args: [0],
      expected: 2,
    },
    {
      args: [1],
      expected: 4,
    },
  ],
  hiddenTests: [
    {
      args: [2],
      expected: 4,
    },
    {
      args: [3],
      expected: 3,
    },
    {
      args: [5],
      expected: 4,
    },
    {
      args: [6],
      expected: 6,
    },
  ],
};
