import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-strictly-increasing-subarrays',
  title: 'Count Strictly Increasing Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given an array \`nums\`, return the **number of subarrays** that are **strictly increasing** (each element is greater than the previous).

A subarray of length 1 is trivially strictly increasing.

**Example:** \`nums = [1,3,5,4,4,6]\`

Subarrays: [1],[3],[5],[4],[4],[6] (6 of length 1), [1,3],[3,5],[4,6] (3 of length 2), [1,3,5] (1 of length 3) → Total: **10**`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,4,4,6]',
      output: '10',
      explanation: '6 length-1, 3 length-2, 1 length-3 subarrays that are strictly increasing.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '15',
      explanation: 'For n consecutive increasing elements, count = n*(n+1)/2.',
    },
    {
      input: 'nums = [5,4,3,2,1]',
      output: '5',
      explanation: 'Only length-1 subarrays are strictly increasing.',
    },
  ],
  hints: [
    'Track the current "run" length of consecutive increasing elements.',
    'When you extend a run to length r (nums[i] > nums[i-1]), the number of new valid subarrays ending at i is `r` (all subarrays ending at i within this run).',
    'Sum these contributions: `total += run` at each position.',
  ],
  functionName: 'countSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countSubarrays(nums) {
  if (nums.length === 0) return 0;
  let total = 1, run = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) run++; else run = 1;
    total += run;
  }
  return total;
}`,
    typescript: `function countSubarrays(nums: number[]): number {
  if (nums.length === 0) return 0;
  let total = 1, run = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) run++; else run = 1;
    total += run;
  }
  return total;
}`,
    python: `def countSubarrays(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    if not nums:
        return 0
    total = 1
    run = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            run += 1
        else:
            run = 1
        total += run
    return total
`,
  },
  visibleTests: [
    { args: [[1,3,5,4,4,6]], expected: 10 },
    { args: [[1,2,3,4,5]], expected: 15 },
    { args: [[5,4,3,2,1]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2]], expected: 3 },
    { args: [[2,1,2]], expected: 4 },
    { args: [[1,1,1]], expected: 3 },
    { args: [[1,2,1,2,1]], expected: 7 },
    { args: [[3,3,3,3]], expected: 4 },
  ],
};
