import type { Problem } from '../types';

export const problem: Problem = {
  id: 'left-and-right-sum-differences',
  title: 'Left and Right Sum Differences',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\`, find a 0-indexed integer array \`answer\` where:

- \`answer.length == nums.length\`
- \`answer[i] = |leftSum[i] - rightSum[i]|\`

Where:
- \`leftSum[i]\` is the sum of elements to the **left** of index \`i\` in \`nums\`. If there is no such element, \`leftSum[i] = 0\`.
- \`rightSum[i]\` is the sum of elements to the **right** of index \`i\` in \`nums\`. If there is no such element, \`rightSum[i] = 0\`.

Return the array \`answer\`.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [10,4,8,3]',
      output: '[15,1,11,22]',
      explanation: 'leftSum=[0,10,14,22], rightSum=[15,11,3,0]. |0-15|=15, |10-11|=1, |14-3|=11, |22-0|=22.',
    },
    {
      input: 'nums = [1]',
      output: '[0]',
    },
  ],
  hints: [
    'Compute prefix sums. For each index, leftSum[i] = prefix[i] and rightSum[i] = total - prefix[i] - nums[i].',
  ],
  functionName: 'leftRightDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function leftRightDifference(nums) {

}`,
    python: `def leftRightDifference(nums):
    pass`,
  },
  visibleTests: [
    { args: [[10, 4, 8, 3]], expected: [15, 1, 11, 22] },
    { args: [[1]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[2, 3]], expected: [3, 2] },
    { args: [[1, 2, 3]], expected: [5, 2, 3] },
    { args: [[5, 5, 5, 5]], expected: [15, 5, 5, 15] },
    { args: [[100, 1, 1]], expected: [2, 99, 101] },
    { args: [[1, 1, 1, 1, 1]], expected: [4, 2, 0, 2, 4] },
  ],
};
