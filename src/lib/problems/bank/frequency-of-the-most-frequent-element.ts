import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frequency-of-the-most-frequent-element',
  title: 'Frequency of the Most Frequent Element',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'two-pointers'],
  description: `The **frequency** of an element is the number of times it occurs in an array.

You are given an integer array \`nums\` and an integer \`k\`. In one operation, you can choose an index of \`nums\` and increment the element at that index by \`1\`.

Return the **maximum possible frequency** of an element after performing **at most \`k\` operations**.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
    '`1 <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [1,2,4], k = 5',
      output: '3',
      explanation: 'Increment 1 by 3 and 2 by 2. All three become 4 using exactly 5 operations.',
    },
    {
      input: 'nums = [1,4,8,13], k = 5',
      output: '2',
      explanation: 'Best is to make 2 elements equal to 8 (increment 4 by 4) — but that costs 4 ops. Or make 2 elements 13 by incrementing 8 by 5. Either way, max is 2.',
    },
    {
      input: 'nums = [3,9,6], k = 2',
      output: '1',
      explanation: 'No element can be made equal to another within 2 operations.',
    },
  ],
  hints: [
    'Sort the array. The optimal target value is always the largest element in a window.',
    'Use a sliding window: expand right, and shrink left when total increments needed exceed k. Total increments = (nums[right] - nums[left]) * windowSize accumulated.',
    '```js\nfunction maxFrequency(nums, k) {\n  nums.sort((a, b) => a - b);\n  let left = 0, sum = 0, res = 1;\n  for (let right = 1; right < nums.length; right++) {\n    sum += (nums[right] - nums[right - 1]) * (right - left);\n    while (sum > k) {\n      sum -= nums[right] - nums[left];\n      left++;\n    }\n    res = Math.max(res, right - left + 1);\n  }\n  return res;\n}\n```',
  ],
  functionName: 'maxFrequency',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxFrequency(nums, k) {

}`,
    typescript: `function maxFrequency(nums: number[], k: number): number {

}`,
    python: `def maxFrequency(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 4], 5], expected: 3 },
    { args: [[1, 4, 8, 13], 5], expected: 2 },
    { args: [[3, 9, 6], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 1, 1, 2, 2, 4], 2], expected: 4 },
    { args: [[9995, 9996, 9997], 10], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 3 },
  ],
};
