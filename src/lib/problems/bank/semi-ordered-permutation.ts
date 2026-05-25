import type { Problem } from '../types';

export const problem: Problem = {
  id: 'semi-ordered-permutation',
  title: 'Semi-Ordered Permutation',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** permutation of \`n\` integers \`nums\`.

A permutation is called **semi-ordered** if the first number equals \`1\` and the last number equals \`n\`. You can perform the following operation as many times as you want until you make \`nums\` a semi-ordered permutation:

- Pick two adjacent elements in \`nums\`, then swap them.

Return the **minimum** number of swaps to make \`nums\` semi-ordered.`,
  constraints: [
    '2 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
    'nums is a permutation.',
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3]',
      output: '2',
      explanation: 'Swap index 0&1: [1,2,4,3]. Swap index 2&3: [1,2,3,4]. 2 swaps.',
    },
    {
      input: 'nums = [2,4,1,3]',
      output: '3',
      explanation: '1 is at index 2 (needs 2 left swaps) and n=4 is at index 1 (needs 2 right swaps), but they share overlap so total = 2+2-1 = 3.',
    },
  ],
  hints: [
    'Find the index of 1 (pos1) and the index of n (posN). Moves for 1 = pos1, moves for n = (n-1-posN). If pos1 > posN, subtract 1 (they cross).',
  ],
  functionName: 'semiOrderedPermutation',
  params: ['nums'],
  starterCode: {
    javascript: `function semiOrderedPermutation(nums) {

}`,
    python: `def semiOrderedPermutation(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 4, 3]], expected: 2 },
    { args: [[2, 4, 1, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 3, 4, 2, 5]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 7 },
    { args: [[3, 1, 2]], expected: 2 },
  ],
};
