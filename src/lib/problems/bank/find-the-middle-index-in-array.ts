import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-middle-index-in-array',
  title: 'Find the Middle Index in Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\`, find the **leftmost** \`middleIndex\` (i.e., the smallest amongst all the possible ones).

A \`middleIndex\` is an index where \`nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]\`.

If \`middleIndex == 0\`, the left side sum is considered to be \`0\`. Similarly, if \`middleIndex == nums.length - 1\`, the right side sum is considered to be \`0\`.

Return the **leftmost** \`middleIndex\` that satisfies the condition, or \`-1\` if there is no such index.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,3,-1,8,4]',
      output: '3',
      explanation: 'Left sum = 2+3+(-1) = 4. Right sum = 4. middleIndex = 3.',
    },
    {
      input: 'nums = [1,-1,4]',
      output: '2',
      explanation: 'Left sum = 1+(-1) = 0. Right sum = 0. middleIndex = 2.',
    },
    {
      input: 'nums = [2,5]',
      output: '-1',
      explanation: 'No index satisfies the condition.',
    },
  ],
  hints: [
    'Compute total = sum of all elements. Iterate left to right maintaining leftSum. At each index i, rightSum = total - leftSum - nums[i].',
    'If leftSum === rightSum, return i. Otherwise add nums[i] to leftSum and continue.',
    'This runs in O(n) time with O(1) space — just a single pass after computing total.',
  ],
  functionName: 'findMiddleIndex',
  params: ['nums'],
  starterCode: {
    javascript: `function findMiddleIndex(nums) {

}`,
    python: `def findMiddleIndex(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, -1, 8, 4]], expected: 3 },
    { args: [[1, -1, 4]], expected: 2 },
    { args: [[2, 5]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[-1, -1, -1, 0, 1, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: -1 },
  ],
};
