import type { Problem } from '../types';

export const problem: Problem = {
  id: 'top-k-frequent-elements',
  title: 'Top K Frequent Elements',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays', 'heap'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\` most frequent elements.

If multiple elements have the same frequency, prefer the element with the **smaller value**. Return the result sorted in ascending order.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    '1 <= k <= number of distinct elements in nums',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: '1 appears 3 times, 2 appears twice, 3 appears once. The top 2 by frequency are 1 and 2.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '[1]',
      explanation: 'Only one distinct element.',
    },
    {
      input: 'nums = [1,2,1,2,3,3], k = 2',
      output: '[1,2]',
      explanation: '1 and 2 are tied at frequency 2; 3 appears twice as well. Ties broken by smaller value: return 1 and 2.',
    },
  ],
  hints: [
    'Level 1: Build a frequency map that counts how many times each element appears, then select the k most frequent.',
    'Level 2: After counting frequencies, sort the unique elements by (-frequency, value) so the most frequent (smallest value on ties) come first. Take the first k and sort ascending.',
    'Level 3: `const freq = new Map(); for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1); return [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a) || a - b).slice(0, k).sort((a, b) => a - b);`',
  ],
  functionName: 'topKFrequent',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function topKFrequent(nums, k) {\n  // your code here\n}\n',
    typescript: "function topKFrequent(nums: number[], k: number): number[] {\n  // your code here\n}",

    python: 'def topKFrequent(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2, 1, 2, 3, 3], 2], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[4, 4, 4, 2, 2, 1], 1], expected: [4] },
    { args: [[1, 1, 2, 2, 3], 2], expected: [1, 2] },
    { args: [[-1, -1, 2, 2, 3], 2], expected: [-1, 2] },
    { args: [[5, 5, 5, 4, 4, 3, 3, 2, 1], 3], expected: [3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [1, 2, 3] },
  ],
};
