import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-k',
  title: 'Find Maximum K Such That Both K and -K Exist in Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` that **does not contain zeros**, return the **largest positive integer** \`k\` such that both \`k\` and \`-k\` exist in the array.

If no such integer exists, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    'nums[i] != 0',
  ],
  examples: [
    {
      input: 'nums = [-1,2,-3,3]',
      output: '3',
      explanation: '3 and -3 both exist. -1 and 1: 1 is missing. So max k = 3.',
    },
    {
      input: 'nums = [-1,10,6,7,-7,1]',
      output: '7',
      explanation: 'Both 7 and -7 exist. Both 1 and -1 exist. Max is 7.',
    },
    {
      input: 'nums = [-10,8,6,7,-2,-3]',
      output: '-1',
      explanation: 'No positive k exists such that both k and -k are in the array.',
    },
  ],
  hints: [
    'Build a Set from nums for O(1) lookups.',
    'Iterate over all positive numbers in nums. Check if the negation is also present.',
    'Track the maximum such k found.',
  ],
  functionName: 'findMaxK',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaxK(nums) {
  const s = new Set(nums);
  let ans = -1;
  for (const n of nums) {
    if (n > 0 && s.has(-n)) ans = Math.max(ans, n);
  }
  return ans;
}`,
    typescript: `function findMaxK(nums: number[]): number {
  const s = new Set(nums);
  let ans = -1;
  for (const n of nums) {
    if (n > 0 && s.has(-n)) ans = Math.max(ans, n);
  }
  return ans;
}`,
    python: `def findMaxK(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    s = set(nums)
    ans = -1
    for n in nums:
        if n > 0 and -n in s:
            ans = max(ans, n)
    return ans`,
  },
  visibleTests: [
    { args: [[-1, 2, -3, 3]], expected: 3 },
    { args: [[-1, 10, 6, 7, -7, 1]], expected: 7 },
    { args: [[-10, 8, 6, 7, -2, -3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, -1]], expected: 1 },
    { args: [[1]], expected: -1 },
    { args: [[-1]], expected: -1 },
    { args: [[3, -3, 2, -2]], expected: 3 },
    { args: [[1000, -1000, 999, -999]], expected: 1000 },
    { args: [[-5, -4, -3, -2, -1]], expected: -1 },
  ],
};
