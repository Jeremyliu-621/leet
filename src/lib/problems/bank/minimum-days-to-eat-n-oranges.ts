import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-days-to-eat-n-oranges',
  title: 'Minimum Number of Days to Eat N Oranges',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are \`n\` oranges in the kitchen and you decided to eat some oranges every day as follows:

- Eat **one** orange.
- If the number of remaining oranges \`n\` is divisible by \`2\`, you can eat \`n/2\` oranges.
- If the number of remaining oranges \`n\` is divisible by \`3\`, you can eat \`2*(n/3)\` oranges.

You can only choose **one** of the actions per day.

Return the minimum number of days to eat \`n\` oranges.`,
  constraints: ['1 <= n <= 2 * 10^9'],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'Day 1: eat 1 → 9. Day 2: eat 2*(9/3)=6 → 3. Day 3: eat 2*(3/3)=2 → 1. Day 4: eat 1 → 0.',
    },
    {
      input: 'n = 6',
      output: '3',
      explanation: 'Day 1: eat 2*(6/3)=4 → 2. Day 2: eat 2/2=1 → 1. Day 3: eat 1 → 0.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: 'Just eat the one orange.',
    },
  ],
  hints: [
    'Level 1: Greedy doesn\'t work alone because sometimes eating 1 orange first makes a big divisibility gain. Use memoized recursion.',
    'Level 2: dp(n) = 1 + min(n%2 + dp(n/2), n%3 + dp(n/3)). The key insight: eat n%2 oranges one-by-one to reach a multiple of 2, or eat n%3 oranges to reach a multiple of 3, then take the bulk action.',
    'Level 3: With memoization the state space is O(log n) because n always halves or thirds. Use a Map (n up to 2×10^9 so array DP is impossible).',
  ],
  functionName: 'minDays',
  params: ['n'],
  starterCode: {
    javascript: `function minDays(n) {
  const memo = new Map();
  function dp(n) {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n);
    const res = 1 + Math.min(
      n % 2 + dp(Math.floor(n / 2)),
      n % 3 + dp(Math.floor(n / 3))
    );
    memo.set(n, res);
    return res;
  }
  return dp(n);
}`,
    typescript: `function minDays(n: number): number {
  const memo = new Map<number, number>();
  function dp(n: number): number {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n)!;
    const res = 1 + Math.min(
      n % 2 + dp(Math.floor(n / 2)),
      n % 3 + dp(Math.floor(n / 3))
    );
    memo.set(n, res);
    return res;
  }
  return dp(n);
}`,
    python: `def minDays(n):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(n):
        if n <= 1:
            return n
        return 1 + min(n % 2 + dp(n // 2), n % 3 + dp(n // 3))
    return dp(n)`,
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [6], expected: 3 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 2 },
    { args: [56], expected: 6 },
    { args: [100], expected: 8 },
    { args: [2000000000], expected: 32 },
  ],
};
