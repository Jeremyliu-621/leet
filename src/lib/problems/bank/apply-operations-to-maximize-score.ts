import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-maximize-score',
  title: 'Apply Operations to Maximize Score',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'stack'],
  description: `You are given an array \`nums\` of \`n\` positive integers and a positive integer \`k\`.

In one operation, you pick any subarray of \`nums\` and add the **maximum** value of that subarray to your score.

You may perform **at most \`k\` operations** (picking different subarrays each time, though subarrays may overlap by position).

Return the **maximum score** you can achieve, modulo \`10^9 + 7\`.

**Note:** Two subarrays are considered different if they have different start or end indices, even if their elements are the same.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= min(n * (n + 1) / 2, 10^9)',
  ],
  examples: [
    {
      input: 'nums = [1,3,1,2], k = 3',
      output: '9',
      explanation: 'There are 10 subarrays. Their maximums: [1]=1, [1,3]=3, [1,3,1]=3, [1,3,1,2]=3, [3]=3, [3,1]=3, [3,1,2]=3, [1]=1, [1,2]=2, [2]=2. The three largest maximums are all 3, giving score 3+3+3=9.',
    },
    {
      input: 'nums = [2,2], k = 2',
      output: '4',
      explanation: 'The three subarrays [2], [2,2], [2] all have maximum 2. Pick any two: score = 2+2 = 4.',
    },
    {
      input: 'nums = [5,5,5], k = 4',
      output: '20',
      explanation: 'All 6 subarrays have maximum 5. Pick 4 of them: score = 5*4 = 20.',
    },
  ],
  hints: [
    'For each element nums[i], count how many subarrays have nums[i] as their maximum. Use a monotonic stack to find left and right boundaries.',
    'For index i, let L = distance to the nearest index j < i with nums[j] >= nums[i], and R = distance to the nearest index j > i with nums[j] > nums[i]. Then nums[i] is the max of exactly L * R subarrays.',
    'Sort elements by value in descending order. Greedily pick subarrays: for each element (highest value first), use as many of its subarrays as possible until k operations are exhausted.',
    'The answer is the sum of (value * count_used) for each element, taken mod 10^9+7. Use BigInt or careful modular arithmetic since values and k can be large.',
  ],
  functionName: 'applyOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function applyOperations(nums, k) {

}`,
    typescript: `function applyOperations(nums: number[], k: number): number {

}`,
    python: `def applyOperations(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 2], 3], expected: 9 },
    { args: [[2, 2], 2], expected: 4 },
    { args: [[5, 5, 5], 4], expected: 20 },
    { args: [[5], 1], expected: 5 },
  ],
  hiddenTests: [
    { args: [[3, 4, 3], 3], expected: 12 },
    { args: [[1, 2, 3], 2], expected: 6 },
    { args: [[1, 2, 3], 6], expected: 14 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 1], 3], expected: 3 },
    { args: [[4, 1, 4], 5], expected: 20 },
    { args: [[2, 4, 2], 4], expected: 16 },
  ],
};
