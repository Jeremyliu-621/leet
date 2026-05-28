import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frequency-of-most-frequent-element',
  title: 'Frequency of the Most Frequent Element',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `The **frequency** of an element is the number of times it occurs in an array.

You are given an integer array \`nums\` and an integer \`k\`. In one operation, you can choose an index of \`nums\` and **increment** the element at that index by \`1\`.

Return *the **maximum possible frequency** of an element after performing **at most*** \`k\` *operations*.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,4], k = 5',
      output: '3',
      explanation: 'Increment 1 → 4 (cost 3) and 2 → 4 (cost 2). Total cost 5 = k. All three equal 4.',
    },
    {
      input: 'nums = [1,4,8,13], k = 5',
      output: '2',
      explanation: 'The best is to make two elements equal (e.g., 1→4 or 4→8).',
    },
    {
      input: 'nums = [1,2,3], k = 1',
      output: '2',
    },
  ],
  hints: [
    'Sort the array. After sorting, the optimal strategy is to make all elements in a window equal to the rightmost element.',
    'For a window [left, right], the cost to make all elements equal to nums[right] is nums[right]*(right-left+1) - sum.',
    'Slide the window: if the cost exceeds k, advance left until it fits.',
  ],
  functionName: 'maxFrequency',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxFrequency(nums, k) {

}`,
    python: `def maxFrequency(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 4], 5], expected: 3 },
    { args: [[1, 4, 8, 13], 5], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[1, 4], 2], expected: 1 },
    { args: [[1, 2, 3, 4], 3], expected: 3 },
    { args: [[5, 5, 5, 5], 100], expected: 4 },
    { args: [[1, 10], 9], expected: 2 },
  ],
};
