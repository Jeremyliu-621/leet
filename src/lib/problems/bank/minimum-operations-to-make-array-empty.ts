import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-empty',
  title: 'Minimum Number of Operations to Make Array Empty',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers.

There are two types of operations that you can apply on the array **any** number of times:

- Choose **two** elements with **equal** values and **delete** them from the array.
- Choose **three** elements with **equal** values and **delete** them from the array.

Return the **minimum** number of operations required to make the array empty, or \`-1\` if it is not possible.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2,4,2,3,4]',
      output: '4',
      explanation: 'Remove two 4s (1 op), three 3s (1 op), and four 2s as two pairs (2 ops) = 4 ops.',
    },
    {
      input: 'nums = [2,1,2,2,3,3]',
      output: '-1',
      explanation: 'There is only one 1. Since we cannot group it with another 1, the array cannot be emptied.',
    },
  ],
  hints: [
    'Count the frequency of each distinct value.',
    'If any value appears exactly once, return -1 (it can never be removed).',
    'For a value appearing f times: use ⌈f/3⌉ operations. If f mod 3 == 1, use one pair + the rest as triples (f≥4); if f mod 3 == 2, add one pair to triples.',
    'The formula ⌈f/3⌉ works for all f ≥ 2.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 3, 2, 2, 4, 2, 3, 4]], expected: 4 },
    { args: [[2, 1, 2, 2, 3, 3]], expected: -1 },
    { args: [[14, 12, 14, 14, 12, 14, 14, 12, 12, 12]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[3, 3, 3]], expected: 1 },
    { args: [[1, 1, 2, 2]], expected: 2 },
    { args: [[5, 5, 5, 5, 5]], expected: 2 },
    { args: [[2, 2, 2, 2, 2, 2]], expected: 2 },
    { args: [[4, 4, 4, 4, 4, 4, 4]], expected: 3 },
    { args: [[1, 1, 1, 2, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[1, 1, 2, 2, 3]], expected: -1 },
  ],
};
