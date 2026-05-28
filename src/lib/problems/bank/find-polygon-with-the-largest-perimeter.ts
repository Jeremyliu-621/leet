import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-polygon-with-the-largest-perimeter',
  title: 'Find Polygon With the Largest Perimeter',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an array of **positive** integers \`nums\` of length \`n\`.

A **polygon** is a closed plane figure that has at least **3** sides. The **longest** side of a polygon is **smaller** than the sum of its other sides.

Conversely, if you have \`k\` (k >= 3) positive real numbers \`a1, a2, a3, ..., ak\` where \`a1 <= a2 <= a3 <= ... <= ak\` **and** \`a1 + a2 + ... + a(k-1) > ak\`, then there **always** exists a polygon with these as its side lengths.

The **perimeter** of a polygon is the sum of all its sides.

Return the **largest** perimeter of a polygon whose sides can be formed from \`nums\`, or \`-1\` if it is not possible to create a polygon.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,5,5]',
      output: '15',
      explanation: 'The only possible polygon has sides [5,5,5] with perimeter 15.',
    },
    {
      input: 'nums = [1,12,1,2,5,50,3]',
      output: '12',
      explanation:
        'Sorted: [1,1,2,3,5,12,50]. Try using all sides up to 12: [1,1,2,3,5,12] → sum of first 5 = 12 > 12? No (12 is not > 12). Try [1,1,2,3,5] + next: sum=12 check fails. The polygon [1,2,3,5] has 1+2+3=6 < 5? No, check against largest: 5 < 1+2+3=6 ✓. Perimeter = 1+1+2+3+5 = 12. Wait, the perimeter with sides using 12 fails. Best valid is [1,2,3,5,12]? 1+2+3+5=11 < 12, so no. Best is [1,1,2,3,5]: 1+1+2+3=7 > 5 ✓, perimeter=12.',
    },
    {
      input: 'nums = [3,2,3,4]',
      output: '12',
      explanation: 'All four sides can form a polygon: 2+3+3=8 > 4 ✓. Perimeter = 3+2+3+4 = 12.',
    },
  ],
  hints: [
    'Sort the array. Try to include as many sides as possible: a valid polygon exists with sides a[0..k] if prefix_sum[k-1] > a[k].',
    'Scan right-to-left through sorted array: keep a running sum. If sum > current element, this forms a valid polygon with that element as the longest side.',
    'Track the maximum valid perimeter found.',
  ],
  functionName: 'largestPerimeter',
  params: ['nums'],
  starterCode: {
    javascript: 'function largestPerimeter(nums) {\n  \n}\n',
    typescript: "function largestPerimeter(nums: number[]): number {\n  \n}",

    python: 'def largestPerimeter(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 5, 5]], expected: 15 },
    { args: [[1, 12, 1, 2, 5, 50, 3]], expected: 12 },
    { args: [[3, 2, 3, 4]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1, 2, 4]], expected: -1 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[5, 5, 5, 5, 5]], expected: 25 },
    { args: [[1, 2, 3, 6]], expected: -1 },
  ],
};
