import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-seconds-to-make-mountain-array',
  title: 'Minimum Number of Seconds to Make Mountain Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** array \`nums\` of positive integers.

In one second you can increase any element by 1. You **cannot** decrease any element.

Return the **minimum** number of seconds needed to make \`nums\` a **mountain array**.

An array is a mountain if there exists an index \`peak\` with \`0 < peak < n-1\` such that:

- \`nums[0] < nums[1] < ... < nums[peak]\`
- \`nums[peak] > nums[peak+1] > ... > nums[n-1]\``,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,1,1,5,3]',
      output: '5',
      explanation: 'Best peak at index 3 (value 5). Make left strictly increasing: [2,3,4,5,…] costs 0+2+3=5. Right side [5,3] already decreasing. Total: 5.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '3',
      explanation: 'Best peak at index 1 or 2. E.g., [1,3,2,1] → costs 2+1+0=3.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '2',
      explanation: 'Peak at index 3: nums[3] must exceed nums[4]=5, so set nums[3]=6 (cost 2). Result [1,2,3,6,5].',
    },
  ],
  hints: [
    'For a fixed peak p, the minimum cost is: cost to make nums[0..p-1] strictly increasing + cost at peak + cost to make nums[p+1..n-1] strictly decreasing.',
    'Precompute left[i] = minimum value at i for a strictly increasing prefix (left[0]=nums[0], left[i]=max(nums[i],left[i-1]+1)). Similarly right[i] going from the right.',
    'For peak p: peak_value = max(left[p-1]+1, right[p+1]+1, nums[p]). Cost at peak = peak_value - nums[p].',
    'Use prefix/suffix cost sums so each candidate peak is checked in O(1). Take the minimum over all valid peaks (1 ≤ p ≤ n-2).',
  ],
  functionName: 'minimumSeconds',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSeconds(nums) {

}`,
    typescript: `function minimumSeconds(nums: number[]): number {

}`,
    python: `def minimumSeconds(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 1, 5, 3]], expected: 5 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: 2 },
    { args: [[3, 1, 3]], expected: 3 },
    { args: [[1, 2, 3, 2, 1]], expected: 0 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[4, 4, 4, 4, 4, 4]], expected: 7 },
    { args: [[100, 1, 100]], expected: 100 },
    { args: [[1, 10, 1, 10, 1]], expected: 10 },
    { args: [[1, 3, 5, 7, 9]], expected: 3 },
    { args: [[3, 5, 1, 2, 4]], expected: 8 },
    { args: [[1, 5, 3]], expected: 0 },
  ],
};
