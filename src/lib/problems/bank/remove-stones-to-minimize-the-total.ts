import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-stones-to-minimize-the-total',
  title: 'Remove Stones to Minimize the Total',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`piles\`, where \`piles[i]\` represents the number of stones in the \`i\`th pile, and an integer \`k\`. You should apply the following operation **exactly** \`k\` times:

- Choose any \`piles[i]\` and **remove** \`floor(piles[i] / 2)\` stones from it.

Notice that you can apply the operation on the **same** pile more than once.

Return the **minimum** possible total number of stones remaining after applying the \`k\` operations.`,
  constraints: [
    '`1 <= piles.length <= 10^5`',
    '`1 <= piles[i] <= 10^4`',
    '`1 <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'piles = [5,4,9], k = 2',
      output: '12',
      explanation: 'Apply to pile 2: 9→5. Apply again to pile 2: 9→5 (now 5→3, but optimal is apply to 9 once, then again). Optimal: 9→5 (remove 4), then 5→3 (remove 2). Remaining: 5+4+3=12.',
    },
    {
      input: 'piles = [4,3,6,7], k = 3',
      output: '12',
      explanation: 'Optimal: 7→4, 6→3, 4→2. Remaining: 4+3+3+2=12.',
    },
  ],
  hints: [
    'Each operation should always target the largest pile (greedy: removing from the largest pile reduces the total the most).',
    'Use a max-heap to efficiently get and update the largest element after each operation.',
    'After k operations, sum the heap contents.',
  ],
  functionName: 'minStoneSum',
  params: ['piles', 'k'],
  starterCode: {
    javascript: `function minStoneSum(piles, k) {

}`,
    typescript: `function minStoneSum(piles: number[], k: number): number {

}`,
    python: `def minStoneSum(piles, k):
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 9], 2], expected: 12 },
    { args: [[4, 3, 6, 7], 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: 1 },
    { args: [[1, 1], 2], expected: 2 },
    { args: [[10], 3], expected: 2 },
    { args: [[3, 7], 1], expected: 7 },
    { args: [[1000000000], 1], expected: 500000000 },
    { args: [[5, 4, 9], 1], expected: 14 },
  ],
};
