import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-range-i',
  title: 'Smallest Range I',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

In one operation, you can choose any element of the array and increase or decrease it by at most \`k\`.

Return the **minimum** possible difference between the **maximum** and **minimum** values of \`nums\` after performing the operation on every element exactly once.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^4',
    '0 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1], k = 0',
      output: '0',
      explanation: 'The array has one element, so the difference is always 0.',
    },
    {
      input: 'nums = [0,10], k = 2',
      output: '6',
      explanation: 'Increase 0 by 2 → 2, decrease 10 by 2 → 8. Difference = 8-2 = 6.',
    },
    {
      input: 'nums = [1,3,6], k = 3',
      output: '0',
      explanation: 'Adjust 1 up to 4, keep 3, adjust 6 down to 3. Max=4, min=3, or all within range.',
    },
  ],
  hints: [
    'The optimal strategy is to raise the minimum as high as possible and lower the maximum as low as possible.',
    'After operations: min can be raised to at most `min + k`, and max can be lowered to at least `max - k`. The new spread is `(max - k) - (min + k) = max - min - 2k`.',
    'Return `Math.max(0, max - min - 2 * k)`. The max(0, ...) handles the case where 2k exceeds the range — the answer cannot be negative.',
  ],
  functionName: 'smallestRangeI',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function smallestRangeI(nums, k) {\n  \n}\n',
    typescript: "function smallestRangeI(nums: number[], k: number): number {\n  \n}",

    python: 'def smallestRangeI(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1], 0], expected: 0 },
    { args: [[0, 10], 2], expected: 6 },
    { args: [[1, 3, 6], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[5, 3, 2, 4], 1], expected: 1 },
    { args: [[100], 50], expected: 0 },
    { args: [[3, 9, 15], 2], expected: 8 },
    { args: [[0, 0], 5], expected: 0 },
    { args: [[4, 8, 2, 10], 3], expected: 2 },
  ],
};
