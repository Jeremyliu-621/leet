import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-average-of-smallest-and-largest-elements',
  title: 'Minimum Average of Smallest and Largest Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'two-pointers'],
  description: `You have an array \`nums\` of **even** length \`n\`.

Repeat the following operation until the array is empty:
1. Find the **minimum** and **maximum** elements of \`nums\`.
2. Compute their **average**: \`(min + max) / 2\`.
3. Record the average and remove both elements from \`nums\`.

Return the **minimum** value among all recorded averages.`,
  constraints: [
    '`2 <= nums.length <= 50`',
    '`nums.length` is even.',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [7,8,3,4,15,13,4,1]',
      output: '5.5',
      explanation:
        'Sort: [1,3,4,4,7,8,13,15]. Pairs: (1+15)/2=8, (3+13)/2=8, (4+8)/2=6, (4+7)/2=5.5. Minimum average = 5.5.',
    },
    {
      input: 'nums = [1,9,8,3,10,5]',
      output: '5.5',
      explanation:
        'Sort: [1,3,5,8,9,10]. Pairs: (1+10)/2=5.5, (3+9)/2=6, (5+8)/2=6.5. Minimum average = 5.5.',
    },
    {
      input: 'nums = [1,2,3,7,8,9]',
      output: '5',
      explanation:
        'Sort: [1,2,3,7,8,9]. Pairs: (1+9)/2=5, (2+8)/2=5, (3+7)/2=5. Minimum average = 5.',
    },
  ],
  hints: [
    'Sorting the array first makes it easy to always find the current minimum and maximum: they will be at the two ends.',
    'After sorting, use two pointers `left = 0` and `right = nums.length - 1`. At each step compute `(nums[left] + nums[right]) / 2`, track the minimum, then advance `left++` and `right--`.',
    'The minimum average always comes from the pair whose sum is smallest. Because the array is sorted, the pair (smallest, largest) at any step minimises the average compared to any interior pair — but you still need to compare all `n/2` averages.',
  ],
  functionName: 'minimumAverage',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumAverage(nums) {

}`,
    typescript: "function minimumAverage(nums: number[]): number {\n\n}",

    python: `def minimumAverage(nums):
    pass`,
  },
  visibleTests: [
    { args: [[7, 8, 3, 4, 15, 13, 4, 1]], expected: 5.5 },
    { args: [[1, 9, 8, 3, 10, 5]], expected: 5.5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 7, 8, 9]], expected: 5 },
    { args: [[1, 2]], expected: 1.5 },
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[1, 50, 25, 25]], expected: 25 },
  ],
};
