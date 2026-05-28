import type { Problem } from '../types';

export const problem: Problem = {
  id: 'paint-fence',
  title: 'Paint Fence',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are painting a fence of \`n\` posts with \`k\` different colors. You must paint the posts following these rules:

- Every post must be painted **exactly one** color.
- There cannot be three or more **consecutive** posts with the same color.

Given the two integers \`n\` and \`k\`, return the **number of ways** you can paint the fence.`,
  constraints: ['1 <= n <= 50', '1 <= k <= 10^5', 'The testcases are generated such that the answer is in the range [0, 2^31 - 1].'],
  examples: [
    { input: 'n = 3, k = 2', output: '6', explanation: 'With 3 posts and 2 colors, there are 6 valid paintings (all except [1,1,1] and [2,2,2]).' },
    { input: 'n = 1, k = 1', output: '1' },
    { input: 'n = 2, k = 3', output: '9', explanation: 'Any combination of 2 posts with 3 colors: 3*3=9. All are valid since we need 3 consecutive same to be invalid.' },
  ],
  hints: [
    'Track two states: same[i] = ways where post i matches post i-1; diff[i] = ways where post i differs from post i-1.',
    'same[i] = diff[i-1] (you can only repeat if the previous transition was different).',
    'diff[i] = (k-1) * (same[i-1] + diff[i-1]) = (k-1) * total[i-1].',
  ],
  functionName: 'numWays',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function numWays(n, k) {\n\n}\n',
    typescript: "function numWays(n: number, k: number): number {\n\n}",

    python: 'def numWays(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [3, 2], expected: 6 },
    { args: [1, 1], expected: 1 },
    { args: [2, 3], expected: 9 },
  ],
  hiddenTests: [
    { args: [1, 4], expected: 4 },
    { args: [3, 1], expected: 0 },
    { args: [4, 2], expected: 10 },
    { args: [7, 2], expected: 42 },
  ],
};
