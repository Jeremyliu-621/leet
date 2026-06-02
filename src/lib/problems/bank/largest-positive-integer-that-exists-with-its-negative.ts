import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-positive-integer-that-exists-with-its-negative',
  title: 'Largest Positive Integer That Exists With Its Negative',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` that **does not contain** any zeros, find the **largest positive** integer \`k\` such that \`-k\` also exists in the array.

Return the positive integer \`k\`. If there is no such integer, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    'nums[i] != 0',
  ],
  examples: [
    {
      input: 'nums = [-1,2,-3,3]',
      output: '3',
      explanation: '3 and -3 both exist. 2 does not have -2. Answer: 3.',
    },
    {
      input: 'nums = [-1,10,6,7,-7,1]',
      output: '7',
      explanation: '7 and -7 exist; 1 and -1 exist. Largest is 7.',
    },
    {
      input: 'nums = [-10,8,6,7,-2,-3]',
      output: '-1',
      explanation: 'No positive integer has its negative in the array.',
    },
  ],
  hints: [
    'Level 1: Use a hash set for O(1) lookup. For each positive number in nums, check if its negation is also in nums.',
    'Level 2: Track the maximum such positive number. Return -1 if no pair is found.',
    'Level 3: Alternatively, sort the array. Use two pointers from both ends: left points to negatives, right to positives. Move pointers based on sum comparisons.',
  ],
  functionName: 'findMaxK',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaxK(nums) {
  const set = new Set(nums);
  let ans = -1;
  for (const x of nums) {
    if (x > 0 && set.has(-x)) ans = Math.max(ans, x);
  }
  return ans;
}`,
    typescript: `function findMaxK(nums: number[]): number {
  const set = new Set(nums);
  let ans = -1;
  for (const x of nums) {
    if (x > 0 && set.has(-x)) ans = Math.max(ans, x);
  }
  return ans;
}`,
    python: `def findMaxK(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    s = set(nums)
    ans = -1
    for x in nums:
        if x > 0 and -x in s:
            ans = max(ans, x)
    return ans`,
  },
  visibleTests: [
    { args: [[-1, 2, -3, 3]], expected: 3 },
    { args: [[-1, 10, 6, 7, -7, 1]], expected: 7 },
    { args: [[-10, 8, 6, 7, -2, -3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[-5, -3, -1, 1, 3, 5]], expected: 5 },
    { args: [[1, -1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: -1 },
    { args: [[-2, -1, 1, 2]], expected: 2 },
    { args: [[-1000, 1000]], expected: 1000 },
  ],
};
