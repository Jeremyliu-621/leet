import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-replacements-to-sort-the-array',
  title: 'Minimum Replacements to Sort the Array',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation you may replace any element with **two or more** positive integers that **sum** to it (this counts as one operation regardless of how many pieces you split into).

Return the **minimum number of operations** needed to make \`nums\` sorted in **non-decreasing** order.

**Key insight:** Work from right to left. For each element, compute the minimum number of pieces it must be split into so every piece is at most the right neighbour. Each split into \`p\` pieces costs \`p − 1\` operations.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,9,3]',
      output: '2',
      explanation: 'Replace 9 with three pieces [3,3,3]: two operations. The array becomes [3,3,3,3,3].',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'Already sorted in non-decreasing order.',
    },
    {
      input: 'nums = [12,9,7,6,17]',
      output: '6',
      explanation: 'Process right to left: 7 needs 2 pieces (1 op, new bound=3); 9 needs 3 pieces (2 ops, new bound=3); 12 needs 4 pieces (3 ops). Total = 6.',
    },
  ],
  hints: [
    'Scan from right to left, maintaining the maximum value the current element (or its pieces) may have.',
    'If nums[i] <= bound, it fits as-is; set bound = nums[i].',
    'Otherwise, pieces = Math.ceil(nums[i] / bound). Add pieces − 1 operations. Set bound = Math.floor(nums[i] / pieces).',
    '`let ops = 0, bound = nums[nums.length - 1] ?? 1; for (let i = nums.length - 2; i >= 0; i--) { const v = nums[i] ?? 0; if (v > bound) { const p = Math.ceil(v / bound); ops += p - 1; bound = Math.floor(v / p); } else { bound = v; } } return ops;`',
  ],
  functionName: 'minimumReplacement',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumReplacement(nums) {
  // your code here
}`,
    python: `def minimumReplacement(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[3, 9, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[12, 9, 7, 6, 17]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[4, 4, 4]], expected: 0 },
    { args: [[100]], expected: 0 },
    { args: [[1, 4, 3, 2]], expected: 4 },
  ],
};
