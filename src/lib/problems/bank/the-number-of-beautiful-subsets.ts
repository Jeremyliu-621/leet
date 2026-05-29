import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-number-of-beautiful-subsets',
  title: 'The Number of Beautiful Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `You are given an array \`nums\` of positive integers and a positive integer \`k\`.

A subset of \`nums\` is **beautiful** if it does not contain two integers with an absolute difference equal to \`k\`.

Return the number of **non-empty beautiful** subsets of the array \`nums\`.

Note that two subsets are different if they contain a different set of elements (the same elements in different positions are considered the same subset).`,
  constraints: [
    '1 <= nums.length <= 18',
    '1 <= nums[i] <= 1000',
    '1 <= k <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,4,6], k = 2',
      output: '4',
      explanation: 'Beautiful subsets: [2], [4], [6], [2,6]. Subsets [2,4] and [4,6] are not beautiful since |2-4|=2=k and |4-6|=2=k.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'The only non-empty subset is [1].',
    },
  ],
  hints: [
    'Sort the array to easily check if a number conflicts with already-chosen numbers.',
    'Use a frequency map to track chosen numbers. When considering adding `nums[i]`, check if `nums[i] - k` is already in the map.',
    'Use backtracking: add a number, recurse, then remove it. Count every time you add a number.',
  ],
  functionName: 'beautifulSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function beautifulSubsets(nums, k) {\n  // your code here\n}\n',
    typescript: 'function beautifulSubsets(nums: number[], k: number): number {\n  // your code here\n}',
    python: 'def beautifulSubsets(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 6], 2], expected: 4 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4], 1], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 3 },
    { args: [[1, 3, 5], 2], expected: 4 },
    { args: [[4, 2, 5, 9, 10, 3], 1], expected: 23 },
    { args: [[10, 4, 5, 7, 2, 1], 3], expected: 23 },
  ],
};
