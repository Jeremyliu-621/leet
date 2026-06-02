import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-an-array-into-subarrays-with-minimum-cost-i',
  title: 'Divide an Array Into Subarrays With Minimum Cost I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array of integers \`nums\` of length \`n\`.

The **cost** of an array is the value of its **first** element. For example, the cost of \`[1,2,3]\` is \`1\` and the cost of \`[3,4,1]\` is \`3\`.

You need to divide \`nums\` into **3** non-empty **contiguous subarrays**.

Return the **minimum** possible sum of the cost of these subarrays.`,
  constraints: [
    '3 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,12,5]',
      output: '6',
      explanation: 'Best split: [1] | [2] | [3,12,5]. Cost = 1+2+3 = 6.',
    },
    {
      input: 'nums = [5,4,3]',
      output: '12',
      explanation: 'Only one valid split: [5] | [4] | [3]. Cost = 5+4+3 = 12.',
    },
    {
      input: 'nums = [10,3,1,1]',
      output: '12',
      explanation: 'Best split: [10] | [1] | [1,3] (or similar). Cost = 10+1+1 = 12.',
    },
  ],
  hints: [
    'The first subarray always starts at index 0, so its cost is nums[0] (fixed).',
    'You need to choose 2 "start" indices i and j (1 ≤ i < j < n) for the second and third subarrays.',
    'To minimize the total, find the 2 smallest values in nums[1..n-1].',
  ],
  functionName: 'minimumCost',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumCost(nums) {
  const rest = nums.slice(1).sort((a, b) => a - b);
  return nums[0] + rest[0] + rest[1];
}`,
    typescript: `function minimumCost(nums: number[]): number {
  const rest = nums.slice(1).sort((a, b) => a - b);
  return nums[0] + rest[0]! + rest[1]!;
}`,
    python: `def minimumCost(nums: list[int]) -> int:
    rest = sorted(nums[1:])
    return nums[0] + rest[0] + rest[1]`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 12, 5]], expected: 6 },
    { args: [[5, 4, 3]], expected: 12 },
    { args: [[10, 3, 1, 1]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[5, 1, 1, 1]], expected: 7 },
    { args: [[1, 3, 2, 4, 5]], expected: 6 },
    { args: [[50, 1, 1, 50, 50]], expected: 52 },
    { args: [[1, 50, 50, 50, 2]], expected: 53 },
    { args: [[7, 3, 5, 1, 2, 4]], expected: 10 },
    { args: [[1, 1, 1, 1, 1]], expected: 3 },
  ],
};
