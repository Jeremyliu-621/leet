import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-paint-the-fence',
  title: 'Paint Fence',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `You are painting a fence of \`n\` posts with \`k\` different colors. You must paint the posts following these rules:

- Every post must be painted **exactly one** color.
- There **cannot** be three or more **consecutive** posts with the same color.

Given the two integers \`n\` and \`k\`, return *the **number of ways** you can paint the fence*.`,
  constraints: [
    '1 <= n <= 50',
    '1 <= k <= 10^5',
    'The testcases are generated such that the answer is in the range [0, 2^31 - 1] for the given n and k.',
  ],
  examples: [
    {
      input: 'n = 3, k = 2',
      output: '6',
      explanation: 'All the possibilities are shown. Note that painting all the posts the same color is invalid.',
    },
    {
      input: 'n = 1, k = 1',
      output: '1',
    },
    {
      input: 'n = 7, k = 2',
      output: '42',
    },
  ],
  hints: [
    'Level 1: Think about same[i] = ways to paint i posts where post i matches post i-1, and diff[i] where they differ.',
    'Level 2: same[i] = diff[i-1]; diff[i] = (same[i-1] + diff[i-1]) * (k-1). Base: same[2]=k, diff[2]=k*(k-1).',
    'Level 3: Answer is same[n] + diff[n]. For n=1 return k. Iterate from i=2 to i<n updating same and diff.',
  ],
  functionName: 'numWays',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function numWays(n, k) {
  if (k === 0) return 0;
  if (n === 1) return k;
  let same = k, diff = k * (k - 1);
  for (let i = 2; i < n; i++) {
    [same, diff] = [diff, (same + diff) * (k - 1)];
  }
  return same + diff;
}`,
    typescript: `function numWays(n: number, k: number): number {
  if (k === 0) return 0;
  if (n === 1) return k;
  let same = k, diff = k * (k - 1);
  for (let i = 2; i < n; i++) {
    [same, diff] = [diff, (same + diff) * (k - 1)];
  }
  return same + diff;
}`,
    python: `def numWays(n, k):
    if k == 0:
        return 0
    if n == 1:
        return k
    same, diff = k, k * (k - 1)
    for _ in range(n - 2):
        same, diff = diff, (same + diff) * (k - 1)
    return same + diff`,
  },
  visibleTests: [
    { args: [3, 2], expected: 6 },
    { args: [1, 1], expected: 1 },
    { args: [7, 2], expected: 42 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: 2 },
    { args: [2, 4], expected: 16 },
    { args: [4, 2], expected: 10 },
    { args: [3, 1], expected: 0 },
    { args: [2, 3], expected: 9 },
    { args: [1, 5], expected: 5 },
    { args: [3, 3], expected: 24 },
  ],
};
