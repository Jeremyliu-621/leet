import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-increasing-elements',
  title: 'Maximum Difference Between Increasing Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\`, find the **maximum difference** between \`nums[i]\` and \`nums[j]\` (i.e., \`nums[j] - nums[i]\`), such that \`0 <= i < j < n\` and \`nums[i] < nums[j]\`.

Return the **maximum difference**. If no such \`i\` and \`j\` exists, return \`-1\`.`,
  constraints: [
    '`n == nums.length`',
    '`2 <= n <= 1000`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [7,1,5,4]',
      output: '4',
      explanation: 'The maximum difference is 5 - 1 = 4 with i=1, j=2.',
    },
    {
      input: 'nums = [9,4,3,2]',
      output: '-1',
      explanation: 'No valid pair exists.',
    },
    {
      input: 'nums = [1,5,2,10]',
      output: '9',
    },
  ],
  hints: [
    'Track the minimum element seen so far as you scan left to right. At each position, compute current - min so far.',
  ],
  functionName: 'maximumDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumDifference(nums) {

}`,
    python: `def maximumDifference(nums):
    pass`,
  },
  visibleTests: [
    { args: [[7, 1, 5, 4]], expected: 4 },
    { args: [[9, 4, 3, 2]], expected: -1 },
    { args: [[1, 5, 2, 10]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: -1 },
    { args: [[1, 1, 1]], expected: -1 },
    { args: [[3, 1, 6, 1, 4]], expected: 5 },
    { args: [[999999999, 1]], expected: -1 },
  ],
};
