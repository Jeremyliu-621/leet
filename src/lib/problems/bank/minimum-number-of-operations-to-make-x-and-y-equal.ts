import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-x-and-y-equal',
  title: 'Minimum Number of Operations to Make X and Y Equal',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'binary-search'],
  description: `You are given two positive integers \`x\` and \`y\`.

In one operation, you can do one of the following:
- Divide \`x\` by **5** if \`x\` is divisible by 5, and replace \`x\` with \`x / 5\`.
- Divide \`x\` by **11** if \`x\` is divisible by 11, and replace \`x\` with \`x / 11\`.
- Decrement \`x\` by 1.
- Increment \`x\` by 1.

Return the **minimum** number of operations required to make \`x\` and \`y\` equal.`,
  constraints: [
    '1 <= x, y <= 10^4',
  ],
  examples: [
    {
      input: 'x = 26, y = 1',
      output: '3',
      explanation: '26 → 25 (−1), 25 → 5 (÷5), 5 → 1 (÷5). 3 operations.',
    },
    {
      input: 'x = 54, y = 2',
      output: '4',
      explanation: '54 → 55 (+1), 55 → 11 (÷5), 11 → 1 (÷11), 1 → 2 (+1). 4 operations.',
    },
    {
      input: 'x = 25, y = 30',
      output: '5',
    },
  ],
  hints: [
    'Use BFS from x to y, or use memoized recursion: dp(x) = min ops to reach y.',
    'dp(x) = |x - y| if we only decrement/increment. But we might do better by rounding x to a multiple of 5 or 11 first.',
    'dp(x) = min(|x-y|, cost_to_nearest_5_multiple + 1 + dp(x/5), cost_to_nearest_11_multiple + 1 + dp(x/11)).',
    'Round to nearest multiple of 5: options are floor(x/5)*5 and ceil(x/5)*5. Take the cheaper option.',
  ],
  functionName: 'minimumOperationsToMakeEqual',
  params: ['x', 'y'],
  starterCode: {
    javascript: `function minimumOperationsToMakeEqual(x, y) {
  const memo = new Map();
  const dp = (x) => {
    if (x <= y) return y - x;
    if (memo.has(x)) return memo.get(x);
    // Pure decrement: x - y ops
    let best = x - y;
    // Round to multiple of 5 then divide
    const lo5 = Math.floor(x / 5) * 5, hi5 = lo5 + 5;
    best = Math.min(best, x - lo5 + 1 + dp(lo5 / 5));
    best = Math.min(best, hi5 - x + 1 + dp(hi5 / 5));
    // Round to multiple of 11 then divide
    const lo11 = Math.floor(x / 11) * 11, hi11 = lo11 + 11;
    best = Math.min(best, x - lo11 + 1 + dp(lo11 / 11));
    best = Math.min(best, hi11 - x + 1 + dp(hi11 / 11));
    memo.set(x, best);
    return best;
  };
  return dp(x);
}`,
    typescript: `function minimumOperationsToMakeEqual(x: number, y: number): number {
  const memo = new Map<number, number>();
  const dp = (x: number): number => {
    if (x <= y) return y - x;
    if (memo.has(x)) return memo.get(x)!;
    let best = x - y;
    const lo5 = Math.floor(x / 5) * 5, hi5 = lo5 + 5;
    best = Math.min(best, x - lo5 + 1 + dp(lo5 / 5));
    best = Math.min(best, hi5 - x + 1 + dp(hi5 / 5));
    const lo11 = Math.floor(x / 11) * 11, hi11 = lo11 + 11;
    best = Math.min(best, x - lo11 + 1 + dp(lo11 / 11));
    best = Math.min(best, hi11 - x + 1 + dp(hi11 / 11));
    memo.set(x, best);
    return best;
  };
  return dp(x);
}`,
    python: `def minimumOperationsToMakeEqual(x, y):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(x):
        if x <= y:
            return y - x
        best = x - y
        lo5, hi5 = (x // 5) * 5, (x // 5) * 5 + 5
        best = min(best, x - lo5 + 1 + dp(lo5 // 5))
        best = min(best, hi5 - x + 1 + dp(hi5 // 5))
        lo11, hi11 = (x // 11) * 11, (x // 11) * 11 + 11
        best = min(best, x - lo11 + 1 + dp(lo11 // 11))
        best = min(best, hi11 - x + 1 + dp(hi11 // 11))
        return best
    return dp(x)`,
  },
  visibleTests: [
    { args: [26, 1], expected: 3 },
    { args: [54, 2], expected: 4 },
    { args: [25, 30], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 0 },
    { args: [10000, 1], expected: 8 },
    { args: [11, 1], expected: 1 },
    { args: [5, 1], expected: 1 },
    { args: [100, 100], expected: 0 },
  ],
};
