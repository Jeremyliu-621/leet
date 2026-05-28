import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-stones-to-minimize-total',
  title: 'Remove Stones to Minimize the Total',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given a 0-indexed integer array \`piles\` where \`piles[i]\` represents the number of stones in the \`i\`-th pile, and an integer \`k\`. You should apply the following operation exactly \`k\` times:

- Choose any \`piles[i]\` and **remove** \`floor(piles[i] / 2)\` stones from it.

Return the **minimum** possible total number of stones remaining after applying the \`k\` operations.

> Note: you can apply the operation to the same pile more than once.`,
  constraints: [
    '1 <= piles.length <= 10^5',
    '1 <= piles[i] <= 10^4',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'piles = [5,4,9], k = 2',
      output: '12',
      explanation: 'Apply to pile 2 (9 → 5) and then to either pile 0 or 2 (5 → 3). Minimum total = 5 + 4 + 3 = 12.',
    },
    {
      input: 'piles = [4,3,6,7], k = 3',
      output: '12',
      explanation: 'Apply to 7 (→ 4), then 6 (→ 3), then 4 (→ 2). Remaining: 4 + 3 + 3 + 2 = 12.',
    },
  ],
  hints: [
    'To minimize the total, always halve the largest pile.',
    'Use a max-heap: pop the largest element, halve it (floor), push the result back.',
    'Repeat k times, then return the sum of all elements in the heap.',
  ],
  functionName: 'minStoneSum',
  params: ['piles', 'k'],
  starterCode: {
    javascript: `function minStoneSum(piles, k) {

}`,
    python: `def minStoneSum(piles, k):
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 9], 2], expected: 12 },
    { args: [[4, 3, 6, 7], 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2], 1], expected: 1 },
    { args: [[1000000000], 1], expected: 500000000 },
    { args: [[10, 6, 4, 8], 2], expected: 19 },
  ],
};
