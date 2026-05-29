import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-range-ii',
  title: 'Smallest Range II',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

For each index \`i\` where \`0 <= i < nums.length\`, change \`nums[i]\` to be either \`nums[i] + k\` or \`nums[i] - k\`.

The **score** of \`nums\` is the difference between the maximum and minimum elements in \`nums\`.

Return the minimum **score** of \`nums\` after changing the values at each index.`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`0 <= nums[i] <= 10^4`',
    '`0 <= k <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [1], k = 0',
      output: '0',
    },
    {
      input: 'nums = [0,10], k = 2',
      output: '6',
      explanation: 'Change to [2, 8], score = 8 - 2 = 6.',
    },
  ],
  hints: [
    'Sort nums. The optimal split is: add +k to a prefix and -k to the rest.',
    'Try all split points i (0 to n-2). At split i: max = max(nums[i]+k, nums[n-1]-k), min = min(nums[0]+k, nums[i+1]-k).',
    'The answer is the minimum of the original range and all these split-point ranges.',
  ],
  functionName: 'smallestRangeII',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function smallestRangeII(nums, k) {

}`,
    typescript: `function smallestRangeII(nums: number[], k: number): number {

}`,
    python: `def smallestRangeII(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1], 0], expected: 0 },
    { args: [[0, 10], 2], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 3, 6], 3], expected: 3 },
    { args: [[4, 14], 5], expected: 0 },
    { args: [[9], 3], expected: 0 },
    { args: [[1, 7, 8], 3], expected: 1 },
    { args: [[0, 0, 0], 5], expected: 0 },
  ],
};
