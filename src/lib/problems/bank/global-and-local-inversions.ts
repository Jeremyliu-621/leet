import type { Problem } from '../types';

export const problem: Problem = {
  id: 'global-and-local-inversions',
  title: 'Global and Local Inversions',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\` which represents a permutation of all integers in the range \`[0, n - 1]\`.

The number of **global inversions** is the number of pairs \`(i, j)\` where \`0 <= i < j <= n - 1\` and \`nums[i] > nums[j]\`.

The number of **local inversions** is the number of indices \`i\` where \`0 <= i < n - 1\` and \`nums[i] > nums[i + 1]\`.

Return \`true\` if the number of global inversions is equal to the number of local inversions.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '0 <= nums[i] < n',
    'All the integers of nums are unique.',
    'nums is a permutation of all the integers in the range [0, n - 1].',
  ],
  examples: [
    {
      input: 'nums = [1,0,2]',
      output: 'true',
      explanation: 'Local inversions: (0,1). Global inversions: (0,1). Both equal 1.',
    },
    {
      input: 'nums = [1,2,0]',
      output: 'false',
      explanation: 'Local inversions: (1,2). Global inversions: (0,2),(1,2). 1 ≠ 2.',
    },
  ],
  hints: [
    'Global inversions include all local inversions. So global == local iff there are NO non-local inversions.',
    'A non-local inversion is a pair (i, j) with j >= i+2 and nums[i] > nums[j].',
    'Track the running maximum of nums[0..i-2]. If this max ever exceeds nums[i], there is a non-local inversion.',
  ],
  functionName: 'isIdealPermutation',
  params: ['nums'],
  starterCode: {
    javascript: `function isIdealPermutation(nums) {
  let maxSoFar = -Infinity;
  for (let i = 2; i < nums.length; i++) {
    maxSoFar = Math.max(maxSoFar, nums[i - 2]);
    if (maxSoFar > nums[i]) return false;
  }
  return true;
}`,
    typescript: `function isIdealPermutation(nums: number[]): boolean {
  let maxSoFar = -Infinity;
  for (let i = 2; i < nums.length; i++) {
    maxSoFar = Math.max(maxSoFar, nums[i - 2]!);
    if (maxSoFar > nums[i]!) return false;
  }
  return true;
}`,
    python: `def isIdealPermutation(nums):
    max_so_far = float('-inf')
    for i in range(2, len(nums)):
        max_so_far = max(max_so_far, nums[i - 2])
        if max_so_far > nums[i]:
            return False
    return True`,
  },
  visibleTests: [
    { args: [[1, 0, 2]], expected: true },
    { args: [[1, 2, 0]], expected: false },
  ],
  hiddenTests: [
    { args: [[0]], expected: true },
    { args: [[0, 1]], expected: true },
    { args: [[1, 0]], expected: true },
    { args: [[2, 0, 1]], expected: false },
    { args: [[0, 1, 2, 3]], expected: true },
    { args: [[3, 0, 1, 2]], expected: false },
  ],
};
