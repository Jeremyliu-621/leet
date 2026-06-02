import type { Problem } from '../types';

export const problem: Problem = {
  id: 'global-local-inversions',
  title: 'Global and Local Inversions',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\` which represents a permutation of all the integers in the range \`[0, n - 1]\`.

The number of **global inversions** is the number of the different pairs \`(i, j)\` where:
- \`0 <= i < j <= n - 1\`
- \`nums[i] > nums[j]\`

The number of **local inversions** is the number of indices \`i\` where:
- \`0 <= i <= n - 2\`
- \`nums[i] > nums[i + 1]\`

Return \`true\` if the number of global inversions is equal to the number of local inversions.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^5`',
    '`0 <= nums[i] < n`',
    'All the integers of `nums` are **unique**.',
    '`nums` is a permutation of all the numbers in the range `[0, n - 1]`.',
  ],
  examples: [
    {
      input: 'nums = [1,0,2]',
      output: 'true',
      explanation: '1 local inversion: (0,1). 1 global inversion: (0,1). Equal.',
    },
    {
      input: 'nums = [1,2,0]',
      output: 'false',
      explanation: '1 local inversion: (1,2). 2 global inversions: (0,2) and (1,2). Not equal.',
    },
  ],
  hints: [
    'Every local inversion is also a global inversion. So the counts are equal iff there are no non-local (non-adjacent) global inversions.',
    'A non-local inversion exists when nums[i] > nums[j] for some j > i+1.',
    'This holds iff for every index i, |nums[i] - i| <= 1 (each element is at most 1 away from its sorted position).',
  ],
  functionName: 'isIdealPermutation',
  params: ['nums'],
  starterCode: {
    javascript: `function isIdealPermutation(nums) {
  return nums.every((v, i) => Math.abs(v - i) <= 1);
}`,
    typescript: `function isIdealPermutation(nums: number[]): boolean {
  return nums.every((v, i) => Math.abs(v - i) <= 1);
}`,
    python: `def isIdealPermutation(nums):
    return all(abs(v - i) <= 1 for i, v in enumerate(nums))`,
  },
  visibleTests: [
    { args: [[1, 0, 2]], expected: true },
    { args: [[1, 2, 0]], expected: false },
  ],
  hiddenTests: [
    { args: [[0]], expected: true },
    { args: [[0, 1, 2]], expected: true },
    { args: [[2, 0, 1]], expected: false },
    { args: [[1, 0]], expected: true },
    { args: [[2, 1, 0]], expected: false },
  ],
};
