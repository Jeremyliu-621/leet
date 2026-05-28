import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-nearly-sorted-array',
  title: 'Sort a Nearly Sorted Array',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given an array \`nums\` of \`n\` integers where each element is **at most \`k\` positions away from its sorted position** (sometimes called a "k-sorted" or "nearly sorted" array). Sort the array efficiently.

Return the sorted array.

**Example:** In \`[6, 5, 3, 2, 8, 10, 9]\` with \`k = 3\`, every element is within 3 positions of where it belongs in the sorted output.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= k < n',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [6,5,3,2,8,10,9], k = 3',
      output: '[2,3,5,6,8,9,10]',
      explanation: 'Each element is at most 3 positions away from its final sorted position.',
    },
    {
      input: 'nums = [10,9,8,7,4,70,60,50], k = 4',
      output: '[4,7,8,9,10,50,60,70]',
      explanation: 'k = 4 means each element is within 4 spots of its sorted position.',
    },
    {
      input: 'nums = [1], k = 0',
      output: '[1]',
      explanation: 'Single element, already sorted.',
    },
  ],
  hints: [
    'Maintain a min-heap of size `k + 1`. Slide a window of that size over the array: each time you add a new element, extract the minimum from the heap and place it in the output.',
    'The key insight: since every element is at most k positions away from its sorted position, the minimum of any `k+1` consecutive elements must be the next element in the sorted output.',
    'After exhausting the input, drain the heap in order to produce the remaining sorted elements.',
  ],
  functionName: 'sortNearlySorted',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function sortNearlySorted(nums, k) {\n  \n}`,
    typescript: "function sortNearlySorted(nums: number[], k: number): number[] {\n  \n}",

    python: `def sortNearlySorted(nums, k):\n    pass`,
  },
  visibleTests: [
    { args: [[6, 5, 3, 2, 8, 10, 9], 3], expected: [2, 3, 5, 6, 8, 9, 10] },
    { args: [[10, 9, 8, 7, 4, 70, 60, 50], 4], expected: [4, 7, 8, 9, 10, 50, 60, 70] },
    { args: [[1], 0], expected: [1] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 4, 5] },
  ],
  hiddenTests: [
    { args: [[3, 2, 1], 2], expected: [1, 2, 3] },
    { args: [[2, 1, 3, 4, 6, 5], 1], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[5, 1, 4, 2, 3], 4], expected: [1, 2, 3, 4, 5] },
    { args: [[-3, -2, -1, 0, 1], 0], expected: [-3, -2, -1, 0, 1] },
    { args: [[10, 8, 9, 7], 3], expected: [7, 8, 9, 10] },
  ],
};
