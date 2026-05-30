import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-between-ascending-elements',
  title: 'Maximum Difference Between Ascending Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\`, find the **maximum difference** between \`nums[j] - nums[i]\`, where \`0 <= i < j < n\` and \`nums[i] < nums[j]\`.

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
      explanation: 'The maximum difference occurs with i=1 (nums[1]=1) and j=2 (nums[2]=5): 5-1=4.',
    },
    {
      input: 'nums = [9,4,3,2]',
      output: '-1',
      explanation: 'The array is non-increasing, so no valid (i,j) pair exists.',
    },
    {
      input: 'nums = [1,5,2,10]',
      output: '9',
      explanation: 'The maximum difference is 10-1=9 (i=0, j=3).',
    },
  ],
  hints: [
    'Track the running minimum as you scan left to right.',
    'For each element, compute element - runningMin and update the answer.',
    'Only update the running minimum when the current element could be a valid left endpoint (i.e., when the difference would be positive).',
  ],
  functionName: 'maximumDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumDifference(nums) {

}`,
    typescript: `function maximumDifference(nums: number[]): number {

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
    { args: [[1, 1]], expected: -1 },
    { args: [[3, 1, 4, 1, 5, 9]], expected: 8 },
    { args: [[10, 1, 2, 3]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: -1 },
  ],
};
