import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-in-array',
  title: 'Maximum Difference Between Increasing Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\`, find the **maximum difference** between \`nums[j]\` and \`nums[i]\` (i.e., \`nums[j] - nums[i]\`), such that \`0 <= i < j < n\` and \`nums[i] < nums[j]\`.

Return *the maximum difference*. If no such \`i\` and \`j\` exists, return \`-1\`.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 1000',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [7,1,5,4]',
      output: '4',
      explanation: 'The maximum difference occurs with i=1 (nums[1]=1) and j=2 (nums[2]=5), giving 5-1=4.',
    },
    {
      input: 'nums = [9,4,3,2]',
      output: '-1',
      explanation: 'There is no i < j with nums[i] < nums[j].',
    },
    {
      input: 'nums = [1,5,2,10]',
      output: '9',
      explanation: 'The maximum difference occurs with i=0 and j=3, giving 10-1=9.',
    },
  ],
  hints: [
    'Track the minimum value seen so far (minSoFar) as you scan left to right.',
    'For each element, compute the difference with minSoFar and update the maximum.',
    'Only update minSoFar when the current element is strictly less than it.',
  ],
  functionName: 'maximumDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumDifference(nums) {\n\n}',
    typescript: "function maximumDifference(nums: number[]): number {\n\n}",

    python: 'def maximumDifference(nums):\n    pass',
  },
  visibleTests: [
    { args: [[7, 1, 5, 4]], expected: 4 },
    { args: [[9, 4, 3, 2]], expected: -1 },
    { args: [[1, 5, 2, 10]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: -1 },
    { args: [[1, 1]], expected: -1 },
    { args: [[3, 1, 4, 1, 5, 9]], expected: 8 },
    { args: [[10, 1, 2, 3]], expected: 2 },
    { args: [[5, 1, 5, 1, 5]], expected: 4 },
  ],
};
